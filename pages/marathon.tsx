import { NextPage } from "next";
import BackButton from "./components/BackButton";
import Title from "./components/Title";
import Button from "./components/Button";

const link = "https://russialoppet.ru/events/moscow-2025.html";

const MarathonPage: NextPage = () => {
  return (
    <div className="flex flex-col min-h-full relative bg-[#E6342D] px-2 sm:px-11 py-3 sm:py-5">
      <BackButton />

      <div className="flex flex-col items-center sm:items-start px-2 sm:px-16">
        <img
          src="/images/desktop/logo/mosssport-logo.svg"
          alt="logo"
          className="h-[35px] sm:h-[45px] md:h-[90px]"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center mb-6 sm:mb-10 md:mb-20">
        <img
          src="/year2025/marathon/man.svg"
          alt="man"
          className="h-[200px] sm:h-[300px] md:h-[450px] sm:-ml-12 relative z-10 mt-4 sm:mt-0 order-first sm:order-last"
        />

        <div className="flex flex-col mt-3 sm:mt-0 order-last sm:order-first">
          <p className="font-[Mossport] text-[20px] sm:text-[24px] md:text-[36px] uppercase text-white leading-[24px] sm:leading-[28px] md:leading-[36px] text-center pb-3 sm:pb-4">
            09 ФЕВРАЛЯ 2025
          </p>

          <div
            style={{
              background:
                "linear-gradient(227deg, rgba(254,254,254,1) 69%, rgba(231,127,127,1) 82%, rgba(207,0,0,1) 100%)",
              clipPath: "polygon(0 0, 97% 0, 100% 100%, 0% 100%)",
            }}
          >
            <p className="font-[GothamProRegular] text-[14px] sm:text-[16px] md:text-[40px] leading-[18px] sm:leading-[20px] md:leading-[40px] text-[#870000] py-4 sm:py-8 md:py-20 px-4 sm:px-6 md:pl-20 md:pr-16 uppercase">
              Третий московский лыжный марафон
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col mb-6 sm:mb-10">
        <img src="/year2025/marathon/bg.svg" alt="background" className="w-full" />
      </div>

      <div className="flex flex-col mb-2">
        <Title title="ОБЩАЯ ИНФОРМАЦИЯ" variant="red" />
      </div>

      <div className="flex flex-col items-center mb-6 sm:mb-8 py-3 sm:py-4 px-3 sm:px-0">
        <p className="font-[GothamProRegular] text-[16px] sm:text-[20px] leading-[20px] text-white max-w-[600px] flex flex-col gap-3 sm:gap-4">
          <span>
            «Московский Лыжный марафон» — это Марафон для всех желающих от 17
            лет. В программе основная дистанция на 51 км. Возможны
            дополнительные дистанции на 17 км и 25 км
          </span>
          <span>
            9 февраля 2025 года гонка примет большое количество фанатов лыжного
            спорта России и станет ярким событием Московского региона.
          </span>
          <span>
            Московский Лыжный марафон входит в кубковые зачеты Russialoppet:
            Суперкубок лыжных марафонов, Большой и Малый Кубок Команд и лотерею
            «Лаки Лузер», также результат будет учтен в рейтинге финишёров,
            паспорте и мастере марафонов русской серии длинных гонок.
          </span>
        </p>
      </div>

      <div className="flex flex-col items-center mb-6 sm:mb-8">
        <Button
          onClick={() => {
            window.open(link, "_blank");
          }}
          variant="red"
          size="small"
          
        >
          РЕГИСТРАЦИЯ
        </Button>
      </div>

      <div className="flex flex-col mb-5">
        <Title title="СХЕМА ТРАССЫ" variant="red" />
      </div>

      <div className="flex flex-col mb-10 px-8 items-center">
        <img className="w-full sm:w-1/2" src="/year2025/scheme_marathon.png" alt="map" />
      </div>      

      <div className="flex flex-col mb-4 sm:mb-5">
        <Title title="МЕСТО ПРОВЕДЕНИЯ" variant="red" />
      </div>

      <div className="flex flex-col lg:flex-row mb-6 sm:mb-10">
        <iframe
          src="https://yandex.com/map-widget/v1/?um=constructor%3A2f8eb659b770599f105568456c8526d57d2fe9144493b63c8335740867dfa6c1&amp;source=constructor"
          className="w-full h-[300px] sm:h-[400px] lg:h-[600px] lg:w-2/3 mb-4 sm:mb-6 lg:mb-0 order-2 lg:order-1"
          frameBorder="0"
        ></iframe>

        <div className="flex flex-col text-white text-[14px] sm:text-[16px] md:text-[20px] leading-[16px] sm:leading-[18px] md:leading-[20px] gap-3 sm:gap-4 lg:w-1/3 lg:ml-8 order-1 lg:order-2 mb-4 sm:mb-6 lg:mb-0 px-2 sm:px-0">
          <span className="font-[GothamProLight]">
            Москва, ЮЗАО, 36й км МКАД, зона отдыха «Альфа-Битца»
          </span>
          <span className="font-[GothamProMedium]">Как добраться?</span>
          <span className="font-[GothamProLight] flex flex-col">
            <span className="underline">На машине</span>
            <span>Адрес парковки:</span>
          </span>
          <span className="font-[GothamProLight] flex flex-col">
            <span>проезд Карамзина, 17А Координаты:</span>
            <span>55.588664, 37.545536</span>
          </span>
          <span className="font-[GothamProLight] flex flex-col">
            <span className="underline">Пешком</span>
            <span>
              От ст.м. Ясенево, первый вагон из центра, выход номер 3, из
              стеклянных дверей налево, и сразу налево. Автобус 165 до ост.
              «Зона отдыха Битца» (10 минут). Далее пешком 200 м до старта.
            </span>
          </span>
          <span className="font-[GothamProLight]">
            От ст. м. Бульвар Дмитрия Донского выход N6, авт 967 до ост. «Зона
            отдыха Битца» (10 минут). Далее пешком 200 м до старта.
          </span>
          <span className="font-[GothamProLight] flex flex-col">
            <span className="underline">Координаты</span>
            <span>Долгота, широта: 55.585360, 37.545857</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MarathonPage;
