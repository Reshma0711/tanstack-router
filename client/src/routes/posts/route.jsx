import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/posts")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h3>select a post</h3>
      <Outlet />
    </div>
  );
}
