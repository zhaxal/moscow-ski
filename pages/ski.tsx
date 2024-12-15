import { NextPage } from "next";
import BackButton from "./components/BackButton";

const SkiPage: NextPage = () => {
  return (
    <div className="flex flex-col min-h-full relative bg-[#0082C2] px-11 py-5">
      <BackButton />
      <div className="flex flex-col items-end px-8">
        <img src="/year2025/ski/logo.svg" alt="logo" className="h-[150px]" />
      </div>
      
    </div>
  );
};

export default SkiPage;
