// Utility for CPF API logic
import { CPF_API_CONFIG } from '../config/cpfApi';

export async function fetchCPFData(cpf, birthDate) {
  try {
    const rawCPF = cpf.replace(/[^\d]/g, '');
    if (rawCPF.length === 11 && birthDate.length === 10) {
      const response = await fetch('https://api.cpfhub.io/api/cpf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': CPF_API_CONFIG.API_KEY
        },
        body: JSON.stringify({
          cpf,
          birthDate
        })
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      if (!result.success || !result.data) {
        return null;
      }
      return result.data;
    }
    return null;
  } catch (error) {
    // Optionally log error
    return null;
  }
}
