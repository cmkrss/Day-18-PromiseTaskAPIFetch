document.addEventListener('DOMContentLoaded', function () {
  // Function to fetch a random anime quote
  function fetchRandomQuote() {
    return fetch("https://animechan.xyz/api/random")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(error => {
        console.error('Error fetching random quote:', error);
      });
  }

  // Function to display the quote on the webpage
  function displayQuote(quote) {
    const quoteTableBody = document.querySelector('#quoteContainer table tbody');
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${quote.anime}</td>
      <td>${quote.character}</td>
      <td>${quote.quote}<br></td>
    `;
    quoteTableBody.appendChild(row);
  }

  // Fetch a random quote and display it on the webpage
  fetchRandomQuote()
    .then(quote => {
      displayQuote(quote);
    });
});
