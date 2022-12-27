import "./App.css";
import { DarkModeProvider } from "./context/DarkModeContext";
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <DarkModeProvider>
      <TodoPage />
    </DarkModeProvider>
  );
}

export default App;
