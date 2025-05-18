import React from "react";
import CampoInput from "./CampoInput";

const PessoaFields = ({ form, handleChange }) => (
  <>
    <CampoInput
      name="cpf"
      placeholder="CPF"
      value={form.cpf}
      onChange={handleChange}
      pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
      required
    />
    <CampoInput
      name="birthDate"
      placeholder="Data de nascimento (DD/MM/AAAA)"
      value={form.birthDate || ''}
      onChange={handleChange}
      pattern="\d{2}\/\d{2}\/\d{4}"
      required
    />
    <CampoInput
      name="nome"
      placeholder="Nome"
      value={form.nome}
      onChange={handleChange}
      required
    />
    <CampoInput
      name="sobrenome"
      placeholder="Sobrenome"
      value={form.sobrenome}
      onChange={handleChange}
      required
    />
  </>
);

export default PessoaFields;
