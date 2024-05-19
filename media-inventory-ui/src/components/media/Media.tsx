import { Box, Button, List, ListItem, ListItemText, Typography} from '@mui/material';
import { MediaItem } from '../shared/Types';
import { useLocation } from 'react-router-dom';

const Media = () => {
  const location = useLocation();
  const media = location.state?.media as MediaItem;
  const userRole = location.state?.userRole as string;

    return (
        <Box mt={5}>
          <Typography variant="h5">Selected Media Item: {media.title}</Typography>
          <List>
              <ListItem key={media.id}>
                <ListItemText 
                  primary={media.title} 
                  secondary={`${media.type} - ${media.genre || media.author || media.artist}`} 
                />
                 {userRole === "admin" && <Button
                 variant="contained" color="primary" 
                 size="small"
                 >Edit Media Item</Button>}
              </ListItem>
          </List>
        </Box>
      );
};

export default Media;