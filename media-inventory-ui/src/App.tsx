import Header from "./components/shared/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
  <main>
    <Header />
    <Routes>
      <Route path="/" element={<Home isLoggedIn={true} />} />
    </Routes>
  </main>
  );  
}

export default App;