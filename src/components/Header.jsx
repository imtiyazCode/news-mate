import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header className='text-gray-400 bg-gray-900 body-font fixed w-full z-50'>
                <div className='container mx-auto flex flex-wrap items-center flex-col md:flex-row p-4'>
                    <Link to="/" className='hover:text-gray-200'>
                        <span className="ml-3 text-xl">News Mate</span>
                    </Link>
                    
                    <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center'>
                        <Link className="mr-5 hover:text-gray-200 nav-link active" aria-current="page" to="/">Home</Link>
                        <Link className="mr-5 hover:text-gray-200 nav-link active" aria-current="page" to="/business">Business</Link>
                        <Link className="mr-5 hover:text-gray-200 nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
                        <Link className="mr-5 hover:text-gray-200 nav-link active" aria-current="page" to="/health">Health</Link>
                        <Link className="mr-5 hover:text-gray-200 nav-link active" aria-current="page" to="/science">Science</Link>
                        <Link className="mr-5 hover:text-gray-200 nav-link active" aria-current="page" to="/sports">Sports</Link>
                        <Link className="mr-5 hover:text-gray-200 nav-link active" aria-current="page" to="/technology">Technology</Link>
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