# Sheila Music

## Introduction

[![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react)

Sheila Music is a web application that integrates with the Spotify Music API. Users can sign in to their Spotify account and browse their playlists, search for songs, and listen to music directly from the app. Sheila Music is built using a variety of technologies, including Axios, Express, dotenv, Spotify-web-api-node, and React-spotify-web-playback.

## Features

- Authentication: Users can sign in with their Spotify account to access their playlists and songs.
- Song searching: Users can search for songs, artists, and albums in the Spotify library.
- Song playback: Users can listen to songs directly from the app using the Spotify Web Playback SDK.
- Responsive design: The app is optimized for desktop and mobile devices.

## Installation

To install and run Sheila Music on your local machine, follow these steps:

- Clone the repository to your local machine.
- Navigate to the project directory in your terminal.
- Run npm install to install the project dependencies.
- Create a .env file in the root directory of the project and add the following variables:

```env
  CLIENT_ID=<your Spotify app client ID>
  CLIENT_SECRET=<your Spotify app client secret>
  REDIRECT_URI=http://localhost:3000/callback
```

- Start the server by running npm start.
- Navigate to http://localhost:3000 in your web browser.

## Technologies

Sheila Music is built using the following technologies:

- `Axios`: Used for making HTTP requests to the Spotify API.
- `Express`: Used for handling server-side API requests and routing.
- `dotenv`: Used for loading environment variables from a .env file.
- `Spotify-web-api-node`: Used for interacting with the Spotify API.
- `React-spotify-web-playback`: Used for playing music directly in the app using the Spotify Web Playback SDK.

## Development

To contribute to Sheila Music, follow these steps:

- Fork the repository to your own Github account.
- Clone the repository to your local machine.
- Follow the installation instructions above.
- Create a new branch for your feature or bug fix.
- Make your changes and test them locally.
- Push your changes to your forked repository.
- Submit a pull request to the original repository.

## License

Sheila Music is licensed under the MIT License.
