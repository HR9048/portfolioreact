import { Route, Routes } from "react-router-dom"
import { About } from "./components/About.com"
import { Portfolio } from "./pages/Portfolio.page"
import Name from "./components/Name.com"
import React from "react"

//k
export const App: React.FC<{}> = () => {
  return <>
  <Routes>
    <Route path='/about' element={<About/>}/>
    <Route path='/home' element={<Name/>}/>
    <Route path='/' element={<Portfolio/>}/>
  </Routes>

  </>
}