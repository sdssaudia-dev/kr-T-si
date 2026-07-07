import { useTranslation } from "../context/LanguageContext";

const CHOOSE_ITEMS = [
  { icon: "saudi.svg", titleKey: "apply.chooseLocal" },
  { icon: "catalog.svg", titleKey: "apply.chooseOffers" },
  { icon: "payments_FILL0_wght400_GRAD0_opsz48.svg", titleKey: "apply.choosePrice" },
  { icon: "Group-6518.svg", titleKey: "apply.chooseFast" },
  { icon: "tachometer-alt-fastest.svg", titleKey: "apply.chooseInstall" },
  { icon: "flame.svg", titleKey: "apply.chooseSupport" },
];

const WhyChooseBcare = () => {
  const { t, dir } = useTranslation();

  return (
    <section className="w-full sm:pt-8 sm:pb-12 py-10 px-4" dir={dir}>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-[40px] font-bold text-[#296393] mb-10 sm:text-lg sm:mb-6">
          {t("apply.whyChooseTitle")}
        </h1>
        <div className="grid grid-cols-2 gap-8 sm:gap-2">
          {CHOOSE_ITEMS.map(({ icon, titleKey }) => (
            <div key={titleKey} className="">
              <div className="flex justify-center items-center flex-col mb-12 sm:mb-8">
                <img
                  loading="lazy"
                  className="w-10 h-10 sm:w-9 object-contain"
                  src={`/why-choose/${icon}`}
                  alt={t(titleKey)}
                />
                <h3 className="text-lg text-center font-extrabold text-[#4a90b8] sm:text-sm mt-4">
                  {t(titleKey)}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseBcare;
