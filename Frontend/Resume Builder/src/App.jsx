import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateCV from "./pages/CreateCV";
import ViewCV from "./pages/ViewCV";
import EditCV from "./pages/EditCV";
import Icon from "./components/Icon";
import Footer from "./components/footer";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<CreateCV />} />
        <Route path="/view/:id" element={<ViewCV />} />
        <Route path="/edit/:id" element={<EditCV />} />
      </Routes>
      <Icon />
      <Footer />
    </BrowserRouter>
  );
}

export default App;