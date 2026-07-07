import { useTranslation } from "../context/LanguageContext";
import { FaPhone, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

const FOOTER_COLUMNS = [
  {
    titleKey: "apply.footerAbout",
    links: [
      "apply.footerWareef",
      "apply.footerPrivacy",
      "apply.footerTerms",
      "apply.footerJobs",
    ],
  },
  {
    titleKey: "apply.footerProducts",
    links: [
      "apply.footerMotor",
      "apply.footerMedical",
      "apply.footerTravel",
      "apply.footerMedicalErrors",
      "apply.footerDomestic",
    ],
  },
  {
    titleKey: "apply.footerSupport",
    links: [
      "apply.footerBlog",
      "apply.footerCancel",
      "apply.footerTicket",
      "apply.footerPrint",
    ],
  },
  {
    titleKey: "apply.footerLinks",
    links: [
      "apply.footerAuthority",
      "apply.footerComplaint",
      "apply.footerRegulations",
      "apply.footerVat",
    ],
  },
];

const SOCIAL = [
  { Icon: FaFacebookF, href: "https://facebook.com/Bcareksa-115093535762889" },
  { Icon: FaInstagram, href: "http://instagram.com/bcareksa" },
  { Icon: FaLinkedinIn, href: "https://www.linkedin.com/company/bcareksa" },
  { Icon: null, href: "https://twitter.com/bcareksa", label: "𝕏" },
  { Icon: FaYoutube, href: "https://www.youtube.com/channel/UCAuOCfNoaW8xTCFAMI38Anw" },
];

const ApplyFooter = () => {
  const { t, dir } = useTranslation();

  return (
    <footer className="w-full bg-[#156595] text-white mt-8" dir={dir}>
      <div className="max-w-6xl mx-auto px-4 py-8 sm:p-4">
        <div className="flex flex-wrap flex-col">
          <div className="w-5/12 sm:w-full flex flex-col">
            <img
              loading="lazy"
              src="/footer/logo-bcare-white.svg"
              alt="BCare"
              className="w-20"
            />
            <div className="flex mt-2 items-center text-white">
              <FaPhone className="-rotate-90 text-2xl sm:text-xl" />
              <span className="font-bold text-xl sm:text-base mx-2">8001180044</span>
            </div>
            <img
              loading="lazy"
              src="/footer/PaymentMethods1.svg"
              alt={t("apply.footerPaymentMethods")}
              className="mt-3 sm:hidden max-w-xs"
            />
          </div>

          <div className="w-7/12 sm:w-full flex-col sm:mt-3 flex justify-between text-sm gap-4">
            <div className="mb-2 flex flex-row gap-2">
              <a href="#" className="cursor-pointer">
                <img className="my-1 w-32" src="/footer/FooterImage/google-store.svg" alt="Google Play" />
              </a>
              <a href="#" className="cursor-pointer">
                <img className="my-1 w-32" src="/footer/FooterImage/apple-store.svg" alt="App Store" />
              </a>
              <a href="#" className="cursor-pointer">
                <img className="my-1 w-32" src="/footer/FooterImage/huawei-store.svg" alt="Huawei AppGallery" />
              </a>
            </div>

            {FOOTER_COLUMNS.map(({ titleKey, links }) => (
              <div key={titleKey} className="flex flex-col sm:hidden">
                <h6 className="mb-2 font-semibold">{t(titleKey)}</h6>
                {links.map((linkKey) => (
                  <a key={linkKey} href="#" className="text-xs cursor-pointer hover:text-yellow-400 mt-1">
                    {t(linkKey)}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-between sm:justify-center sm:flex-col mt-5 sm:mt-0 pt-3 border-t border-white/30 items-center">
          <p className="text-xs text-white sm:order-2 sm:pt-8">{t("apply.footerCopyright")}</p>
          <div className="flex justify-around gap-2 sm:order-1 mt-4">
            {SOCIAL.map(({ Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/40 sm:bg-white sm:text-[#296393] h-8 w-8 flex items-center justify-center text-sm"
              >
                {Icon ? <Icon /> : label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ApplyFooter;
