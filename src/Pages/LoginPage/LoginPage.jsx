import { useState } from "react";
import Button from "../../GlobalComponents/Button";
import Input from "../../GlobalComponents/Input";
import MainLogo from "../../GlobalComponents/MainLogo";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useLoggedSessions } from "../../QueryCalls/useLoggedSessions";

export default function LoginPage({ ChangeValue, LogInUser, login }) {
  return (
    <form
      className="w-full h-screen bg-gradient-to-br from-cyan-400 to-blue-700 flex flex-col justify-center items-center "
      autoComplete="off"
    >
      <div
        className="w-[350px] h-[550px] sm:w-[400px] sm:h-[500px] md:w-[450px] md:h-[600px] 2xl:w-[550px] 2xl:h-[600px]
     bg-white mx-auto my-auto shadow-lg shadow-blue-700"
      >
        <MainLogo className="pt-20" />
        <div className="mx-20 my-12">
          <Input
            placeholderText="Type your username"
            label="UserName"
            type="text"
            icon={<FaUser />}
            name="UserName"
            onChange={(e) => ChangeValue(e)}
            value={login.userName}
          />
          <Input
            placeholderText="Type your password"
            label="Password"
            type="Password"
            className="mt-10"
            icon={<FaLock />}
            name="Password"
            onChange={(e) => ChangeValue(e)}
            value={login.password}
          />
          <Button className="mt-10" onClick={LogInUser} labelText="Log in" />
        </div>
      </div>
    </form>
  );
}
