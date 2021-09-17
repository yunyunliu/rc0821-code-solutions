const $userList = document.getElementById('user-list');

function createUserElement(user) {
  const { name } = user;
  const $user = document.createElement('li');
  $user.textContent = name;
  // console.log('name:', name)
  $userList.append($user);
}

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', e => {
  console.log('status:', xhr.status);
  const users = xhr.response;
  console.log('response body:', users);
  users.forEach(user => {
    createUserElement(user);
  });
  // console.log('response body:', users);
});
xhr.send();
