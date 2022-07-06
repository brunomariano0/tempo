const KEY = '1dde2411278f4dd7a6e180231223006';


const fecthData = async (city) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;

    const fecthResponse = await fetch (url);
    const data = await fecthResponse.json();
    
    return data;
};

export default fecthData;