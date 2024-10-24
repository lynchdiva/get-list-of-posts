fetchAndDisplayPosts();

function fetchAndDisplayPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => {
      posts.forEach(post => {
        const markup = getPostHTML(post);
        addMarkupToContainer(markup);
      });
    })
    .catch(() => {
      const error = document.querySelector('.error');
      error.textContent = 'Произошла ошибка.';
    });
}

function getPostHTML(post) {
  const markup = `<article>
            <h2 class="subtitle">Заголовок: ${post.title}</h2>
            <p class="text">Статья: ${post.body}</p>
          </article>`;

  return markup;
}

function addMarkupToContainer(markup) {
  const container = document.querySelector('.container');
  container.insertAdjacentHTML('beforeend', markup);
}
