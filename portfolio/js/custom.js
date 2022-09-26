//highlight
hljs.highlightAll();

//modal
const modal = function () {
  //테트리스
  // document.querySelector(".source-btn01").addEventListener("click", () => {
  //   document.querySelector("#modal01").classList.add("show");
  //   //닫기버튼 눌렀을 때 hide를 지워 지속적으로 버튼 사용가능하게
  //   document.querySelector("#modal01").classList.remove("hide");
  // });
  // document.querySelector(".modal-close01").addEventListener("click", () => {
  //   document.querySelector("#modal01").classList.add("hide");
  // });
  //카드게임
  document.querySelector('.source-btn02').addEventListener('click', () => {
    document.querySelector('#modal02').classList.add('show');
    //닫기버튼 눌렀을 때 hide를 지워 지속적으로 버튼 사용가능하게
    document.querySelector('#modal02').classList.remove('hide');
  });
  document.querySelector('.modal-close02').addEventListener('click', () => {
    document.querySelector('#modal02').classList.add('hide');
  });
  //타이핑
  document.querySelector('.source-btn03').addEventListener('click', () => {
    document.querySelector('#modal03').classList.add('show');
    //닫기버튼 눌렀을 때 hide를 지워 지속적으로 버튼 사용가능하게
    document.querySelector('#modal03').classList.remove('hide');
  });
  document.querySelector('.modal-close03').addEventListener('click', () => {
    document.querySelector('#modal03').classList.add('hide');
  });
};
modal();
