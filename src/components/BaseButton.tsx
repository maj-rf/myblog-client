interface BaseButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset' | undefined;
  children: React.ReactNode;
  color?: string;
  isLoading?: boolean;
}

export const BaseButton = ({ children, ...props }: BaseButtonProps) => {
  return (
    <button
      type={props.type ? props.type : 'button'}
      className={`transition-all duration-300 ease-in-out focus:ring-4 focus:outline-none rounded-lg border ${props.className}`}
      onClick={props.onClick}
      disabled={props.isLoading ? true : false}
    >
      {children}
    </button>
  );
};
