import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_pathless/_nestedpathless/route-a')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_pathless/nestedpathless/route-a"!</div>
}
