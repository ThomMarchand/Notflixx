import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Like from "./pages/Like";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/like" element={<Like />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
