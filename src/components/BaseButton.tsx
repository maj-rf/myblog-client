interface BaseButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset' | undefined;
  children: React.ReactNode;
  color?: string;
}

export const BaseButton = ({ children, ...props }: BaseButtonProps) => {
  return (
    <button
      type={props.type ? props.type : 'button'}
      className={`w-full mt-2 py-2 uppercase transition-all duration-300 ease-in-out bg-white border-2 border-b-4 border-r-4 rounded-lg  ${props.className}`}
      onClick={props.onClick}
    >
      {children}
    </button>
  );
};
