import { AuthList, AuthItem, StyledLink } from './AuthMenu.styled';

const AuthMenu = () => {
  return (
    <AuthList>
      <AuthItem>
        <StyledLink to="/register">
          <p>Sign up</p>
        </StyledLink>
      </AuthItem>
      <AuthItem>
        <StyledLink to="/login">
          <p>Log in</p>
        </StyledLink>
      </AuthItem>
    </AuthList>
  );
};
export default AuthMenu;
