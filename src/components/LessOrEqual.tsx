import { SVGProps } from "react";

export const LessOrEqual: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M4.4 18H20V16.7H4.4V18Z" />
      <path d="M4.4 10.916L20 16.7V14.8363L9.78281 10.916L20 6.99697V5L4.4 10.916Z" />
    </svg>
  );
};
