import toast from 'react-hot-toast';

type NotifyProps = {
  type: 'success' | 'error';
  message: string;
};

export const notify = (props: NotifyProps) => {
  if (props.type === 'success') return toast.success(props.message);
  else if (props.type === 'error') return toast.error(props.message);
  return;
};
