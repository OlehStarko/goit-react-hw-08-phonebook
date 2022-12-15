import { useSelector } from 'react-redux';
import css from '../../components/css/phonebook.module.css';
import ContactsList from 'components/ContactsList/ContactsList';
import ContactForm from '../../components/Form/Form';
import Filter from 'components/Filter/Filter';

const Contacts = () => {
  const contacts = useSelector(state => state.contacts.items);
  return (
    <div className={css.contact_container}>
      <h1 className={css.form__title}>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 && <Filter />}
      <ContactsList />
    </div>
  );
};

export default Contacts;
