import React from "react";
import { Link } from "react-router-dom";
import { BsGem } from "react-icons/bs";
    function Navbar(){
return(

    <nav className="navbar container-fluid">
        <div className="d-flex">
            <div className="icon-link">
        <BsGem className="bti"/>
            <Link  className=" navh1 nav-link"  to='/flip'><h3>.Flip</h3></Link>
            </div>
        <ul className="d-flex">
            <li className="a1 ">
                <Link className="nav-link" to='/home'> <h4>Home </h4> </Link>
            </li>
            <li className="a1">
                <Link className="nav-link" to='fivecolomn'><h4>Fivecolomns</h4></Link>
            </li>
            <li className="a1">
                <Link className="nav-link" to='listingpage'><h4>Linstingpage</h4></Link>
            </li>
            <li className="a1">
                <Link className="nav-link" to='tamplets'><h4>Tamplets</h4></Link>
            </li>
            <li className="a1">
                <Link className="nav-link"  to='otherpages'><h4 >Otherpages</h4></Link>
            </li>
            <li className="a1">
                <Link className="nav-link" to='signin'><button className="btn">SIGN Up</button></Link>
            </li>
        </ul>
        </div>

        
    </nav>


)
    }
export default Navbar;