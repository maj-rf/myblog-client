import { useState, useEffect } from 'react'
import { getPosts } from '../api/postAPI'
import { TPost } from '../types/post'

export const Home = (): JSX.Element => {
  const [posts, setPosts] = useState<TPost[]>([])

  useEffect(() => {
    async function fetchPosts() {
      const posts = await getPosts()
      setPosts(posts)
    }
    fetchPosts()
  }, [])

  return (
    <div>
      <h1>This is the Home Page</h1>
      <ul>
        {posts?.map((post) => {
          return (
            <li key={post._id}>
              <h1>{post.title}</h1>
              <p className=" ml-4">{post.content}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
