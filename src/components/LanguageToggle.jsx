import { useTranslation } from "../context/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage, t } = useTranslation();

  return (
    <button
      type="button"
      onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
      className="shrink-0 font-bold text-[#146394] px-3 pt-1    hover:text-white transition-colors"
      aria-label={t("common.switchLanguage")}
    >
      {language === "ar" ? t("common.english") : t("common.arabic")}
    </button>
  );
};

export default LanguageToggle;
