import React from "react";
import PessoaItem from "./PessoaItem";
import "./styles/ListaPessoas.css";

const ListaPessoas = ({ dados, onReset }) => {
  return (
    <div style={{ marginTop: '30px', padding: '20px' }}>
      <div style={{ display: 'grid', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
        <button 
          onClick={onReset}
          style={{ 
            padding: '8px 16px',
            background: '#ff4444',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Resetar Todo
        </button>
         <br />
        <h2 style={{ margin: 0 }}>Pessoas Cadastradas</h2>
      </div>
      
      {dados.length > 0 ? (
        <div className="lista-pessoas">
          {dados.map((pessoa, index) => (
            <PessoaItem key={index} pessoa={pessoa} mostrarTodo={true} />
          ))}
        </div>
      ) : (
        <p style={{ textAlign: 'center', color: '#666' }}>Nenhum registro</p>
      )}
    </div>
  );
};

export default ListaPessoas;
