import { useLoaderData } from 'react-router-dom'
import { getPosts } from '../api/postAPI'
import { TPost } from '../types/post'

type HomeLoaderData = {
  posts: TPost[]
}

export async function loader() {
  const posts = await getPosts()
  return { posts }
}

export const Home = (): JSX.Element => {
  const { posts } = useLoaderData() as HomeLoaderData

  return (
    <div>
      <h1>This is the Home Page</h1>
      <ul>
        {posts?.map((post: TPost) => {
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
