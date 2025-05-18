import React, { useState, useEffect } from "react";
import "./styles/FormPessoa.css";
import { fetchCPFData } from '../api/cpfApi';
import { buscarCEP } from '../api/cepApi';
import PessoaFields from "./PessoaFields";
import EnderecoFields from "./EnderecoFields";
import ContatoFields from "./ContatoFields";

const FormPessoa = ({ onAdd, resetTrigger }) => {
  const [form, setForm] = useState({
    cpf: '',birthDate: '',nome: '',sobrenome: '',email: '',pais: '',
    estado: '',cidade: '',endereco: '',cep: '',telefone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let processedValue = value;

    if (name === 'cpf') {
      processedValue = value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .slice(0, 14);
    } else if (name === 'cep') {
      processedValue = value
        .replace(/\D/g, '')
        .slice(0, 8)
        .replace(/(\d{5})(\d)/, '$1-$2');
    } else if (name === 'telefone') {
      processedValue = value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d{4})$/, '$1-$2')
        .slice(0, 15);
    }

    setForm((prev) => ({ ...prev, [name]: processedValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({
      cpf: '',birthDate: '',nome: '',sobrenome: '',email: '',pais: '',
      estado: '',cidade: '',endereco: '',cep: '',telefone: ''
    });
  };

  useEffect(() => {
    const getCPFData = async () => {
      const data = await fetchCPFData(form.cpf, form.birthDate);
      if (data && data.name) {
        const partes = data.name.trim().split(' ');
        let nome = '';
        let sobrenome = '';
        if (partes.length === 2) {
          nome = partes[0];
          sobrenome = partes[1];
        } else if (partes.length > 2) {
          nome = partes.slice(0, 2).join(' ');
          sobrenome = partes.slice(2).join(' ');
        } else {
          nome = partes[0] || '';
          sobrenome = '';
        }
        setForm(prev => ({
          ...prev,
          nome,
          sobrenome,
          birthDate: data.birthDate || prev.birthDate
        }));
      }
    };
    getCPFData();
    // eslint-disable-next-line
  }, [form.cpf, form.birthDate]);

  useEffect(() => {
    setForm({
      cpf: '',birthDate: '',nome: '',sobrenome: '',email: '',
      pais: '',estado: '',cidade: '',endereco: '',cep: '',telefone: ''
    });
  }, [resetTrigger]);

  const buscarCEPHandler = async () => {
    const result = await buscarCEP(form.cep);
    if (result && !result.error) {
      setForm((prev) => ({
        ...prev,
        estado: result.estado,
        cidade: result.cidade,
        endereco: result.endereco,
        pais: result.pais
      }));
    } else if (result && result.error) {
      alert(result.error);
    }
  };

  return (
    <form className="form-pessoa" onSubmit={handleSubmit}>
      <PessoaFields form={form} handleChange={handleChange} />
      <ContatoFields form={form} handleChange={handleChange} />
      <EnderecoFields form={form} handleChange={handleChange} buscarCEP={buscarCEPHandler} />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default FormPessoa;
