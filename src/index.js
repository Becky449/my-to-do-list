import './style.css';

const lists = [
  {
    description: 'walk the dog',
    completed: true,
    index: 1,
  },
  {
    description: 'Call my family mebers for my party',
    completed: true,
    index: 2,
  },
  {
    description: 'Go grocery shopping',
    completed: true,
    index: 3,
  },
];

function component() {
  const element = document.createElement('li');
  // Lodash, now imported by this script
  dSet.forEach((d, index) => {
    // eslint-disable-next-line eqeqeq
    if (d.index == index) {
      element.innerHTML += `
      <div class='li-item'>
        <div>
          <input type="checkbox" class="checkbox">
          <label for="text">${d.desc}</label>
        </div>
        <div><i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
      </div>
      <hr>
      `;
    }
  });
  element.classList.add('item');
  return element;
}
document.querySelector('.list').appendChild(component());
