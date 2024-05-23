import React from 'react';
import { Container, Box, Typography, ImageList, ImageListItem, Button} from '@mui/material';
import WelcomeMessage from './WelcomeMessage';
import { Collection } from '../shared/Types'
import { useNavigate } from 'react-router-dom';

interface CollectionPagesProps {
  collections: Collection[];
  userRole: string;
}

const CollectionsPage: React.FC<CollectionPagesProps> = ({ collections, userRole }) =>  {
    const navigate = useNavigate();

    const user = {
      userName: "Jamie",
      userRole: {userRole},
      isCollectionEmpty: () => isCollectionEmpty(collections)
    }

    const isCollectionEmpty = (collection: Collection[]) => {
      return collection.length === 0;
    }

    const handleClick = (collection: Collection) => {
      console.log("clicked collection:", collection);
      navigate(`/collection/${collection.id}`, { state: { collection, userRole } });
    }

    return (
      <>
      <Box sx={{ mb: '10px' }}>
        <WelcomeMessage userName={user.userName} isCollectionEmpty={user.isCollectionEmpty()}
        ></WelcomeMessage>
      </Box>
        <Container>
            {collections.length > 0 ? (
               <> 
               {userRole === "admin" &&
               <div style={{ display: 'flex', gap: '10px' }}>
              <Button
                variant="contained" color="primary"
                size="large"
              >
                Update Collections
              </Button>
              <Button
                variant="contained" color="primary"
                size="large"
              >
                Create Collection
              </Button>
              <Button
                variant="contained" color="primary"
                size="large"
              >
                Delete Collection
              </Button>
            </div>
               }<ImageList cols={3} gap={16}>
                {collections.map((collection) => (
                  <ImageListItem key={collection.id} onClick={() => handleClick(collection)}>
                    <Box
                      mt="50px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      height="100px"
                      border="2px solid #ccc"
                      borderRadius="8px"
                      sx={{ cursor: 'pointer', textAlign: 'center', padding: '2px' }}
                    >
                      <Typography variant="h6">{collection.name}</Typography>
                    </Box>
                  </ImageListItem>
                ))}
              </ImageList></>
            ) : (
              <Box height="100%" display="flex" justifyContent="center" alignItems="center">
                <Box>
                    {userRole === "admin" && 
                    <Typography variant="h6" sx={{ padding: '50px' }}>Create a Collection</Typography> &&
                    <Button 
                    variant="contained" color="primary" 
                    size="large"
                    >Create NewCollection</Button>
                  }
                  </Box>
                </Box>
             
            )}
        </Container>
        </>
      );
  };
  
  export default CollectionsPage;