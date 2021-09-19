const showPrompt1 = document.querySelector(".showPrompt1");
const bt1 = document.querySelector(".bt1");
const find = document.querySelector(".find");
const reverseBtn = document.querySelector(".reverse");

function sc() {
  rng = prompt("Enter the range");
  res = rng.split("-");
  // vì cấu trúc sẽ là 1-2 hoặc 1-9 nên phải tách bằng split
  if (res.length != 2) {
    alert("invalid range ");
    return;
  }
  //   Vì tách ra trong array sẽ có 2 thành phần, nếu hơn là sai đề
  first = parseInt(res[0]);
  second = parseInt(res[1]);
  // chuyển string thành Int để tính toán
  if (first > second) {
    alert("invalid range ");
    return;
  }
  // Nếu số đầu lớn hơn số thứ hai thì sai đề vd 2-1
  str = "<table border=2><tr><th>Number</th><th>Square</th><th>Cube</th></tr>";
  for (i = first; i <= second; i++) {
    str = str + "<tr><td>" + i + "<td>" + i * i + "<td>" + i * i * i;
  }

  //   vòng lặp đưa từng i, i * i, i * i * i vào từng dòng

  bt1.innerHTML = str;
}

function findLMV() {
  var str = document.getElementById("t1").value;
  for (i = 0; i < str.length; i++) {
    if (
      str.charAt(i) == "a" ||
      str.charAt(i) == "e" ||
      str.charAt(i) == "i" ||
      str.charAt(i) == "o" ||
      str.charAt(i) == "u"
    )
      return "Left most vowel of " + str + " is at location " + (i + 1);
  }
  return "No vowels found for string " + str;

  // Vòng lặp chạy để tìm ra vị trí của các từ aeiou, nếu không có thì return No vowels
}

function reverse(num) {
  rnum = 0;
  temp = num;
  if (isNaN(num)) {
    return "invalid number";
  }

  //   kiêm tra phải null hay không
  // vd 12345
  while (num != 0) {
    rnum *= 10; // rnum = 0 // rnum = 50
    rnum += num % 10; // rnum = 5 // rnum = 54
    num -= num % 10; //  num = 12340 // num = 1230
    num = Math.floor(num / 10); // num = 1234 // num = 123
  }

  return "Reverse of num " + temp + " is " + rnum;
}

function f(d) {
  if (d == "c") {
    document.getElementById("res").value = "";
    return;
  }
  // reset bản tính
  res = document.getElementById("res").value;
  if (res == 0 && d == 0) return;
  if (d == "+" || d == "-" || d == "*" || d == "/") {
    opr = d;
    num = parseFloat(res);
    document.getElementById("res").value = d;
    return;
  }
  //   Nếu người dùng bấm 1 trong 4 dấu, thì sẽ lưu số đầu tiên với lại dấu đó

  if (d == "=") {
    num1 = parseFloat(res);
    switch (opr) {
      case "+":
        ans = num + num1;
        break;
      case "-":
        ans = num - num1;
        break;
      case "*":
        ans = num * num1;
        break;
      case "/":
        ans = parseInt(num / num1);
        break;
    }
    document.getElementById("res").value = ans;
    return;
  }
  // Nếu người dùng bấm dấu bằng thì sẽ lấy được số thứ 2 rồi dựa vào dấu để tính

  if (d == "--") {
    document.getElementById("res").value *= -1;
    return;
  }
  if (!isNaN(document.getElementById("res").value))
    document.getElementById("res").value += d;
  else document.getElementById("res").value = d;

  // Nếu k phải NaN thì ghép số vào
}

showPrompt1.addEventListener("click", sc);
find.addEventListener("click", () => {
  alert(findLMV());
});

reverseBtn.addEventListener("click", () => {
  alert(reverse(document.getElementById("t2").value));
});
