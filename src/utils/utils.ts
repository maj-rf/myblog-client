import { toast } from 'react-toastify';

export const notify = (message: string | string[]) => {
  if (typeof message === 'string') return toast(message);
  console.log(message);
};
