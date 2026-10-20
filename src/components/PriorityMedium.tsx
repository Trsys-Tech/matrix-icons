import { SVGProps } from "react";

export const PriorityMedium: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M9.5 18H7.5V6H9.5V18Z" fill="currentColor" />
      <path d="M16.5 18H14.5V6H16.5V18Z" fill="currentColor" />
    </svg>
  );
};
