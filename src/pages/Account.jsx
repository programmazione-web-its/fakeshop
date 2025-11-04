
import { useLocation } from "react-router-dom"
export default function About() {
  const location = useLocation()
  console.log("Location", location)
  return <h1>Account</h1>
}
