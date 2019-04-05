# React Weather App

- <a href='#instructions'>Instructions</a>
- <a href='#built'>Built With</a>
- <a href='#tech'>Technology Choices</a>
- <a href='#requirements'>Requirements</a>

<hr>

## Instructions:

1. Navigate to [repo](https://github.com/caittpayne/react-weather-app)
2. Clone locally using `git clone https://github.com/caittpayne/react-weather-app`
3. Install dependencies using `npm install`
4. Update Zip Code API key
5. Run tests using `npm test`
6. Start your server using `npm start`
7. Navigate to app in [browser](http://localhost:3000)
8. Enjoy!

You can also check out the live site [here](https://caittpayne-react-weather-app.netlify.com/)!

## Built With: <a id="built"></a>

- React.js
- CSS
- Jest & Enzyme

### Third Party APIs

- [National Weather Service](https://www.weather.gov/documentation/services-web-api)
-  [Zip Code API](https://www.zipcodeapi.com/api)

## Technology Choices:

I chose to use React.js for this application and [Create React App](https://github.com/facebook/create-react-app) for the scaffolding. Instead of using a CSS framework, I opted to style it with just CSS (utilizing Flexbox). For the zip code form and validation, I used the [Formik](https://www.npmjs.com/package/formik) and [Yup](https://www.npmjs.com/package/yup) libraries.

In starting this project, I wanted to include a test suite. Unlike my experience developing Node.js projects, I had never written tests for a React application. I chose to use [Jest](https://www.npmjs.com/package/jest) and [Enzyme](https://www.npmjs.com/package/enzyme). It's been a great experience to familiarize myself with these tools;
however, I definitely need more practice. I'll use this project moving forward to practice writing more complex tests. I don't have a lot of code coverage right now!


## Requirements:

#### Allow User to Enter a Zip Code

I've added a form for users to enter their zip codes.

#### Validate Format of Zip Code

Zip codes are validated to verify the input is exactly five numbers. If the input is invalid or is not entered, the user is alerted with a message.

#### Use Public Web Service to Retrieve Weather Corresponding to Zip Code

Upon submitting the form, the functions `setLocation()` and `getForecast()` are called. These two functions pull data and populate `this.state`, so the weather component can use it to display the forecast.

#### Display Today's Weather 

The current date's weather, as well as the next three days, are displayed for the user after submitting their zip code. The forecast is passed to the weather component and `map()` is used to iterate through the days and display the data.

## Appearance:

![Zip Code Form](./public/assets/weather-app-zip.png?raw=true) ![Weather Data](./public/assets/weather-app-display.png?raw=true)