import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_WEATHER_API_URL;

export const getWeather = async (city) => {
  try {
    const response = await axios.get(`${apiUrl}/weather`, {
      params: {
        q: city,
        appid: apiKey,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Unable to fetch weather data.');
  }
};
