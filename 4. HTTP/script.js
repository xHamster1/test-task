async function getResponse() {
  let response = await fetch("https://reqres.in/api/users");
  let content = await response.json();
  let data = content.data;

  let key;

  let list = document.querySelector(".block");

  for (key in data) {
    list.innerHTML += `
        <div>
        <img src="${data[key].avatar}">
        <h1>${data[key].first_name + " " + data[key].last_name}</h1>
        <p>${data[key].email}</p>
        <div>
        `;
  }
}

getResponse();
