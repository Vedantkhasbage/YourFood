
import {Aboutus} from "../screen/Aboutus";
import {Cart } from "../screen/Cart";
import {Home } from "../screen/Home";
import { Myorder} from "../screen/Myorder";
import { CustomError } from "../screen/CustomError";
import {Routes,Route} from "react-router-dom"
import { Register } from "../screen/Register";
import { LogIn } from "../screen/LogIn";
export function AppRoutes(){

  return  <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/orders" element={<Myorder/>} ></Route>
<Route path="/aboutus" element={<Aboutus/>}></Route>
<Route path="/cart" element={<Cart/>} ></Route>
<Route path="/Register" element={<Register/>} ></Route>
<Route path="/LogIn" element={<LogIn/>} ></Route>
<Route path="*" element={<CustomError/>} ></Route>
</Routes>
}