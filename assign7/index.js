

const numberForm = document.querySelector("#number-form");
const numberInput = document.querySelector("#maxNumber");
const guessNrInput = document.querySelector("#guessNumber");
const choosedNr = document.querySelector("#chosenNumber");
const result = document.querySelector("#result");
//const randomNr = document.querySelector(".randomNumber");
//0에서 사용자가 지정한 숫자까지의 범위에서 랜덤 한 숫자를 찾으세요. (범위는 0 이상 입력값 이하가 됩니다.)

//범위에는 음수가 포함될 수 없습니다.
//실시간으로 범위 값을 업데이트해야 합니다.
//유저가 숫자를 선택한 후에 게임을 플레이할 수 있습니다.
//유저에게 게임의 승패를 알려야 합니다.


function chooseNumber(event) {
   
    event.preventDefault();
    const maxNumber = numberInput.value;
    const guessNumber = guessNrInput.value;

   

     if(!isNaN(maxNumber) && maxNumber >= 0){
      
        console.log(guessNumber);
       
        const randomNumber = Math.floor(Math.random() * maxNumber);
       
        choosedNr.innerText =  "You chose: " + guessNumber +" ,the machine chose: "+ randomNumber +".";

        if(guessNumber != randomNumber){
            result.innerText = "You lost!";

        }else
            result.innerText = "You won!";

        }

   

    
}

numberForm.addEventListener("submit", chooseNumber );
