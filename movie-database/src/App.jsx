import "./App.css";
import { QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider} from "react-router";
import Landing from "./components/Pages/Landing"
import MoviePage from "./components/Pages/MoviePage";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },

 { path: "/movie/:id",
  element: <MoviePage />,
}, 
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
