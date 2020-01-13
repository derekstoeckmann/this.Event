![this.Event Logo](/screenshots/logo.png)

# this.Event

this.Event is an event and meetup application that allows users to find and host events.

# Table of Contents

- [Description](#description)
- [Link](#link)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Technologies](#technologies)
- [Developers](#developers)
- [License](#license)

# Description

this.Event allows users to find nearby events, RSVP to events, host events, and manage events they are hosting.

# Link

[this.Event](https://immense-dawn-90138.herokuapp.com/)

# Features

- Search for events on a certain day, near a certain ZIP code, or near the user's current location
- View events you are hosting or attending via the event dashboard
- Get all the important info about an event on the event's profile page
- RSVP for upcoming events, and see who else is attending
- Create, update, and cancel events you are hosting using the event management page

# Installation

1. Clone the project:

```
git clone https://github.com/derekstoeckmann/this.Event.git
```

2. Navigate into the project folder and install the dependencies:

```
cd this.Event
npm install
```

3. Start the development server:

```
node server.js
```

4. In a new terminal window, navigate into the client folder and install the client dependencies:

```
cd this.Event/client
npm install
```

5. Start the client:

```
npm start
```

6. In your browser, navigate to:

```
http://localhost:3000/
```

# Usage

Upon visiting the app for the first time, you will need to create an account in order to proceed. After you submit your user information, you will be redirected to a confirmation page and a confirmation number will be emailed to you.

![Sign up](/screenshots/sign-up.png)

After you confirm your account, you will be redirected to your event dashboard. No events will be displayed at first (since you are not attending or hosting any yet). However, you can search for upcoming events, or create an event of your own.

![Dashboard](/screenshots/dashboard-no-events.png)

When you create an event, you can type the event address into the search box under the map and it will automatically populate your event address info with the map address.

![Create event map](/screenshots/create-event-map.png)

Once you have created or RSVP'd for events, they will be displayed on your event dashboard:

![Events display](/screenshots/events-display.png)

# API

## Events

### Get all events (with optional parameters)

| Method | Route         | Description     |
| :----- | :------------ | :-------------- |
| GET    | `/api/events` | Gets all events |

This route will send a JSON response in the following format:

```
{
  "success": true,
  "count": 1,
  "data": [
    {
      "location": {
        "type": "Point",
        "coordinates": [
          -77.036560,
          38.897957
        ],
        "name": "The White House",
        "address": "1600 Pennsylvania Ave NW",
        "city": "Washington",
        "state": "DC",
        "zipcode": "20500"
      },
      "attending": [],
      "highlights": [
        "",
        "",
        "",
        "",
        ""
      ],
      "public": true,
      "tags": [],
      "_id": "1a2b3c4d5e6f7g8h9i9j0k1l",
      "user": "1a2b3c4d5e6f7g8h9i9j0k1l",
      "title": "First Presidential Inauguration",
      "description": "GW will be first prez!",
      "time": "1789-04-30T00:00:00.000Z",
      "createdAt": "1789-04-30T00:00:00.000Z",
      "updatedAt": "1789-04-30T00:00:00.000Z",
      "shortDescription": "GW will be first prez!",
      "__v": 0
    }
  ]
}
```

### Including query parameters

You may query for events by including the parameters in your request URL.

Example:

```
/api/events?public=true&user=1a2b3c4d5e6f7g8h9i9j0k1l
```

### Get all events near a given location (geospatial queries)

| Method | Route              | Description                           |
| :----- | :----------------- | :------------------------------------ |
| GET    | `/api/events/near` | Gets all events near a given location |

You may query for events within a given radius if you include distance, latitude, and longitude in your request URL in the following format: `/api/events/near?distance=<MILES>&lat=<LATITUDE>&lng=<LONGITUDE>`.

Example:

```
/api/events/near?distance=25&lat=38.897957&lng=-77.036560
```

### More event routes

| Method | Route                            | Description                            |
| :----- | :------------------------------- | :------------------------------------- |
| GET    | `/api/events/:eventid`           | Gets an event by ID                    |
| GET    | `/api/events/:eventid/attending` | Gets all users attending a given event |
| POST   | `/api/events/:eventid`           | Creates an event                       |
| PUT    | `/api/events/:eventid`           | Updates an event                       |
| DELETE | `/api/events/:eventid`           | Deletes an event                       |

## Users

### Get all users (with optional parameters)

| Method | Route        | Description    |
| :----- | :----------- | :------------- |
| GET    | `/api/users` | Gets all users |

This route will send a JSON response in the following format:

```
{
  "success": true,
  "count": 1,
  "data": [
    {
      "_id": "1a2b3c4d5e6f7g8h9i9j0k1l",
      "firstName": "George",
      "lastName": "Washington",
      "email": "gwashington@whitehouse.gov",
      "createdAt": "1732-02-22T00:00:00.000Z",
      "updatedAt": "1732-02-22T00:00:00.000Z",
      "fullName": "George Washington",
      "__v": 0
    }
  ]
}
```

### Including query parameters

You may query for users by including parameters in your request URL.

Example:

```
/api/users?firstName=Bob&lastName=Ross
```

### More user routes

| Method | Route                          | Description                               |
| :----- | :----------------------------- | :---------------------------------------- |
| GET    | `/api/users/:userid`           | Gets a user by ID                         |
| GET    | `/api/users/:userid/attending` | Gets all events a given user is attending |
| GET    | `/api/users/:userid/hosting`   | Gets all events a given user is hosting   |
| POST   | `/api/users`                   | Creates a user                            |
| PUT    | `/api/users/:userid`           | Updates a user by ID                      |
| DELETE | `/api/users/:userid`           | Deletes a user by ID                      |

# Technologies

- [NodeJS](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [React](https://reactjs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/) & [Cognito](https://aws.amazon.com/cognito/)
- [Google Maps API](https://developers.google.com/maps/documentation)
- [Axios](https://github.com/axios/axios)
- [Moment.js](https://momentjs.com/)

# Developers

- [Aaron Angle](https://github.com/aaronangle)
- [Chris Neal](https://github.com/chrisneal72)
- [Derek Stoeckmann](https://github.com/derekstoeckmann)

# License

[MIT](https://opensource.org/licenses/MIT)
