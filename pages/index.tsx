import Button from "./components/Button";
import { useRouter } from "next/router";

function LogoBar() {
  return (
    <div className="flex flex-row justify-center md:justify-start items-center space-x-2 md:mt-0 mt-4">
      <img
        src="/year2025/min_sport.svg"
        alt="Минспорт России"
        className="max-w-[42px] object-contain"
      />
      <img
        src="/year2025/dep_sport.svg"
        alt="Департамент спорта"
        className="max-w-[40px] md:max-w-[60px] object-contain"
      />
      <img
        src="/year2025/ski_rus.svg"
        alt="Лыжня России"
        className="max-w-[50px] md:max-w-[110px] object-contain"
      />
      <img
        src="/year2025/grom.png"
        alt="Гром"
        className="max-w-[50px] md:max-w-[120px] object-contain"
      />
      <img
        src="/year2025/fed.png"
        alt="Фед"
        className="max-w-[65px] md:max-w-[80px] object-contain"
      />
      <img
        src="/year2025/rus_loppet.svg"
        alt="Russia Loppet"
        className="max-w-[50px] md:max-w-[110px] object-contain"
      />
    </div>
  );
}

function ParkOne() {
  return (
    <>
      <div className="font-[Mossport] text-[36px] leading-[36px] text-white uppercase">
        НЕДЕЛЯ ЛЫЖНИ РОССИИ
      </div>

      <div className="font-[GothamProMedium] text-[20px] leading-[30px] text-white pt-6">
        <p>Дорогие друзья!</p>
        <p>В&nbsp;этом сезоне нам всем пришлось столкнуться с&nbsp;непростыми условиями: отсутствие снега и&nbsp;аномально теплая погода поставили перед нами новые вызовы. Однако, несмотря на&nbsp;все эти трудности, вы&nbsp;проявили истинный спортивный дух.</p>
        <p>Ваше упорство и&nbsp;решимость&nbsp;&mdash; это те&nbsp;качества, которые делают &laquo;Лыжню России&raquo; особенным мероприятием в&nbsp;спортивном календаре столицы. Вы&nbsp;показали, что любовь к&nbsp;лыжным гонкам и&nbsp;желание участвовать в&nbsp;событии сильнее любых погодных условий.</p>
        <p>Спасибо вам за&nbsp;то, что вы&nbsp;сделали это событие возможным, за&nbsp;вашу поддержку.</p>
        <p>До&nbsp;встречи в&nbsp;новом сезоне!</p>
      </div>
    </>
  );
}

function ParkTwo() {
  return (
    <>
      <div className="font-[Mossport] text-[36px] leading-[36px] text-white uppercase">
        Московский лыжный марафон
      </div>
      <div className="font-[GothamProMedium] text-[20px] leading-[30px] text-white pt-6">
        <p>9 марта — 3-й Московский лыжный марафон (ОТМЕНЕН)</p>
      </div>
    </>
  );
}

const linkSki = "/ski";
const linkMarathon = "/marathon";

function RegularView() {
  const router = useRouter();

  return (
    <div className="hidden md:block w-full">
      <div className="absolute left-0 w-1/2 bg-[#0082C2] min-h-full -z-10"></div>
      <div className="absolute right-0 w-1/2 bg-[#E6342D] min-h-full -z-10"></div>
      <div className="flex flex-col items-center w-full min-h-full p-8">
        <LogoBar />

        <img
          src="/year2025/bg.svg"
          alt="Лыжня России 2025"
          className="max-w-[880px] object-contain pl-[5px] mt-7"
        />

        <div className="flex flex-col items-center space-y-4 mt-9">
          <div className="flex flex-row py-14">
            <div className="flex flex-col items-end w-1/2 h-full">
              <div className="flex flex-col max-w-[400px] pr-10">
                <ParkOne />
                <div className="mt-16" />
                <Button
                  onClick={() => {
                    router.push(linkSki);
                  }}
                  variant="blue"
                >
                  ПОСЕТИТЬ
                </Button>
              </div>
            </div>
            <div className="w-1/2 pl-10">
              <div className="flex flex-col max-w-[400px] h-full">
                <ParkTwo />
                <div className="flex-grow" />
                <Button
                  onClick={() => {
                    router.push(linkMarathon);
                  }}
                  variant="red"
                >
                  ПОСЕТИТЬ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileView() {
  const router = useRouter();
  return (
    <div className="block md:hidden w-full flex-col">
      <div className="flex flex-col bg-[#0082C2]">
        <LogoBar />

        <img
          src="/year2025/bg_1_375.svg"
          alt="Лыжня России 2025 1"
          className="object-contain mt-4"
        />

        <div className="flex flex-col items-center mt-4">
          <div className="flex flex-col items-center space-y-4 max-w-[355px]">
            <ParkOne />
            <Button
              onClick={() => {
                router.push(linkSki);
              }}
              variant="blue"
            >
              ПОСЕТИТЬ
            </Button>
            <div className="mb-4" />
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-[#E6342D]">
        <div className="flex flex-col items-center mt-4">
          <div className="flex flex-col items-center space-y-4 max-w-[355px]">
            <ParkTwo />
            <Button
              onClick={() => {
                router.push(linkMarathon);
              }}
              variant="red"
            >
              ПОСЕТИТЬ
            </Button>
          </div>
        </div>

        <img
          src="/year2025/bg_2_375.svg"
          alt="Лыжня России 2025 2"
          className="object-contain mt-4"
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-full relative">
      <RegularView />
      <MobileView />
    </div>
  );
}
