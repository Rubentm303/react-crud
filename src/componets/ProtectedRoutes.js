import { useDb } from "../context/dbContext";

export function ProtectedRoute({children}) {
    const {} = useDb()
}