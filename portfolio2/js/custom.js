//highlight
hljs.highlightAll();

//modal
const modal = function () {
    //테트리스
    document.querySelector(".source-btn01").addEventListener("click", () => {
        document.querySelector("#modal01").classList.add("show")
        //닫기버튼 눌렀을 때 hide를 지워 지속적으로 버튼 사용가능하게
        document.querySelector("#modal01").classList.remove("hide")
    })
    document.querySelector(".modal-close01").addEventListener("click", () => {
        document.querySelector("#modal01").classList.add("hide")
    })
    //카드게임
    document.querySelector(".source-btn02").addEventListener("click", () => {
        document.querySelector("#modal02").classList.add("show")
        //닫기버튼 눌렀을 때 hide를 지워 지속적으로 버튼 사용가능하게
        document.querySelector("#modal02").classList.remove("hide")
    })
    document.querySelector(".modal-close02").addEventListener("click", () => {
        document.querySelector("#modal02").classList.add("hide")
    })
    //타이핑
    document.querySelector(".source-btn03").addEventListener("click", () => {
        document.querySelector("#modal03").classList.add("show")
        //닫기버튼 눌렀을 때 hide를 지워 지속적으로 버튼 사용가능하게
        document.querySelector("#modal03").classList.remove("hide")
    })
    document.querySelector(".modal-close03").addEventListener("click", () => {
        document.querySelector("#modal03").classList.add("hide")
    })
}
modal()

const tabMenu = function () {
    const viewBtn = document.querySelectorAll(".view-title > ul > li")
    const viewCont = document.querySelectorAll(".view-cont > div")

    viewBtn.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            // 모든 클래스 클릭하지 않은건 active 삭제
            for (let i of viewBtn) {
                i.classList.remove("active")
            }
            //내가 클릭한건 active 추가
            btn.classList.add("active")

            //모든 컨텐츠 박스 안보이게
            viewCont.forEach(el => {
                el.style.display = "none";
            })
            viewCont[index].style.display = "block"

            //내가 클릭한 콘텐츠 박스를 보이게

        })
    })
}