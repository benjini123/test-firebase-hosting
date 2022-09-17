import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate, useParams } from "react-router-dom";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import css from "./index.css";
import { findUser } from "../../lib/login";
import { loginState } from "../../atoms";
import { useRecoilState } from "recoil";

export function Email() {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(loginState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    const userExists = await findUser(email);

    if (userExists) {
      setUser({ ...user, email, name: userExists.name });
      navigate("/password");
    } else {
      setUser({ ...user, email });
      navigate("/datos");
    }
  };
  return (
    <form className={css.emailPage} onSubmit={handleSubmit}>
      <Input type="email" name="email">
        email
      </Input>
      <Button color="#FF9DF5">Siguiente</Button>
    </form>
  );
}
