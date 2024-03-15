
const print = () => {
  let stockItem = document.getElementById("Item").value;
  let rate = document.getElementById("rate").value;
  let amt = document.getElementById("amt").value;
  let quality = document.getElementById("qua").value;
  let file = document.getElementById("img1").files[0];
  let r = new FileReader();
  r.readAsDataURL(file);
  r.onloadend = function () {
    document.getElementById("myimg").src = r.result;
  };
  document.getElementById("Item").value = "";
  document.getElementById("rate").value = "";
  document.getElementById("amt").value = "";
  document.getElementById("qua").value = "";
  document.getElementById("img1").value = "";
  document.getElementById("tbody1").innerHTML += `<tr>
<td>${stockItem}</td>
<td><img id="myimg" src="" width="100px" height="100px"/></td>
<td>${quality}</td>
<td>${rate}</td>
<td>${amt}</td>
</tr>`;
};
document.getElementById("butid").addEventListener("click", print);
