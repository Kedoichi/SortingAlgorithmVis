var Container = $("#listContainer");

// Render List
async function renderList(list) {
  return new Promise((resolve, reject) => {
    var UIList = "";
    var containerScale = (Container[0].clientHeight - 20) / list.length;
    list.forEach(function (element) {
      UIList+=`<div class="bar" id="item-${element}"  style="height:${containerScale * element}px"></div>`
    });
    Container.html(UIList);
    resolve();
  });
}
