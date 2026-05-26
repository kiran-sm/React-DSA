import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "./locales/en/translation.json";
import knTranslation from "./locales/kn/translation.json";

i18n
  .use(LanguageDetector) // Detects browser language
  .use(initReactI18next) // Connects to React
  .init({
    resources: {
      en: { translation: enTranslation },
      kn: { translation: knTranslation },
    },
    fallbackLng: "en", // Fallback if Kannada key is missing
    lng: "en", // Default language
    interpolation: {
      escapeValue: false, // React already handles XSS
    },
  });

export default i18n;
