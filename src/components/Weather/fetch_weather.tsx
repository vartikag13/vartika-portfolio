import { fetchWeatherApi } from 'openmeteo';
import { useEffect, useState } from 'react';
import './weather.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faMoon } from '@fortawesome/free-solid-svg-icons';

interface CurrentWeather {
    current: {
        time: Date;
        temperature2m: number;
        isDay: number;
    };
}

const WeatherAPI = () => {
    const [weather, setWeather] = useState<CurrentWeather[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const params = {
                latitude: 45.4112,
                longitude: -75.6981,
                current: ['temperature_2m', 'is_day'],
                timezone: 'auto',
                forecast_days: 1
            };
            const url = 'https://api.open-meteo.com/v1/forecast';
            const responses = await fetchWeatherApi(url, params);

            // Process first location. Add a for-loop for multiple locations or weather models
            const response = responses[0];

            const utcOffsetSeconds = response.utcOffsetSeconds();

            const current = response.current()!;

            // Note: The order of weather variables in the URL query and the indices below need to match!
            const weatherData = {
                current: {
                    time: new Date(
                        (Number(current.time()) + utcOffsetSeconds) * 1000
                    ),
                    temperature2m: current.variables(0)!.value(),
                    isDay: current.variables(1)!.value()
                }
            };
            setWeather([weatherData]);
        };
        fetchData();
    }, []);

    if (weather[0]) {
        console.log(weather[0].current.isDay);
        const currentTemp = Math.ceil(weather[0].current.temperature2m);
        const date = weather[0].current.time.toLocaleDateString('en-US', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
        const day = weather[0].current.isDay ? (
            <FontAwesomeIcon icon={faCloudSun} className="nav-icon" />
        ) : (
            <FontAwesomeIcon icon={faMoon} className="nav-icon" />
        );
        return (
            <div className="widget-container">
                Ottawa, ON__{currentTemp}&deg;C __ {date} __ {day}
            </div>
        );
    }
    return <div></div>;
    //return weather;
};

export default WeatherAPI;
