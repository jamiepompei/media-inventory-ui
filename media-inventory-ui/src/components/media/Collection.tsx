import { Container, Box, Typography, ImageList, ImageListItem} from '@mui/material';

// Sample data for user collections
const userCollections = [
    { id: 1, name: 'Movies' },
    { id: 2, name: 'Books' },
    { id: 3, name: 'Music' },
  ];

const handleClick = (id: number | null) => {
  if (id == null) {
    console.log("clicked create new collection");
  } else {
    console.log("clicked collection id:",id);
  }
}
  
  const CollectionPage = () => {
    return (

        <Container>
            {userCollections.length > 0 ? (
              <ImageList cols={3} gap={16}>
                {userCollections.map((collection) => (
                  <ImageListItem key={collection.id} onClick={() => handleClick(collection.id)}>
                    <Box
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
                    alignItems="center"
                    justifyContent="center"
                    height="15vh"
                    border="2px solid #ccc"
                    borderRadius="8px"
                    sx={{ cursor: 'pointer', textAlign: 'center' }}
                    onClick={() => handleClick(null)}
                  >
                    <Typography variant="h6" sx={{ padding: '10px' }}>Create a Collection</Typography>
                  </Box>
                </Box>
              </Box>
            )}
        </Container>
      );
  };
  
  export default CollectionPage;