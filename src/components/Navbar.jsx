import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    const [nav, setNav] = useState(false)

    const links = [
        'Dashboard',
        'Calendar',
        'User Profile',
        'Logout'
    ]

    return (
        <div className="relative h-screen">
            {!nav && (
                <button
                    onClick={() => setNav(true)}
                    className="absolute top-4 left-4 z-20 text-2xl text-black hover:text-green-400 cursor-pointer"
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
            )}

            <div
                className={`fixed top-0 left-0 h-full w-52 bg-green-400 z-10 transform transition-transform duration-300 ${
                    nav ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div
                    className="absolute top-4 right-4 cursor-pointer text-black hover:text-green-400"
                    onClick={() => setNav(false)}
                >
                    <FontAwesomeIcon icon={faXmark} size="lg" />
                </div>

                <div className="flex flex-col justify-center h-full gap-10 mt-10 ml-6">
                    {links.map((item) =>
                        item === 'Logout' ? (
                            <Link
                                key={item}
                                to="/"
                                className="cursor-pointer text-xl font-bold hover:text-white text-black"
                                onClick={() => setNav(false)}
                            >
                                {item}
                            </Link>
                        ) : (
                            <span
                                key={item}
                                className="cursor-pointer text-xl font-bold hover:text-white text-black"
                            >
                                {item}
                            </span>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar