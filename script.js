function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerText = "Введите числа!";
        return;
    }

    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;

    document.getElementById("result").innerHTML = `
        <strong>Сумма:</strong> ${sum} <br>
        <strong>Разность:</strong> ${difference} <br>
        <strong>Произведение:</strong> ${product}
    `;
          }
