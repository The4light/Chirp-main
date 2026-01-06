import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Notifications from "./pages/Notifications";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/notifications" element={<Notifications />} />
    </Routes>
  );
}