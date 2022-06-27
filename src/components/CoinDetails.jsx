import React from 'react'
import { useContext } from 'react'
import { APIContextProvider } from '../apiContext'

function CoinsDetails() {
  const data = useContext(APIContextProvider)
  console.log('DATA', data)
  return (
    <>
      <div></div>
    </>
  )
}

export default CoinsDetails
