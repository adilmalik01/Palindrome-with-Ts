var userText = document.querySelector("#userInp");
var userBtn = document.querySelector(".chkBtn");
var CheckPalind = function (event) {
    var searchTerm = userText.value.replace(/[^0-9a-z]/gi, '').toLowerCase();
    console.log(searchTerm);
    if (searchTerm == '' || searchTerm.length < 3) {
        //sweet alert is done in js file
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "question",
            html: `<p class="error">write something minimmum 3 characters`
        });

        return false;
    }
    else {
        if (searchTerm.split("").reverse().join('') !== searchTerm) {
            console.log('nothing', searchTerm);
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "error",
                html: `<p class="error">This is not palindrome ${searchTerm}`
            });
        }
        else {
            showResult(searchTerm);
        }
    }
    userText.value = " ";
};
var showResult = function (searchTerm) {
    var result = document.querySelector(".result");
    var palindalrt = document.createElement("h1");
    palindalrt.classList.add('h1_para');
    palindalrt.innerHTML = "\n    This word <span class=\"word\"> ".concat(searchTerm, " </span> is palindrome\n   ");
    setTimeout(function () {
        palindalrt.innerHTML = '';
    }, 2000);
    result.appendChild(palindalrt);
};
userBtn.addEventListener("click", CheckPalind);
