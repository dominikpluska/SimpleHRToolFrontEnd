import { createContext, useContext, useState } from "react";
import Loader from "./GlobalComponents/Loader";
import { useLoggedSessions } from "./QueryCalls/useLoggedSessions";
import LoginPage from "./Pages/LoginPage/LoginPage";

const LoggerUserContext = createContext();

function AuhtorizationProvider({ children }) {
  const [login, useLogin] = useState({ UserName: "", Password: "" });

  function ChangeValue(e) {
    useLogin({ ...login, [e.target.name]: e.target.value });
    console.log(login);
  }

  const { data, mutate, isPending } = useLoggedSessions(login);

  function LogInUser(e) {
    e.preventDefault();
    mutate();
  }

  if (isPending) return <Loader loadingText="Authorization In Progress" />;

  if (!data || data === "Error")
    return (
      <LoginPage
        ChangeValue={ChangeValue}
        LogInUser={LogInUser}
        login={login}
      />
    );

  return (
    <LoggerUserContext.Provider value={{}}>
      {children}
    </LoggerUserContext.Provider>
  );
}

function UseAuthorizationProvider() {
  const context = useContext(LoggerUserContext);
  if (context === undefined) {
    throw new Error("Context used outside the Provider!");
  }
  return context;
}

export { AuhtorizationProvider, UseAuthorizationProvider, LoggerUserContext };
