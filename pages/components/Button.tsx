import { HtmlHTMLAttributes } from "react";

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  variant: "blue" | "red";
  children?: React.ReactNode;
}

function Button({ variant, children, ...otherProps }: ButtonProps) {
  let gradient1 = "#015B88";
  let gradient2 = "#009DEC";

  if (variant === "red") {
    gradient1 = "#880101";
    gradient2 = "#EC0000";
  }

  return (
    <button
      {...otherProps}
      className={`relative flex items-center justify-between bg-gradient-to-r from-[${gradient1}] to-[${gradient2}] rounded-sm shadow-lg hover:opacity-80 active:scale-95 transform transition-transform duration-100 pl-4 pr-1 space-x-24 overflow-hidden`}
    >
      <span className="font-[GothamProMedium] text-white font-bold text-[32px] py-[6px]">
        {children}
      </span>

      <div className="w-8 h-8 flex items-center justify-center rounded-full">
        <svg
          width="25"
          height="28"
          viewBox="0 0 25 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_3263_42)">
            <path
              d="M1.30529 3.01197C1.30529 1.85727 2.55529 1.13558 3.55529 1.71293L23.1988 13.0541C24.1988 13.6315 24.1988 15.0748 23.1988 15.6522L3.55528 26.9934C2.55528 27.5707 1.30529 26.849 1.30529 25.6943L1.30529 3.01197Z"
              stroke="white"
              shape-rendering="crispEdges"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_3263_42"
              x="0.805176"
              y="0.508972"
              width="24.1436"
              height="27.1884"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="0.5" dy="-0.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_3263_42"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_3263_42"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="absolute right-0 top-0 h-full">
        <svg
          width="122"
          height="60"
          viewBox="0 0 122 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full"
        >
          <path
            d="M144 74.3478V-2.60869H55.7085L0 74.3478H144Z"
            fill="#D9D9D9"
            fill-opacity="0.3"
          />
          <path
            d="M144 74.3478V35.8696V-2.60869H87.8514L32.1429 74.3478H144Z"
            fill="#D9D9D9"
            fill-opacity="0.3"
          />
        </svg>
      </div>
    </button>
  );
}

export default Button;
