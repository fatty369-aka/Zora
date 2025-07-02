
import React from 'react'
import CryptoOverview from './CryptoOverview'
import NewsFeed from './NewsFeed'
import ReferralSection from './ReferralSection'
import './App.css'

function App() {
  return (
    <div className="container">
      <h1>Crypto Overview</h1>
      <CryptoOverview />
      <NewsFeed />
      <ReferralSection />
    </div>
  )
}

export default App
