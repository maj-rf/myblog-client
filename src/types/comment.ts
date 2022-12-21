import { TPost } from './post'
import { TUser } from './user'

export interface TComment {
  _id?: string
  author: TUser | string
  post: TPost | string
  content: string
  createdAt?: string
}
