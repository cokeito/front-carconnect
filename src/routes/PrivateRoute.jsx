import { Navigate } from "react-router-dom"

export const PrivateRoute = ({ children }) => {

  const token = localStorage.getItem("token")

  if (!token) {
    //console.log('no token')
    return <Navigate to="/login" />
  }

  return children
}
