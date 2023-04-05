import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isStrongPassword } from 'validator';

export function validatePasswordStrength(
  password,
  repeatPassword,
  firstName,
  lastName,
) {
  const personalInfo = [firstName, lastName];

  if (!password || password.trim() === '') {
    toast.error('Digite sua senha');
    return false;
  }

  if (personalInfo.some((info) => password.toLowerCase().includes(info))) {
    toast.error(
      'Sua senha contém informações pessoais. Crie uma senha mais segura',
    );
    return false;
  }

  if (password.length <= 8 || password.length >= 30) {
    toast.error('Sua senha deve conter de 8 a 30 caracteres');
    return false;
  }

  if (!isStrongPassword(password)) {
    toast.error(
      'Sua senha precisa conter letras maiúsculas e minúsculas, números e símbolos',
    );
    return false;
  }

  if (repeatPassword !== password) {
    toast.error('A confirmação da senha não corresponde à senha inserida');
    return false;
  }

  return true;
}
