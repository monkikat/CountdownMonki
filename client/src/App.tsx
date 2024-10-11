import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import CountdownPage from "./pages/CountdownPage"
import DemoPage from "./pages/DemoPage"

function App() {

  return (
    <div className="flex flex-col h-screen w-screen px-32">
      <Navbar/>
      <Routes>
        <Route index element = {<CountdownPage/>} />
        <Route path='/' element = {<CountdownPage/>} />
        <Route path='/demo' element = {<DemoPage/>} />
      </Routes>
    </div>
  )
}

export default App
