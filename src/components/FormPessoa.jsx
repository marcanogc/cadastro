import React, { useState, useEffect } from "react";
import "./styles/FormPessoa.css";
import { CPF_API_CONFIG } from '../config/cpfApi';

const FormPessoa = ({ onAdd, resetTrigger }) => {
  const [form, setForm] = useState({
    cpf: '',
    birthDate: '',
    nome: '',
    sobrenome: '',
    email: '',
    pais: '',
    estado: '',
    cidade: '',
    endereco: '',
    cep: '',
    telefone: ''
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
        .replace(/(\d{1}) (\d{4})(\d)/, '$1 $2-$3')
        .replace(/(\d{4})(\d{4})$/, '$1-$2')
        .slice(0, 16);
    }

    setForm((prev) => {
      if (name === 'birthDate' && processedValue.length === 10) {
        const [day, month, year] = processedValue.split('/');
        const birth = new Date(`${year}-${month}-${day}`);
        const today = new Date();
        let age = today.getFullYear() - birth.getFullYear();
        const m = today.getMonth() - birth.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
          age--;
        }
        return { ...prev, [name]: processedValue, idade: age.toString() };
      }
      return { ...prev, [name]: processedValue };
    });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({
      cpf: '',
      birthDate: '',
      nome: '',
      sobrenome: '',
      email: '',
      pais: '',
      estado: '',
      cidade: '',
      endereco: '',
      cep: '',
      telefone: ''
    });
  };



  useEffect(() => {
    const fetchCPFData = async () => {
      try {
        const rawCPF = form.cpf.replace(/[^\d]/g, '');
        if (rawCPF.length === 11 && form.birthDate.length === 10) {
          const response = await fetch('https://api.cpfhub.io/api/cpf', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': CPF_API_CONFIG.API_KEY
            },
            body: JSON.stringify({
              cpf: form.cpf,
              birthDate: form.birthDate
            })
          });
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const result = await response.json();
          console.log('API CPF resposta:', result); // <-- LOG para depuração
          if (!result.success || !result.data) {
            console.error('Erro da API:', result);
            return;
          }
          const data = result.data;
          // Nome e sobrenome
          if (data.name) {
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
        }
      } catch (error) {
        console.error('Erro ao buscar dados do CPF:', error.message);
      }
    };
    fetchCPFData();
    // eslint-disable-next-line
  }, [form.cpf, form.birthDate]);

  useEffect(() => {
    setForm({
      cpf: '',
      birthDate: '',
      nome: '',
      sobrenome: '',
      email: '',
      pais: '',
      estado: '',
      cidade: '',
      endereco: '',
      cep: '',
      telefone: ''
    });
  }, [resetTrigger]);

  const buscarCEP = async () => {
    const cep = form.cep.replace(/\D/g, "");
    if (cep.length !== 8) return;
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      console.log('API CEP resposta:', data); // <-- LOG para depuração
      if (!data.erro) {
        setForm((prev) => ({
          ...prev,
          estado: data.uf || '',
          cidade: data.localidade || '',
          endereco: data.logradouro || '',
          pais: 'Brasil'
        }));
      } else {
        alert("CEP não encontrado");
      }
    } catch (error) {
      console.error("Erro ao buscar o CEP:", error);
      alert("Erro ao buscar o CEP");
    }
  };

  return (
    <form className="form-pessoa" onSubmit={handleSubmit}>
      <input
        name="cpf"
        placeholder="CPF"
        value={form.cpf}
        onChange={handleChange}
        pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
        required
      />
      <input
        name="birthDate"
        placeholder="Data de nascimento (DD/MM/AAAA)"
        value={form.birthDate || ''}
        onChange={handleChange}
        pattern="\d{2}\/\d{2}\/\d{4}"
        required
      />
      <input
        name="nome"
        placeholder="Nome"
        value={form.nome}
        onChange={handleChange}
        required
      />
      <input
        name="sobrenome"
        placeholder="Sobrenome"
        value={form.sobrenome}
        onChange={handleChange}
        required
      />
      
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        name="cep"
        placeholder="CEP"
        value={form.cep}
        onChange={handleChange}
        pattern="\d{5}-\d{3}"
        onBlur={buscarCEP}
        required
      />
      <input
        name="pais"
        placeholder="País"
        value={form.pais}
        onChange={handleChange}
        required
      />
      <input
        name="estado"
        placeholder="Estado"
        value={form.estado}
        onChange={handleChange}
        required
      />
      <input
        name="cidade"
        placeholder="Cidade"
        value={form.cidade}
        onChange={handleChange}
        required
      />
      <input
        name="endereco"
        placeholder="Endereço"
        value={form.endereco}
        onChange={handleChange}
        required
      />
      
      <input
        name="telefone"
        placeholder="Telefone"
        value={form.telefone}
        onChange={handleChange}
        pattern="\(\d{2}\) \d{5}-\d{4}"
        required
      />

      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default FormPessoa;
