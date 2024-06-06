const url = 'https://api.worldnewsapi.com/search-news?text=earth+quake&language=en&earliest-publish-date=2024-04-01';
const apiKey = '9c1896dfcfcd468586cc5bb850376cee';

fetch(url, {
    method: 'GET',
    headers: {
        'x-api-key': apiKey
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
.then(data => console.log(data.news[0]))
.catch(error => console.error('There was a problem with the fetch operation:', error));