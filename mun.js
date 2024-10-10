
let btn1 = document.getElementById('btn1');
let res = document.getElementById("res");
let visible = false;
btn1.addEventListener('click', () => {
  let input = document.getElementById("q");
  let table = '';

  if (!visible) {
    for (let i = 1; i <= 10; i++) {
      table += `<p>${input.value} X ${i} = ${input.value * i}</p>`;
    }
    res.innerHTML = table;
    visible = true;
  } else {
    res.innerHTML = '';
    visible = false;
  }
});



