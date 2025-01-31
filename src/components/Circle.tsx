import { SVGProps } from "react";

export const Circle: React.FC<SVGProps<SVGSVGElement>> = props => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" r="12"></circle>
    </svg>
  );
};
