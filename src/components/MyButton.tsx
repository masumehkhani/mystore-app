import { ReactNode } from "react";

interface Props {
  btnName: string;
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
}
const MyButton = ({ btnName, icon, onClick, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`flex w-full lg:w-36 lg:mx-2 items-center justify-center text-xl px-4 py-2  rounded-md  ${className}`}
    >

      {icon && <span className="px-2 ">{icon}</span>}
      <span>{btnName}</span>
    </button>
  );
};

export default MyButton;

