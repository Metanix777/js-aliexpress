const example = {username: "Ivan"};
fetch('https://jsonplaceholder.typicode.com/todos/1',
{
    method: "POST",
    body: JSON.stringify(example)
})
  .then(response => response.json())
  .then(json => console.log(json))