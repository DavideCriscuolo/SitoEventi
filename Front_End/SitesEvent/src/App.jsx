import { BrowserRouter, Routes, Route } from "react-router";
import defaultLayout from "./layout/defaultLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={defaultLayout}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
