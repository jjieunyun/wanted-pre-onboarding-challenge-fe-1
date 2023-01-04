import "./App.css";
import { DarkModeProvider } from "./context/DarkModeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import TodoPage from "./pages/TodoPage";
import AuthPage from "./pages/AuthPage";
import authApi from "./api/auth";
import todoApi from "./api/todo";

const auth = new authApi();
const todo = new todoApi();

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage auth={auth} />,
  },
  {
    path: "/todos",
    element: <TodoPage todo={todo} />,
  },
]);

function App() {
  return (
    <DarkModeProvider>
      <RouterProvider router={router} auth={auth} />
    </DarkModeProvider>
  );
}

export default App;
