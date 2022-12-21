import { TPost } from '../types/post'
import { API_URL } from './config'

export const getPosts = async (): Promise<TPost[]> => {
  const res = await fetch(`${API_URL}/posts/all`, { mode: 'cors' })
  const { posts } = await res.json()
  return posts
}
