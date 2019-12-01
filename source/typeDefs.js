//@flow

export type CityT = {
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

export type AppProviderValuesT = {
  cities: CityT[],
  removeCity: (cityId: number) => void,
  addCity: (newCity: CityT) => void
}

export type AppState = {
  cities: CityT[]
};

export type WeatherDetailProps = {
  type: string,
  value: string | number
};

export type ResultCardProps = {
  city: CityT,
  onSelect: () => void
}

export type SearchResultsProps = {
  cities: CityT[],
  searchText: string,
  onSelect: () => void
}
