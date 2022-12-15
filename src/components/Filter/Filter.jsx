import { useDispatch } from 'react-redux';
import css from '../css/phonebook.module.css';
import { setFilter } from 'redux/store/contactsSlice';

export default function Filter() {
  const dispatch = useDispatch();
  return (
    <label className={css.filter__container}>
      <p className={css.input__description}> Find contacts by name</p>
      <input
        className={css.filter__input}
        type="filter"
        name="filter"
        placeholder="Find..."
        onChange={e => {
          dispatch(setFilter({ text: e.target.value }));
        }}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </label>
  );
}
