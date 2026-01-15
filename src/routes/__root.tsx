import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="min-h-screen bg-background">
        <nav className="border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-6">
              <Link to="/" className="text-xl font-bold">
                SpotDash
              </Link>
              <div className="flex gap-4">
                <Link
                  to="/"
                  className="text-sm hover:text-primary [&.active]:text-primary [&.active]:font-semibold"
                >
                  Landing
                </Link>
                <Link
                  to="/dashboard"
                  className="text-sm hover:text-primary [&.active]:text-primary [&.active]:font-semibold"
                >
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
})
