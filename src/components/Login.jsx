import React from "react";
import Input from "./Input";
import Button from "./Button";

function Login() {
  return (
    <form className="form">
      <Input type="text" placeholder="username" />
      <Input type="password" placeholder="Password" />
      <Button type="submit" text="Login" />
    </form>
  );
}

export default Login;
