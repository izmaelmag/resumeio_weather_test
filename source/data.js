//@flow
import uuid from 'uuid';
import type { CityT } from './typeDefs';

export const LondonData: CityT = {
  id: uuid(),
  location: {
    lat: 24.129,
    lng: 13.0833
  },
  name: 'London',
  weather: {
    wind: 3.4,
    humidity: 76,
    pressure: 1026,
    clouds: 'Broken clouds',
    temperature: {
      celsium: 32,
    }
  }
};

export const AmsterdamData: CityT = {
  id: uuid(),
  location: {
    lat: 37.129,
    lng: -84.0833
  },
  name: 'Amsterdam',
  weather: {
    wind: 3.4,
    humidity: 82,
    pressure: 1012,
    clouds: 'Broken clouds',
    temperature: {
      celsium: 28,
    }
  }
};

export const MoscowData: CityT = {
  id: uuid(),
  location: {
    lat: -10.129,
    lng: 35.0833
  },
  name: 'Moscow',
  weather: {
    wind: 2.6,
    humidity: 76,
    pressure: 1026,
    clouds: 'Broken clouds',
    temperature: {
      celsium: 21,
    }
  }
};

export const TokyoData: CityT = {
  id: uuid(),
  location: {
    lat: 75.129,
    lng: -35.0833
  },
  name: 'Tokyo',
  weather: {
    wind: 2.6,
    humidity: 76,
    pressure: 1026,
    clouds: 'Broken clouds',
    temperature: {
      celsium: 21,
    }
  }
};

export const MonacoData: CityT = {
  id: uuid(),
  location: {
    lat: 65.129,
    lng: -5.0833
  },
  name: 'Monaco',
  weather: {
    wind: 1.2,
    humidity: 75,
    pressure: 1026,
    clouds: 'Broken clouds',
    temperature: {
      celsium: 21,
    }
  }
};

export const NewYorkData: CityT = {
  id: uuid(),
  location: {
    lat: -55.689,
    lng: 10.0833
  },
  name: 'New York',
  weather: {
    wind: 3,
    humidity: 82,
    pressure: 1026,
    clouds: 'Broken clouds',
    temperature: {
      celsium: 17,
    }
  }
};

export const searchDataMock: CityT[] = [
  LondonData,
  AmsterdamData,
  MoscowData,
  TokyoData,
  MonacoData,
  NewYorkData
];

export const defaultWeatherData = {
  cities: [
    LondonData,
    MoscowData,
    AmsterdamData,
  ]
};
