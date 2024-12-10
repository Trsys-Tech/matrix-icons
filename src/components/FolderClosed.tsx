import { SVGProps } from "react";

export const FolderClosed: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9328 19.6629H5.09471C3.93771 19.6629 3 18.7249 3 17.5682V7.0947C3 5.93804 3.93771 5 5.09471 5H8.94045C9.49588 5 10.0287 5.22066 10.4218 5.61368L12.0301 7.0947H16.6156V7.10667H18.7965C20.0135 7.10667 21 8.09322 21 9.31018L20.9989 17.4672C20.9989 18.6841 20.0124 19.6707 18.7954 19.6707H11.9331L11.9328 19.6629ZM17.2287 17.7981L17.1126 17.8089H5.18911C5.18911 17.8089 4.9352 17.7774 4.74521 17.573C4.54061 17.353 4.57103 17.0798 4.57103 17.0798V7.0947C4.57103 6.80603 4.80603 6.57103 5.09471 6.57103H8.94045C9.08119 6.57103 9.21211 6.62536 9.3103 6.72453L11.3788 8.66573H11.9363L11.9363 8.67184H18.7986C19.042 8.67184 19.2393 8.86915 19.2393 9.11254L19.1665 17.401C19.1665 17.6444 18.9795 17.7981 18.7361 17.7981H17.2287Z"
      />
    </svg>
  );
};
