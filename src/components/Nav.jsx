import { NavLink } from 'react-router-dom'
import siteRoutes from '../siteRoutes'
export default function Nav({ className, ...props }) {
  console.log(siteRoutes)
  return (
    <nav className={`flex items-center gap-3 ${className}`} {...props}>
     {siteRoutes[0].children.map(el => el.showInNav && <NavLink key={el.path} to={el.path}>{el.title}</NavLink>)}
    </nav>
  )
}
