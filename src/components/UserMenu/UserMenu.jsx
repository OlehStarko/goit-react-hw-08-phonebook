import css from '../css/phonebook.module.css';
import { useSelector, useDispatch } from 'react-redux';
import authOperations from '../../redux/store/auth-operations';

const UserMenu = () => {
  const name = useSelector(state => state.user.user.name);
  const dispatch = useDispatch();

  return (
    <>
      <div className={css.user_menu}>
        <p as="em" fontSize="md" p="5px" color="white">
          Welcome <span className={css.user_text_span}>{name}</span>
        </p>
        <button
          className={css.user_menu_button}
          size="sm"
          type="button"
          onClick={() => {
            dispatch(authOperations.logOut());
          }}
        >
          Log out
        </button>
      </div>
    </>
  );
};

export default UserMenu;
