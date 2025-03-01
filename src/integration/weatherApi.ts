import axios from 'axios';
import axiosRetry from 'axios-retry';



// Apply retry logic to axios
axiosRetry(axios, {
  retries: 3, // Number of retries
  retryDelay: (retryCount) => {
    console.log(`Retry attempt: ${retryCount}`);
    return retryCount * 1000; // Delay in ms
  },
  retryCondition: (error) => {
    // Retry only on network errors or 5xx status codes
    return axiosRetry.isNetworkOrIdempotentRequestError(error) || error.response?.status >= 500;
  },
});

const  getWeatherApi = async (city: string) =>  {
  try {
    const response = await axios.get(process.env.WEATHER_API_URL, {
      params: {
        key: process.env.WEATHER_API_TOKEN,
        q: city,
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching weather:', error.message);
      if (error.response) {
        console.error('Response data:', error.response.data);
      }
    } else {
      console.error('Unexpected error:', error);
    }
  }
}

// Example usage:
export default getWeatherApi;
