let allBtn = document.querySelectorAll('.btn');
for (let btn of allBtn) {
    btn.addEventListener('click', function () {

    let totalNum = document.getElementById('total-number').innerText;
    let convertTotalNum = parseInt(totalNum);
    let checkboxNum = document.getElementById('checkbox-number').innerText;
        let convertCheckboxNum = parseInt(checkboxNum);
        
        if (convertTotalNum > 1) {
            btn.classList.remove('bg-blue-500')
            btn.classList.add('bg-gray-400')
    
            let sub = convertTotalNum - 1;
            document.getElementById('total-number').innerText = sub;
    
            let sum = convertCheckboxNum + 1;
            document.getElementById('checkbox-number').innerText = sum;
            

            alert("Well, you have completed this task.")
        } else{
            btn.classList.remove('bg-blue-500')
            btn.classList.add('bg-gray-400')
            
            let sub = convertTotalNum - 1;
            document.getElementById('total-number').innerText = sub;
            
            let sum = convertCheckboxNum + 1;
            document.getElementById('checkbox-number').innerText = sum;
            alert("Congratulations, you've finished all the tasks.")
        }
    })
}


