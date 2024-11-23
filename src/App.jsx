import { Navbar } from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import {AppRoutes} from "./Routers/AppRouter"
import {CartProvider} from './components/CartComponent.jsx'

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return <div style={{height:"100vh",width:"100vw",backgroundColor:"#fff",overflowX:"hidden"}}>
       <CartProvider>
        <BrowserRouter>
            <AppRoutes/>
        </BrowserRouter>
       </CartProvider>
  </div>

}

export default App
