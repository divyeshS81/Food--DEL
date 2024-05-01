import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'

const Home = () => {

  const [category,setCatgory] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCatgory={setCatgory}/>
    </div>
  )
}

export default Home