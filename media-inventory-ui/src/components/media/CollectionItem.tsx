import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton, 
  ListItemSecondaryAction,
  Typography
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Collection, MediaItem } from "../shared/Types";
import { useLocation, useNavigate } from "react-router-dom";

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
  };

  function handleEdit(item: MediaItem): void {
    item.artist;
    throw new Error("Function not implemented.");
  }

  function handleDelete(item: MediaItem): void {
    item.artist;
    throw new Error("Function not implemented.");
  }

  return (
    <Box mt={5}>
      <Typography variant="h5">
        Selected Collection: {collection.name}
      </Typography>
      <Box mt={5}>
        <></>
      </Box>
      <List>
        {userRole === "admin" && (
           <div style={{ display: 'flex', gap: '10px' }}>
           <Button 
             variant="contained" color="primary" 
             size="large"
           >
             Create New Media
           </Button> 
           <Button 
             variant="contained" color="primary" 
             size="large"
           >
             Update Collection
           </Button>
           <Button 
             variant="contained" color="primary" 
             size="large"
           >
             Delete Collection
           </Button>
         </div>
        )}
        {collection.mediaItems.map((item) => (
          <ListItem
            key={item.id}
            onClick={() => handleClick(item)}
            sx={{ cursor: "pointer" }}
          >
            <ListItemText
              primary={item.title}
              secondary={`${item.type} - ${
                item.genre || item.author || item.artist
              }`}
            />
            <div style={{ display: 'flex', gap: '10px' }}>
              <Button variant="outlined" color="primary" size="small">Edit</Button>
              <Button variant="outlined" color="error" size="small">Delete</Button>
            </div>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CollectionItem;
