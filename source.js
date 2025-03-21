const countries = [
    { name: "Algeria", latitude: 28.0339, longitude: 1.6596 },
    { name: "Angola", latitude: -11.2027, longitude: 17.8739 },
    { name: "Benin", latitude: 9.3075, longitude: 2.3158 },
    { name: "Botswana", latitude: -22.3285, longitude: 24.4686 },
    { name: "Burkina Faso", latitude: 12.2383, longitude: -1.5616 },
    { name: "Burundi", latitude: -3.3731, longitude: 29.9189 },
    { name: "Cameroon", latitude: 3.8480, longitude: 11.5021 },
    { name: "Cape Verde", latitude: 16.5388, longitude: -23.0418 },
    { name: "Central African Republic", latitude: 6.6111, longitude: 20.9394 },
    { name: "Chad", latitude: 15.4542, longitude: 18.7322 },
    { name: "Comoros", latitude: -11.8750, longitude: 43.8722 },
    { name: "Democratic Republic of the Congo", latitude: -4.0383, longitude: 21.7587 },
    { name: "Republic of the Congo", latitude: -0.2280, longitude: 15.8279 },
    { name: "Djibouti", latitude: 11.8251, longitude: 42.5903 },
    { name: "Egypt", latitude: 26.8201, longitude: 30.8025 },
    { name: "Equatorial Guinea", latitude: 1.6508, longitude: 10.2679 },
    { name: "Eritrea", latitude: 15.1794, longitude: 39.7823 },
    { name: "Eswatini", latitude: -26.5225, longitude: 31.4659 },
    { name: "Ethiopia", latitude: 9.145, longitude: 40.4897 },
    { name: "Gabon", latitude: -0.8037, longitude: 11.6094 },
    { name: "The Gambia", latitude: 13.4432, longitude: -15.3101 },
    { name: "Ghana", latitude: 7.9465, longitude: -1.0232 },
    { name: "Guinea", latitude: 9.9456, longitude: -9.6966 },
    { name: "Guinea-Bissau", latitude: 11.8037, longitude: -15.1804 },
    { name: "Ivory Coast", latitude: 7.5390, longitude: -5.5471 },
    { name: "Kenya", latitude: -1.2921, longitude: 36.8219 },
    { name: "Lesotho", latitude: -29.6091, longitude: 28.2336 },
    { name: "Liberia", latitude: 6.4281, longitude: -9.4295 },
    { name: "Libya", latitude: 26.3351, longitude: 17.2283 },
    { name: "Mauritania", latitude: 21.0079, longitude: -10.9402 },
    { name: "Morocco", latitude: 31.7917, longitude: -7.0926 },
    { name: "Namibia", latitude: -22.9576, longitude: 18.4904 },
    { name: "Niger", latitude: 17.6078, longitude: 8.0817 },
    { name: "Nigeria", latitude: 9.082, longitude: 8.6753 },
    { name: "Rwanda", latitude: -1.9403, longitude: 29.8739 },
    { name: "São Tomé and Príncipe", latitude: 0.1863, longitude: 6.6131 },
    { name: "Senegal", latitude: 14.6928, longitude: -14.0079 },
    { name: "Seychelles", latitude: -4.6796, longitude: 55.4915 },
    { name: "Sierra Leone", latitude: 8.4606, longitude: -11.7799 },
    { name: "Somalia", latitude: 5.1521, longitude: 46.1996 },
    { name: "South Africa", latitude: -30.5595, longitude: 22.9375 },
    { name: "South Sudan", latitude: 6.8777, longitude: 31.3070 },
    { name: "Sudan", latitude: 12.8628, longitude: 30.8025 },
    { name: "Tanzania", latitude: -6.369028, longitude: 34.888822 },
    { name: "Togo", latitude: 7.4465, longitude: 1.5021 },
    { name: "Tunisia", latitude: 33.8869, longitude: 9.5375 },
    { name: "Uganda", latitude: 1.3733, longitude: 32.2903 },
    { name: "Western Sahara", latitude: 24.2155, longitude: -12.8850 },
    { name: "Zambia", latitude: -13.1339, longitude: 27.8493 },
    { name: "Zimbabwe", latitude: -19.0154, longitude: 29.1549 },
    { name: "Antigua and Barbuda", latitude: 17.0608, longitude: -61.7964 },
    { name: "Aruba", latitude: 12.5211, longitude: -69.9683 },
    { name: "Bahamas", latitude: 25.0343, longitude: -77.3963 },
    { name: "Barbados", latitude: 13.1939, longitude: -59.5432 },
    { name: "Belize", latitude: 17.1899, longitude: -88.4976 },
    { name: "Bermuda", latitude: 32.3078, longitude: -64.7505 },
    { name: "Canada", latitude: 56.1304, longitude: -106.3468 },
    { name: "Cayman Islands", latitude: 19.3133, longitude: -81.2546 },
    { name: "Costa Rica", latitude: 9.7489, longitude: -83.7534 },
    { name: "Cuba", latitude: 21.5218, longitude: -77.7812 },
    { name: "Dominica", latitude: 15.4149, longitude: -61.3703 },
    { name: "Dominican Republic", latitude: 18.7357, longitude: -70.1627 },
    { name: "El Salvador", latitude: 13.7942, longitude: -88.8965 },
    { name: "Greenland", latitude: 71.7069, longitude: -42.6043 },
    { name: "Grenada", latitude: 12.2628, longitude: -61.6042 },
    { name: "Guatemala", latitude: 15.7835, longitude: -90.2308 },
    { name: "Haiti", latitude: 18.9712, longitude: -72.2852 },
    { name: "Honduras", latitude: 13.9443, longitude: -83.0167 },
    { name: "Jamaica", latitude: 18.1096, longitude: -77.2975 },
    { name: "Mexico", latitude: 23.6345, longitude: -102.5528 },
    { name: "Montserrat", latitude: 16.7425, longitude: -62.1874 },
    { name: "Netherlands Antilles", latitude: 12.2261, longitude: -69.0601 },
    { name: "Nicaragua", latitude: 12.8654, longitude: -85.2072 },
    { name: "Panama", latitude: 8.5375, longitude: -80.7821 },
    { name: "Saint Kitts and Nevis", latitude: 17.3578, longitude: -62.7825 },
    { name: "Saint Lucia", latitude: 13.9094, longitude: -60.9789 },
    { name: "Saint-Pierre and Miquelon", latitude: 46.8852, longitude: -56.3159 },
    { name: "Saint Vincent and the Grenadines", latitude: 12.9843, longitude: -61.2873 },
    { name: "Trinidad and Tobago", latitude: 10.6918, longitude: -61.2225 },
    { name: "Turks and Caicos Islands", latitude: 21.6940, longitude: -71.7979 },
    { name: "United States", latitude: 37.0902, longitude: -95.7129 },
    { name: "British Virgin Islands", latitude: 18.4207, longitude: -64.6399 },
    { name: "United States Virgin Islands", latitude: 18.3358, longitude: -64.8963 },
    { name: "Puerto Rico", latitude: 18.2208, longitude: -66.5901 },
    { name: "Argentina", latitude: -38.4161, longitude: -63.6167 },
    { name: "Bolivia", latitude: -16.2902, longitude: -63.5887 },
    { name: "Brazil", latitude: -14.2350, longitude: -51.9253 },
    { name: "Chile", latitude: -35.6751, longitude: -71.5430 },
    { name: "Colombia", latitude: 4.5709, longitude: -74.2973 },
    { name: "Ecuador", latitude: -1.8312, longitude: -78.1834 },
    { name: "Guyana", latitude: 4.8604, longitude: -58.9302 },
    { name: "Paraguay", latitude: -23.4425, longitude: -58.4438 },
    { name: "Peru", latitude: -9.19, longitude: -75.0152 },
    { name: "Suriname", latitude: 3.9193, longitude: -56.0278 },
    { name: "Uruguay", latitude: -32.9655, longitude: -56.1913 },
    { name: "Venezuela", latitude: 6.4238, longitude: -66.5897 },
    { name: "Afghanistan", latitude: 33.9391, longitude: 67.7100 },
    { name: "Azerbaijan", latitude: 40.1431, longitude: 47.5769 },
    { name: "Bahrain", latitude: 25.9304, longitude: 50.6370 },
    { name: "Bangladesh", latitude: 23.685, longitude: 90.3563 },
    { name: "Bhutan", latitude: 27.5142, longitude: 90.4336 },
    { name: "Brunei", latitude: 4.5353, longitude: 114.7277 },
    { name: "Burma", latitude: 21.9162, longitude: 95.9559 },
    { name: "Cambodia", latitude: 12.5657, longitude: 104.9910 },
    { name: "China", latitude: 35.8617, longitude: 104.1954 },
    { name: "India", latitude: 20.5937, longitude: 78.9629 },
    { name: "Indonesia", latitude: -0.7893, longitude: 113.9213 },
    { name: "Iran", latitude: 32.4279, longitude: 53.6880 },
    { name: "Iraq", latitude: 33.2232, longitude: 43.6793 },
    { name: "Israel", latitude: 31.9686, longitude: 34.7700 },
    { name: "Japan", latitude: 36.2048, longitude: 138.2529 },
    { name: "Jordan", latitude: 30.5852, longitude: 36.2384 },
    { name: "Kazakhstan", latitude: 48.0196, longitude: 66.9237 },
    { name: "North Korea", latitude: 40.3399, longitude: 127.5101 },
    { name: "South Korea", latitude: 35.9078, longitude: 127.7669 },
    { name: "Kuwait", latitude: 29.3759, longitude: 47.9774 },
    { name: "Kyrgyzstan", latitude: 41.2044, longitude: 74.7661 },
    { name: "Laos", latitude: 19.8563, longitude: 102.4955 },
    { name: "Lebanon", latitude: 33.8547, longitude: 35.8623 },
    { name: "Malaysia", latitude: 4.2105, longitude: 101.9758 },
    { name: "Maldives", latitude: 3.2028, longitude: 73.2207 },
    { name: "Mongolia", latitude: 46.8625, longitude: 103.8467 },
    { name: "Nepal", latitude: 28.3949, longitude: 84.1240 },
    { name: "Oman", latitude: 21.4735, longitude: 55.9754 },
    { name: "Pakistan", latitude: 30.3753, longitude: 69.3451 },
    { name: "The Philippines", latitude: 12.8797, longitude: 121.7740 },
    { name: "Qatar", latitude: 25.3548, longitude: 51.1839 },
    { name: "Russia", latitude: 55.7558, longitude: 37.6173 },
    { name: "Saudi Arabia", latitude: 23.8859, longitude: 45.0792 },
    { name: "Singapore", latitude: 1.3521, longitude: 103.8198 },
    { name: "Sri Lanka", latitude: 7.8731, longitude: 80.7718 },
    { name: "Syria", latitude: 34.8021, longitude: 38.9968 },
    { name: "Taiwan", latitude: 23.6978, longitude: 120.9605 },
    { name: "Tajikistan", latitude: 38.8610, longitude: 71.2761 },
    { name: "Thailand", latitude: 15.8700, longitude: 100.9925 },
    { name: "Turkey", latitude: 38.9637, longitude: 35.2433 },
    { name: "Turkmenistan", latitude: 38.9697, longitude: 59.5563 },
    { name: "United Arab Emirates", latitude: 23.4241, longitude: 53.8478 },
    { name: "Uzbekistan", latitude: 41.3775, longitude: 64.5853 },
    { name: "Vietnam", latitude: 14.0583, longitude: 108.2772 },
    { name: "Yemen", latitude: 15.5520, longitude: 48.5164 },
    { name: "Albania", latitude: 41.1533, longitude: 20.1683 },
    { name: "Andorra", latitude: 42.5078, longitude: 1.5211 },
    { name: "Armenia", latitude: 40.0691, longitude: 45.0382 },
    { name: "Austria", latitude: 47.5162, longitude: 14.5501 },
    { name: "Azerbaijan", latitude: 40.1431, longitude: 47.5769 },
    { name: "Belarus", latitude: 53.7098, longitude: 27.9534 },
    { name: "Belgium", latitude: 50.8503, longitude: 4.3517 },
    { name: "Bosnia and Herzegovina", latitude: 43.8486, longitude: 18.3564 },
    { name: "Bulgaria", latitude: 42.7339, longitude: 25.4858 },
    { name: "Croatia", latitude: 45.1, longitude: 15.2 },
    { name: "Cyprus", latitude: 35.1264, longitude: 33.4299 },
    { name: "Czech Republic", latitude: 49.8175, longitude: 15.4730 },
    { name: "Denmark", latitude: 56.2639, longitude: 9.5018 },
    { name: "Estonia", latitude: 58.5953, longitude: 25.0136 },
    { name: "Finland", latitude: 61.9241, longitude: 25.7482 },
    { name: "France", latitude: 46.6034, longitude: 1.8883 },
    { name: "Georgia", latitude: 42.3154, longitude: 43.3569 },
    { name: "Germany", latitude: 51.1657, longitude: 10.4515 },
    { name: "Greece", latitude: 39.0742, longitude: 21.8243 },
    { name: "Hungary", latitude: 47.1625, longitude: 19.5033 },
    { name: "Iceland", latitude: 64.9631, longitude: -19.0208 },
    { name: "Ireland", latitude: 53.4129, longitude: -8.2439 },
    { name: "Italy", latitude: 41.8719, longitude: 12.5674 },
    { name: "Kazakhstan", latitude: 48.0196, longitude: 66.9237 },
    { name: "Kosovo", latitude: 42.6026, longitude: 20.9026 },
    { name: "Latvia", latitude: 56.8796, longitude: 24.6032 },
    { name: "Liechtenstein", latitude: 47.1415, longitude: 9.5215 },
    { name: "Lithuania", latitude: 55.1694, longitude: 23.8813 },
    { name: "Luxembourg", latitude: 49.6117, longitude: 6.13 },
    { name: "Macedonia", latitude: 41.6086, longitude: 28.2417 },
    { name: "Malta", latitude: 35.9375, longitude: 14.3754 },
    { name: "Moldova", latitude: 47.4116, longitude: 28.3699 },
    { name: "Montenegro", latitude: 42.7087, longitude: 19.3744 },
    { name: "Netherlands", latitude: 52.3794, longitude: 4.9009 },
    { name: "Norway", latitude: 60.4720, longitude: 8.4689 },
    { name: "Poland", latitude: 51.9194, longitude: 19.1451 },
    { name: "Portugal", latitude: 39.3999, longitude: -8.2245 },
    { name: "Romania", latitude: 45.9432, longitude: 24.9668 },
    { name: "Russia", latitude: 55.7558, longitude: 37.6173 },
    { name: "San Marino", latitude: 43.9333, longitude: 12.45 },
    { name: "Serbia", latitude: 44.0165, longitude: 21.0059 },
    { name: "Slovakia", latitude: 48.6690, longitude: 19.6990 },
    { name: "Slovenia", latitude: 46.1511, longitude: 14.9955 },
    { name: "Spain", latitude: 40.4637, longitude: -3.7492 },
    { name: "Sweden", latitude: 60.1282, longitude: 18.6435 },
    { name: "Switzerland", latitude: 46.8182, longitude: 8.2275 },
    { name: "Turkey", latitude: 38.9637, longitude: 35.2433 },
    { name: "Ukraine", latitude: 48.3794, longitude: 31.1656 },
    { name: "United Kingdom", latitude: 55.3781, longitude: -3.4360 },
    { name: "Australia", latitude: -25.2744, longitude: 133.7751 },
    { name: "East Timor", latitude: -8.8742, longitude: 125.7275 },
    { name: "Fiji", latitude: -17.7134, longitude: 178.0650 },
    { name: "Indonesia", latitude: -0.7893, longitude: 113.9213 },
    { name: "Kiribati", latitude: -3.3704, longitude: -168.7340 },
    { name: "Papua New Guinea", latitude: -6.314993, longitude: 143.9555 },
    { name: "Marshall Islands", latitude: 7.1315, longitude: 171.1845 },
    { name: "Federated States of Micronesia", latitude: 6.9150, longitude: 158.2491 },
    { name: "Nauru", latitude: -0.5228, longitude: 166.9315 },
    { name: "New Zealand", latitude: -40.9006, longitude: 174.8860 },
    { name: "Palau", latitude: 7.5149, longitude: 134.5825 },
    { name: "Samoa", latitude: -13.7590, longitude: -172.1046 },
    { name: "Solomon Islands", latitude: -29.000, longitude: 30.000 },
    { name: "Tonga", latitude: -21.1789, longitude: -175.1982 },
    { name: "Tuvalu", latitude: -7.1095, longitude: 177.6493 },
    { name: "Vanuatu", latitude: -15.3767, longitude: 166.9592 }
];


async function fetchWeather() {
    const countryInput = document.getElementById("countryInput").value.trim();
    const weatherInfo = document.getElementById("weatherInfo");
    const previousSearches = document.getElementById("previousSearches");
    const country = countries.find(c => c.name.toLowerCase() === countryInput.toLowerCase());

    if (!country) {
        weatherInfo.textContent = "Country not found!";
        return;
    }

    try {
        const weatherDescription = await getWeather(country.latitude, country.longitude);
        weatherInfo.innerHTML = `The weather in <strong>${country.name}</strong> is: <br> ${weatherDescription}`;
        const searchResult = document.createElement("div");
        searchResult.classList.add("search-result");
        searchResult.innerHTML = `<strong>${country.name}</strong>: ${weatherDescription}`;
        previousSearches.appendChild(searchResult);
    } catch (error) {
        console.error(error);
        weatherInfo.textContent = "An error occurred while fetching the weather. Please try again.";
    }
}

async function getWeather(latitude, longitude) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const temperature = data.current_weather.temperature;
        const weather_code = data.current_weather.weathercode;
        const weatherDescription = interpretWeatherCode(weather_code);
        return `Temperature: ${temperature}°C, Conditions: ${weatherDescription}`;
    } catch (error) {
        throw new Error("Failed to fetch weather data.");
    }
}

function interpretWeatherCode(weather_code) {
    const weatherDescriptions = {
        0: "Clear day",
        1: "Clouds dissolving",
        2: "Clouds unchanged",
        3: "Cloudy",
        4: "Overcast",
        5: "Fog",
        6: "Light drizzle",
        7: "Drizzle",
        8: "Heavy drizzle",
        9: "Heavy precipitation",
        10: "Moderate rain or snow",
        11: "Thunderstorms with light rain",
        12: "Thunderstorms with moderate rain",
        13: "Thunderstorms with heavy rain",
        14: "Thunderstorms with snow",
        15: "Snow",
        16: "Light snow",
        17: "Heavy snow",
        18: "Sleet",
        19: "Hail",
        20: "Windy",
        21: "Dust",
        22: "Sandstorm",
        23: "Tornado",
        24: "Hurricane",
        25: "Cold front",
        26: "Warm front",
        27: "Freezing fog",
        28: "Frost",
        29: "Showers",
        30: "Heavy showers",
        31: "Lightning",
        32: "Dust storm",
        33: "Clear night",
        34: "Partly cloudy night",
        35: "Cloudy night",
        36: "Overcast night",
        37: "Light snow showers",
        38: "Heavy snow showers",
        39: "Thundersnow",
    };
    return weatherDescriptions[weather_code] || "Unknown conditions";
}
