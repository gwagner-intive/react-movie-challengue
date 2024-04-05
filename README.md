# React Movie Challenge

This project is a simple movie search application built with React and TypeScript. It uses the OMDB API to fetch movie data.

## Features

- Search for movies by title
- Displays movie title, year, and image
- Shows a loading indicator while searching
- Validates search input to be at least 3 characters
- Displays search results in a responsive grid
- Prevents the same search from being performed twice in a row
- Automatically performs search as you type, with debounce to prevent continuous searching

## Installation

To install the project, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/agomesp/react-movie-challengue.git
```

2. Navigate to the project directory:

```bash
cd react-movie-challengue
```

3. Install the dependencies:

```bash
npm install
```

## Usage

To start the application, run:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## Testing

To run the tests, use the following command:

```bash
npm test
```

## Hooks

The application uses several custom hooks:

- `useMovieSearch`: This hook manages the movie search functionality. It handles the search input, button state, loading state, and page changes. It also fetches the movie data from the API.

- `useDebounce`: This hook is used to debounce the search input, preventing continuous searching as the user types.

## Store

The application uses a custom store hook, `useMovieStore`, to manage the state of the movie data.

## Components

The application includes several components:

- `Search`: This component displays the search input and button.

- `Movies`: This component displays the search results in a responsive grid.

- `Pagination`: This component handles the pagination of the search results.

## API

The application uses the OMDB API to fetch movie data. You will need to obtain your own API key from the [OMDB website](https://www.omdbapi.com/) and add it to your environment variables.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License.

# react-movie-challengue
We want to create a Movie App with React

API to be used: https://www.omdbapi.com/ 
You should get your API Key from the web page, signing your email, and use it to fetch.

Requirements:

✅ It has to show an input to filter the list of movies, and a buton to perform the search.

✅ It shows the movies, the title, year and the Image.

✅ It has to show a loading when searching

✅ It has to be a form, and validate that it has at least 3 characters

✅ It has to be a responsive grid of movies

-----------------------------------------

Suggestions:

✅ Prevent the same search from being done twice in a row. (useRef)

✅ Make the search automatically when you type.

✅ Avoide searching continuously when typing (with debounce or useTransition)

✅ use minimal css; ui css library or components is not needed.

We recommend this stack:
 Typescript, Vite, ESLint, Jest


