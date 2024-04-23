import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Home from "../src/pages/Home";
import Register from "../src/pages/Register";
import Register2 from "../src/pages/Register2";
import Login from "../src/pages/Login";
import Login2 from "../src/pages/Login2";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../context/userContext";
import Dashboard from "./pages/Dashboard";
import SnakeGamePage from "./pages/Snake";
import QuizAppPage from "./pages/Quiz";
import Puz from "./pages/Puz";
import Privacy from "./pages/Privacy";
import About from "./pages/About";
import Quiz from "./pages/Quiz";
import CommunityPage from "./pages/Community";

// import ProtectedRoute from './pages/ProtectedRoute';

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  return ( 
    <UserContextProvider>
      <Navbar />
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/quiz-app" element={<Quiz />} />

        <Route path="/puz" element={<Puz />} />
        <Route path="/login2" element={<Login2 />} />
        <Route path="/register2" element={<Register2 />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<CommunityPage />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
