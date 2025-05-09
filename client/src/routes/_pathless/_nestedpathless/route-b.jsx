import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_pathless/_nestedpathless/route-b')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_pathless/nestedpathless/route-b"!</div>
}
