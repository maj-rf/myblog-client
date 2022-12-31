import { registerUser, TFields } from '../api/userAPI'
import { Form, redirect } from 'react-router-dom'

export async function action({ request }) {
  const formData = await request.formData()
  const fields = Object.fromEntries(formData) as TFields
  await registerUser(fields)
  return redirect('/login')
}

export const Signup = () => {
  return (
    <section>
      <div className=" flex flex-wrap justify-center mt-20">
        <div className="w-full max-w-sm">
          <Form
            method="post"
            className=" shadow-md bg-white rounded px-8 py-6 flex flex-col gap-3"
          >
            <h1 className="text-2xl">Create an account</h1>
            <div>
              <label htmlFor="username">Username</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                type="text"
                name="username"
                placeholder="your_username"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                type="email"
                name="email"
                placeholder="your_email@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                type="password"
                name="password"
                placeholder="*******"
              />
            </div>
            <div>
              <label htmlFor="confirmpass">Confirm Password</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                type="password"
                name="confirmpass"
                placeholder="*******"
              />
            </div>
            <button
              className=" bg-orange-400 py-2 rounded text-white text-xl hover:bg-orange-600"
              type="submit"
            >
              Register
            </button>
          </Form>
        </div>
      </div>
    </section>
  )
}
