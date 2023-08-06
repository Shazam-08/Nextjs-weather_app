# Weather App with Next.js

This is a simple weather app built with Next.js, a popular React framework. The app allows users to search for the weather of a specific city and displays relevant weather information.

## Prerequisites

Before running the app, make sure you have the following:

- Node.js installed on your machine
- OpenWeatherMap API key (sign up at https://openweathermap.org/ to get one)

## Installation

1. Clone the repository:

```bash
git clone <repository_url>
cd weather-app-nextjs
```

2. Install dependencies:

```bash
npm install
```

## Usage

1. Create a `.env.local` file in the root of your project and add your OpenWeatherMap API key as `NEXT_PUBLIC_WEATHER_KEY`:

```env
NEXT_PUBLIC_WEATHER_KEY=your_api_key_here
```

2. Start the development server:

```bash
npm run dev
```

3. Open your web browser and go to `http://localhost:3000` to access the app.

## How the App Works

1. The user can type the name of a city in the search bar and press the search button (magnifying glass icon).

2. When the search button is clicked, the app makes a request to the OpenWeatherMap API to fetch the weather data for the entered city.

3. While the data is being fetched, a spinner is shown to indicate loading.

4. Once the data is fetched successfully, it is displayed on the screen, including the temperature, weather description, and other relevant information.

5. If the data cannot be fetched or the city is not found, an error message will be displayed.

## Components

The app consists of the following components:

- **Weather**: This component displays the weather information for the specified city.
- **Spinner**: This component displays a loading spinner while the weather data is being fetched.

## Dependencies

The app uses the following external dependencies:

- Next.js: A React framework for building server-side rendered React applications.
- Axios: A popular library for making HTTP requests.
- React Icons: A collection of popular icon sets for React.
- Next/Image: A Next.js component for optimizing images.
- Head: A Next.js component for adding metadata to the HTML head.

## Attribution

The background image used in the app is obtained from Unsplash (URL: https://images.unsplash.com/photo-1592210454359-9043f067919b).

