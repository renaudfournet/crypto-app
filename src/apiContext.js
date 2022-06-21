// import React, { useContext, createContext, useState, useEffect } from 'react'
// import axios from 'axios'

// const APIContext = createContext()

// export function APIContextProvider({ children }, props) {
//   const [data, setData] = useState('')

//   console.log('PROPS', props)

//   useEffect(() => {
//     axios
//       .get(`https://api.coingecko.com/api/v3/coins/${props.id}?`)
//       .then(res => {
//         console.log(res)
//         setData(res.data)
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   }, [props.id])
//   console.log('CONTEXT', data)

//   return <APIContext.Provider value={{ data }}>{children}</APIContext.Provider>
// }

// export function useAPI() {
//   const context = useContext(APIContext)
//   if (context === undefined) {
//     throw new Error('Context must be used within a Provider')
//   }
//   return context
// }
