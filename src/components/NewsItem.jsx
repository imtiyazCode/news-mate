import React from 'react'
import { IoArrowForwardOutline } from 'react-icons/io5'
import { RiShieldUserFill } from 'react-icons/ri';

const NewsItem = (props) => {

    let { imgUrl, title, desc, author, newsUrl, date } = props;
    return (
        <>
            <div className="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={imgUrl? imgUrl : "https://mediaengagement.org/wp-content/uploads/2018/09/iStock-116248249-600x400.jpg"} alt={title} />
                <div className="p-6">
                    <h2 className="tracking-widest text-center text-xs title-font font-medium text-gray-400 mb-1">{date}</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
                    <p className="leading-relaxed mb-3">{desc}</p>
                    <div className="flex items-center flex-wrap ">
                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href={newsUrl} target="_blank">Learn More
                            <IoArrowForwardOutline />
                        </a>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-lg pr-3 py-1 border-r-2 border-gray-200">
                            <RiShieldUserFill />
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none">
                            {author}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsItem