import { Box, Button, List, ListItem, ListItemText, Typography} from '@mui/material';
import { MediaItem } from '../shared/Types';
import { useLocation } from 'react-router-dom';

interface MediaItemProps {
    role: string;
  }

const Media: React.FC<MediaItemProps> = ({ role}) => {
  const location = useLocation();
  const media = location.state?.media as MediaItem;

    return (
        <Box mt={5}>
          <Typography variant="h5">Selected Media Item: {media.title}</Typography>
          <List>
              <ListItem key={media.id}>
                <ListItemText 
                  primary={media.title} 
                  secondary={`${media.type} - ${media.genre || media.author || media.artist}`} 
                />
                 {role === "admin" && <Button>Edit Media Item</Button>}
              </ListItem>
          </List>
        </Box>
      );
};

export default Media;