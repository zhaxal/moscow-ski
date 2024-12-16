interface TitleProps {
  title: string;
  variant: "blue" | "red";
}

function Title({ title, variant }: TitleProps) {
  const mainStyle = "relative overflow-hidden px-4 md:px-12 py-2";
  const redGradient = "bg-gradient-to-r from-[#880101] to-[#EC0000]";
  const blueGradient = "bg-gradient-to-r from-[#015B88] to-[#009DEC]";

  return (
    <div
      className={
        variant === "red"
          ? mainStyle + " " + redGradient
          : mainStyle + " " + blueGradient
      }
    >
      <span className="font-[GothamProMedium] text-white font-bold text-[18px] md:text-[24px]">
        {title}
      </span>
      <div className="absolute right-0 top-0 h-full">
        <svg
          width="80"
          height="60"
          viewBox="0 0 122 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full md:w-[122px] w-[80px]"
        >
          <path
            d="M144 74.3478V-2.60869H55.7085L0 74.3478H144Z"
            fill="#D9D9D9"
            fillOpacity="0.3"
          />
          <path
            d="M144 74.3478V35.8696V-2.60869H87.8514L32.1429 74.3478H144Z"
            fill="#D9D9D9"
            fillOpacity="0.3"
          />
        </svg>
      </div>
    </div>
  );
}

export default Title;
