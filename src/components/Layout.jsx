import { NavLink, Outlet } from 'react-router-dom'

const links = [
  { to: '/', label: 'Início' },
  { to: '/point', label: 'Registrar ponto' },
  { to: '/register', label: 'Colaboradores' },
]

export default function Layout() {
  return (
    <>
      <header className="topbar">
        <span className="brand">Point Work</span>
        <nav>
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === '/'} className="nav-link">
              {label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="page">
        <Outlet />
      </main>
    </>
  )
}
