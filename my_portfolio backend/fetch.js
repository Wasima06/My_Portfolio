fetch('http://localhost:5000/visitors')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching visitors:', error));
