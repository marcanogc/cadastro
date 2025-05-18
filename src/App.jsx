import React from "react";
import FormPessoa from "./components/FormPessoa";
import ListaPessoas from "./components/ListaPessoas";


function App() {
  const [pessoas, setPessoas] = React.useState([]);
  const [resetTrigger, setResetTrigger] = React.useState(0);

  const handleAddPessoa = (novaPessoa) => {
    setPessoas([...pessoas, novaPessoa]);
  };

  const handleReset = () => {
    setPessoas([]);
    setResetTrigger(prev => prev + 1);
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Cadastro de Pessoas</h1>
      <FormPessoa onAdd={handleAddPessoa} resetTrigger={resetTrigger} />
      <ListaPessoas dados={pessoas} onReset={handleReset} />
    </div>
  );
}

export default App;