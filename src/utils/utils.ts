import { toast } from 'react-toastify';

type NotifyProps = {
  type: 'success' | 'error';
  message: string;
};

export const notify = (props: NotifyProps) => {
  if (props.type === 'success') return toast.success(props.message);
  return toast.error(props.message);
};
