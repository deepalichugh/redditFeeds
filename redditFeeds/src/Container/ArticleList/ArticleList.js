import React, { useState, useEffect } from 'react';
import { getPosts } from '../../utils/getPosts';
import ArticleContainer from '../ArticleContainer/ArticleContainer';

function ArticleList() {
  const [articles, setArticles] = useState([]);

  let afterParam = '';
  const limit = 25;
  const loadMore = async () => {
    console.log(afterParam);
    getPosts(limit, afterParam)
      .then((res) => {
        setArticles(articles => (articles.concat(res.children)));
        afterParam = res.after;
        console.log(res.children.length);
        console.log(articles)
      })
      .catch((error) => {
        console.log(`Failed due to ${error}`);
      });
  };

  const handleScroll = (e) => {
    if ((window.innerHeight + e.target.documentElement.scrollTop + 1)
    >= e.target.documentElement.scrollHeight) {
      console.log('Loading...');
      loadMore();
    }
  };

  useEffect(() => {
    loadMore();
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      
      <header>
        <img src='https://styles.redditmedia.com/t5_2qh1o/styles/communityIcon_6fzlk8ukx6s51.jpg?width=256&format=pjpg&s=c3f5201f13951c0bd50e48d72adf698dcea49d13' className='img-icon' height={50} width={50}/>  
        <a href='https://www.reddit.com/r/aww'> r/aww</a>
      </header>
      
      <div className="articles grid-container">
        <div className='grid-item'>
        {

          (articles != null) ? articles.map((article, index) => <ArticleContainer key={index} article={article.data} />) : ''

        }
        </div>
      </div>
      
      
    </div>
  );
}

export default ArticleList;
