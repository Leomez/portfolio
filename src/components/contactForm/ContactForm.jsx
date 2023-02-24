import React, { useState } from "react";
import s from "./ContactForm.module.css";
import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import axios from "axios";
import ValidateForm  from "./ValidateForm";
const formspreeId = process.env.REACT_APP_ID_FORMSPREE;

export default function ContactForm() {

  const {t} = useTranslation()
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({})

  const handleOnChange = (e) => {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {isValid, errors} = ValidateForm(
      data,
      t("validar_nombre"),
      {a: t("validar_telefono1"),b: t("validar_telefono2")},
      {a: t("validar_email1"),b: t("validar_email2")},
      t("validar_mensaje")
      );
    setErrors(errors)
    console.log(data);

    if (isValid) {
      try {
        const response = await axios.post(
          `https://formspree.io/f/${formspreeId}`,
          data
        );
        console.log(response);
        setData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } catch (error) {
        console.error(error);
      }      
    }
  };

  return (
    <Box sx={{ padding: "2rem", margin: "2rem", borderRadius: "10px" }}>
      <form className={s.form} onSubmit={handleSubmit} method="POST" action={`https://formspree.io/f/${formspreeId}`}>
        <label>
          {t("nombre")}
          <input
            className={`${s.input} ${errors.name && s.error}`}
            type="text"
            name="name"
            value={data.name}
            onChange={(e) => handleOnChange(e)}
          />
          <span className={s.errorMessage}>{errors.name}</span>          
        </label>
        <label>
          {t("telefono")}
          <input
            className={`${s.input} ${errors.phone && s.error}`}
            type="tel"
            name="phone"
            value={data.phone}
            onChange={(e) => handleOnChange(e)}
          />
          <span className={s.errorMessage}>{errors.phone}</span>          
        </label>
        <label>
          {t("email")}
          <input
            className={`${s.input} ${errors.email && s.error}`}
            type="email"
            name="email"
            value={data.email}
            onChange={(e) => handleOnChange(e)}
          />
          <span className={s.errorMessage}>{errors.email}</span>          
        </label>
        <label>
          {t("mensaje")}
          <textarea
            className={`${s.input} ${errors.email && s.error}`}
            name="message"
            value={data.message}
            onChange={(e) => handleOnChange(e)}
          />
          <span className={s.errorMessage}>{errors.message}</span>          
        </label>
        <Button
          sx={{ marginTop: "1rem", backgroundColor: "dodgerblue" }}
          variant="contained"
          type="submit"
        >
          {t("enviar")}
        </Button>
      </form>
    </Box>
  );
}
