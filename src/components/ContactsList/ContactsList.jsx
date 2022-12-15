import css from '../css/phonebook.module.css';
import operation from '../../redux/store/contacts-operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useMemo } from 'react';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactsList = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.user.user.name);
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  useEffect(() => {
    if (!userName) {
      return;
    }
    dispatch(operation.getContacts());
  }, [dispatch, userName]);

  const visibleContacts = useMemo(() => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);

  const handleDeleteContact = id => {
    dispatch(operation.deleteContact(id));
  };

  return (
    <ul className={css.contact__list}>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem
          className={css.contact__item}
          key={`${id}`}
          name={name}
          number={number}
          id={id}
          handleDeleteContact={handleDeleteContact}
        >
          <p>
            {name}: {number}
          </p>
          <button
            className={css.delete__button}
            type="button"
            name={id}
            handleDeleteContact={handleDeleteContact}
          ></button>
        </ContactItem>
      ))}
    </ul>
  );
};
export default ContactsList;
