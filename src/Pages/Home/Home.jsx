import { useSelector } from 'react-redux';
import style from '../../components/css/phonebook.module.css';
import { StyledLink } from './Home.styled';

const Home = () => {
  const isLoggIn = useSelector(state => state.user.isLoggedIn);
  return (
    <div className={style.home_container}>
      <h1 className={style.home_heading}>Ultimate phone book!!</h1>
      {isLoggIn ? (
        <StyledLink to="/contacts">Your contacts</StyledLink>
      ) : (
        <StyledLink to="/login">Log In </StyledLink>
      )}
    </div>
  );
};

export default Home;
