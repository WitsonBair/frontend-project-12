import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
