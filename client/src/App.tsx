import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import CountdownPage from "./pages/CountdownPage"
import DemoPage from "./pages/DemoPage"
import Background from "./components/Background"

function App() {

  return (
    <div className="flex flex-col h-full w-full">
      <Navbar/>
      <Routes>
        <Route index element = {<CountdownPage/>} />
        <Route path='/' element = {<CountdownPage/>} />
        <Route path='/demo' element = {<DemoPage/>} />
      </Routes>
      <div className="-z-30 relative">
        <Background/>
      </div>
    </div>
  )
}

export default App
