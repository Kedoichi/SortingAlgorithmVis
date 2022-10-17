var Container = $("#listContainer");

// Render List
async function renderList(list) {
  return new Promise((resolve, reject) => {
    var UIList = "";
    var containerScale = (Container[0].clientHeight - 20) / list.length;
    list.forEach(function (element) {
      UIList += `<div class="bar" id="item-${element}"  style="height:${
        containerScale * element
      }px"></div>`;
    });
    Container.html(UIList);
    resolve();
  });
}

//Pointer function change background

async function startSwapUI(first, second) {
  await changeBackgroundUI(first, "red");
  await changeBackgroundUI(second, "red");
}
async function changeBackgroundUI(index, color) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      $(`#item-${index}`).css("background-color", color);
      resolve();
    }, window.delay);
  });
}

//End swap UI function return color
async function endSwapUI(first, second) {
  await changeBackgroundUI(first, "#343a40");
  await changeBackgroundUI(second, "#343a40");
}

// Swap UI function
async function swapUI(first, second) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        //swap height
        var temp = $(`#item-${first}`).height();
        $(`#item-${first}`).height($(`#item-${second}`).height());
        $(`#item-${second}`).height(temp);
        //swap id
        $(`#item-${first}`).attr("id", `temp-${first}`);
        $(`#item-${second}`).attr("id", `temp-${second}`);
        $(`#temp-${first}`).attr("id", `item-${second}`);
        $(`#temp-${second}`).attr("id", `item-${first}`);

      resolve();
    }, window.delay);
  });
}
