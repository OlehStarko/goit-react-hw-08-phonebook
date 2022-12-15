import css from '../../components/css/phonebook.module.css';
import { useState } from 'react';
import authOperations from '../../redux/store/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { resetError } from 'redux/store/auth';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userError = useSelector(state => state.user.error);
  const dispatch = useDispatch();
  const isDisabled =
    email.trim() === '' || name.trim() === '' || password.trim() === '';
  if (userError) {
    const { message = '', code } = userError;
    switch (code) {
      case 400:
        alert('Error creating user, please try again)');
        dispatch(resetError());
        break;

      case 500:
        alert('server error, try reloading the page or try again later');
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
      case 'name':
        setName(value);
        break;
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
      name,
      email,
      password,
    };
    dispatch(authOperations.registerUser(user));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <div className={css.form__container}>
      <form onSubmit={handleSubmit}>
        <p className={css.input__description}>Name</p>
        <input
          className={css.form__input}
          placeholder="enter your name"
          _placeholder={{
            opacity: 0.7,
            color: 'white',
            fontStyle: 'italic',
          }}
          type="text"
          name="name"
          value={name}
          onChange={handleUserChange}
        ></input>

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
          pr="4.5rem"
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
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
