# healthPlaces

A react native app that aggregates all the places in the world where health facilities are located

### Run App

1. clone this repo
2. run `yarn install`
3. make sure you have expo installed and run `expo start`

### Description

This app greatly depends on google map and hence there's need to obtain google map/places API before running the application.
To obtain the API follow this [link](https://developers.google.com/places)

### Technical decision

At first I sketched the visual representation of the application to help me ascertian how the code structure will look like.

Given that i am not the user, i subjected my self as a user to enable me determine how the user can view the app and navigate freely, Thus i designed the screen navigations from the decision made

As an app that depends on massive data, the other major thing I considered while designing the app was how to pass down data efficiently to avoid poor performance.
After several considerations and I decided to use `react redux` and `navigation params` to pass data around the application.
