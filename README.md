[![Maintainability](https://api.codeclimate.com/v1/badges/b6133b355e6931230dcd/maintainability)](https://codeclimate.com/github/Bonifase/Game-board/maintainability)

# [Game Board](https://web-game-board.herokuapp.com)

> ### Gameboard codebase containing real world examples (CRUD, auth, advanced patterns, etc)

## Getting started

You can view a live demo over at [Game Board](https://web-game-board.herokuapp.com)

To get the frontend running locally:

- Clone this repo
- `npm install` to install all required dependencies
- `npm start` to start the local server (this project uses create-react-app)

Local web server will use React's port 3000. You can configure port in scripts section of `package.json`

Alternatively, you can add `.env` file in the root folder of project to set environment variables (use PORT to change webserver's port). This file will be ignored by git, so it is suitable for API keys and other sensitive stuff. Refer to [dotenv](https://github.com/motdotla/dotenv) and [React](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-development-environment-variables-in-env) documentation for more details. Also, please remove setting variable via script section of `package.json` - `dotenv` never override variables if they are already set.

### Making requests to the backend API

For convenience, we have a live API server running at [Game Board API](https://web-game-board-api.herokuapp.com/api) for the application to make requests against.

The source code for the backend server (available for Node) can be found in the [Game board api](https://github.com/Bonifase/Game-board-api).

**General functionality overview:**

- Authenticate users via JWT (login/signup pages + logout button and reset password)
- CRU\* users (sign up & settings page - no deleting required)
- CRUD Games
- CR\*D Comments on games (no updating required)
- GET and display paginated lists of games
- Favorite games
- Follow other users

<br />

[Brought to you by Bonifase](https://twitter.com/BonifaseOrwa?lang=en)
