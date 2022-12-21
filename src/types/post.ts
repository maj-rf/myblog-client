import { TUser } from './user'
import { TComment } from './comment'

export interface TPost {
  _id?: string
  author: TUser | string
  title: string
  content: string
  published: boolean
  comments: TComment[]
  createdAt?: string
}
