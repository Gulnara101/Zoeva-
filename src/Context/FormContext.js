import { createContext, useState } from "react";

export const FormContext = createContext(null);

const FormProvider = ({ children }) => {
  const [formDataList, setFormDataList] = useState([]);

  const addFormData = (newData) => {
    setFormDataList((prevData) => [...prevData, newData]);
  };
  console.log("FormProvider Çalıştı mı?", { formDataList, addFormData });
  return (
    <FormContext.Provider value={{ formDataList, addFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
