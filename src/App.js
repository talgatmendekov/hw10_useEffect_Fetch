import React, { useEffect, useState } from 'react'
import Post from './components/Posts/Post'
import Loading from './components/UI/Loading/Loading'
import './App.css'

function App() {
	const [post, setPost] = useState([])
  const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
    setIsLoading(true)
		fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
			.then((response) => {
        if(response.ok){
          setTimeout(() => {
             setIsLoading(false)
          }, 2000);
         
          return response.json()
        }
      })
			.then((post) => {
      setPost(post)
				
			})
	}, [])

	// useEffect(()=>{
	//   const fetchData = async() =>{
	//   const data = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
	//   const result = await data.json()
	//   setPost(result)
	//   }
	//   fetchData()
	// }, [])

	return (
		<div className='App'>
      {isLoading ? <Loading/> : <Post post={post} />}
			
		</div>
	)
}

export default App
