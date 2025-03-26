import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const languages = [
  { code: "en", name: "English" },
  { code: "tr", name: "Türkçe" },
  { code: "ru", name: "Русский" },
];

const translations = {
  en: {
    title: "Select Language",
    language: "Language",
    updateSettings: "Update Settings",
  },
  tr: {
    title: "Dil Seçin",
    language: "Dil",
    updateSettings: "Ayarları Güncelle",
  },
  ru: {
    title: "Выберите язык",
    language: "Язык",
    updateSettings: "Обновить настройки",
  },
};

const Language = ({ onLanguageChange }) => {
  const [selectedLang, setSelectedLang] = useState("en");
  const [isOpen, setIsOpen] = useState(true);
  const [tempLang, setTempLang] = useState("en");
  const currentTranslation = translations[selectedLang];

  const handleLanguageChange = () => {
    setSelectedLang(tempLang); 
    onLanguageChange(tempLang);  // Pass the selected language to parent
  };

  return (
    isOpen && (
      <div className="language" onClick={() => setIsOpen(false)}>
        <div className="modulLngg" onClick={(e) => e.stopPropagation()}>
          <div className="lngHead">
            <h2>{currentTranslation.title}</h2>
            <IoMdClose className="icon" onClick={() => setIsOpen(false)} />
          </div>
          <div className="changeLng">
            <h3>{currentTranslation.language}</h3>
            <select
              value={tempLang}
              onChange={(e) => setTempLang(e.target.value)} // Set tempLang on select change
            >
              <option value="language">{currentTranslation.language}</option>
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
          <button onClick={handleLanguageChange}>
            {currentTranslation.updateSettings}
          </button>
        </div>
      </div>
    )
  );
};

export default Language;
