// import { useState } from 'react'
import Cart from '../Cart'
import Search from '../Search'
import './Header.css'

function Header() {

    // const [count, setCount] = useState(0)

    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand">Magazine DC</a>
                    <Search />
                    <Cart />
                </div>
            </nav>
        </>
    )
}

export default Header
