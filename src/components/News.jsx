import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'

const News = ({ category, country, pageSize }) => {

    let [articles, setArticles] = useState([])

    const handleCapitalize = (text) => {
        if (text.length > 0) {
            return text[0].toUpperCase() + text.substring(1)
        }
        else { return text; }
    }

    const fetchNews = async () => {
        let apiKey = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&apiKey=25a53b999a3d46619975db658017f9ba`;
        let data = await fetch(apiKey);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticles(parsedData.articles);
    }

    useEffect(() => {
        fetchNews();
    });
    return (
        <>
            <h1 className='pb-4 text-center pt-10 text-4xl font-semibold'>NewsMate - Top {handleCapitalize(category === "general" ? "" : category)} Headlines</h1>

            <section className="text-gray-600 body-font max-w-[90%] mx-auto">
                <div className="container px-5 py-20 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {articles?.map((artical) => {
                            return (
                                <div key={artical.url} className="p-4 md:w-1/3">
                                    <NewsItem imgUrl={artical.urlToImage} title={artical.title} desc={artical.description} newsUrl={artical.url} author={artical.author} date={artical.publishedAt} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

        </>
    )
}

export default News