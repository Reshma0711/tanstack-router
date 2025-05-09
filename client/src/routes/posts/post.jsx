import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/post')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/posts/post"!</div>
}
