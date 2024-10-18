import React, { useState, useEffect } from 'react'
import appwriteService from '../appwrite/config'
import { Container ,PostCard } from '../components'

function AllPost() {
    const [posts, setPosts] = useState([])
    useEffect(() => { }, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts)
        }
    }).catch((error) => {
        console.error(error)
    } )
  return (
      <div className='w-full py-8'>
          <Container>
              <div className='flex flex-wrap'>
                  {
                      posts.map((post) => (
                          <div key={post.$id} className='p-2 w-1/4'>
                              <PostCard post={post} />
                          </div>
                          
                      ))
                  }
              </div>
          </Container>
  
    </div>
  )
}

export default AllPost