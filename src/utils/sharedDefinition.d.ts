// Defines the interface of the properties of the Show data component
interface Show {
  name: string;
  image: string;
}

// Defines the interface of the properties of the Show as an array
interface Shows extends Array<Show> {}
