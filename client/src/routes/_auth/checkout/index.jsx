import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/checkout/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<div>Hello "/checkoutpage/"!
    {/* <button>Navigate to login</button> */}
  </div>
  )
}

