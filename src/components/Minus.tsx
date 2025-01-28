import { SVGProps } from "react";

export const Minus: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M19.6667 12.375C19.6667 12.8599 19.2766 13.25 18.7917 13.25H5.375C4.89193 13.25 4.5 12.8584 4.5 12.3754C4.5 11.8938 4.89193 11.5 5.375 11.5H18.7917C19.2766 11.5 19.6667 11.8937 19.6667 12.375Z" />
    </svg>
  );
};
