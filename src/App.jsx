import { Route, Routes } from "react-router-dom";
import Header from "./common/Header/Header";
import Menu from "./common/Menu/Menu";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import "./App.scss";
  
export default function App() {
  return (
    <>
      <Header />
      <main className="main">
      <Menu />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </main>
    </>
  )
}