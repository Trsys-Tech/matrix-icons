import { SVGProps } from "react";

export const DeficiencyList: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.1437 5.85796H13.9844V4.23979C13.9844 3.57159 13.437 3 12.7447 3H11.0782C10.3858 3 9.83839 3.54744 9.83839 4.23979V5.86601H8.71131C8.20412 5.86601 7.77744 6.29269 7.77744 6.79988V7.89476C7.77744 8.01552 7.88209 8.12017 8.00285 8.12017H15.8602C15.981 8.12017 16.0856 8.01552 16.0856 7.89476V6.79988C16.0776 6.28464 15.6751 5.85796 15.1437 5.85796ZM11.9396 3.70845C12.3824 3.70845 12.7527 4.07073 12.7527 4.52156C12.7527 4.97239 12.3824 5.33467 11.9396 5.33467C11.4968 5.33467 11.1265 4.97239 11.1265 4.52156C11.1265 4.07073 11.4888 3.70845 11.9396 3.70845ZM8.20427 9.31169H15.6752C15.796 9.31169 15.8765 9.39219 15.8765 9.51295V9.81887C15.8765 9.93963 15.796 10.0201 15.6752 10.0201H8.20427C8.08352 10.0201 8.00301 9.93963 8.00301 9.81887V9.51295C7.99496 9.41634 8.09962 9.31169 8.20427 9.31169ZM8.20427 11.5498H15.6752C15.796 11.5498 15.8765 11.6304 15.8765 11.7511V12.057C15.8765 12.1778 15.796 12.2583 15.6752 12.2583H8.20427C8.08352 12.2583 8.00301 12.1778 8.00301 12.057V11.7511C7.99496 11.6304 8.09962 11.5498 8.20427 11.5498ZM9.96735 13.7795H8.20427C8.09962 13.7795 7.99496 13.86 8.00301 13.9808V14.2867C8.00301 14.4074 8.08352 14.488 8.20427 14.488H9.96735C10.0881 14.488 10.1686 14.4074 10.1686 14.2867V13.9808C10.1686 13.86 10.0881 13.7795 9.96735 13.7795ZM8.20427 16.0099H9.96735C10.0881 16.0099 10.1686 16.0904 10.1686 16.2112V16.5171C10.1686 16.6379 10.0881 16.7184 9.96735 16.7184H8.20427C8.08352 16.7184 8.00301 16.6379 8.00301 16.5171V16.2112C7.99496 16.0904 8.09962 16.0099 8.20427 16.0099ZM9.96735 18.2478H8.20427C8.09962 18.2478 7.99496 18.3283 8.00301 18.4491V18.755C8.00301 18.8758 8.08352 18.9563 8.20427 18.9563H9.96735C10.0881 18.9563 10.1686 18.8758 10.1686 18.755V18.4491C10.1686 18.3283 10.0881 18.2478 9.96735 18.2478ZM17.6797 11.888C17.6797 12.2341 17.9454 12.4998 18.2916 12.4998C18.6378 12.4998 18.9034 12.2341 18.8954 11.888V7.84656C18.8954 6.95294 18.1869 6.24449 17.2933 6.24449H16.8908C16.5446 6.24449 16.2789 6.51016 16.2789 6.85634C16.2789 7.20251 16.5446 7.46818 16.8908 7.46818H17.2933C17.4946 7.46818 17.6797 7.65335 17.6797 7.85461V11.888ZM6.57792 20.5585C6.37665 20.5585 6.19149 20.3975 6.19149 20.1721V7.85468C6.19149 7.65341 6.3525 7.46825 6.57792 7.46825H6.92409C7.23001 7.46825 7.49568 7.26698 7.55204 6.98521C7.63254 6.59879 7.32662 6.25261 6.96434 6.25261H6.60207C5.70845 6.25261 5 6.96106 5 7.85468V20.156C5 21.0496 5.70845 21.758 6.60207 21.758H10.1524C10.4986 21.758 10.7803 21.4763 10.7642 21.1059C10.7481 20.7839 10.4422 20.5585 10.1121 20.5585H6.57792ZM16.609 18.3202L16.8102 18.119C16.9551 17.958 17.2128 17.958 17.3577 18.0948C18.0339 18.7711 18.7021 19.4554 19.3703 20.1477C19.5152 20.2926 19.5555 20.5341 19.475 20.7193C19.2093 21.2909 18.847 21.7176 18.2754 21.9591C18.0903 22.0396 17.8729 21.9993 17.728 21.8544C17.3939 21.5083 17.0538 21.1641 16.7136 20.8199C16.3735 20.4758 16.0334 20.1316 15.6993 19.7854C15.5543 19.6164 15.5543 19.3749 15.6993 19.2138L16.0213 18.8918L15.7154 18.5859L15.3128 18.1834L12.471 21.2909C12.471 21.2909 11.9799 21.3473 11.6981 21.0655C11.3519 20.6952 11.4324 20.1719 11.4324 20.1719L14.3548 17.2737L13.2197 16.1546L12.5112 16.0983L11.2151 14.2064L11.9235 13.4738L13.7752 14.8102L13.8315 15.583L14.9506 16.7182L15.7234 15.9453C15.337 15.108 15.5221 14.1983 16.0696 13.6267C16.6573 13.0149 17.5509 13.0149 17.5509 13.0149L17.7361 13.4818L17.2289 14.0132V14.786L17.7522 15.3174H18.5009L18.9839 14.786L19.4508 14.9712C19.4508 14.9712 19.4508 15.9695 18.8792 16.4766C18.2915 17.008 17.414 17.1448 16.5848 16.7826L15.8361 17.5957L16.2628 17.9982L16.609 18.3202ZM12.0443 20.663C12.1812 20.8079 12.3824 20.8079 12.5273 20.663C12.6642 20.518 12.6642 20.2926 12.5273 20.1558C12.3905 20.0109 12.1892 20.0109 12.0443 20.1558C11.8994 20.3007 11.8994 20.518 12.0443 20.663ZM16.1179 19.4795L18.0259 21.4278L18.3882 21.2265L16.3997 19.1977L16.1179 19.4795ZM16.7056 18.8516L18.6941 20.8803L18.8953 20.518L16.9874 18.5698L16.7056 18.8516Z"
      />
    </svg>
  );
};
