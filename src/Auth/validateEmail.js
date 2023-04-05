import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isEmail } from 'validator';

export function validateEmail(email) {
  if (!email || email.trim() === '') {
    toast.error('Digite seu Email');
    return false;
  }

  if (!isEmail(email)) {
    toast.error('Email inválido');
    return false;
  }
  return true;
}
