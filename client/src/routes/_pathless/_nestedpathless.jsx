import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_pathless/_nestedpathless')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_pathless/_nestedpathless"!
    <Link to="/route-a">route-a</Link>
    <Link to="/route-b">route-b</Link>
   <Outlet/>

  </div>
}
