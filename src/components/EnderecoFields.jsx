import React from "react";
import CampoInput from "./CampoInput";

const EnderecoFields = ({ form, handleChange, buscarCEP }) => (
  <>
    <CampoInput
      name="cep"
      placeholder="CEP"
      value={form.cep}
      onChange={handleChange}
      pattern="\d{5}-\d{3}"
      onBlur={buscarCEP}
      required
    />
    <CampoInput
      name="pais"
      placeholder="País"
      value={form.pais}
      onChange={handleChange}
      required
    />
    <CampoInput
      name="estado"
      placeholder="Estado"
      value={form.estado}
      onChange={handleChange}
      required
    />
    <CampoInput
      name="cidade"
      placeholder="Cidade"
      value={form.cidade}
      onChange={handleChange}
      required
    />
    <CampoInput
      name="endereco"
      placeholder="Endereço"
      value={form.endereco}
      onChange={handleChange}
      required
    />
  </>
);

export default EnderecoFields;
