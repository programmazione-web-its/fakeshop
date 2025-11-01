import { Link } from 'react-router-dom'
export default function Nav({ className, ...props }) {
  return (
    <nav className={`flex items-center gap-3 ${className}`} {...props}>
      <Link to='/'>Shop</Link>
      <Link to='/about'>About</Link>
      <Link to='/account'>Account</Link>
    </nav>
  )
}
