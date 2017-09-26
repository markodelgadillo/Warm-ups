function createElememt (tagName, attributes, children) {
  const $element = document.createElememt(tagName)
  for (attribute in attrubutes) {
    $element.setAttribute(attribute, attrubutes[attribute])
  }
  for (let i = 0; i < children.length; i++) {
    $element.appendChild(children[i])
  }
    return $element
  }



const $article =
    const $div = createElement('div', { 'data-id': 1234 }, [
    const $h1 = createElement('h1', { class: 'title' }, []),
    const $h4 = createElement('h4', { class: 'author' }, []),
    const $p = createElement('p', { class: 'content' }, [])
  ])

  $article(createElement)
