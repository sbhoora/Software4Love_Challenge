import React from 'react'
import { Link } from 'gatsby'
import "./navbar.css"


const Navigation = () => (
    <>
        <div id="nav">
            <Link to="/" className="page">Home</Link>
            <Link to="/page-2" className="page">Page 2</Link>
            <Link to="/using-typescript" className="page">Go to using Typescript</Link>
        </div>
        <div class="navDrop">
            <button class="navBtn">Navigation</button>
            <div class="dropdown-content">
                <Link to="/" className="dropLink">Home</Link>
                <Link to="/page-2" className="dropLink">Page 2</Link>
                <Link to="/using-typescript" className="dropLink">Go to using Typescript</Link>
            </div>
        </div> 
    </>
)

export default Navigation