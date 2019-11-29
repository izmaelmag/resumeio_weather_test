const LondonData = {
  name: 'London',
  weather: {
    wind: 3.4,
    humidity: 76,
    pressuse: 1026,
    clouds: 'broken-clouds',
    temperature: {
      celsium: 32,
    }
  }
};

const AmsterdamData = {
  name: 'Amsterdam',
  weather: {
    wind: 3.4,
    humidity: 76,
    pressuse: 1026,
    clouds: 'broken-clouds',
    temperature: {
      celsium: 32,
    }
  }
};

const MoscowData = {
  name: 'Moscow',
  weather: {
    wind: 3.4,
    humidity: 76,
    pressuse: 1026,
    clouds: 'broken-clouds',
    temperature: {
      celsium: 32,
    }
  }
};

const WeatherData = {
  cities: {
    London: LondonData,
    Amsterdam: AmsterdamData,
    Moscow: MoscowData,
  }
};

export default WeatherData;
