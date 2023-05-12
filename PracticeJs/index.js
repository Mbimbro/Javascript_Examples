        //Addition of two Numbers
        function addNumbers() {
            var num1 = document.getElementById("num1").value;
            var num2 = document.getElementById("num2").value;
            var result = parseInt(num1) + parseInt(num2);
            document.getElementById("result").innerHTML = "Sum of two numbers:" + result;
        }
        //Subtraction of two numbers

        function subtractNum() {
            var num1 = document.getElementById("num1").value;
            var num2 = document.getElementById("num2").value;
            var result1 = parseInt(num1) - parseInt(num2);
            document.getElementById("result1").innerHTML = "Subtraction of two numbers: " + result1;

        }
        //Multiplication of two numbers

        function multiplyNum() {
            var num1 = document.getElementById("num1").value;
            var num2 = document.getElementById("num2").value;
            var result2 = parseInt(num1) * parseInt(num2);
            document.getElementById("result2").innerHTML = "Multiplication of two numbers: " + result2;

        }
        //Division of two numbers

        function divisionNum() {
            var num1 = document.getElementById("num1").value;
            var num2 = document.getElementById("num2").value;
            var result3 = parseInt(num1) / parseInt(num2);
            document.getElementById("result3").innerHTML = "Division of two numbers: " + result3;

        }