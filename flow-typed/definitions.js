declare type CityT = {
  id: number,
  name: string,
  location: {
    lat: number,
    lng: number
  },
  weather: {
    humidity: number,
    pressure: number,
    clouds: string,
    wind: number,
    temperature: {
      celsium: number
    }
  }
};
