import { SVGProps } from "react";

export const Comments: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M6.88118 10.3846C6.88118 11.0881 7.45153 11.6585 8.15504 11.6585C8.85855 11.6585 9.42889 11.0882 9.42884 10.3846C9.42884 9.68115 8.85855 9.1108 8.15504 9.1108C7.45153 9.1108 6.88118 9.68109 6.88118 10.3846Z" />
      <path d="M10.8776 10.3846C10.8776 11.0881 11.4479 11.6585 12.1514 11.6585C12.8549 11.6585 13.4253 11.0882 13.4252 10.3846C13.4252 9.68115 12.8549 9.1108 12.1514 9.1108C11.448 9.1108 10.8776 9.68109 10.8776 10.3846Z" />
      <path d="M14.874 10.3846C14.874 11.0881 15.4443 11.6585 16.1478 11.6585C16.8513 11.6585 17.4216 11.0882 17.4215 10.3846C17.4215 9.68115 16.8513 9.1108 16.1478 9.1108C15.4443 9.1108 14.874 9.68109 14.874 10.3846Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.3878 17.2488H18.942C20.0768 17.2488 21 16.3255 21 15.1907V6.05808C21.0001 4.92328 20.0769 4 18.9421 4H5.05808C3.92328 4 3 4.92321 3 6.05801V15.1907C3 16.3255 3.92328 17.2487 5.05808 17.2487H11.5721L16.3285 21.3585C16.4472 21.461 16.5965 21.5144 16.7475 21.5144C16.8375 21.5144 16.9284 21.4952 17.0137 21.4563C17.2416 21.352 17.3878 21.1245 17.3878 20.8739V17.2488ZM12.2487 15.4307H5.05808C4.92722 15.4307 4.81795 15.3214 4.81795 15.1907V6.05801C4.81795 5.92731 4.92722 5.81795 5.05808 5.81795H18.9421C19.0728 5.81795 19.1821 5.92722 19.1821 6.05797V15.1907C19.1821 15.3215 19.0728 15.4308 18.942 15.4308H15.5699V18.3004L12.2487 15.4307Z"
      />
    </svg>
  );
};
