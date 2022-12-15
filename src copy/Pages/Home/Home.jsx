import { useSelector } from 'react-redux';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { StyledLink } from './Home.styled';

const Home = () => {
  const isLoggIn = useSelector(state => state.user.isLoggedIn);
  return (
    <>
      <Box as="main">
        <Container maxW="container.lg" pt="100px">
          <Heading color="white" as="em">
            Hi everyone!
          </Heading>
          {isLoggIn ? (
            <StyledLink to="/contacts">
              <Text fontSize="xl">Your contacts</Text>
            </StyledLink>
          ) : (
            <StyledLink to="/login">
              <Text fontSize="xl">Log In</Text>{' '}
            </StyledLink>
          )}
        </Container>
      </Box>
    </>
  );
};

export default Home;
