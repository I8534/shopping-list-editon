const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
  // 사용자가 입력한 텍스트 받아오기
  const text = input.value;
  if (text === '') {
    input.focus();  // -> 이걸 안 하면 포커스가 버튼으로 간다.
    return;
  }
  // 그리고 새로운 아이템을 만듬 (텍스트 + 삭제 버튼)
  const item = createitem(text);
  // 아이템 컨테이너 안에 새로 만든 아이템을 추가한다
  items.appendChild(item);
  // 새로 추가된 아이템으로 스크롤링
  item.scrollIntoView({block:'center'});
  // 인풋을 초기화한다.
  input.value = ''
  input.focus();  //-> 이걸 안 주면 다시 사용자가 거길 클릭해서 입력해야 한다.
}

function createitem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');

  const item = document.createElement('div');
  item.setAttribute('class', 'item');

  const name = document.createElement('span');
  name.setAttribute('class', 'item__name');
  name.innerText = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'item__delete');
  deleteBtn.innerHTML = '<i class="fa-sharp fa-solid fa-trash"></i>';
  deleteBtn.addEventListener('click', () => {
    items.removeChild(itemRow);
  })

  const itemDivider = document.createElement('div');
  itemDivider.setAttribute('class', 'item__divider');

  item.appendChild(name);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);

  return itemRow;
}

addBtn.addEventListener('click', () => {
  onAdd();
})

input.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') {
    onAdd();
  }
})