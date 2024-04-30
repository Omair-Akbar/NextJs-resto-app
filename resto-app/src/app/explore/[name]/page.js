import Header from '@/app/_components/Header'
import React from 'react'

const page = (props) => {
    const name = props.params.name
  return (
    <div>
        <Header/>
      <div className='main-page-banner' >
      <h1 className='explore-heading'>{decodeURI(name)}</h1>
      </div>
    </div>
  )
}

export default page
