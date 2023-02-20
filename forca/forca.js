<html>
  <head>
    <script
      src="https://code.jquery.com/jquery-3.6.1.js"
      integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI="
      crossorigin="anonymous"
    ></script>
    <script>
      s = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      arr = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1);

      function fun() {
        al = 0;
        for (i = 0; i < s.length; i++) {
          vvv = s[i][0];
          a2 = s[i][1];
          a3 = s[i][2];
          if (arr[vvv] == "X" && arr[a2] == "X" && arr[a3] == "X") {
            al = 1;
          } else if (arr[vvv] == "O" && arr[a2] == "O" && arr[a3] == "O") {
            al = 2;
          }
        }
        if (al == 1) {
          //alert(" x win ")
          rs.style.top = "10px";
          rst.innerText = "🤩 - X is Win - 🤩";
        } else if (al == 2) {
          //alert(" o win ")
          rs.style.top = "10px";

          rst.innerText = "🤩- O is Win -🤩";
        }
      }

      flag = 1;
      $(document).ready(function () {
        $(".in").click(function () {
          if (flag == 1) {
            $(this).removeClass("green").html("");
            $(this).addClass("red").html("X");
            flag = 2;
            v = this.id;
          } else if (flag == 2) {
            $(this).removeClass("red").html("");
            $(this).addClass("green").html("O");
            v = this.id;
            flag = 1;
          }
          innum = v.charAt(1) - 1;
          arr[innum] = $("#" + v).html();
          fun();
          draw();
        });
      });

      function draw() {
        flg = 0;
        arr.forEach(function (i) {
          if (i == 1) {
            flg = 1;
          }
        });
        if (flg == 0) {
          console.log("drawwwww");
          rs.style.top = "10px";
          rst.innerHTML = "😣 Match Is Draw 🤣";
        }
      }

      function cl() {
        rs.style.top = "-100%";
        arr = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1);
        $(".in").html("").removeClass("red").removeClass("green");
      }
    </script>

    <style>
      * {
        margin: 0;
        padding: 0;
      }
      .main {
        width: 618px;
        height: 600px;
        border: 4px solid black;
        margin: auto;
      }

      .in {
        width: 200px;
        height: 194px;
        border: 3px solid;
        background: #ffc107;
        float: left;
        font-size: 210px;
        font-weight: bold;
        text-align: center;
        line-height: 190px;
        color: white;
      }
      .red {
        background: red;
      }
      .green {
        background: green;
      }
      h1 {
        color: blue;
        text-align: center;
      }
      .rs {
        height: 550px;
        width: 550px;
        position: fixed;
        border: 1px solid;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(400, 200, 200, 0.7);
        top: 50px;
        transition: all 1s;
        box-shadow: 0px 0px 10px #66004d;
      }
      button {
        left: 120px;
        position: absolute;
        bottom: 200px;
        padding: 15px;
        font-size: 30px;
        font-weight: bold;
        border-radius: 50px;
        border-style: none;
        font-family: Adobe Fan Heiti Std B;
        background: #ff6600;
        color: white;
        transition: all 1s;
      }
      p {
        text-align: center;
        font-size: 50px;
        margin-top: 150px;
        font-family: Algerian;
        color: #ff0066;
        background: #ff80ff;
      }
      button:hover {
        transform: scale(1.1);
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div class="rs" id="rs">
      <p id="rst">😁 let's Play 🧐</p>
      <button onclick="cl()">👉 New Game Start 👈</button>
    </div>
    <h1 style="">🤪 X-O Game 🤩<