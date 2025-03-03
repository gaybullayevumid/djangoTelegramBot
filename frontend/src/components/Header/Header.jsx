import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="/">umid-gaybullayev</Link>
          </li>
          <li>
            <Link to={'/'}>_hello</Link>
          </li>
          <li>
            <Link to={'/about'}>_about_me</Link>
          </li>
          <li>
            <Link to={'/projects'}>_projects</Link>
          </li>
          <li>
            <Link to={'/contact'}>_contact_me</Link>
          </li>
        </ul>
      </header>
    </>
  )
}

export default Header
