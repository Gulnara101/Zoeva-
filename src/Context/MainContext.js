import { createContext, useState } from "react";

const MainContext = createContext();

const MainProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleBack = () => {
    setSelectedComponent(null);
  };

  return (
    <MainContext.Provider
      value={{
        isOpen,
        selectedComponent,
        toggleMenu,
        handleBack,
        setSelectedComponent,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;

