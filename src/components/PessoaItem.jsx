import React from "react";
import "./styles/PessoaItem.css";

function calcularIdade(birthDate) {
  if (!birthDate) return '';
  // birthDate esperado en formato DD/MM/AAAA
  const [day, month, year] = birthDate.split('/');
  if (!day || !month || !year) return '';
  const birth = new Date(`${year}-${month}-${day}`);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

const PessoaItem = ({ pessoa, mostrarTodo }) => {
  return (
    <div className="pessoa-item">
      {mostrarTodo ? (
        <>
          <p><strong>CPF:</strong> {pessoa.cpf}</p>
          <p><strong>Nome:</strong> {pessoa.nome}</p>
          <p><strong>Sobrenome:</strong> {pessoa.sobrenome}</p>
          <p><strong>Data de Nascimento:</strong> {pessoa.birthDate}</p>
          <p><strong>Idade:</strong> {calcularIdade(pessoa.birthDate)}</p>
          <p><strong>Email:</strong> {pessoa.email}</p>
          <p><strong>País:</strong> {pessoa.pais}</p>
          <p><strong>Estado:</strong> {pessoa.estado}</p>
          <p><strong>Cidade:</strong> {pessoa.cidade}</p>
          <p><strong>Endereço:</strong> {pessoa.endereco}</p>
          <p><strong>CEP:</strong> {pessoa.cep}</p>
          <p><strong>Telefone:</strong> {pessoa.telefone}</p>
        </>
      ) : (
        <>
          <p><strong>Nome:</strong> {pessoa.nome} {pessoa.sobrenome}</p>
          <p><strong>Data de Nascimento:</strong> {pessoa.birthDate}</p>
          <p><strong>Idade:</strong> {calcularIdade(pessoa.birthDate)}</p>
          <p><strong>Email:</strong> {pessoa.email}</p>
          <p><strong>País:</strong> {pessoa.pais}</p>
          <p><strong>Estado:</strong> {pessoa.estado}</p>
          <p><strong>CEP:</strong> {pessoa.cep}</p>
          <p><strong>Telefone:</strong> {pessoa.telefone}</p>
          <p><strong>CPF:</strong> {pessoa.cpf}</p>
        </>
      )}
    </div>
  );
};

export default PessoaItem;
