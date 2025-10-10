// Centralized Firebase services and helpers
import { auth, db, storage } from './firebase';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  type User,
  type Unsubscribe,
} from 'firebase/auth';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
  type DocumentData,
  type DocumentReference,
  type QueryConstraint,
} from 'firebase/firestore';
import {
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
  type UploadMetadata,
} from 'firebase/storage';

// Auth helpers
export async function signUpWithEmail(userName: string, email: string, password: string): Promise<User> {
  const credential = await createUserWithEmailAndPassword(auth, email, password);
  const newUser = credential.user;

  // Set display name
  await updateProfile(newUser, { displayName: userName });

  // Create associated user document
  await setDoc(doc(db, 'users', newUser.uid), {
    name: userName,
    email,
    createdAt: serverTimestamp(),
  });

  return newUser;
}

export async function signInWithEmail(email: string, password: string): Promise<User> {
  const credential = await signInWithEmailAndPassword(auth, email, password);
  return credential.user;
}

export async function signOutUser(): Promise<void> {
  await signOut(auth);
}

export function onAuthChange(handler: (user: User | null) => void): Unsubscribe {
  return onAuthStateChanged(auth, handler);
}

export function getCurrentUser(): User | null {
  return auth.currentUser;
}

// Firestore generic helpers
export async function getDocument<T = DocumentData>(path: string): Promise<(T & { id: string }) | null> {
  const snapshot = await getDoc(doc(db, path));
  if (!snapshot.exists()) return null;
  return { id: snapshot.id, ...(snapshot.data() as T) };
}

export async function setDocument<T = DocumentData>(path: string, data: T, merge: boolean = true): Promise<void> {
  await setDoc(doc(db, path), data as DocumentData, { merge });
}

export async function updateDocument<T = DocumentData>(path: string, data: Partial<T>): Promise<void> {
  await updateDoc(doc(db, path), data as DocumentData);
}

export async function deleteDocument(path: string): Promise<void> {
  await deleteDoc(doc(db, path));
}

export async function addToCollection<T = DocumentData>(collectionPath: string, data: T): Promise<DocumentReference> {
  return await addDoc(collection(db, collectionPath), data as DocumentData);
}

export async function getCollection<T = DocumentData>(
  collectionPath: string,
  ...constraints: QueryConstraint[]
): Promise<Array<T & { id: string }>> {
  const q = constraints.length ? query(collection(db, collectionPath), ...constraints) : query(collection(db, collectionPath));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...(d.data() as T) }));
}

export function whereEq(field: string, value: unknown): QueryConstraint {
  return where(field, '==', value);
}

// Storage helpers
export async function uploadFileAndGetURL(
  destPath: string,
  file: Blob | ArrayBuffer | Uint8Array,
  metadata?: UploadMetadata
): Promise<string> {
  const ref = storageRef(storage, destPath);
  await uploadBytes(ref, file as Blob, metadata);
  return await getDownloadURL(ref);
}

export function getFileURL(path: string): Promise<string> {
  const ref = storageRef(storage, path);
  return getDownloadURL(ref);
}

// Domain-specific convenience examples (optional usage in app)
export async function createUserProfile(uid: string, data: Record<string, unknown>): Promise<void> {
  await setDocument(`users/${uid}`, { ...data, updatedAt: serverTimestamp() });
}

export async function getUserProfile<T = DocumentData>(uid: string): Promise<(T & { id: string }) | null> {
  return getDocument<T>(`users/${uid}`);
}


