
import Index from "./pages/Index";
import Request from "./pages/Request";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";

const App = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/request" element={<Request />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
