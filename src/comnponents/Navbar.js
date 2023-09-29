import React from "react";
import { Link } from "react-router-dom";
import { BsFillCaretDownFill } from "react-icons/bs";
const Navbar=()=>(
    

    <nav className="navbar">

        <li >
            <Link to='/flip'><h3>Flip</h3></Link>
        </li>
        <ul>
            <li className="a1">
                <Link to='/home'> <h4>Home<select><option>Clickk online</option> </select> </h4> </Link>
                
                
              
            </li>
            <li className="a1">
                <Link to='fivecolomn'><h4>Fivecolomns</h4></Link>
            </li>
            <li className="a1">
                <Link to='listingpage'><h4>Linstingpage</h4></Link>
            </li>
            <li className="a1">
                <Link to='tamplets'><h4>Tamplets</h4></Link>
            </li>
            <li className="a1">
                <Link to='otherpages'><h4>Otherpages</h4> </Link>
            </li>
            <li>
                <Link to='signin'><button className="btn">SIGNIN</button></Link>
            </li>
        </ul>
    </nav>


)
export default Navbar;