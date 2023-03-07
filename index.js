const goods = {
    clothes: ['hoodie', 'shorts', 'dress', 'shoes', 'jackets'],
    forcar: ['oil' ,'filters', 'tires', 'discs'],
    forhome: ['table', 'chair']
}

const list = document.querySelector('.js-list')
const middleBlock = document.querySelector('.js-middle')
const endBlock = document.querySelector('.js-end-block')

list.addEventListener('click' ,onListClick) 
middleBlock.addEventListener('click', onItemClick)

function onListClick(e) {
  e.stopPropagation()
  e.preventDefault()

  const category = e.target.getAttribute('data-category')
  const objects = goods[category]

  for (const obj of objects) {
      const html = listItemTemplate(obj)
      middleBlock.insertAdjacentHTML('beforeend', html)
    }
  }

function onItemClick(e) {
  const target = e.target
  if (!target.classList.contains('item')) {
    return
  }

  const div = generateInfo()
  const btn = generateButton()
  endBlock.appendChild(div)
  endBlock.appendChild(btn)
  btn.addEventListener('click', onBtnClick)
}

function onBtnClick() {
  endBlock.innerHTML = ''
  middleBlock.innerHTML = ''
  alert('Goods added to cart')
}

const listItemTemplate = (item) => `
  <div class="item">${item}</div>
`

function generateInfo() {
  const div = document.createElement("div")
  div.textContent = "Information:"
  return div
}

function generateButton() {
  const btn = document.createElement("button")
  btn.classList.add("btn")
  btn.textContent = "BUY"
  return btn
}



