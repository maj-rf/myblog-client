import { Link } from 'react-router-dom';
import { useField } from '../hooks/useField';

export const Register = () => {
  const { setValue: setUsername, ...username } = useField('text');
  const { setValue: setEmail, ...email } = useField('email');
  const { setValue: setPassword, ...password } = useField('password');
  const { setValue: setConfirmPass, ...confirmPass } = useField('password');

  const showPassword = (ref: React.RefObject<HTMLInputElement> | undefined) => {
    if (!ref) return;
    if (ref.current !== null)
      return (ref.current.type =
        ref.current.type === 'password' ? 'text' : 'password');
  };

  // TODO Reset inputs
  const submitUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      username: username.value,
      email: email.value,
      password: password.value,
      confirmPass: confirmPass.value,
      pass: password.value === confirmPass.value ? true : false,
    });
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPass('');
  };

  return (
    <div className="grow flex items-center justify-center bg-blue-50">
      <div className="w-full md:w-96 mx-4">
        <h1 className="text-4xl text-center uppercase">Register</h1>
        <form className="" onSubmit={submitUser}>
          <div>
            <label htmlFor="email" hidden>
              Email
            </label>
            <input
              placeholder="your@email.com"
              name="email"
              className="w-full my-2 py-2 px-3 border rounded-lg"
              {...email}
            />
          </div>
          <div>
            <label htmlFor="username" hidden>
              Username
            </label>
            <input
              placeholder="your_username"
              name="username"
              className="w-full my-2 py-2 px-3 border rounded-lg"
              {...username}
            />
          </div>

          <div className="relative">
            <label htmlFor="password" hidden>
              Password
            </label>
            <input
              // type="password"
              placeholder="********"
              name="password"
              className="w-full my-2 py-2 px-3 border rounded-lg"
              {...password}
            />
            <button
              className="absolute top-0 right-5 bottom-0 m-auto max-h-fit"
              type="button"
              onClick={() => showPassword(password.ref)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#523654"
                  d="M14 12c-1.095 0-2-.905-2-2c0-.354.103-.683.268-.973C12.178 9.02 12.092 9 12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3c1.641 0 3-1.358 3-3c0-.092-.02-.178-.027-.268c-.29.165-.619.268-.973.268z"
                />
                <path
                  fill="currentColor"
                  d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316l-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5c-.504 1.158-2.578 5-7.926 5z"
                />
              </svg>
            </button>
          </div>
          <div className="relative">
            <label htmlFor="confirm_pass" hidden>
              Confirm Password
            </label>
            <input
              placeholder="********"
              name="confirm_pass"
              className="w-full my-2 py-2 px-3 border rounded-lg"
              {...confirmPass}
            />
            <button
              className="absolute top-0 right-5 bottom-0 m-auto max-h-fit"
              type="button"
              onClick={() => showPassword(confirmPass.ref)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#523654"
                  d="M14 12c-1.095 0-2-.905-2-2c0-.354.103-.683.268-.973C12.178 9.02 12.092 9 12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3c1.641 0 3-1.358 3-3c0-.092-.02-.178-.027-.268c-.29.165-.619.268-.973.268z"
                />
                <path
                  fill="currentColor"
                  d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316l-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5c-.504 1.158-2.578 5-7.926 5z"
                />
              </svg>
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-400"
          >
            Register
          </button>
        </form>
        <div className="text-center py-2 text-gray-600">
          Already have an account?
          <Link
            to="/login"
            className="underline text-black hover:text-orange-500 ml-1"
          >
            Login!
          </Link>
        </div>
      </div>
    </div>
  );
};
