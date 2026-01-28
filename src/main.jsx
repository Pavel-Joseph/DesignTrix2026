import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ModelViewer from './components/ModelViewer';
// import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Hero from "./pages/Hero";
import App from "./pages/App";
function App() {
  return (
    <div className="App">  {/* Your existing navbar, sections, footer */}
      {/* ... all your page content ... */}
      
      <ModelViewer />  {/* ← Fixed 3D on right */}
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Hero/>} />
      <Route path="/content" element={<App/>}/>
    </Routes>
  </BrowserRouter>
);
