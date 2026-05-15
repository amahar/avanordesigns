import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import ThemeSwitcher from '@/components/ui/ThemeSwitcher'

export default function Layout() {
  const { pathname } = useLocation()

  // Scroll to top on route change (unless it's a hash link)
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0 })
    }
  }, [pathname])

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ThemeSwitcher />
    </div>
  )
}
