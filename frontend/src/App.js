import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatsPage from "./pages/ChatsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/chats" element={<ChatsPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
