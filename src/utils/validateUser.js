import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isEmail, isStrongPassword } from 'validator';

export function validateUser(email, password, name = '') {
  const validateEmail = !isEmail(email)
    ? (toast.error('Email inválido'), false)
    : true;

  const validatePassword = !isStrongPassword(password)
    ? (toast.error('Senha inválida'), false)
    : true;

  const validateNameLength =
    name && (name.length < 3 || name.length > 50)
      ? (toast.error('Digite o nome e o sobrenome'), false)
      : true;

  const validatePasswordLength =
    password && password.length <= 8
      ? (toast.error('Use 8 caracteres ou mais para sua senha'), false)
      : true;

  const strongPassword = !isStrongPassword(password)
    ? (toast.error(
        'Escolha uma senha mais segura. Use uma combinação de letras maiúsculas e minúsculas, números e símbolos',
      ),
      false)
    : true;

  return (
    validateEmail &&
    validatePassword &&
    validateNameLength &&
    validatePasswordLength &&
    strongPassword
  );
}
