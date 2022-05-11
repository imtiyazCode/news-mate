import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header className='text-gray-400 bg-gray-900 body-font fixed w-full z-50'>
                <div className='container mx-auto flex flex-wrap items-center flex-col md:flex-row p-4'>
                    <a href="" className='hover:text-gray-200'>
                        <span className="ml-3 text-xl">News Mate</span>
                    </a>
                    <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center'>
                        <a className="nav-item mr-5 hover:text-gray-200 "><Link className="nav-link active" aria-current="page" to="/">Home</Link></a>
                        <a className="nav-item mr-5 hover:text-gray-200 "><Link className="nav-link active" aria-current="page" to="/business">Business</Link></a>
                        <a className="nav-item mr-5 hover:text-gray-200 "><Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link></a>
                        <a className="nav-item mr-5 hover:text-gray-200 "><Link className="nav-link active" aria-current="page" to="/health">Health</Link></a>
                        <a className="nav-item mr-5 hover:text-gray-200 "><Link className="nav-link active" aria-current="page" to="/science">Science</Link></a>
                        <a className="nav-item mr-5 hover:text-gray-200 "><Link className="nav-link active" aria-current="page" to="/sports">Sports</Link></a>
                        <a className="nav-item mr-5 hover:text-gray-200 "><Link className="nav-link active" aria-current="page" to="/technology">Technology</Link></a>
                    </nav>
                    {/* <button className='bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded'>
                        Button
                    </button> */}
                </div>
            </header>
        </>
    )
}

export default Header