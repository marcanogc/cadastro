import React from "react";
import CampoInput from "./CampoInput";

const ContatoFields = ({ form, handleChange }) => (
  <>
    <CampoInput
      type="email"
      name="email"
      placeholder="E-mail"
      value={form.email}
      onChange={handleChange}
      required
    />
    <CampoInput
      name="telefone"
      placeholder="Telefone"
      value={form.telefone}
      onChange={handleChange}
      pattern="\(\d{2}\) \d{5}-\d{4}"
      required
    />
  </>
);

export default ContatoFields;
