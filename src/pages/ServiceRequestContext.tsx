import { createContext, useContext, useState } from "react";
 
export const ServiceRequestContext = createContext({});
 
export function ServiceRequestProvider({ children }) {
  const value = useState({});
  return (
    <ServiceRequestContext.Provider value={value}>
      {children}
    </ServiceRequestContext.Provider>
  );
}
 
export function useServiceRequestState() {
  const context = useContext(ServiceRequestContext);
  if (!context) {
    throw new Error("useServiceRequestState must be used within the AppProvider");
  }
  return context;
}