import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem';

const News = ({ category, country, pageSize, setProgress }) => {

    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(0)
    const [totalResult, setTotalResult] = useState(0)

    const handleCapitalize = (text) => {
        if (text.length > 0) {
            return text[0].toUpperCase() + text.substring(1)
        }
        else { return text; }
    }

    const fetchNews = async (page) => {
        setProgress(10);
        let apiKey = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&page=${page}&apiKey=25a53b999a3d46619975db658017f9ba`;
        let data = await fetch(apiKey);
        setProgress(35);
        let parsedData = await data.json();
        setProgress(65);
        setArticles(parsedData.articles);
        setProgress(100);
        setTotalResult(parsedData.totalResults);
    }

    useEffect(() => {
        fetchNews(page);
    });

    const handlePrevClk = () => {
        fetchNews(page - 1)
        setPage(page - 1);

    }

    const handleNxtClk = () => {
        fetchNews(page + 1);
        setPage(page + 1);
    }
    return (
        <div className=''>
            <h1 className='pb-4 text-center pt-10 text-4xl font-semibold'>NewsMate - Top {handleCapitalize(category === "general" ? "" : category)} Headlines</h1>

            <section className="container px-5 py-5 text-gray-600 body-font max-w-[90%] mx-auto">
                <div className="container mx-auto">
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
                <div className="container px-20 flex justify-between mb-5">
                    <button disabled={page <= 1} type="button" className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded" onClick={handlePrevClk}>&larr; Prev</button>
                    <button disabled={page >= Math.ceil(totalResult / 30)} type="button" className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded" onClick={handleNxtClk}>Next &rarr;</button>
                </div>
            </section>

        </div>
    )
}

export default News