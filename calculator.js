//ボタン押下時のアクション
function calc(btn) {
    var result = document.calculator.result.value
    var process = document.calculator.process.value
    var operator = document.getElementById("operator");

    //=
    if (btn.value == "=") {
        document.calculator.result.value = eval(document.calculator.process.value);
        operator.innerHTML = "=";

        //オールクリア
    } else if (btn.value == "AC") {
        document.calculator.process.value = "0";
        document.calculator.result.value = "0";
        operator.innerHTML = "clear";

        //負の符号
    } else if (btn.value == "+/-") {
        //符号がすでに付いている場合符号削除
        if (/^-/.test(result)) {
            document.calculator.process.value = result.slice(1);
            document.calculator.result.value = result.slice(1);
            //0表示でないときに符号をつける
        } else if (result != "0") {
            document.calculator.process.value = "-" + result;
            document.calculator.result.value = "-" + result;
        } else {
        }

        //小数点
    } else if (btn.value == ".") {
        //小数点がすでについていないとき
        if (result.indexOf(".") == -1) {
            document.calculator.process.value = process + ".";
            document.calculator.result.value = result + ".";
            //小数点がすでについているとき
        } else {
        }

        //%(×0.01)
    } else if (btn.value == "%") {
        document.calculator.process.value = result * 0.01;
        document.calculator.resul.value = result * 0.01;

        //÷
    } else if (btn.value == "÷") {
        if (/[-|+|*|/]$/.test(process)) {
            document.calculator.process.value = result.slice(0, -1);
        }
        document.calculator.process.value = result + "/";
        operator.innerHTML = "÷";

        //×
    } else if (btn.value == "×") {
        if (/[-|+|*|/]$/.test(process)) {
            document.calculator.process.value = result.slice(0, -1);
        }
        document.calculator.process.value = result + "*";
        operator.innerHTML = "×";

        //-
    } else if (btn.value == "-") {
        if (/[-|+|*|/]$/.test(process)) {
            document.calculator.process.value = result.slice(0, -1);
        }
        document.calculator.process.value = result + "-";
        operator.innerHTML = "-";

        //+
    } else if (btn.value == "+") {
        if (/[-|+|*|/]$/.test(process)) {
            document.calculator.process.value = result.slice(0, -1);
        }
        document.calculator.process.value = result + "+";
        operator.innerHTML = "+";

        //0表示のとき置き換えて数値入力
    } else if (result == "0") {
        document.calculator.process.value = btn.value;
        document.calculator.result.value = btn.value;

        //数値入力
    } else {
        if (/[-|+|*|/]$/.test(process)) {
            document.calculator.result.value = "";
        }
        document.calculator.process.value += btn.value;
        document.calculator.result.value += btn.value;
    }
}