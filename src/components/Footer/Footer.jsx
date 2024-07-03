import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <>
            <div className="footer">
                <ul>
                    <li>find me in:</li>
                    <li><img src={"/twitter.png"} alt="twitter" /></li>
                    <li><img src={"/facebook.png"} alt="facebook" /></li>
                </ul>
                <div className="github">
                    <p>@gaybullayevumid</p>
                    <img src={"/github.png"} alt="github" />
                </div>
            </div>
        </>
    )
}
