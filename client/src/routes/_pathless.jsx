import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_pathless')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_pathless"!
    <Outlet/>
  </div>
}
