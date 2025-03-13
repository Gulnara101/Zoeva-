import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const languages = [
  { code: "en", name: "English" },
  { code: "tr", name: "Türkçe" },
  { code: "ru", name: "Русский" },
];

const Language = () => {
  const [selectedLang, setSelectedLang] = useState("en");
  const [isOpen, setIsOpen] = useState(true);

  return (
    isOpen && (
      <div className="language" onClick={() => setIsOpen(false)}>
        <div className="modulLngg">
          <div className="lngHead">
            <h2>Select Language</h2>
            <IoMdClose className="icon" onClick={() => setIsOpen(false)} />
          </div>
          <div className="changeLng">
            <h3>Language</h3>
            <select
              value={selectedLang}
              onChange={(e) => setSelectedLang(e.target.value)}
            >
              <option value="language">Select Language</option>
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.name}
                </option>
              ))}
            </select>
          </div>
          <button>Update Settings</button>
        </div>
      </div>
    )
  );
};

export default Language;
