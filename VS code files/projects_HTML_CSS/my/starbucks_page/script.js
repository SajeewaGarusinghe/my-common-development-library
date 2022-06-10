let requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://jsonplaceholder.typicode.com/posts/45", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));