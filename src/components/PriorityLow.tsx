import { SVGProps } from "react";

export const PriorityLow: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M13 18H11V6H13V18Z" fill="currentColor" />
    </svg>
  );
};
