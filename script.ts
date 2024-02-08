

let userText = document.querySelector("#userInp") as HTMLInputElement
let userBtn = document.querySelector(".chkBtn") as HTMLButtonElement



const CheckPalind = (event: { preventDefault: () => void }) => {
    let searchTerm = userText.value.replace(/[^0-9a-z]/gi, '').toLowerCase();
    console.log(searchTerm);

    if (searchTerm == '' || searchTerm.length < 3) {
        //sweet alert is done in js file
        return false;
    }
    else {
        if (searchTerm.split("").reverse().join('') !== searchTerm) {
            console.log('nothing', searchTerm);

        }
        else {
            showResult(searchTerm)
        }
    }

    userText.value = " ";
}

const showResult = (searchTerm: string) => {
    let result = document.querySelector(".result") as HTMLElement;
    let palindalrt = document.createElement("h1") as HTMLElement;

    palindalrt.classList.add('h1_para')
    palindalrt.innerHTML = `
    This word <span class="word"> ${searchTerm} </span> is palindrome
   `
    setTimeout(() => {
       palindalrt.innerHTML = ''
    }, 2000)
    result.appendChild(palindalrt)
}

userBtn.addEventListener("click", CheckPalind)
