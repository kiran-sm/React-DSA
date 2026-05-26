import { useTranslation } from "react-i18next";

function Language() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="language-switcher flex justify-end gap-5 px-5 py-2">
      Select Language:
      <button
        onClick={() => changeLanguage("en")}
        className={
          i18n.language === "en"
            ? "active underline decoration-blue-600 bg-yellow-100 px-2"
            : ""
        }
      >
        English
      </button>
      <button
        onClick={() => changeLanguage("kn")}
        className={
          i18n.language === "kn"
            ? "active  underline decoration-blue-600 bg-yellow-100 px-2"
            : ""
        }
      >
        ಕನ್ನಡ
      </button>
    </div>
  );
}

export default Language;
