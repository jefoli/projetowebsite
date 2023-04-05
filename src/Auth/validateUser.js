import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function validateUser(firstName = '', lastName = '') {
  if (firstName.length < 3 || firstName.length > 50) {
    toast.error('Seu nome precisa conter de 3 a 50 caracteres');
    return false;
  }

  if (lastName.length < 3 || lastName.length > 50) {
    toast.error('Seu sobrenome precisa conter de 3 a 50 caracteres');
    return false;
  }

  return true;
}
