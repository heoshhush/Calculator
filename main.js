const numPad = document.querySelector('.numPad');
const numScreen = document.querySelector('.numScreen');
const numScreenBefore = document.querySelector('.numScreenBefore')
let myNum = new Array(); 
let beforeNum = new Array(); 
let calcNum = new Array(); 
let ids = new Array();
let i = 0;


numPad.addEventListener('click', (event) => {
    const id = event.target.dataset.id
    
    // 숫자키 입력시, 화면 표시 및 myNum에 저장
    if(!isNaN(id)){
        saveNum(id);

    // 'C' 입력시 입력값 삭제
    } else if (id == 'C'){    
        deleteNum();

    // '=' 입력시 저장된 연산값 초기화 및 최종 결과값 표시
    } else if (id == '='){
        beforeNum = [];
        numScreenBefore.innerText='';
        calcNum.push(Number(myNum.join('')))
        calc(ids[i-1])
        numScreen.innerText = calcNum[i]

        //초기화
        myNum = [];
        calcNum = [];
        ids = [];
        i = 0;
    }

    // 수식 입력시 계산
    else {
        ids.push(id);

        beforeNum = beforeNum.concat(myNum);
        beforeNum.push(id);
        numScreenBefore.innerText = beforeNum.join('');

        calcNum.push(Number(myNum.join('')))
        calc(id)
        i++
        myNum = [];
    }
})  


function calc(id){
    if(i>0){
        if(id==='+')
        {
        calcNum[i] = calcNum[i-1] + calcNum[i]
        }
    if(id==='-')
        {
        calcNum[i] = calcNum[i-1] - calcNum[i]
        }
    if(id==='*')
        {
        calcNum[i] = calcNum[i-1] * calcNum[i]
        }
    if(id==='%')
        {
        calcNum[i] = calcNum[i-1] / calcNum[i]
        }
}}


// 입력된 숫자를 myNum에 저장 및 문자열로 이음
function saveNum(id){
    myNum.push(id);
    numScreen.innerText = myNum.join('');
}

// 입력된 숫자값 모두 윗 스크린에 표시
function saveNumBefore(){
    beforeNum = beforeNum.concat(myNum);
}

function deleteNum(){
    myNum.pop();
    numScreen.innerText = myNum.join('');
}




