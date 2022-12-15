import { useState } from 'react';
import css from '../css/phonebook.module.css';
import operations from 'redux/store/contacts-operations';
import { useDispatch, useSelector } from 'react-redux';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleContactChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const submitForm = async e => {
    e.preventDefault();
    const contact = {
      name,
      number,
    };
    for (const el of contacts) {
      if (el.name.toLowerCase() === contact.name.toLocaleLowerCase()) {
        alert(`Контакт с таким именем уже существует`);
        setName('');
        setNumber('');
        return;
      }
    }
    await dispatch(operations.addContact(contact));
    await dispatch(operations.getContacts());
    setName('');
    setNumber('');
  };

  return (
    <div className={css.form__container}>
      <form onSubmit={submitForm}>
        <label>
          <p className={css.input__description}>Name</p>
          <input
            className={css.form__input}
            type="text"
            name="name"
            placeholder="Contact name"
            aria-label="Input for your name"
            value={name}
            onChange={handleContactChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label>
          <p className={css.input__description}>Number</p>
          <input
            className={css.form__input}
            type="tel"
            name="number"
            placeholder="Phone number"
            value={number}
            aria-label="Input for your phone number"
            onChange={handleContactChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
          />
        </label>
        <div>
          <button type="submit" className={css.add__button}>
            Add contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
