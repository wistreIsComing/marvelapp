export interface Character {
  id: string;
  name: string;
  description: string;
  modified: string;
  resourceURI: string;
  urls: Url[];
  thumbnail: Thumbnail;
  comics: Comics;
  stories: Stories;
  events: Comics;
  series: Comics;
}

interface Stories {
  available: string;
  returned: string;
  collectionURI: string;
  items: Item2[];
}

interface Item2 {
  resourceURI: string;
  name: string;
  type: string;
}

interface Comics {
  available: string;
  returned: string;
  collectionURI: string;
  items: Item[];
}

interface Item {
  resourceURI: string;
  name: string;
}

interface Thumbnail {
  path: string;
  extension: string;
}

interface Url {
  type: string;
  url: string;
}
