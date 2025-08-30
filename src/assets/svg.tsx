export const GridIcon = ({ isOpen }) => {
  return (
    <svg
      className="w-6 h-6 text-black"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      {isOpen ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      )}
    </svg>
  );
};
