export interface Creator {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  fullName: string;
  modified: string;
  resourceURI: string;
  urls: Url[];
  thumbnail: Thumbnail;
  series: Series;
  stories: Stories;
  comics: Series;
  events: Series;
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

interface Series {
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