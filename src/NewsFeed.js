
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const NewsFeed = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    axios.get(`https://newsapi.org/v2/everything?q=crypto&apiKey=a6ca17457d90452d983ae0cebc09d745`)
      .then(res => setArticles(res.data.articles.slice(0, 5)))
      .catch(err => console.error('News API error:', err))
  }, [])

  return (
    <div>
      <h2>AI Crypto News</h2>
      {articles.map((a, idx) => (
        <div key={idx} style={{ marginBottom: 20 }}>
          <strong>{a.title}</strong>
          <p>{a.description}</p>
          <a href={a.url} target="_blank" rel="noreferrer">Read More</a>
        </div>
      ))}
    </div>
  )
}

export default NewsFeed
