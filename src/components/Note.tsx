import { SVGProps } from "react";

export const Note: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.4 3.9C10.4 3.40294 9.99706 3 9.5 3L8.6 3.9L6.47424 4.19428C6.47424 4.19428 5.84207 4.38798 5.40186 4.96968C4.93668 5.5844 5.02751 6.42447 5.02751 6.42447C4.99997 6.76159 4.99998 7.17087 5 7.64531V17.2547C4.99998 17.7291 4.99997 18.1384 5.02751 18.4755C5.05658 18.8313 5.12077 19.1853 5.29429 19.5258C5.55312 20.0338 5.96617 20.4469 6.47431 20.7057C6.81483 20.8792 7.16869 20.9434 7.52447 20.9725C7.86158 21 8.27087 21 8.74529 21H15.6547C16.1291 21 16.5384 21 16.8755 20.9725C17.2313 20.9434 17.5852 20.8792 17.9257 20.7057C18.4338 20.4469 18.8469 20.0338 19.1057 19.5257C19.2792 19.1852 19.3434 18.8313 19.3725 18.4755C19.4 18.1384 19.4 17.7291 19.4 17.2547V7.64529C19.4 7.17087 19.4 6.76159 19.3725 6.42447C19.3434 6.06869 19.2792 5.71482 19.1057 5.37431C18.8469 4.86616 18.4338 4.45312 17.9258 4.19429C17.5853 4.02076 17.2313 3.95658 16.8755 3.92751C16.5733 3.90282 16.2131 3.90025 15.8 3.9C15.8 3.40294 15.3971 3 14.9 3C14.4029 3 14 3.40294 14 3.9H13.1C13.1 3.40294 12.6971 3 12.2 3C11.7029 3 11.3 3.40294 11.3 3.9H10.4ZM14.9 6.6C14.4029 6.6 14 6.19706 14 5.7H13.1C13.1 6.19706 12.6971 6.6 12.2 6.6C11.7029 6.6 11.3 6.19706 11.3 5.7H10.4C10.4 6.19706 9.99706 6.6 9.5 6.6C9.00297 6.6 8.60004 6.19709 8.6 5.70006C8.18141 5.70046 7.89529 5.70321 7.67106 5.72153C7.42656 5.74151 7.33589 5.77543 7.29139 5.79811C7.12206 5.88438 6.98437 6.02208 6.89809 6.19142C6.87542 6.23591 6.84151 6.32656 6.82154 6.57105C6.8007 6.82605 6.8 7.1611 6.8 7.68V17.22C6.8 17.7389 6.8007 18.0739 6.82154 18.329C6.84151 18.5735 6.87543 18.6641 6.89809 18.7086C6.98439 18.878 7.12219 19.0157 7.29143 19.1019C7.33592 19.1246 7.42656 19.1585 7.67106 19.1785C7.92606 19.1993 8.2611 19.2 8.78 19.2H15.62C16.1389 19.2 16.474 19.1993 16.729 19.1785C16.9735 19.1585 17.0642 19.1245 17.1087 19.1019C17.2779 19.0156 17.4157 18.8778 17.5019 18.7086C17.5246 18.6641 17.5585 18.5735 17.5785 18.329C17.5993 18.074 17.6 17.7389 17.6 17.22V7.68C17.6 7.1611 17.5993 6.82606 17.5785 6.57106C17.5585 6.32656 17.5245 6.23582 17.5019 6.19133C17.4156 6.02208 17.278 5.88439 17.1086 5.79809C17.0641 5.77542 16.9735 5.74151 16.729 5.72153C16.5047 5.70321 16.2186 5.70046 15.8 5.70006C15.8 6.19709 15.397 6.6 14.9 6.6Z"
      />
      <path d="M9.5 8.4C9.00294 8.4 8.6 8.80294 8.6 9.3C8.6 9.79706 9.00294 10.2 9.5 10.2H13.1C13.5971 10.2 14 9.79706 14 9.3C14 8.80294 13.5971 8.4 13.1 8.4H9.5Z" />
      <path d="M9.5 12C9.00294 12 8.6 12.4029 8.6 12.9C8.6 13.3971 9.00294 13.8 9.5 13.8H14.9C15.3971 13.8 15.8 13.3971 15.8 12.9C15.8 12.4029 15.3971 12 14.9 12H9.5Z" />
      <path d="M9.5 3C9.00294 3 8.6 3.40294 8.6 3.9L9.5 3Z" />
      <path d="M8.6 3.9C8.18687 3.90025 7.82668 3.90282 7.52448 3.92751C7.16867 3.95658 6.81478 4.02077 6.47424 4.19428L8.6 3.9Z" />
    </svg>
  );
};
