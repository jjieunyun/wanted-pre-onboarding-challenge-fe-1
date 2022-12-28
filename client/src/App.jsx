import "./App.css";
import { DarkModeProvider } from "./context/DarkModeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import TodoPage from "./pages/TodoPage";
import AuthPage from "./pages/AuthPage";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage />,
  },
  {
    path: "/todos",
    element: <TodoPage />,
  },
  {
    path: "/auth",
    element: <SignUp />,
  },
]);

function App() {
  return (
    <DarkModeProvider>
      <RouterProvider router={router} />
    </DarkModeProvider>
  );
}

export default App;
