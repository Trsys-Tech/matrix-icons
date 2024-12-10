import { SVGProps } from "react";

export const Link: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M16.5 8H13.575C13.2038 8 12.9 8.30375 12.9 8.675C12.9 9.04625 13.2023 9.35 13.575 9.35H16.5C18.2367 9.35 19.65 10.7633 19.65 12.5C19.65 14.2367 18.2367 15.65 16.5 15.65H13.575C13.2023 15.65 12.9 15.9523 12.9 16.325C12.9 16.6977 13.2038 17 13.575 17H16.5C18.9812 17 21 14.9812 21 12.5C21 10.0188 18.9806 8 16.5 8ZM10.425 15.65H7.5C5.76328 15.65 4.35 14.2367 4.35 12.5C4.35 10.7633 5.76328 9.35 7.5 9.35L10.425 9.35C10.7991 9.35 11.1 9.04906 11.1 8.675C11.1 8.30094 10.7991 8 10.425 8H7.5C5.01881 8 3 10.0194 3 12.5C3 14.9806 5.01881 17 7.5 17H10.425C10.7991 17 11.1 16.6991 11.1 16.325C11.1 15.9509 10.7991 15.65 10.425 15.65ZM8.4 12.5C8.4 12.8727 8.70234 13.175 9.075 13.175L14.925 13.175C15.2991 13.175 15.6 12.8741 15.6 12.5C15.6 12.1259 15.2977 11.825 14.925 11.825L9.075 11.825C8.70375 11.825 8.4 12.1287 8.4 12.5Z" />
    </svg>
  );
};
