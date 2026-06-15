import { SVGProps } from "react";

export const GreaterOrEqual: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M19.6 18H4V16.7H19.6V18Z" />
      <path d="M19.6 10.916L4 16.7V14.8363L14.2172 10.916L4 6.99697V5L19.6 10.916Z" />
    </svg>
  );
};
