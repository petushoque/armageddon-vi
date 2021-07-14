const BASE_URL = 'https://api.nasa.gov/neo/rest/v1/feed';

function checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}: ${res.statusText}`);
}

export function takeData(today, tomorrow) {
  return fetch(`${BASE_URL}?start_date=${today}&end_date=${tomorrow}&api_key=DEMO_KEY`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
    })
    .then(res => checkResponse(res))
}