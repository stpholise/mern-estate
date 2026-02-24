import { useSelector } from "react-redux"
import { Outlet, Navigate } from 'react-router'
import { Loader2 } from "lucide-react"

const PrivateRoute = () => {
    const { loading, currentUser } = useSelector((state) => state.user)
    
    if (loading) { 
        return (<Loader2 className="text-black animate-spin size-8"/>)
    }

 return currentUser ? <Outlet /> : <Navigate to={'/signin'} />
}

export default PrivateRoute