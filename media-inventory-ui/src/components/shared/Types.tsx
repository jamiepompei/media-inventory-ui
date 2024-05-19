export interface MediaItem {
  id: number;
  type: 'Movie' | 'Book' | 'Music';
  title: string;
  genre?: string;
  author?: string;
  artist?: string;
}

// Define the collection interface
export interface Collection {
  id: number;
  name: string;
  mediaItems: MediaItem[];
}