import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./components/layout"
import Home from "./pages/home"
import Collections from "./pages/collections"



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "collections", element: <Collections /> },
      ],
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
