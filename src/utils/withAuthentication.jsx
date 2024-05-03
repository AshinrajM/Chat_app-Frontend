import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"

const withAuthentication = (WrappedComponent) => {
    return function AuthComponent(props) {
        const [isAuthenticated, setIsAuthenticated] = useState(false)
        
        useEffect(() => {
            const token = localStorage.getItem('token');
            setIsAuthenticated(!!token);
        }, [])
        useEffect(() => {
            const token = localStorage.getItem('token');
            const handleStorageChange = () => {
                if (token) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            };
            window.addEventListener('storage', handleStorageChange);
            handleStorageChange(); // Check initial token state

            return () => {
                window.removeEventListener('storage', handleStorageChange);
            };
        }, [])

        console.log(isAuthenticated, "state check")

        if (isAuthenticated) {
            console.log("returning component")
            return <WrappedComponent {...props} />
        } else {
            console.log("returning login")
            return <Navigate to='/' />
        }
    }

}

export default withAuthentication