import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/checkout">CheckoutPage</Link>
      <Link to="/login">Login</Link>
      <Link to="/products">Products</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/route-a">Pathless layout</Link>
    </div>
  );
}
