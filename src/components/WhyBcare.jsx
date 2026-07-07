import { useTranslation } from "../context/LanguageContext";
import "./WhyBcare.css";

const WHY_ITEMS = [
  { icon: "insureOneMin", titleKey: "apply.whyInsureMin", descKey: "apply.whyInsureMinDesc" },
  { icon: "sprateInsure", titleKey: "apply.whyCustomize", descKey: "apply.whyCustomizeDesc" },
  { icon: "priceLess", titleKey: "apply.whyPrices", descKey: "apply.whyPricesDesc" },
  { icon: "sechleInsure", titleKey: "apply.whySchedule", descKey: "apply.whyScheduleDesc" },
  { icon: "wind", titleKey: "apply.whyFast", descKey: "apply.whyFastDesc" },
  { icon: "discounts", titleKey: "apply.whyDiscounts", descKey: "apply.whyDiscountsDesc" },
  { icon: "benfit", titleKey: "apply.whyBenefits", descKey: "apply.whyBenefitsDesc" },
  { icon: "oneWay", titleKey: "apply.whyOnePlace", descKey: "apply.whyOnePlaceDesc" },
];

const WhyBcare = () => {
  const { t, dir } = useTranslation();

  return (
    <section className="why-bcare max-w-6xl mx-auto sm:mt-32" dir={dir}>
      <h1 className="relative  text-center text-[40px] font-semibold text-[#296393] sm:mb-8 sm:text-lg">
        {t("apply.whyBcareTitle")}
      </h1>
      <div className="flex items-center justify-center w-full  sm:pt-2 my-10">
        <div className="why-bcare-grid">
          {WHY_ITEMS.map(({ icon, titleKey, descKey }) => (
            <div key={icon} className="why-bcare-card">
              <img
                loading="lazy"
                className="h-8 w-9 sm:w-6 sm:h-6"
                src={`/why-bcare/${icon}.svg`}
                alt={t(titleKey)}
              />
              <div className="flex flex-col gap-y-7 md:gap-y-0">
                <h3>{t(titleKey)}</h3>
                <p>{t(descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBcare;
