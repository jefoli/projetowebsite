import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function validateCpf(cpf = '') {
  let cpfText = cpf.replace(/[^\d]/g, '');

  if (!cpfText || cpf.trim() === '') {
    toast.error('Digite seu CPF');
    return false;
  }

  if (cpfText.length !== 11) {
    toast.error('Digite todos números do seu CPF');
    return false;
  }

  //verifica se todos dígitos são iguais:
  if (/^(\d)\1+$/.test(cpf)) {
    toast.error('Digite um CPF válido');
    return false;
  }

  let soma = 0;
  let resto;

  for (let i = 1; i <= 9; i++)
    soma += parseInt(cpfText.substring(i - 1, i)) * (11 - i);
  resto = (soma * 10) % 11;

  //verifica se o dígito verificador calculado é válido:
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpfText.substring(9, 10))) {
    toast.error('Digite um CPF válido');
    return false;
  }

  soma = 0;
  for (let i = 1; i <= 10; i++)
    soma += parseInt(cpfText.substring(i - 1, i)) * (12 - i);
  resto = (soma * 10) % 11;

  //validação do segundo dígito verificador do CPF
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpfText.substring(10, 11))) {
    toast.error('Digite um CPF válido');
    return false;
  }

  return true;
}
