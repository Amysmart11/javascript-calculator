var num1 = prompt("Please enter 1st number");
var num2 = prompt("Please enter 2nd number");
var opr = prompt("Please select among '+', '-', 'x', '/'");

num1 = parseFloat(num1);
num2 = parseFloat(num2);


switch(opr)
{
    case '+':
        document.write(num1 + num2);
        break;
    case '-':
        document.write(num1 - num2);
        break;
    case 'x':
        document.write(num1 * num2);
        break;
    case '/':
        document.write(num1 / num2);
        break;
    default:
            document.write('Invalid operator');
}