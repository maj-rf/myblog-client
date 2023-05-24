import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { BaseButton } from '../components/BaseButton';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../store';
import { notify } from '../helpers/notify';
import { setCredentials } from '../slice/authSlice';
import { errorCheck } from '../helpers/errorCheck';
import { useRegisterMutation } from '../slice/usersApiSlice';

type RegisterInput = {
  username: string;
  email: string;
  password: string;
  confirm_pass: string;
};

export const Register = () => {
  const { register, handleSubmit, reset } = useForm<RegisterInput>();
  const [passwordShow, setPasswordShow] = useState(false);
  const [confirmShow, setConfirmShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const [registerMutation, { error }] = useRegisterMutation();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [navigate, user]);

  const handleRegister = async (data: RegisterInput) => {
    try {
      const res = await registerMutation(data).unwrap();
      dispatch(setCredentials({ ...res }));
      notify({ type: 'success', message: 'Successfully registered!' });
      reset();
      navigate('/');
    } catch (err) {
      console.log(errorCheck(err));
    }
  };

  return (
    <div className="flex items-center justify-center grow">
      <div className="w-full sm:w-96 mx-4 rounded-lg border-4 border-b-8 border-r-8 border-slate-800 bg-white shadow-2xl shadow-black">
        <h1 className="mb-2 text-3xl font-bold text-center uppercase p-2 border-b-4 border-slate-800 bg-orange-300">
          Register
        </h1>
        <form onSubmit={handleSubmit(handleRegister)} className="p-4">
          <div>
            <label htmlFor="username" className="uppercase text-slate-500">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="your_username"
              className="w-full my-2 py-2 px-3 border border-slate-600 rounded-lg shadow-md shadow-violet-300 focus:outline-none focus:ring focus:ring-violet-300 transition duration-300"
              {...register('username')}
            />
          </div>
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
          <div className="relative mt-2">
            <label htmlFor="confirm_pass" className="uppercase text-slate-500">
              Confirm Password
            </label>
            <input
              type={confirmShow ? 'text' : 'password'}
              id="confirm_pass"
              placeholder="********"
              className="w-full my-2 py-2 px-3 border border-slate-600 rounded-lg shadow-md shadow-violet-300 focus:outline-none focus:ring focus:ring-violet-300 transition duration-300"
              {...register('confirm_pass')}
            />
            <button
              className="absolute right-5 bottom-5"
              type="button"
              onClick={() => setConfirmShow(!confirmShow)}
            >
              {confirmShow ? <EyeIcon size={20} /> : <EyeOffIcon size={20} />}
            </button>
          </div>
          <BaseButton
            type="submit"
            className=" border-orange-800 hover:text-orange-100 hover:bg-orange-700"
          >
            Register
          </BaseButton>
          {error && (
            <p className="text-red-500 mt-2 text-center">{errorCheck(error)}</p>
          )}
        </form>
        <div className="text-center py-2 text-gray-600">
          Already have an account?
          <Link
            to="/login"
            className="underline text-black hover:text-orange-500 ml-1"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};
