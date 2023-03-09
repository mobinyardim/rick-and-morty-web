<h1 align="center">Rick and Morty Api's and Web App</h1>

<p>
Rick and Morty web is a web application that allows users to browse and search for information about characters, locations, and episodes from the popular animated television series <a href="https://www.imdb.com/title/tt2861424/">"Rick and Morty"</a>.
</p>

https://user-images.githubusercontent.com/31635962/223976359-6fd22780-5207-4246-bb8a-bf6e296fd930.mp4

# Tech Stack

## Backend

- TypeScript
- Express
- MongoDB
  - <a href="https://github.com/Automattic/mongoose">mongoose</a> for object modeling and connecting to mongo
  - <a href="https://github.com/jdesboeufs/connect-mongo">connect-mongo</a> for saving user session in mongoDB

### Features

- #### User
    - Sign up new user
    - Login
    - Logout from current session
    - Get current user information
    - Get user information with userId
- #### Characters
    - create new character
    - update character
    - delete character
    - get all characters with paging
    - get character with id
    - populate database with <a href="https://rickandmortyapi.com/">RickAndMortyApi.com</a> charcters

## Frontend

- TypeScript
- React.js
- <a href="https://reactrouter.com/en/main">React-Router</a>
- <a href="https://immerjs.github.io/immer/">Immer</a>
- <a href="https://react-hook-form.com/">React hook form</a> - Form Validation
- <a href="https://docs.pmnd.rs/zustand">Zustand</a>
- <a href="https://tailwindcss.com/">Tailwind</a> - CSS Utility classes
- <a href="https://www.material-tailwind.com/">Material Tailwind</a> - Component library
- <a href="https://react-buddy.com/">React Buddy</a> - Preview components in IDE

### Features

- ### Screens
  - Sign Up
  - Login
  - Main (Navigation rail + Current Session + Logout + nested routes)
    - Home (Shows first page of characters + Shimmer Loading)
    - Characters (Shows all characters with infinite scroll + Shimmer Loading)
    - Locations (TODO)
    - Episodes (TODO)
- ### Custom Components
  - NavBar (Responsive Side Navigation)

- ### Loaders
  - React Router Utils - utility functions to deffer type to useLoaderData hook
  - CharactersLoader - hold charactersLoader type
  - UserLoader - hold userLoader type

- ### RemoteSource
  - Sources - hold the singleton instance of remote sources
  - CharactersRemoteSource - An interface and implementation of it for CRUD operations on characters with api
  - UserRemoteSource - An interface and implementation of it for user operations with api

## Models

<p>A pure typescript module that holds domain models of backend and frontend packages</p>
