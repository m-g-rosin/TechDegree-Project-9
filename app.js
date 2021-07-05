const show = document.querySelector('.show');
const projects = document.querySelector('.grid');
const hide = document.querySelector('.hide');

show.addEventListener('click', e => {
    projects.classList.remove("hidden");
    show.classList.add("hidden");
    hide.classList.remove("hidden");
});

hide.addEventListener('click', e => {
  projects.classList.add("hidden");
  show.classList.remove("hidden");
  hide.classList.add("hidden");
});
