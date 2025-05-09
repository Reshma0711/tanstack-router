import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/products/")({
  component: RouteComponent,
});
const products = [
  {
    id: 1,
    name: "product1",
  },
  {
    id: 2,
    name: "product2",
  },
  {
    id: 3,
    name: "product3",
  },
];

function RouteComponent() {
  return (
    <div>
      Hello Products! <br />
      {products.map((product) => (
        <div key={product.id}>
          <Link
            to={`/products/${product.id}`}
            // params={{ productId: product.id }}
          >
            {product.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
