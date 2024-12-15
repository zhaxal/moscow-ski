import { NextPage } from "next";
import BackButton from "./components/BackButton";


const SkiPage: NextPage = () => {
  return (
    <div className="flex min-h-full relative bg-[#0082C2] px-11 py-5">
      <BackButton />
    </div>
  );
};

export default SkiPage;
