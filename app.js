function calculator() {
    let input1;
    let input2;
    let input3;

    function init(selector1, selector2, resultSelector) {
        input1 = document.querySelector(selector1);
        input2 = document.querySelector(selector2);
        input3 = document.querySelector(resultSelector);
    }

    function add(){
        let result = Number(input1.value) + Number(input2.value);
        input3.value = result;
    }

    function subtract(){
        let result = Number(input1.value) - Number(input2.value);
        input3.value = result;
    }

    function divide(){
        let result = Number(input1.value) / Number(input2.value);
        input3.value = result;
    }

    function multiply(){
        let result = Number(input1.value) * Number(input2.value);
        input3.value = result;
    }

    function clear(){
        input1.value = '';
        input2.value = '';
        input3.value = '';
    }

    return obj = {
        init,
        add,
        subtract,
        divide,
        multiply,
        clear
    }
}
const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 