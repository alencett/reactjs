import './CheckoutForm.css';
import { useState } from 'react';

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [errors, setErrors] = useState({});

  const validatePhone = () => {
    const phoneRegex = /^\d{4,}$/;
    if (!phone.match(phoneRegex)) {
      setErrors(prevErrors => ({ ...prevErrors, phone: 'Por favor ingrese un número de teléfono correcto' }));
      return false;
    }
    setErrors(prevErrors => ({ ...prevErrors, phone: '' }));
    return true;
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      setErrors(prevErrors => ({ ...prevErrors, email: 'Email no es válido' }));
      return false;
    }
    if (email !== confirmEmail) {
      setErrors(prevErrors => ({ ...prevErrors, confirmEmail: 'Emails no concuerdan' }));
      return false;
    }
    setErrors(prevErrors => ({ ...prevErrors, email: '', confirmEmail: '' }));
    return true;
  };

  const handleConfirm = event => {
    event.preventDefault();

    const isPhoneValid = validatePhone();
    const isEmailValid = validateEmail();

    if (isPhoneValid && isEmailValid) {
      const userData = {
        name,
        phone,
        email
      };

      onConfirm(userData);
    }
  };

  return (
    <div className="checkoutform">
      <form onSubmit={handleConfirm}>
        <label className="label">
          Nombre
          <input
            type="text"
            className="input"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label className="label">
          Teléfono
          <input
            type="text"
            className="input"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </label>
        {errors.phone && <div className="error">{errors.phone}</div>}
        <label className="label">
          Email
          <input
            type="text"
            className="input"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        {errors.email && <div className="error">{errors.email}</div>}
        <label className="label">
          Confirmar Email
          <input
            type="text"
            className="input"
            value={confirmEmail}
            onChange={({ target }) => setConfirmEmail(target.value)}
          />
        </label>
        {errors.confirmEmail && <div className="error">{errors.confirmEmail}</div>}
        <div className="label">
          <button className="button" type="submit">
            Crear orden
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;