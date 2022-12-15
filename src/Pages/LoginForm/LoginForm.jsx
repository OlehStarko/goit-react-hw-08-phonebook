import css from '../../components/css/phonebook.module.css';
import { useState } from 'react';
import authOperations from '../../redux/store/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { resetError } from 'redux/store/auth';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userError = useSelector(state => state.user.error);

  const dispatch = useDispatch();
  const isDisabled = email.trim() === '' || password.trim() === '';
  if (userError) {
    const { message = '', code } = userError;
    switch (code) {
      case 400:
        alert('User authorization error, please try again)');
        dispatch(resetError());
        break;

      default:
        alert(message);
        dispatch(resetError());
    }
  }

  const handleUserChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(authOperations.loginUser(user));
    setEmail('');
    setPassword('');
  };
  return (
    <div className={css.form__container}>
      <form onSubmit={handleSubmit}>
        <p className={css.input__description}>Email</p>
        <input
          className={css.form__input}
          placeholder="enter your email"
          _placeholder={{
            opacity: 0.7,
            color: 'white',
            fontStyle: 'italic',
          }}
          type="email"
          name="email"
          value={email}
          onChange={handleUserChange}
        ></input>
        <p className={css.input__description}>Password</p>
        <input
          className={css.form__input}
          type="password"
          placeholder="enter your password"
          color="white"
          name="password"
          value={password}
          onChange={handleUserChange}
          minLength="7"
        />
        <div>
          <button
            className={css.SignUp__button}
            type="submit"
            disabled={isDisabled}
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
