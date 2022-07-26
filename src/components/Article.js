import React from 'react';

const Article = ({title, preview}) => {
  return (
    <div>
      <article>
        <h3>{title}</h3>
        <p>{preview}</p>
      </article>
    </div>
  )
}

export default Article;