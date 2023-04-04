import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isEmail, isStrongPassword } from 'validator';

export function validateUser(email, password) {
  if (!isEmail(email)) {
    toast.error('Email inválido');
    return;
  }

  if (!isStrongPassword(password)) {
    toast.error('Senha inválida');
    return;
  }
}
