import { SVGProps } from "react";

export const PriorityHigh: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M6 18H4V6H6V18Z" fill="currentColor" />
      <path d="M13 18H11V6H13V18Z" fill="currentColor" />
      <path d="M20 18H18V6H20V18Z" fill="currentColor" />
    </svg>
  );
};
