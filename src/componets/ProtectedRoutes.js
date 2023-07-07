import { Navigate } from "react-router-dom";
import { useDb } from "../context/dbContext";


export function ProtectedRoute({children}) {
    const {user} = useDb();
    if(!user) return <Navigate to='/login'/>

    return<>{children}</>
}