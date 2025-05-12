# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Tanstack router

we should install the tanstack-router with a command npm i tanstack/react-router.
we have to create a tsr.config.json file.
We should use the folder name which we have given in the tsr.config.json.
In the folder we should create the main route as \_\_root.jsx file.
In root.jsx whatever we want to display to be kept or outlet can be used their.
we can have index.jsx where we can keep whatever we want to display the components.
If we want any route,then we can have the folder named on it.So,we can have index.jsx
file and children files can be written under that folder.
