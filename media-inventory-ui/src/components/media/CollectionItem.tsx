import { Box, Button, List, ListItem, ListItemText, Typography} from '@mui/material';
import { Collection, MediaItem } from "../shared/Types";
import { useLocation, useNavigate } from 'react-router-dom';


  const CollectionItem = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const collection = location.state?.collection as Collection;
    const userRole = location.state?.userRole as string;
    
    if (!collection) {
        return <Typography variant="h5">Collection not found</Typography>;
      }

      const handleClick = (media: MediaItem) => {
        console.log("clicked media:", media);
        navigate(`/media/${media.id}`, { state: { media, userRole } });
      }
    
      return (
        <Box mt={5}>
          <Typography variant="h5">Selected Collection: {collection.name}</Typography>
          <List>
          {userRole === "admin" && <Button
          variant="contained" color="primary" 
          size="large"
          >Edit Collection</Button>}
            {collection.mediaItems.map((item) => (
              <ListItem key={item.id}
              onClick={() => handleClick(item)}
              sx={{ cursor: 'pointer'}}>
                <ListItemText 
                  primary={item.title} 
                  secondary={`${item.type} - ${item.genre || item.author || item.artist}`} 
                />  
              </ListItem>
            ))}
          </List>
        </Box>
      );
    };

    export default CollectionItem;