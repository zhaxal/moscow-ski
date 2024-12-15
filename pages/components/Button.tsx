import { HtmlHTMLAttributes } from "react";

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  variant: "blue" | "red";
  size?: "small" | "large";
  children?: React.ReactNode;
}

function Button({
  variant,
  children,
  size = "small",
  ...otherProps
}: ButtonProps) {
  const gradientClasses = {
    blue: "from-[#015B88] to-[#009DEC]",
    red: "from-[#880101] to-[#EC0000]",
  };
  const sizeClasses = {
    small: "text-[20px] sm:text-[24px] leading-[1]", // Increased mobile text size
    large: "text-[28px] sm:text-[32px] leading-[1]", // Increased mobile text size
  };

  return (
    <button
      {...otherProps}
      className={`relative flex items-center justify-between bg-gradient-to-r ${
        gradientClasses[variant]
      } rounded-sm shadow-lg hover:opacity-80 active:scale-95 transform transition-transform duration-100 pl-4 sm:pl-4 pr-3 sm:pr-3 space-x-6 sm:space-x-24 overflow-hidden min-h-[48px] sm:min-h-[56px] ${
        otherProps.className || ""
      }`}
    >
      <span
        className={`font-[GothamProMedium] text-white font-bold ${sizeClasses[size]} py-3 sm:py-4 max-w-[200px] sm:max-w-none text-left`}
      >
        {children}
      </span>

      <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full">
        <svg
          width="22"
          height="24"
          viewBox="0 0 25 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="sm:w-[25px] sm:h-[28px]"
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

      <div
        className="absolute top-0 right-[-5%] w-1/4 h-full bg-white opacity-20 
              transform skew-x-[-30deg]"
      ></div>

      <div
        className="absolute top-0 right-[-10%] w-1/4 h-full bg-white opacity-30 
              transform skew-x-[-30deg]"
      ></div>
    </button>
  );
}

export default Button;
