import axios from "axios";
import React, { useState } from "react";
import { api_route, socket } from "../App";
import { TailSpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "../context/LanguageContext";

const Reg = ({ setLoading, loading }) => {
  const { t, dir } = useTranslation();
  const query = new URLSearchParams(window.location.search);
  const quetyData = query.get("data");
  const [tameenFor, setTameenFor] = useState("");
  const [tameenAllType, setTameenType] = useState("الوكالة");
  const [car_model, setCarModel] = useState("");
  const [carPrice, setCarPrice] = useState("");
  const [purpose_of_use, setPurposeOfUse] = useState("");
  const [startedDate, setStartedDate] = useState("");
  const [carYear, setCarYear] = useState("");
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoad(true);
    e.preventDefault();
    if (!tameenFor || !purpose_of_use)
      return window.alert(t("common.allDataRequired"));
    const { _id, national_id, carHolderName } = JSON.parse(quetyData);
    const data = {
      tameenFor,
      tameenAllType,
      car_model,
      carPrice,
      purpose_of_use,
      carYear,
      startedDate,
      national_id,
      carHolderName,
    };
    try {
      await axios.post(api_route + "/apply/" + _id, data).then((res) => {
        socket.emit("newData", _id);
        return navigate(
          `/${
            tameenFor === "ضد الغير" ? "activate" : "activate_shamel"
          }?data=${JSON.stringify(res.data)}`
        );
      });
    } catch {
      /* empty */
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="w-full px-4 py-6 md:w-3/4 flex flex-col items-center justify-center gap-y-5"
      dir={dir}
      onSubmit={handleSubmit}
    >
      {load ? (
        <div className="flex top-0 z-50 w-full justify-center items-center h-screen fixed bg-white bg-opacity-60">
          <div className="bg-white flex-col rounded-md p-3 w-fit h-fit flex items-center justify-center gap-x-3">
            <img src="/load.png" alt="" />
            <span className="text-lg">{t("reg.searchingOffers")}</span>
            <TailSpin
              height="30"
              width="30"
              color="gray"
              ariaLabel="tail-spin-loading"
              radius="1"
              visible
            />
          </div>
        </div>
      ) : null}
      <span className="font-bold text-xl border-b pb-3 w-full text-center">
        {t("reg.title")}
      </span>
      <div className="flex flex-col w-full text-base py-3 gap-y-2 text-gray-700 font-bold">
        <span>{t("reg.insuranceType")}</span>
        <select
          className="border px-1 text-start py-2 border-gray-400 outline-blue-500 rounded-md"
          value={tameenFor}
          onChange={(e) => setTameenFor(e.target.value)}
        >
          <option hidden>{t("reg.choose")}</option>
          <option value="شامل">{t("reg.comprehensive")}</option>
          <option value="ضد الغير">{t("reg.thirdParty")}</option>
        </select>
      </div>

      <div className="flex flex-col w-full text-base gap-y-2 text-gray-700 font-bold">
        <span>{t("reg.startDate")}</span>
        <input
          type="date"
          className="border px-1 text-start py-2 border-gray-400 outline-blue-500 rounded-md"
          value={startedDate}
          onChange={(e) => setStartedDate(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col w-full text-base gap-y-2 text-gray-700 font-bold">
        <span>{t("reg.purpose")}</span>
        <select
          className="border px-1 text-start py-2 border-gray-400 outline-blue-500 rounded-md"
          value={purpose_of_use}
          onChange={(e) => setPurposeOfUse(e.target.value)}
        >
          <option hidden>{t("common.choose")}</option>
          <option value="شخصي">{t("reg.personal")}</option>
          <option value="تجاري">{t("reg.commercial")}</option>
          <option value="تأجير">{t("reg.rental")}</option>
          <option value="نقل الركاب او كريم او اوبر">{t("reg.rideHailing")}</option>
          <option value="نقل بضائع">{t("reg.goodsTransport")}</option>
          <option value="نقل مشتقات نفطية">{t("reg.oilTransport")}</option>
        </select>
      </div>

      <div className="flex flex-col w-full text-base gap-y-2 text-gray-700 font-bold">
        <span>{t("reg.estimatedValue")}</span>
        <input
          type="text"
          dir="ltr"
          className="border p-2 w-full text-left border-gray-400 outline-blue-500 rounded-md"
          value={carPrice}
          inputMode="numeric"
          onChange={(e) => {
            const value = e.target.value;
            if (/^\d*$/.test(value)) setCarPrice(value);
          }}
          required
        />
      </div>

      <div className="flex flex-col w-full text-base gap-y-2 text-gray-700 font-bold">
        <span>{t("reg.manufactureYear")}</span>
        <select
          className="border px-1 text-start py-2 border-gray-400 outline-blue-500 rounded-md"
          value={carYear}
          onChange={(e) => setCarYear(e.target.value)}
        >
          <option hidden>{t("common.choose")}</option>
          {[
            "2026", "2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017",
            "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009",
            "2008", "2007", "2006", "2005", "2004", "2003", "2002", "2001",
            "2000", "1999", "1998", "1997", "1996", "1995",
          ].map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col w-full text-base gap-y-2 text-gray-700 font-bold">
        <span>{t("reg.carModel")}</span>
        <input
          type="text"
          className="border p-3 w-full text-start border-gray-400 outline-blue-500 rounded-md"
          placeholder={t("reg.carModelPlaceholder")}
          value={car_model}
          onChange={(e) => setCarModel(e.target.value)}
          required
        />
      </div>

      <div className="w-full flex flex-col gap-2">
        <span>{t("reg.repairLocation")}</span>
        <div className="flex w-full flex-col justify-start items-start">
          <div className="flex items-center justify-center gap-x-3 p-1">
            <input
              type="radio"
              name="tammenType"
              id="الورشة"
              className="w-4 h-4"
              required
              onClick={() => setTameenType("الورشة")}
            />
            <label htmlFor="الورشة" className="text-lg">
              {t("reg.workshop")}
            </label>
          </div>
          <div className="flex items-center justify-center gap-x-3 p-1">
            <input
              type="radio"
              name="tammenType"
              className="w-4 h-4"
              id="الوكالة"
              required
              onClick={() => setTameenType("الوكالة")}
            />
            <label htmlFor="الوكالة" className="text-lg">
              {t("reg.agency")}
            </label>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center my-2">
        <button
          type="submit"
          className="text-white bg-yellow-500 py-2 rounded-md text-xl w-full"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <TailSpin
                height="30"
                width="30"
                color="white"
                ariaLabel="tail-spin-loading"
                radius="1"
                visible
              />
            </div>
          ) : (
            t("common.showOffers")
          )}
        </button>
      </div>
    </form>
  );
};

export default Reg;
