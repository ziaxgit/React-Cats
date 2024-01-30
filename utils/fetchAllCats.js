export default function fetchAllCats() {
  return fetch(
    "https://api.thecatapi.com/v1/images/search?api_key=live_O7dRHgHfLqsfKod2z4tAQK825sqcqTDBC0TsQDd2UwiHINCpPo33Q1O1kMHA7A2C&limit=12"
  ).then((response) => response.json());
}

// api_key=live_O7dRHgHfLqsfKod2z4tAQK825sqcqTDBC0TsQDd2UwiHINCpPo33Q1O1kMHA7A2C
