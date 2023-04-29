import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { EyeVisible } from '../components/icons/EyeVisible';
import { EyeHidden } from '../components/icons/EyeHidden';

type LoginInput = {
  email: string;
  password: string;
};

export const Login = () => {
  const { register, handleSubmit, reset } = useForm<LoginInput>();
  const [passwordShow, setPasswordShow] = useState(false);

  const handleLogin = (data: LoginInput) => {
    console.log(data);
    reset();
  };

  return (
    <div className="grow flex items-center justify-center bg-blue-50">
      <div className="w-full md:w-96 mx-4 bg-white p-4 rounded-lg shadow-lg">
        <h1 className="text-4xl text-center uppercase">Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div>
            <label htmlFor="email" hidden>
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full my-2 py-2 px-3 border border-slate-600 rounded-lg shadow-md shadow-violet-300 focus:outline-none focus:ring focus:ring-violet-300 transition duration-300"
              {...register('email')}
            />
          </div>

          <div className="relative">
            <label htmlFor="password" hidden>
              Password
            </label>
            <input
              type={passwordShow ? 'text' : 'password'}
              placeholder="********"
              className="w-full my-2 py-2 px-3 border border-slate-600 rounded-lg shadow-md shadow-violet-300 focus:outline-none focus:ring focus:ring-violet-300 transition duration-300"
              {...register('password')}
            />
            <button
              className="absolute top-0 right-5 bottom-0 m-auto max-h-fit"
              type="button"
              onClick={() => setPasswordShow(!passwordShow)}
            >
              {passwordShow ? <EyeVisible /> : <EyeHidden />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-400 shadow-md shadow-red-100"
          >
            Login
          </button>
        </form>
        <div className="text-center py-2 text-gray-600">
          Don't have an account yet?
          <Link
            to="/register"
            className="underline text-black hover:text-orange-500 ml-1"
          >
            Register now!
          </Link>
        </div>
      </div>
    </div>
  );
};
