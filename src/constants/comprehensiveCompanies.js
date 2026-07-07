/** Comprehensive (شامل) offers — `name`/`label` stay Arabic for API payloads */
export const comprehensiveCompanies = [
  {
    name: "شركة ولاء للتأمين التعاوني",
    nameKey: "insurance.companies.walaa",
    logo: "/walaa.jpg",
    price: 1350,
    options: [
      { label: "تغطية شاملة مع الإصلاح", labelKey: "insurance.options.comprehensiveRepair", price: 280, checked: false },
      { label: "تغطية الحوادث الشخصية الشاملة ", labelKey: "insurance.options.comprehensivePersonal", price: 50, checked: false },
      { label: "تغطية الأضرار المادية   ", labelKey: "insurance.options.materialDamage", price: 200, checked: false },
      { label: " خدمة الطوارئ   ", labelKey: "insurance.options.emergency", price: 120, checked: false },
    ],
  },
  {
    name: "تكافل الراجحي",
    nameKey: "insurance.companies.alRajhi",
    logo: "/AlRajhi.svg",
    price: 2000,
    options: [
      { label: "تغطية شاملة مع الإصلاح في الوكالة ", labelKey: "insurance.options.comprehensiveAgencyRepair", price: 380, checked: false },
      { label: "  تغطية الحوادث الشخصية الشاملة", labelKey: "insurance.options.comprehensivePersonal", price: 240, checked: false },
      { label: "تغطية الأضرار المادية والطبيعية", labelKey: "insurance.options.materialNaturalDamage", price: 300, checked: false },
      { label: " خدمة الطوارئ المميزة ", labelKey: "insurance.options.premiumEmergency", price: 180, checked: false },
    ],
  },
  {
    name: "بروج للتأمين التعاوني",
    nameKey: "insurance.companies.buruj",
    logo: "/buruj.png",
    price: 1250,
    options: [
      { label: "تغطية الحوادث الشخصية للسائق والركاب", labelKey: "insurance.options.driverPassengerCombined", price: 150, checked: false },
      { label: "تغطية الأضرار المادية للمركبة", labelKey: "insurance.options.vehicleMaterialDamage", price: 200, checked: false },
      { label: "تغطية السرقة والحريق ", labelKey: "insurance.options.theftFire", price: 180, checked: false },
      { label: "تغطية الزجاج الأمامي والخلفي ", labelKey: "insurance.options.glass", price: 100, checked: false },
    ],
  },
  {
    name: "سلامة للتأمين",
    nameKey: "insurance.companies.salamah",
    logo: "/salamih.webp",
    price: 1400,
    options: [
      { label: "  تغطية   شاملة للحوادث", labelKey: "insurance.options.comprehensiveAccidents", price: 200, checked: false },
      { label: "تغطية الأضرار الطبيعية", labelKey: "insurance.options.naturalDamage", price: 150, checked: false },
      { label: "تغطية الإصلاح في الوكالة ", labelKey: "insurance.options.agencyRepair", price: 250, checked: false },
    ],
  },
  {
    name: "التعاونية",
    nameKey: "insurance.companies.altawneih",
    logo: "/altawneih.jpg",
    price: 1600,
    options: [
      { label: "تغطية الإصلاح في الوكالة ", labelKey: "insurance.options.agencyRepair", price: 300, checked: false },
      { label: "تغطية الحوادث الشخصية الشاملة ", labelKey: "insurance.options.comprehensivePersonal", price: 180, checked: false },
      { label: "تغطية الأضرار المادية للمركبة", labelKey: "insurance.options.vehicleMaterialDamage", price: 220, checked: false },
      { label: " خدمة الطوارئ المميزة ", labelKey: "insurance.options.premiumEmergency", price: 120, checked: false },
    ],
  },
  {
    name: "ميدغلف السعودية",
    nameKey: "insurance.companies.medgulf",
    logo: "/medgulf.png",
    price: 1500,
    options: [
      { label: "مساعدة على الطريق", labelKey: "insurance.options.roadside", price: 30, checked: false },
      { label: "تغطية الأضرار المادية للمركبة", labelKey: "insurance.options.vehicleMaterialDamage", price: 200, checked: false },
      { label: "تغطية السرقة والحريق ", labelKey: "insurance.options.theftFire", price: 180, checked: false },
    ],
  },
  {
    name: "متكاملة للتأمين",
    nameKey: "insurance.companies.motakamlh",
    logo: "/motakamlh.jpg",
    price: 1750,
    options: [
      { label: "الوفاة والإصابة الجسدية والمصاريف الطبية للسائق", labelKey: "insurance.options.driverDeathMedical", price: 30, checked: false },
      { label: "تغطية الأضرار المادية للمركبة", labelKey: "insurance.options.vehicleMaterialDamage", price: 200, checked: false },
      { label: "تغطية السرقة والحريق ", labelKey: "insurance.options.theftFire", price: 180, checked: false },
    ],
  },
  {
    name: "المجموعة المتحدة للتأمين التعاوني",
    nameKey: "insurance.companies.acig",
    logo: "/acig.png",
    price: 1650,
    options: [
      { label: "تغطية الحوادث الشخصية للسائق ", labelKey: "insurance.options.driverPersonal", price: 50, checked: false },
      { label: "تغطية الحوادث الشخصية للركاب ", labelKey: "insurance.options.passengerPersonal", price: 240, checked: false },
    ],
  },
  {
    name: "ليڤا للتأمين",
    nameKey: "insurance.companies.liva",
    logo: "/liva.jpg",
    price: 1450,
    options: [
      { label: "تغطية الحوادث الشخصية للسائق ", labelKey: "insurance.options.driverPersonal", price: 50, checked: false },
      { label: "تغطية الحوادث الشخصية للركاب ", labelKey: "insurance.options.passengerPersonal", price: 280, checked: false },
      { label: "مساعدة على الطريق", labelKey: "insurance.options.roadside", price: 50, checked: false },
    ],
  },
  {
    name: "الجزيره التكافل التعاوني",
    nameKey: "insurance.companies.aljazira",
    logo: "/aljazira.webp",
    price: 2250,
    options: [
      { label: "تغطية الحوادث الشخصية للسائق والركاب", labelKey: "insurance.options.driverPassengerCombined", price: 150, checked: false },
      { label: "تغطية الأضرار المادية للمركبة", labelKey: "insurance.options.vehicleMaterialDamage", price: 200, checked: false },
      { label: "مساعدة على الطريق", labelKey: "insurance.options.roadside", price: 50, checked: false },
    ],
  },
  {
    name: "التأمين العربي التعاوني",
    nameKey: "insurance.companies.alarabia",
    logo: "/alarabia.webp",
    price: 1900,
    options: [
      { label: "تغطية الحوادث الشخصية للسائق ", labelKey: "insurance.options.driverPersonal", price: 60, checked: false },
      { label: "تغطية الأضرار المادية للمركبة", labelKey: "insurance.options.vehicleMaterialDamage", price: 200, checked: false },
      { label: "مساعدة على الطريق", labelKey: "insurance.options.roadside", price: 50, checked: false },
    ],
  },
  {
    name: "شركة الوطنية للتأمين",
    nameKey: "insurance.companies.alwataneh",
    logo: "/alwataneh.png",
    price: 1550,
    options: [
      { label: "تغطية الأضرار المادية للمركبة", labelKey: "insurance.options.vehicleMaterialDamage", price: 200, checked: false },
      { label: "مساعدة على الطريق", labelKey: "insurance.options.roadside", price: 50, checked: false },
    ],
  },
  {
    name: "المتحدة للتامين التعاوني",
    nameKey: "insurance.companies.almutahida",
    logo: "/almutahida.webp",
    price: 1300,
    options: [
      { label: "مساعدة على الطريق", labelKey: "insurance.options.roadside", price: 0, checked: true },
      { label: "تغطية الحوادث الشخصية للسائق ", labelKey: "insurance.options.driverPersonal", price: 40, checked: false },
      { label: "مساعدة على الطريق البلاتيني", labelKey: "insurance.options.platinumRoadside", price: 150, checked: false },
    ],
  },
  {
    name: "شركة أمانة للتأمين التعاوني",
    nameKey: "insurance.companies.amana",
    logo: "/amana.jpg",
    price: 1400,
    options: [
      {
        label: "الوفاة والإصابة الجسدية والمصاريف الطبية للمؤمن له أو السائق المسمى",
        labelKey: "insurance.options.namedInsuredDeathMedical",
        price: 50,
        checked: false,
      },
    ],
  },
  {
    name: "شركة اليانز للتأمين",
    nameKey: "insurance.companies.allianz",
    logo: "/Allianz.png",
    price: 1700,
    options: [
      { label: "تغطية الحوادث الشخصية للسائق فقط", labelKey: "insurance.options.driverOnly", price: 60, checked: false },
    ],
  },
  {
    name: "جي.آي.جي",
    nameKey: "insurance.companies.gig",
    logo: "/gig.png",
    price: 1450,
    options: [
      { label: "الاصابة الجسدية للغير", labelKey: "insurance.options.tpBodily", price: 0, checked: true },
      { label: "تلف ممتلكات الغير", labelKey: "insurance.options.tpProperty", price: 0, checked: true },
      { label: "تغطية الحوادث الشخصية للسائق ", labelKey: "insurance.options.driverPersonal", price: 50, checked: false },
      { label: "تغطية الحوادث الشخصية للركاب ", labelKey: "insurance.options.passengerPersonal", price: 270, checked: false },
    ],
  },
  {
    name: "شركة الدرع العربي",
    nameKey: "insurance.companies.aldera",
    logo: "/aldera alarabi.webp",
    price: 1500,
    options: [
      { label: "مساعدة على الطريق", labelKey: "insurance.options.roadside", price: 25, checked: false },
      { label: "تغطية الحوادث الشخصية للسائق ", labelKey: "insurance.options.driverPersonal", price: 60, checked: false },
      { label: "تغطية الحوادث الشخصية للركاب ", labelKey: "insurance.options.passengerPersonal", price: 290, checked: false },
    ],
  },
  {
    name: "شركة التحاد للتأمين",
    nameKey: "insurance.companies.aletihad",
    logo: "/aletihad.png",
    price: 1250,
    options: [
      { label: "تغطية الحوادث الشخصية للسائق ", labelKey: "insurance.options.driverPersonal", price: 50, checked: false },
    ],
  },
  {
    name: "الخليجية العامة للتأمين",
    nameKey: "insurance.companies.gulf",
    logo: "/gulf.webp",
    price: 1300,
    options: [
      { label: "مساعدة على الطريق", labelKey: "insurance.options.roadside", price: 25, checked: false },
      { label: "تغطية الحوادث الشخصية للسائق ", labelKey: "insurance.options.driverPersonal", price: 60, checked: false },
      { label: "تغطية الحوادث الشخصية للركاب ", labelKey: "insurance.options.passengerPersonal", price: 290, checked: false },
    ],
  },
];
