import { useTranslation } from "../context/LanguageContext";

const DISCOUNTS = [
  { img: "RoshRayhaan.jpg", nameKey: "apply.wareefRoshRayhaan", percent: "15" },
  { img: "none.svg", nameKey: "apply.wareefNoon", percent: "15" },
  { img: "perfectWight.png", nameKey: "apply.wareefPerfectWeight", percent: "50" },
  { img: "drive7.png", nameKey: "apply.wareefDrive7", percent: "20" },
  { img: "swater.jpg", nameKey: "apply.wareefSweater", percent: "20" },
  { img: "sivvi.svg", nameKey: "apply.wareefSivvi", percent: "10" },
  { img: "Physiotherabia.jpg", nameKey: "apply.wareefPhysiotherabia", percent: "20" },
  { img: "Group-6444.svg", nameKey: "apply.wareefNovimed", percent: "15" },
];

const WareefDiscounts = () => {
  const { t, dir } = useTranslation();

  return (
    <section className="w-full mt-36 sm:pt-10 bg-gray-100 py-12 px-4" dir={dir}>
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h1 className="mb-10 text-[40px] text-[#296393] font-bold sm:mb-4 sm:text-lg text-center">
          {t("apply.wareefTitle")}
        </h1>
        <h2 className="text-center text-[15px] text-[#296393] max-w-2xl">
          {t("apply.wareefSubtitle")}
        </h2>
        <div className="flex pt-12 flex-col w-full sm:items-center sm:justify-center">
          <div className="grid  grid-rows-2 grid-cols-2 sm:grid-rows-4 justify-center items-center gap-x-4 gap-y-5 max-w-4xl mx-auto">
            {DISCOUNTS.map(({ img, nameKey, percent }) => (
              <div
                key={nameKey}
                className="sm:h-20 py-4 rounded-md flex flex-row items-center gap-4 sm:w-48 px-4 bg-white shadow-sm"
              >
                <img
                  loading="lazy"
                  className="w-12 h-12 object-contain shrink-0"
                  src={`/wareef/${img}`}
                  alt={t(nameKey)}
                />
                <div className="flex flex-col text-start min-w-0">
                  <span className="font-bold text-xs leading-4 text-[#296393] sm:text-[10px]">
                    {t(nameKey)}
                  </span>
                  <span className="text-sm leading-4 text-[#296393] font-extrabold sm:text-xs">
                    {t("apply.discountOff", { percent })}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-9 flex flex-row-reverse w-full justify-center">
            <button
              type="button"
              className="bg-transparent w-56 h-12 text-[#296393] py-2 px-2 font-bold text-sm  sm:border-none sm:underline sm:underline-offset-1"
            >
              {t("apply.wareefMore")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WareefDiscounts;
