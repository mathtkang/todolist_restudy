var addButton = document.querySelector('button') 
var data = ["스트레칭하기", "조식 만들어먹기", "감사제목적기", "샌드위치_비전독서", "BHC_런닝하기", "Bass_라인카피"]
// 배열에 요소들은 객체로 들어감
append(data[0])
append(data[1])
append(data[2])
append(data[3])
append(data[4])
append(data[5])

// 할일 추가
addButton.onclick = function() {
    var input = document.querySelector('input')
    if(input.value == ''){ 
        alert('할일을 입력하세요.')
        return
    }
    data.push(input.value)
    append(data[data.length-1]) // data[data.length-1]를 append 함수에 가서 todo로 받는거임!
}

// 투두리스트 태그 생성
function append(todo){ // todo.title, todo.complted / event가 발생하는 [] == todo
    // li, checkbox 만드는 곳
    // 만든 li에다가 클래스를 적용
    var ul = document.querySelector('ul')
    var li = document.createElement('li')   //<li></li>
    var button = document.createElement('button')   //<button></button>
    var input = document.createElement('input') //<input>
    var value = document.createTextNode(todo) //?

    input.type = "checkbox" //<input type="checkbox">
    button.innerHTML = "<i class='fas fa-trash-alt' alt='삭제'></i>" //<button><i class='fas fa-trash-alt' alt='삭제'></i></button>

    li.appendChild(input)
    li.appendChild(value)
    li.appendChild(button)
    ul.appendChild(li)

    if(todo.completed == true){
        li.classList.add('completed')
        input.checked = true
    }
    input.onclick = checked
    button.onclick = remove
}

// 삭제버튼 클릭시, li태그를 지우는 함수
function remove(e){ 
    var removeli = e.target.parentNode.parentNode
    removeli.parentNode.removeChild(removeli)
}

// 할일 완료 여부 표시
function checked(e){
    e.target.parentNode.classList.toggle('completed')
}


// - 추가로 하고싶은것) 휴지통 버튼이 마우스올라갈때만 보이고 평소에는 안보이도록
    // button.style.display = 'none'
    // button.addEventListener('mouseover', (e)=> {
    //     e.target.style.display = 'block'
    // })