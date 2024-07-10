import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <>
            <div className='navbar'>
                <div className="logo">
                    <Link to={"/"}>umid-g'aybullayev</Link>
                </div>
                <ul>
                    <li className='active'>
                        <Link to={"/"}>_hello</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>_about-me</Link>
                    </li>
                    <li>
                        <Link to={"/projects"}>_projects</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>_contact-me</Link>
                    </li>
                </ul>
            </div>


            <div className="mobile-navbar">
                <div className="logo">
                    <Link to={"/"}>umid-g'aybullayev</Link>
                </div>

                <i class="fa-solid fa-bars"></i>
            </div>
        </>
    )
}
