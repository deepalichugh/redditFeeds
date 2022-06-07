import React from 'react';
function ArticleContainer({ article }){
  
  return(
    <article>
      <h5>{article.subreddit_name_prefixed}</h5>
      <h3>
        <a href={`https://www.reddit.com${article.permalink}`} target="_blank">
          {article.title}
        </a>
      </h3>
      <img src={`${article.thumbnail}`} height={`${article.thumbnail_height}`} width={`${article.thumbnail_width}`} />
    </article>
  )
}

export default ArticleContainer