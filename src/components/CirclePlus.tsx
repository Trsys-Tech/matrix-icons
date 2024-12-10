import { SVGProps } from "react";

export const CirclePlus: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M15.5456 12.7166C16.0132 12.7166 16.3894 12.3404 16.3894 11.8728C16.3894 11.4088 16.0132 11.0291 15.5456 11.0291H12.8135V8.29694C12.8135 7.83112 12.4355 7.45354 11.9697 7.45354C11.5039 7.45354 11.126 7.83112 11.126 8.29694V11.0291H8.39382C7.928 11.0291 7.55007 11.4088 7.55007 11.8732C7.55007 12.339 7.928 12.7166 8.39382 12.7166H11.126V15.4487C11.126 15.9163 11.5039 16.2928 11.9697 16.2928C12.4355 16.2928 12.8135 15.9145 12.8135 15.4487V12.7166H15.5456Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 12C3 7.02891 7.02891 3 12 3C16.9711 3 21 7.02891 21 12C21 16.9711 16.9711 21 12 21C7.02891 21 3 16.9711 3 12ZM4.6875 12C4.6875 16.0321 7.96758 19.3125 12 19.3125C16.0324 19.3125 19.3125 16.0321 19.3125 12C19.3125 7.96793 16.0324 4.6875 12 4.6875C7.96758 4.6875 4.6875 7.96793 4.6875 12Z"
      />
    </svg>
  );
};
