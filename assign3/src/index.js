const h2 = document.querySelector("h2");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const superEventHandler = {
  handleEnter: function() {
    h2.innerText = "The mouse is here!";
    h2.style.color = colors[0];
  },
  handleLeave: function() {
    h2.innerText = "The mouse is gone!";
    h2.style.color = colors[1];
  },
  handleResize: function() {
    h2.innerText = "You just resized!";
    h2.style.color = colors[2];
  },
  handleSelect: function() {
    h2.innerText = "You're selecting me!";
    h2.style.color = colors[3];
  },
  handleContext: function() {
    h2.innerHTML = "That was a right click!";
    h2.style.color = colors[4];
  }
};

h2.addEventListener("mouseenter", superEventHandler.handleEnter);
h2.addEventListener("mouseleave", superEventHandler.handleLeave);
window.addEventListener("resize", superEventHandler.handleResize);
window.addEventListener("contextmenu", superEventHandler.handleContext);
/*
마우스를 제목 위로 가져가면 텍스트가 바뀌어야 합니다.
마우스를 제목에서 떼면 텍스트가 바뀌어야 합니다.
브라우저 창의 크기가 조정되면 제목이 바뀌어야 합니다.
마우스를 오른쪽 클릭하면 제목이 바뀌어야 합니다.
제목 색상은 colors 배열의 색상을 사용해야 합니다.
.css 및 .html 파일을 수정하지 마세요.
모든 함수 핸들러는 superEventHandler 내부에 작성해야 합니다.*/
