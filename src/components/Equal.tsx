import { SVGProps } from "react";

export const Equal: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M4.19999 15H19.8V13H11.8H4.19999V15Z" />
      <path d="M4.19999 11H19.8V9H11.8H4.19999V11Z" />
    </svg>
  );
};
