// src/App.js
import React from 'react'
import { RouterProvider } from '@tanstack/react-router'
import { router } from './routes'

export default function App() {
  return <RouterProvider router={router} />
}