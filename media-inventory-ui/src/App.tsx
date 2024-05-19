import Header from "./components/shared/Header";
import { Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import CollectionItem from './components/media/CollectionItem';
import { Collection } from "./components/shared/Types";
import Media from "./components/media/Media";

// Sample data for user collections
const userCollections: Collection[] = [
  {
    id: 1,
    name: "Jamie's Collection 1",
    mediaItems: [
      { id: 1, type: 'Movie', title: 'Inception', genre: 'Sci-Fi' },
      { id: 2, type: 'Book', title: 'To Kill a Mockingbird', author: 'Harper Lee' },
      { id: 3, type: 'Music', title: 'Bohemian Rhapsody', artist: 'Queen' },
    ]
  },
  {
    id: 2,
    name: "Jamie's Collection 2",
    mediaItems: [
      { id: 1, type: 'Movie', title: 'The Dark Knight', genre: 'Action' },
      { id: 2, type: 'Book', title: '1984', author: 'George Orwell' },
      { id: 3, type: 'Music', title: 'Hotel California', artist: 'Eagles' },
    ]
  },
  {
    id: 3,
    name: "Jamie's Collection 3",
    mediaItems: [
      { id: 1, type: 'Movie', title: 'Interstellar', genre: 'Sci-Fi' },
      { id: 2, type: 'Book', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
      { id: 3, type: 'Music', title: 'Imagine', artist: 'John Lennon' },
    ]
  }
];

const App: React.FC = () => {
  return (
  <main>
    <Header />
      <Routes>
        <Route path="/" element={<Home isLoggedIn={true} collections={userCollections} />} />
        <Route  path="/collection/:id" element={<CollectionItem role={"admin"} />} />
        <Route  path="/media/:id" element={<Media role={"admin"} />} />
      </Routes>
  </main>
  );  
}

export default App;