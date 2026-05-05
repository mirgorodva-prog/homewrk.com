document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('btnSum');
    const resSpan = document.getElementById('resValue');
    const detailsDiv = document.getElementById('details');

    btn.addEventListener('click', function() {
        let val = document.getElementById('numN').value;

        if (val === "" || val <= 0) {
            resSpan.innerText = "!";
            detailsDiv.innerText = "Введіть натуральне число";
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
            case 100: comment = "Сто! Це вже солідно."; break;
            case 500: comment = "Ого, довгий список!"; break;
            default: comment = "Розрахунок готовий.";
        }

       
        detailsDiv.innerText = `(${processStr}) \n ${comment}`;
    });
});
