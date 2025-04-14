
import Index from "./pages/Index";
import Request from "./pages/Request";
import { Routes, Route } from "react-router-dom";

const App = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/request" element={<Request />} />
  </Routes>
);

export default App;
