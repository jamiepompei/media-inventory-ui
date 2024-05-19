import React, { useState } from 'react';
import { Container, Box, Typography, ImageList, ImageListItem} from '@mui/material';
import WelcomeMessage from './WelcomeMessage';
import { Collection } from '../shared/Types'
import { Link, useNavigate } from 'react-router-dom';

interface CollectionPagesProps {
  collections: Collection[];
  role: string;
}


const CollectionsPage: React.FC<CollectionPagesProps> = ({ collections, role }) =>  {
    const navigate = useNavigate();

    const user = {
      userName: "Jamie",
      role: {role},
      isCollectionEmpty: () => isCollectionEmpty(collections)
    }

    const isCollectionEmpty = (collection: Collection[]) => {
      return collection.length === 0;
    }

    const handleClick = (collection: Collection) => {
      console.log("clicked collection:", collection);
      navigate(`/collection/${collection.id}`, { state: { collection } });
    }

    return (
      <>
      <Box sx={{ mb: '10px' }}>
        <WelcomeMessage userName={user.userName} isCollectionEmpty={user.isCollectionEmpty()}
        ></WelcomeMessage>
      </Box>
        <Container>
            {collections.length > 0 ? (
              <ImageList cols={3} gap={16}>
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
              </ImageList>
            ) : (
              <Box height="100%" display="flex" justifyContent="center" alignItems="center">
                <Box>
                  <Box
                    display="flex"
                    mt="50px"
                    alignItems="center"
                    justifyContent="center"
                    height="15vh"
                    border="2px solid #ccc"
                    borderRadius="8px"
                    sx={{ cursor: 'pointer', textAlign: 'center' }}
                  >
                    <Typography variant="h6" sx={{ padding: '50px' }}>Create a Collection</Typography>
                  </Box>
                </Box>
              </Box>
            )}
        </Container>
        </>
      );
  };
  
  export default CollectionsPage;