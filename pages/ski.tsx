import BackButton from "./components/BackButton";
import Button from "./components/Button";
import Title from "./components/Title";

const link = "https://reg.place/events/lyzhnya-rossii-2025";

interface ProgramItemProps {
  date: string;
  title: string;
  description: string;
  linkTitle: string;
  link: string;
}

function ProgramItem({
  date,
  title,
  description,
  link,
  linkTitle,
}: ProgramItemProps) {
  return (
    <div className="flex flex-col items-start sm:items-start py-4">
      <p className="font-[GothamProMedium] text-[24px] leading-[22px] text-white mb-8 uppercase w-full text-center sm:text-left">
        {date}
      </p>

      <p className="font-[GothamProMedium] text-[20px] leading-[20px] text-white mb-8 uppercase w-full text-center sm:text-left">
        {title}
      </p>

      <p className="font-[GothamProLight] text-[20px] leading-[20px] text-white mb-4 w-full text-center sm:text-left">
        {description}
      </p>

      <div className="w-full flex justify-center sm:justify-start">
        <Button
          onClick={() => {
            if (link !== "") {
              window.open(link, "_blank");
            }
          }}
          variant="blue"
          size="small"
          className="text-[24px] leading-[22px]"
        >
          {linkTitle}
        </Button>
      </div>
    </div>
  );
}

function SkiPage() {
  return (
    <div className="flex flex-col min-h-full relative bg-[#0082C2] px-4 sm:px-11 py-5">
      <BackButton />
      <div className="flex flex-col items-center sm:items-end px-4 sm:px-16">
        <img
          src="/year2025/ski/logo.svg"
          alt="logo"
          className="h-[100px] sm:h-[150px]"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center mb-10 sm:mb-20">
        <img
          src="/year2025/ski/man.svg"
          alt="man"
          className="h-[300px] sm:h-[450px] sm:-mr-12 relative z-10"
        />

        <div className="flex flex-col mt-4 sm:mt-0">
          <p className="font-[Mossport] text-[24px] sm:text-[36px] uppercase text-white leading-[28px] sm:leading-[36px] text-center pb-4">
          26 ФЕВРАЛЯ – 04 МАРТА 2025
          </p>

          <div
            style={{
              background:
                "linear-gradient(133deg, rgba(254,254,254,1) 69%, rgba(127,195,231,1) 82%, rgba(0,136,207,1) 100%)",
              clipPath: "polygon(3.5% 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            <p className="font-[GothamProRegular] text-[16px] sm:text-[24px] leading-[20px] sm:leading-[22px] text-[#005A87] py-8 sm:py-14 px-6 sm:pl-20 sm:pr-16 flex flex-col gap-2">
              <span>
                «Лыжня России» — ежегодное спортивное мероприятие для любителей
                беговых лыж. Это самая крупная по числу участников лыжная гонка
                не только в России, но и в Европе. Каждый год на старт выходит
                более 500 тысяч человек из более чем 70 субъектов страны.
              </span>
              <span>
                «Лыжня России» проводится с 1982 года. К старту в гонке
                допускаются как любители, так и профессиональные спортсмены.
                Участие в мероприятии бесплатное.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col mb-10">
        <img src="/year2025/ski/bg.svg" alt="background" />
      </div>

      <div className="flex flex-col mb-2">
        <Title title="ОБЩАЯ ИНФОРМАЦИЯ" variant="blue" />
      </div>

      <div className="flex flex-col items-center mb-8 py-4">
        <p className="font-[GothamProRegular] text-[20px] leading-[20px] text-white max-w-[600px] flex flex-col gap-2">
          <span>Лыжня России — главное лыжное событие страны!</span>
          <span>
            Хотите встретить на старте олимпийских чемпионов, членов сборной
            команды России по лыжным гонкам и биатлону? Тогда Вы на правильном
            пути!
          </span>
          <span>
            Уже более 40 лет Лыжня России объединяет всех любителей лыжных
            гонок!
          </span>
          <span>До встречи на старте!</span>
        </p>
      </div>

      {/* <div className="flex flex-col mb-2">
        <Title title="ВНИМАНИЕ!" variant="blue" />
      </div>
      <div className="flex flex-col items-center mb-8 py-4">
        <p
          className="font-[GothamProRegular] text-[20px] leading-[20px] text-white max-w-[900px] flex flex-col gap-4"
          style={{
            backgroundColor: "purple",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <span>Дорогие друзья!</span>
          <span>
            В связи с отсутствием снега лыжная гонка Лыжня России меняет
            локацию, дату проведения и формат гонки.
          </span>
          <span>
            <strong>Место</strong>
            <br />
            Вместо СК «Альфа-Битца» Лыжня России будет проходить в ОК «Лужники»,
            лыжно-биатлонная трасса.
          </span>
          <span>
            <strong>Формат гонки — открытый старт</strong>
            <br />
            Участники будут стартовать по мере прихода в стартовый городок.
          </span>
          <span>
            <strong>Время</strong>
            <br />
            Старт будет проводиться ежедневно с 26 февраля 2025 г. по 04 марта
            2025 г. с 17:00 до 21:00
          </span>
          <span>
            <strong>Дистанция</strong>
            <br />
            Лыжня России — 5 км (5 кругов по стадиону по 1 км)
            <br />
            Детский день — 1 км (1 круг) для всех. Все вопросы по ГТО можно
            задать на месте в шатре Регистрации во время выдачи стартовых
            номеров.
          </span>
          <span>
            <strong>Стартовый комплект</strong>
            <br />
            Выдача стартового комплекта будет проводиться ежедневно с 26 февраля
            2025 г. по 04 марта 2025 г. С 17:00 до 21:00.
          </span>
          <span>
            В связи со сменой формата гонки, награждения не будет. На трассе
            будут работать регистрация, раздевалки, камера хранения и туалеты.
            Все участники получат стартовый набор, результат и медаль финишера.
          </span>
          <span>Ночная лыжная гонка (Спринт) и Ретро-гонка отменены!</span>
        </p>
      </div> */}

      {/* <div className="flex flex-col mb-5">
        <Title title="ПРОГРАММА" variant="blue" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <ProgramItem
          date="5 марта, Лужники"
          title="ретро гонка"
          description="Оформление ретро-гонки будет выдержано в советской праздничной стилистике, что освежит приятные воспоминания. В программе гонки в разных категориях: семейные эстафеты, детские гонки, одиночные заезды, выставка лыжной атрибутики, тематические фотозоны, концертная программа и многое другое."
          linkTitle="ОТМЕНЕНА"
          link={""}
        />
        <ProgramItem
          date="6 марта, Лужники"
          title="ночная гонка"
          description="Ночная гонка пройдет в формате спринта. Участникам предстоит преодолеть круг на 800 метров. Победители будут выявлены по сумме результатов трех стартов. Принять участие может любой желающий от 18 лет."
          linkTitle="ОТМЕНЕНА"
          link={""}
        />
        <ProgramItem
          date="26.02 — 04.03, ЛУЖНИКИ"
          title="детская гонка"
          description="Детская гонка – это соревнования для московских школьников, а также команд директоров и учителей образовательных организаций"
          linkTitle="РЕГИСТРАЦИЯ ЗАВЕРШЕНА"
          link={"https://reg.place/events/lyzhnya-rossii-2025-deti"}
        />
        <ProgramItem
          date="26.02 — 04.03, ЛУЖНИКИ"
          title="лыжня россии"
          description="Самая массовая классическая лыжная гонка на 10 км для всех желающих старше 18 лет"
          linkTitle="РЕГИСТРАЦИЯ ЗАВЕРШЕНА"
          link={link}
        />
      </div> */}

      {/* <div className="flex flex-col mb-5">
        <Title title="СХЕМА ТРАССЫ" variant="blue" />
      </div>

      <div className="flex flex-col mb-10 px-8 items-center">
        <img
          className="w-full sm:w-1/2"
          src="/year2025/scheme_ski.png"
          alt="map"
        />
      </div> */}

      <div className="flex flex-col mb-5">
        <Title title="ЛЫЖНЯ РОССИИ 2025" variant="blue" />
      </div>
      <div className="flex flex-col mb-16 px-4 sm:px-8 items-center">
        <iframe
          src="https://rutube.ru/play/embed/1473d9f3e65dbc200486ec9918694900/"
          className="w-full sm:w-[800px] h-[300px] sm:h-[450px] rounded-lg shadow-lg"
          frameBorder="0"
          allowFullScreen
        ></iframe>

        <div className="mt-8 w-full max-w-[1200px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-6">
            {[
              "https://i.ibb.co/KjZddBqw/ART-8627.jpg",
              "https://i.ibb.co/7NCTcBvh/ART-8615.jpg",
              "https://i.ibb.co/0VXLs45g/ART-8617.jpg",
              "https://i.ibb.co/FdWLV7y/ART-8477.jpg",
              "https://i.ibb.co/ZzQSj4wh/ART-8466.jpg",
              "https://i.ibb.co/67FsMvhh/ART-8450.jpg",
            ].map((src, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={src}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <Button
          className="mt-8"
          onClick={() => {
            window.open("https://disk.yandex.ru/d/i53N7HT2dX5rgg", "_blank");
          }}
          variant="blue"
        >
          ВСЕ ФОТО
        </Button>
      </div>

      <div className="flex flex-col mb-5">
        <Title title="МЕСТО ПРОВЕДЕНИЯ" variant="blue" />
      </div>

      <div className="flex flex-col lg:flex-row mb-10">
        <iframe
          src="https://yandex.com/map-widget/v1/?um=constructor%3A2f8eb659b770599f105568456c8526d57d2fe9144493b63c8335740867dfa6c1&amp;source=constructor"
          className="w-full h-[400px] lg:h-[600px] lg:w-2/3 mb-6 lg:mb-0 order-2 lg:order-1"
          frameBorder="0"
        ></iframe>

        <div className="flex flex-col text-white text-[16px] sm:text-[20px] leading-[18px] sm:leading-[20px] gap-4 lg:w-1/3 lg:ml-8 order-1 lg:order-2 mb-6 lg:mb-0">
          <span className="font-[GothamProLight]">
            ОК «Лужники» г.Москва ул. Лужники, дом 24, строение 11
          </span>
          <span className="font-[GothamProLight] flex flex-col">
            <span className="underline">Координаты</span>
            <span>55.716278, 37.560166</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SkiPage;
