import css from '../css/phonebook.module.css';

const ContactItem = ({ name, number, handleDeleteContact, id }) => {
  return (
    <li className={css.contact__item}>
      <p className={css.name_text}>{name}: </p>
      <p className={css.number_text}>{number}</p>

      <button
        className={css.delete__button}
        type="button"
        name={id}
        onClick={() => {
          handleDeleteContact(id);
        }}
      ></button>
    </li>
  );
};

export default ContactItem;
