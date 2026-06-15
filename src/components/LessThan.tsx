import { SVGProps } from "react";

export const LessThan: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M20 8.04802L9.52045 12.0681L20 16.0882V18L4 12.0681L20 6V8.04802Z" />
    </svg>
  );
};
