export default function Nav({ className, ...props }) {
  return (
    <nav className={`flex items-center gap-3 ${className}`} {...props}>
      <span>Shop</span>
      <span to='/about'>About</span>
    </nav>
  )
}
