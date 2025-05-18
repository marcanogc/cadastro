// Utility for CEP API logic
export async function buscarCEP(cep) {
  const cleanCep = cep.replace(/\D/g, "");
  if (cleanCep.length !== 8) return null;
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
    const data = await response.json();
    if (!data.erro) {
      return {
        estado: data.uf || '',
        cidade: data.localidade || '',
        endereco: data.logradouro || '',
        pais: 'Brasil'
      };
    } else {
      return { error: 'CEP não encontrado' };
    }
  } catch (error) {
    return { error: 'Erro ao buscar o CEP' };
  }
}
