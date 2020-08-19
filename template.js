//api link
const api = "https://jsonplaceholder.typicode.com/users";
//fetch api data
async function getUserData() {
  const getData = await fetch(`${api}`);
  const data = await getData.json();
  //call show data function
  showData(data);
}
// call fetch api function
getUserData();
//show data
function showData(arr) {
  arr.map((data) => data).forEach((item) => addHtml(item));
}
//dynamic html element
function addHtml(item) {
  const HTML = `
        <div>
        <h2 class="user">${item.username}</h2>
        <p class="t-center"><strong>Name:</strong> ${item.name}</p>
        <p class="t-center"><strong>Email:</strong> ${item.email}</p>
        <p class="t-center"><strong>Phone:</strong> ${item.phone}</p>
        <button onclick="deleteItem(this)">Delete</button>
        </div>
    `;
  document.querySelector("div").insertAdjacentHTML("afterend", HTML);
}

function deleteItem(itemDel) {
  console.log(itemDel);
}
