import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/products/$productId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { productId } = Route.useParams();
  
  console.log("checkkkkk", productId);
  return (
    <div>
      Hello Product-{productId}!
      <br/><button>
        <Link to="/products">Back to products</Link>
      </button>
    </div>
  );
}
