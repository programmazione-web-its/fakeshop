

import { useParams, useLocation } from "react-router-dom"

export default function Product() {
  const {id} = useParams()
  const location = useLocation()
  console.log("Location", location)
  return <h1>Single product page: {id}</h1>
}
