import { API_URL } from './config'

export type TFields = {
  username: string
  email: string
  password: string
  confirmpass: string
}

export const registerUser = async ({
  username,
  email,
  password,
  confirmpass,
}: TFields) => {
  const res = await fetch(`${API_URL}/register`, {
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify({
      username,
      email,
      password,
      confirmpass,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return res.json()
}
