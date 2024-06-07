const messageEl = document.getElementById('message');

fetch('/message') // Fetch message from back-end API
  .then(response => response.json())
  .then(data => {
    const combinedMessage = "Hello! " + data.message; // Add "Hello" before received message
    messageEl.textContent = combinedMessage;
  })
  .catch(error => console.error(error));
