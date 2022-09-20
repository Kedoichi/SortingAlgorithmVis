var container = document.getElementById('listContainer')

function renderList(list) {
  container.innerHTML = ''
  var size = list.length
  window.containerScale = container.clientHeight / size
  var UIContents = ''
  list.forEach((element) => {
    UIContents += `<div class="bar" id="item-${element}" style="height:${
      containerScale * element
    }px"></div>`
  })
  container.innerHTML = UIContents
}
