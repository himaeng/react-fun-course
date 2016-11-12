import React from 'react'
import { Link } from 'react-router'
import { transparentBg } from '../styles'
import MainContainer from '../containers/MainContainer'

function Home () {
  return (
    <MainContainer>
      <h1>Github Battle</h1>
      <p className='lead'>What even is a jQuery?</p>
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-success'>Get Started</button>
      </Link>
    </MainContainer>
  )
}

export default Home