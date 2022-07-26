import {Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div className="App">
      <Navbar />
      
      <Outlet/>
    </div>
  )
}
/* COMENTÁRIO JSX */
export default App