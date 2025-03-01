let allBtn = document.querySelectorAll('.btn');
for (let btn of allBtn) {
    btn.addEventListener('click', function (even) {
        
    let totalNum = document.getElementById('total-number').innerText;
    let convertTotalNum = parseInt(totalNum);
    let checkboxNum = document.getElementById('checkbox-number').innerText;
        let convertCheckboxNum = parseInt(checkboxNum);
        
        if (convertTotalNum > 1) {
            
            let sub = convertTotalNum - 1;
            document.getElementById('total-number').innerText = sub;
    
            let sum = convertCheckboxNum + 1;
            document.getElementById('checkbox-number').innerText = sum;
            
            alert("Board updated Successfully.")
        } else if(convertTotalNum >=1){
            let sub = convertTotalNum - 1;
            document.getElementById('total-number').innerText = sub;
            
            let sum = convertCheckboxNum + 1;
            document.getElementById('checkbox-number').innerText = sum;
            alert("Congrats! you've finished all the tasks.")
            stop;
        }
        const title = even.target.parentNode.parentNode;
        const h1Title = title.querySelector('.div-title').innerText;
        const divHistory = document.getElementById('history-div');

        const history = document.createElement('div');
        history.innerHTML = `<p class = "bg-blue-50 rounded-md p-2 mb-3"> You have completed the task ${h1Title} at </p> <span id = 'time' class = 'time'></span>`;

        divHistory.appendChild(history);
        btn.disabled = 'true';
        
    })
}


function page() {
    window.location.href = 'index2.html'
}



let colors = ['red','blue','yellow','purple','green','orange','tomato','sky','pink']
let bgColor = document.getElementById('color-btn');
bgColor.addEventListener('click', function () {
    let i = 0;
    if ( i < colors.length){
        document.getElementById('body-bg').style.backgroundColor = colors[i];
        i = i + i;
        
    }
})


function displayDate() {
    const now = new Date();

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const date = now.toLocaleDateString('en-BD', options);

    document.getElementById('date').textContent = date;
}
displayDate();

const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', function () {
    document.getElementById('history-div').textContent = '';
})



