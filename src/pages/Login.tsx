import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { BaseButton } from '../components/BaseButton';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { loginUser } from '../services/authService';
import { IUserCredentials } from '../types/types';
import { notify } from '../utils/utils';
import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';
export const Login = () => {
  const { register, handleSubmit, reset } = useForm<IUserCredentials>();
  const [passwordShow, setPasswordShow] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // TODO: Nav doesn't re-render when user just logged-in. Doesn't show logout button
  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      notify({ type: 'success', message: 'Successfully logged in!' });
      localStorage.setItem('accessToken', JSON.stringify(data));
      navigate('/');
      reset();
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        setError(error.response?.data.message);
      }
    },
  });

  const handleLogin = (data: IUserCredentials) => {
    loginMutation.mutate(data);
  };

  return (
    <div className="flex items-center justify-center grow">
      <div className="w-full sm:w-96 mx-4 rounded-lg border-4 border-b-8 border-r-8 border-slate-800 bg-white shadow-2xl shadow-black">
        <h1 className="text-4xl text-center uppercase p-2 border-b-4 border-slate-800 bg-green-400">
          Login
        </h1>
        <form onSubmit={handleSubmit(handleLogin)} className="p-4">
          <div className="mt-2">
            <label htmlFor="email" className="uppercase text-slate-500">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              className="w-full my-2 py-2 px-3 border border-slate-600 rounded-lg shadow-md shadow-violet-300 focus:outline-none focus:ring focus:ring-violet-300 transition duration-300"
              {...register('email')}
            />
          </div>

          <div className="relative mt-2">
            <label htmlFor="password" className="uppercase text-slate-500">
              Password
            </label>
            <input
              type={passwordShow ? 'text' : 'password'}
              id="password"
              placeholder="********"
              className="w-full my-2 py-2 px-3 border border-slate-600 rounded-lg shadow-md shadow-violet-300 focus:outline-none focus:ring focus:ring-violet-300 transition duration-300"
              {...register('password')}
            />
            <button
              className="absolute right-5 bottom-5"
              type="button"
              onClick={() => setPasswordShow(!passwordShow)}
            >
              {passwordShow ? <EyeIcon size={20} /> : <EyeOffIcon size={20} />}
            </button>
          </div>
          <BaseButton
            type="submit"
            className=" border-green-800 hover:text-green-100 hover:bg-green-700"
          >
            Login
          </BaseButton>
          {error && <div className="text-red-500 mt-2">{error}</div>}
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

/* <div className="grow flex flex-col items-center">
      <div className="w-full md:w-96 bg-white rounded-lg shadow-lg border-4 border-black">
        <h1 className=" bg-green-500 text-4xl text-center uppercase border-b-4 border-black">
          Login
        </h1>
        <form onSubmit={handleSubmit(handleLogin)} className="p-6">
          <div>
            <label htmlFor="email" className="text-xl">
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
            <label htmlFor="password" className="text-xl">
              Password
            </label>
            <input
              type={passwordShow ? 'text' : 'password'}
              placeholder="********"
              className="w-full my-2 py-2 px-3 border border-slate-600 rounded-lg shadow-md shadow-violet-300 focus:outline-none focus:ring focus:ring-violet-300 transition duration-300"
              {...register('password')}
            />
            <button
              className="absolute top-0 right-0"
              type="button"
              onClick={() => setPasswordShow(!passwordShow)}
            >
              {passwordShow ? <EyeVisible /> : <EyeHidden />}
            </button>
          </div>

          <BaseButton type="submit">Login</BaseButton>
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
    </div> */
