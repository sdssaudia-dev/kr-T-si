import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "../context/LanguageContext";
import { thirdPartyCompanies } from "../constants/thirdPartyCompanies";

const Activate = () => {
  const { t, dir } = useTranslation();
  const query = new URLSearchParams(window.location.search);
  const data = query.get("data");
  const [page, setPage] = useState("ضد الغير");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const companies = thirdPartyCompanies;

  const handleVisa = (idx) => {
    setLoading(true);
    const company = companies[idx];
    const finalData = { ...JSON.parse(data), companyData: company };
    return navigate(`/confirm?data=${JSON.stringify(finalData)}`);
  };

  return (
    <>
      {loading ? (
        <div className="flex top-0 z-50 w-full justify-center items-center h-screen fixed bg-white bg-opacity-60">
          <div className="bg-white rounded-md p-3 w-fit h-fit flex items-center justify-center gap-x-3">
            <span className="text-lg">{t("common.processing")}</span>
            <img src="/logo.svg" className="w-14 h-14" />
            <TailSpin
              height="30"
              width="30"
              color="gray"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        </div>
      ) : (
        ""
      )}
      <div dir={dir} className="bg-white min-h-screen flex flex-col font-bold">
        <div className="w-full   mx-auto px-4">
          <div className="flex justify-center bg-gray-100 rounded-full mt-3 py-2 px-2 w-2/3 mx-auto">
            <a
              onClick={() => navigate(`/activate_shamel` + "?data=" + data)}
              className={`flex-1 text-center text-[#146394] py-2 font-semibold ${
                page === "شامل" ? "!bg-[#146394] !text-white rounded-full" : ""
              }`}
            >
              {t("activate.tabComprehensive")}
            </a>
            <a
              onClick={() => navigate("/activate" + "?data=" + data)}
              className={`flex-1 text-center text-[#146394] py-2 font-semibold ${
                page === "ضد الغير"
                  ? "bg-[#146394] !text-white rounded-full"
                  : ""
              }`}
            >
              {t("activate.tabThirdParty")}
            </a>
          </div>
          <div className="bg-[#146394] flex flex-col gap-y-3 rounded-md text-center py-4 px-2 text-white   mt-6 mb-4">
            <span className="text-xl font-bold">{t("activate.heroTitle")}</span>
            <span>{t("activate.cardDiscount")}</span>
            <span className="text-sm">{t("activate.heroSubtitle")}</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-4 my-6  ">
            {companies.map((company, index) => {
              return (
                <div
                  key={index}
                  className="shadow rounded-md p-4 border-[#146394] border-l-4"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h6 className="font-bold text-gray-800 mb-1">
                        {t(company.nameKey)}
                      </h6>
                      <p className="text-sm text-[#146394] ">
                        {" "}
                        {t("activate.planType")}{" "}
                      </p>
                    </div>
                    <img
                      src={company.logo}
                      alt={t(company.nameKey)}
                      className="h-10"
                    />
                  </div>

                  <hr className="my-3" />
                  <h6 className="text-sm font-bold text-gray-800 mb-3">
                    {t("activate.basicBenefits")}
                  </h6>

                  <div className="text-sm space-y-2 flex flex-col gap-y-2">
                    <div className="flex justify-between">
                      <div className="flex  items-start">
                        <input
                          type="checkbox"
                          checked
                          disabled
                          className=" mt-2 w-fit"
                        />
                        <span className="flex-1 pr-2 flex flex-wrap">
                          {t("activate.civilLiability")} <br />
                          <strong>
                            10,000,000{" "}
                            <svg
                              viewBox="0 0 1300 1200"
                              className="w-4 h-4 inline fill-yellow-500"
                            >
                              <path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path>
                            </svg>
                          </strong>
                        </span>
                      </div>
                      <span className="text-[#146394] font-bold">{t("common.included")}</span>
                    </div>

                    {company.options.map((opt, i) => (
                      <div key={i} className="flex justify-between">
                        <label className="flex items-start gap-2">
                          <input
                            type="checkbox"
                            className="additional-option"
                            defaultChecked={opt.checked}
                            onChange={(e) => (opt.checked = e.target.checked)}
                          />
                          {t(opt.labelKey)}
                        </label>
                        <span className="text-[#146394] font-bold">
                          {opt.price > 0 ? `${opt.price}` : t("common.free")}
                          {opt.price > 0 ? (
                            <svg
                              viewBox="0 0 1300 1200"
                              className="w-4 h-4 inline fill-yellow-500"
                            >
                              <path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path>
                            </svg>
                          ) : (
                            ""
                          )}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center text-[#146394] text-xl font-bold mt-3 pt-5 border-t">
                    <div>
                      <span className="font-bold"> {company.price} </span>
                      <svg
                        viewBox="0 0 1300 1200"
                        className="w-4 h-4 inline fill-yellow-500"
                      >
                        <path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path>
                      </svg>
                    </div>
                    <button
                      onClick={() => handleVisa(index)}
                      className={`bg-[#146394] text-white px-4 py-1 rounded hover:bg-yellow-600`}
                    >
                      {t("common.buyNow")}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Activate;
