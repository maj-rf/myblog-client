import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { BaseButton } from '../components/BaseButton';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
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

  const handleLogin = (data: RegisterInput) => {
    console.log(data);
    reset();
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full sm:w-96 mx-4 mt-10 rounded-lg border-4 border-b-8 border-r-8 border-slate-800 bg-white shadow-2xl shadow-black">
        <h1 className="text-4xl text-center uppercase p-2 border-b-4 border-slate-800 bg-orange-300">
          Register
        </h1>
        <form onSubmit={handleSubmit(handleLogin)} className="p-4">
          <div className="mt-2">
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
//   return (
//     <div className="grow flex items-center justify-around bg-blue-50">
//       <div className="w-full md:w-96 mx-4 bg-white p-4 rounded-lg shadow-lg">
//         <h1 className="text-4xl text-center uppercase">Register</h1>
//         <form onSubmit={handleSubmit(handleLogin)}>
//           <div>
//             <label htmlFor="username" hidden>
//               Username
//             </label>
//             <input
//               type="text"
//               placeholder="your_username7"
//               className="w-full my-2 py-2 px-3 border border-slate-600 rounded-lg shadow-md shadow-violet-300 focus:outline-none focus:ring focus:ring-violet-300 transition duration-300"
//               {...register('username')}
//             />
//           </div>
//           <div>
//             <label htmlFor="email" hidden>
//               Email
//             </label>
//             <input
//               type="email"
//               placeholder="your@email.com"
//               className="w-full my-2 py-2 px-3 border border-slate-600 rounded-lg shadow-md shadow-violet-300 focus:outline-none focus:ring focus:ring-violet-300 transition duration-300"
//               {...register('email')}
//             />
//           </div>

//           <div className="relative">
//             <label htmlFor="password" hidden>
//               Password
//             </label>
//             <input
//               type={passwordShow ? 'text' : 'password'}
//               placeholder="********"
//               className="w-full my-2 py-2 px-3 border border-slate-600 rounded-lg shadow-md shadow-violet-300 focus:outline-none focus:ring focus:ring-violet-300 transition duration-300"
//               {...register('password')}
//             />
//             <button
//               className="absolute top-0 right-5 bottom-0 m-auto max-h-fit"
//               type="button"
//               onClick={() => setPasswordShow(!passwordShow)}
//             >
//               {passwordShow ? <EyeVisible /> : <EyeHidden />}
//             </button>
//           </div>
//           <div className="relative">
//             <label htmlFor="confirm_pass" hidden>
//               Confirm Password
//             </label>
//             <input
//               type={confirmShow ? 'text' : 'password'}
//               placeholder="confirm password"
//               className="w-full my-2 py-2 px-3 border border-slate-600 rounded-lg shadow-md shadow-violet-300 focus:outline-none focus:ring focus:ring-violet-300 transition duration-300"
//               {...register('confirm_pass')}
//             />
//             <button
//               className="absolute top-0 right-5 bottom-0 m-auto max-h-fit"
//               type="button"
//               onClick={() => setConfirmShow(!confirmShow)}
//             >
//               {confirmShow ? <EyeVisible /> : <EyeHidden />}
//             </button>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-400"
//           >
//             Register
//           </button>
//         </form>
//         <div className="text-center py-2 text-gray-600">
//           Already have an account?
//           <Link
//             to="/login"
//             className="underline text-black hover:text-orange-500 ml-1"
//           >
//             Login!
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const Register = () => {
//   const { setValue: setUsername, ...username } = useField('text');
//   const { setValue: setEmail, ...email } = useField('email');
//   const { setValue: setPassword, ...password } = useField('password');
//   const { setValue: setConfirmPass, ...confirmPass } = useField('password');

//   const showPassword = (ref: React.RefObject<HTMLInputElement> | undefined) => {
//     if (!ref) return;
//     if (ref.current !== null)
//       return (ref.current.type =
//         ref.current.type === 'password' ? 'text' : 'password');
//   };

//   // TODO Reset inputs
//   const submitUser = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log({
//       username: username.value,
//       email: email.value,
//       password: password.value,
//       confirmPass: confirmPass.value,
//       pass: password.value === confirmPass.value ? true : false,
//     });
//     setUsername('');
//     setEmail('');
//     setPassword('');
//     setConfirmPass('');
//   };

//   return (
//     <div className="grow flex items-center justify-center bg-blue-50">
//       <div className="w-full md:w-96 mx-4">
//         <h1 className="text-4xl text-center uppercase">Register</h1>
//         <form className="" onSubmit={submitUser}>
//           <div>
//             <label htmlFor="email" hidden>
//               Email
//             </label>
//             <input
//               placeholder="your@email.com"
//               name="email"
//               className="w-full my-2 py-2 px-3 border rounded-lg"
//               {...email}
//             />
//           </div>
//           <div>
//             <label htmlFor="username" hidden>
//               Username
//             </label>
//             <input
//               placeholder="your_username"
//               name="username"
//               className="w-full my-2 py-2 px-3 border rounded-lg"
//               {...username}
//             />
//           </div>

//           <div className="relative">
//             <label htmlFor="password" hidden>
//               Password
//             </label>
//             <input
//               // type="password"
//               placeholder="********"
//               name="password"
//               className="w-full my-2 py-2 px-3 border rounded-lg"
//               {...password}
//             />
//             <button
//               className="absolute top-0 right-5 bottom-0 m-auto max-h-fit"
//               type="button"
//               onClick={() => showPassword(password.ref)}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="32"
//                 height="32"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   fill="#523654"
//                   d="M14 12c-1.095 0-2-.905-2-2c0-.354.103-.683.268-.973C12.178 9.02 12.092 9 12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3c1.641 0 3-1.358 3-3c0-.092-.02-.178-.027-.268c-.29.165-.619.268-.973.268z"
//                 />
//                 <path
//                   fill="currentColor"
//                   d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316l-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5c-.504 1.158-2.578 5-7.926 5z"
//                 />
//               </svg>
//             </button>
//           </div>
//           <div className="relative">
//             <label htmlFor="confirm_pass" hidden>
//               Confirm Password
//             </label>
//             <input
//               placeholder="********"
//               name="confirm_pass"
//               className="w-full my-2 py-2 px-3 border rounded-lg"
//               {...confirmPass}
//             />
//             <button
//               className="absolute top-0 right-5 bottom-0 m-auto max-h-fit"
//               type="button"
//               onClick={() => showPassword(confirmPass.ref)}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="32"
//                 height="32"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   fill="#523654"
//                   d="M14 12c-1.095 0-2-.905-2-2c0-.354.103-.683.268-.973C12.178 9.02 12.092 9 12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3c1.641 0 3-1.358 3-3c0-.092-.02-.178-.027-.268c-.29.165-.619.268-.973.268z"
//                 />
//                 <path
//                   fill="currentColor"
//                   d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316l-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5c-.504 1.158-2.578 5-7.926 5z"
//                 />
//               </svg>
//             </button>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-400"
//           >
//             Register
//           </button>
//         </form>
//         <div className="text-center py-2 text-gray-600">
//           Already have an account?
//           <Link
//             to="/login"
//             className="underline text-black hover:text-orange-500 ml-1"
//           >
//             Login!
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };
