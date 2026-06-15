import { SVGProps } from "react";

export const GreaterThan: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M4 8.04802L14.4796 12.0681L4 16.0882V18L20 12.0681L4 6V8.04802Z" />
    </svg>
  );
};
