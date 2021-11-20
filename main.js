let addHashTag = document.getElementById('hashtag');
let addPost = document.getElementById('post_btn');
let closeBtn = document.getElementById('close');
let backdrop = document.getElementById('modal');

const postBtn = document.getElementById('post_btn');

let postBox = document.getElementById('post_box').value;

let modalContainer = document.getElementById('modal-bg');

addPost.addEventListener('click', () => {
  modalContainer.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modalContainer.style.display = 'none';
});

backdrop.addEventListener('click', () => {
  modalContainer.style.display = 'none';
});

if (postBox === ' ') {
  postBtn.setAttribute('disabled');
}
