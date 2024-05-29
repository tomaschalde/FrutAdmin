import {Route, Routes} from "react-router-dom"
import Footer from './components/Footer/Footer'
import Navbar from './components/NavBar/Navbar'
import Inventory from "./views/Inventory/Inventory"
import CreateProduct from "./views/CreateProduct/CreateProduct"
import RegisterVenta from "./views/RegisterVenta/RegisterVenta"
import GenerateReports from "./views/GenerateReports/GenerateReports"

function App() {


  return (
    <>
        <Navbar/>

        <Routes>
          <Route path = "/" element = {<Inventory/>}></Route>
          <Route path = '/inventory' element = {<CreateProduct/>}></Route>
          <Route path = "/sales" element = {<RegisterVenta/>}></Route>
          <Route path = "/reports" element = {<GenerateReports/>}></Route>
        </Routes>

        <Footer/>
    </>
  )
}

export default App
