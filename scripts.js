const loadBtn = document.querySelector(".js-load");
const loadBtnUsers = document.querySelector(".js-load-users");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");

const instance = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/`,
});

const requestUsers = async () => {
  const {data} = await instance.get('users');
  return data;
}

const onRequestUserGithubClick = (evt) => {
  evt.preventDefault();
  const searchValue = searchInput.value.trim().toLowerCase();

  fetch(`https://api.github.com/users/${searchValue}`).then(response => response.json()).then(
    ({avatar_url, name, bio, public_repos}) =>
      (resultsContainer.innerHTML = `<div class="response-container">
                <img src="${avatar_url}" alt="avatar">
                <p> Имя: <span>${name}</span><p>
                <p> О себе: <span>${bio}</span><p>
                <p> Кол-во репозиториев: <span>${public_repos}</span><p>
            </div>`)
  )
  ;
}

const onRequestUsersClick = async (evt) => {
  evt.preventDefault();

  try {
    const users = await requestUsers();

    (resultsContainer.innerHTML = users.map(({name, phone, address: {city}}) => {
      return (`<div class="response-container">
                <p> Имя: <span>${name}</span><p>
                <p> Город: <span>${city}</span><p>
                <p> Телефон: <span>${phone}</span><p>
               </div>`)
    }))
  } catch (error) {
    console.warn(error);
  }
}

loadBtn.addEventListener("click", onRequestUserGithubClick);
loadBtnUsers.addEventListener("click", onRequestUsersClick);
