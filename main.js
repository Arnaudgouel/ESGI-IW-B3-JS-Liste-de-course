let items = [];
const list = document.querySelector('ul.list');
const popup = document.querySelector('#popup');
const inputAdd = document.querySelector('#toAdd');
const inputDelete = document.querySelector('#toDelete');

function updateCountItems()
{
  const count = document.querySelector('.itemsCount');
  count.textContent = items.length;
}

function addItem(value)
{
  if(!value){
    return alert(`Veuillez renseigner un aliment!`);
  }

  if(items.find(e => e === value)){
    return alert("L'aliment existe déjà");
  }

  let oneItem = document.createElement('li');

  oneItem.textContent = value;
  oneItem.setAttribute('data-id', value);

  list.appendChild(oneItem);
  items.push(value);
  updateCountItems();
  inputAdd.value = '';
}

function removeItem(value)
{
  let item = document.querySelector(`ul.list li[data-id='${value}']`);
  if(!item){
    return alert("L'aliment renseigné n'existe pas!");
  }

  item.remove();
  items.filter(e => {
    e !== value;
  });
  updateCountItems();
  closePopup();
}

function deleteItems()
{
  if(1 > items.length){
    return alert('La liste est déjà vide');
  }

  items = [];
  list.innerHTML = '';
  updateCountItems();
}

function openPopup()
{
  popup.classList.remove('hide');
}

function closePopup()
{
  popup.classList.add('hide');
}

document.querySelector('body > form').addEventListener('submit', (e) => {
  e.preventDefault();
  let { value } = inputAdd;
  addItem(value);
})

document.querySelector('#deleteOne').addEventListener('click', openPopup);

document.querySelector('#delete').addEventListener('click', deleteItems);

document.querySelector('#popup form').addEventListener('submit', (e) => {
  e.preventDefault();
  let { value } = inputDelete;
  removeItem(value);
})

document.querySelector('span[title="annuler"]').addEventListener('click', closePopup);