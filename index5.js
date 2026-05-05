document.addEventListener('DOMContentLoaded', function() {
    
    const btn = document.getElementById('btnSum');
    const resSpan = document.getElementById('resValue');
    const detailsDiv = document.getElementById('details');

    btn.addEventListener('click', function() {
        let val = document.getElementById('numN').value;

        if (val === "" || val <= 0) {
            resSpan.innerText = "!";
            detailsDiv.innerText = "Введіть натуральне число (більше 0)";
            return;
        }

        let n = Number(val);
        let sum = 0;
        let i = 1;
        let processStr = ""; 

       
        while (i <= n) {
            sum += i;
            
          
            processStr += (i === 1) ? i : "+" + i;
            
            i++;
        }


        resSpan.innerText = sum;


        let comment = "";
        switch (n) {
            case 1:
                comment = "Це було просто.";
                break;
            case 5:
                comment = "Класичний приклад!";
                break;
            case 100:
                comment = "Ого, ви як юний Гаусс!";
                break;
            default:
                comment = "Розрахунок завершено.";
        }

        detailsDiv.innerText = `(${processStr}) \n ${comment}`;
    });
});