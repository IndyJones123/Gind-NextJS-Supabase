import React from 'react'
import Wrapper from '../components/global/Wrapper'

const loading = () => {
  return (
    <Wrapper title='Loading...'>
      <span className="loading loading-ball loading-lg"></span>
    </Wrapper>

  )
}

export default loading