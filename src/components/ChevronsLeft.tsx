import { SVGProps } from "react";

export const ChevronsLeft: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M5.33655 11.9999L11.8791 5.15898C12.252 4.76691 12.2406 4.14633 11.8485 3.772C11.4564 3.39767 10.8363 3.41156 10.4644 3.80224L3.27201 11.3215C2.90933 11.7021 2.90933 12.2974 3.27201 12.6779L10.4644 20.1971C10.8385 20.5879 11.459 20.602 11.8514 20.2278C12.05 20.0341 12.1521 19.7766 12.1521 19.5192C12.1521 19.2753 12.0614 19.0312 11.8801 18.8412L5.33655 11.9999ZM19.7245 18.8408L13.1819 11.9999L19.7245 5.15898C20.0974 4.76691 20.086 4.14633 19.6939 3.772C19.3018 3.39767 18.6812 3.41185 18.3069 3.80264L11.1145 11.3219C10.7519 11.7025 10.7519 12.2978 11.1145 12.6783L18.3069 20.1976C18.6811 20.5884 19.3016 20.6024 19.6939 20.2282C19.8962 20.0341 19.9983 19.7766 19.9983 19.5192C19.9983 19.274 19.9084 19.0329 19.7245 18.8408Z" />
    </svg>
  );
};
