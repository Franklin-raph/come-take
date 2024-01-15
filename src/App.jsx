import "./App.css"
import Navabr from "./components/navbar/Navabr"
import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"

export default function App() {
  return (
    <>
      <HashRouter>
        <Navabr />
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </HashRouter>
    </>
  )
}