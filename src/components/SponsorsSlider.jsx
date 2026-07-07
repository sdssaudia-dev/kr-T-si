import { useState } from "react";
import { useTranslation } from "../context/LanguageContext";
import "./SponsorsSlider.css";

const MOBILE_LOGOS = [
  "UCA",
  "AlRajhi",
  "Allianz",
  "Tawuniya",
  "Aljazira-Takaful",
  "Amana",
];

const DESKTOP_LOGOS = [
  "SaudiEnaya",
  "Alalamiya",
  "Walaa",
  "Salama",
  "Malath",
  "Sagr",
  "SAICO",
  "GulfUnion",
  "Wataniya",
];

function Carousel({ logos, visibleCount = 4, cellWidth = 105 }) {
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, logos.length - visibleCount);
  const offset = index * cellWidth;

  return (
    <div className="carousel-wrap">
      <button
        type="button"
        className={`carousel-arrow carousel-arrow-prev ${index === 0 ? "carousel-arrow-disabled" : ""}`}
        onClick={() => setIndex((i) => Math.max(0, i - 1))}
        disabled={index === 0}
        aria-label="Previous"
      />
      <div className="overflow-hidden flex-1 mx-6">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${offset}px)` }}
        >
          {logos.map((name) => (
            <div key={name} className="carousel-cell">
              <img
                src={`/sponsors/insurerlogos/svg/${name}.svg`}
                alt={name}
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        className={`carousel-arrow carousel-arrow-next ${index >= maxIndex ? "carousel-arrow-disabled" : ""}`}
        onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
        disabled={index >= maxIndex}
        aria-label="Next"
      />
    </div>
  );
}

const SponsorsSlider = () => {
  const { t, dir } = useTranslation();

  return (
    <section className="sponsors-slider w-full px-4 sm:mt-10 sm:mb-10">
      <div className="max-w-5xl mx-auto sm:flex sm:items-center sm:justify-center">
        <div
          className="box-shadow-container rounded-2xl relative z-10 w-full sm:w-[85%] bg-white"
          dir={dir}
        >
          <div className="grid grid-cols-12 gap-4 content-center items-center px-4 sm:ps-7">
            <div className="col-start-1 col-span-3 sm:col-span-3 place-self-center flex items-center gap-3">
              <div className="flex flex-col items-center sm:items-start">
                <span className="font-semibold text-[#296393] text-sm sm:text-xs">
                  {t("apply.licensedBy")}
                </span>
                <img
                  loading="lazy"
                  alt="Saudi Central Bank"
                  className="w-[165px] sm:w-full py-2 dark:hidden"
                  src="/sponsors/InsuranceCompanylogos/Group-6528.svg"
                />
                <img
                  loading="lazy"
                  alt="Saudi Central Bank"
                  className="w-[165px] sm:w-full py-2 hidden dark:block"
                  src="/sponsors/InsuranceCompanylogos/AIdark.svg"
                />
              </div>
              <span className="span-border hidden sm:block" />
            </div>

            <div className="img-23 col-span-2 sm:col-span-1 place-self-center flex md:hidden justify-center">
              <img
                loading="lazy"
                alt="23 Insurance"
                className="w-[100px] h-[100px] object-contain"
                src="/sponsors/InsuranceCompanylogos/23arbic.svg"
              />
            </div>

            <div className="col-span-7 sm:col-span-8">
              <div className="sm:hidden">
                <Carousel logos={MOBILE_LOGOS} visibleCount={3} cellWidth={105} />
              </div>
              <div className="hidden sm:block">
                <Carousel logos={DESKTOP_LOGOS} visibleCount={5} cellWidth={123} />
              </div>
            </div>

            <div className="col-span-1 hidden sm:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSlider;
