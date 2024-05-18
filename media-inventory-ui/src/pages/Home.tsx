
import { Container, Box, Button } from '@mui/material';
import TypingAnimation from '../components/shared/typer/TypingAnimation';
import CollectionPage from '../components/media/Collection';
import WelcomeMessage from '../components/media/WelcomeMessage';

interface HomePageProps {
    isLoggedIn: boolean; // Define the type of isLoggedIn prop
  }

const HomePage: React.FC<HomePageProps> = ({ isLoggedIn }) => {
  return (
    <Container>
         {isLoggedIn ? (
            <>
            <Box width={"100%"} height={"100%"} marginTop={10} />
            <CollectionPage></CollectionPage>
            <Box width={"100%"} height={"100%"} />
            </>
          ) : (
          <Box width={"100%"} height={"100%"}>
            <Box sx={{ 
                display: "flex", 
                width: "100%",
                flexDirection: "column",
                alignItems: "center",
                mx: "auto",
                mt: 3,
                }}>
                <Box sx={{ marginBottom: '100px' }}>
                    <TypingAnimation />
                </Box>
                <Box mt="20px">
                {!isLoggedIn && (
                    <Box mt={3} display="flex" gap={4}>
                    <Button variant="contained" color="primary" size="large">
                        Log In
                    </Button>
                    <Button variant="contained" color="secondary" size="large">
                        Sign Up
                    </Button>
                    </Box>
                )}
                </Box>
            </Box>
        </Box>
            )
        }
    </Container>
  );
};

export default HomePage;