import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import "./index.css";
import { routeTree } from "./routeTree.gen";
import { Link } from "@tanstack/react-router";

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  context: {
    // auth: null, // This will be set after we wrap the app in an AuthProvider
  },
  defaultNotFoundComponent: () => (
    <div className="bg-gray-200 flex flex-col justify-center items-center w-[100vw] h-[100vh]">
      {" "}
      <h2 className="text-xl font-bold mb-5">
        ☹ Sorry this page doesn't exist!
      </h2>
      <Link
        to="/"
        className="text-base font-bold text-violet-900 hover:underline"
      >
        Go to Home
      </Link>
    </div>
  ),
});

// Render the app

const Router = () => {
  return <RouterProvider router={router}  />;
};

const rootElement = document.getElementById("root");
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
    
        {/* <RouterProvider router={router} /> */}

        <Router />
     
    </StrictMode>
  );
}

