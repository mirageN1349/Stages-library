class Stage {
  constructor() {
    this.items = null
    this.container = null
  }

  inizialize(count, content, container, styles) {
    this.container = document.querySelector(container)
    this.items = new Array(count).fill('').map(this.createTemplateItem)

    this.container.innerHTML = this.items.join('')
    this.items = document.querySelectorAll('.item')

    this.addEventListener()
    this.addStyles(styles)
    this.addContent(content)
  }

  addContent(content) {
    if (Array.isArray(content) && content.length) {
      this.items.forEach((item, i) => {
        item.innerHTML = content[i] || i
      })
    }
  }

  addEventListener() {
    this.items.forEach(item => {
      item.addEventListener('click', this.itemsHandler(this.items))
    })
  }

  addStyles(styles) {
    this.items.forEach(item => {
      item.style = styles
    })
  }

  createTemplateItem(_, count) {
    return `
      <div class="item ${count === 0 ? 'active' : ''}"  data-id=${count}">${
      count + 1
    }</div>
    `
  }

  itemsHandler(items) {
    return e => {
      const parent = e.target.closest('.item')
      const currentId = parseInt(parent.dataset.id)

      items.forEach((item, i) => {
        if (i <= currentId) {
          item.classList.add('active')
        } else {
          item.classList.remove('active')
        }
      })
    }
  }
}

const stages = new Stage()
