import { NextPage } from "next";
import BackButton from "./components/BackButton";

const MarathonPage: NextPage = () => {
  return (
    <div className="flex min-h-full relative bg-[#E6342D] px-11 py-5">
      <BackButton />
    </div>
  );
};

export default MarathonPage;
