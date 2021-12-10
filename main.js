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

// When the user clicks anywhere outside of the modal, the modal should be closed
window.addEventListener('click', (event) => {
  if (event.target == modalContainer) {
    modalContainer.style.display = 'none';
  }
});
