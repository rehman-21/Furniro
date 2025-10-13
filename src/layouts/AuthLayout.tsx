import { useAuth } from '../context/AuthContext'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import BeatLoader from '../components/Commons/BeatLoader'

const AuthLayout = () => {
    const { user, loading } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (!loading && user) {
            navigate("/");
        }
    }, [loading, user, navigate]);
    if (loading) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <BeatLoader size={64} />
            </div>
        );
    }
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default AuthLayout
