import React from "react";
import { useParams } from "react-router-dom";
import ArticleContent from "./article-content";

// Pages
import NotFound from "./NotFound";

// Components
import Articles from "../components/Articles";

const Article = () => {
    const { name } = useParams();
    const article = ArticleContent.find((article) => article.name === name );
    if (!article)
        return (
            <NotFound />
        )
    const otherArticles = ArticleContent.filter(article => article.name !== name);
    return (
        <div>
            <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
                { article.title }
            </h1>
            { article.content.map((paragraph, index) => (
                <p className="mx-auto leading-relaxed text-base mg-4" key={index}>
                    {paragraph}
                </p>
            ))}
            <h1 className="sm:text-2xl text-xl font-bold my-4 text-gray-900">
                Other Articles
            </h1>
            <div className="flex flex-wrap -m-4">
                <Articles articles={otherArticles} />
            </div>
        </div>
    )
}

export default Article;