let addHashTag = document.getElementById('hashtag');
let addPost = document.getElementById('post_btn');
let closeBtn = document.getElementById('close');

const postBtn = document.getElementById('post_btn');

let postBox = document.getElementById('post_box').value;

let modalContainer = document.getElementById('modal-bg');

addPost.addEventListener('click', () => {
  modalContainer.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modalContainer.style.display = 'none';
});
