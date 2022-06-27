var container = document.getElementById('container');
var output = document.querySelector('.output')
var divisibles = ['+', '-', '/', '*']
var clear = document.getElementById('clear')
var prevOutput = document.querySelector('.previousNumber')
var a = '';
var b = '';
var equals = '';
// for (i = 0; i < 5; i++)
// {
//     var operators = document.createElement('button');
//     operators.classList.add('operators');
//     operators.textContent = divisibles[i];
//     container.appendChild(operators);
//     operators.addEventListener('click' , function(event)
//    {
//         output.textContent = event.target.textContent;
//    });
// }
// for(i = 0; i < 10; i++)
// {
//    var number = document.createElement('button');
//    number.classList.add('box');
//    number.textContent = i;
//    number.addEventListener('click' , function(event)
//    {
//         output.textContent = event.target.textContent;
//    });
//    container.appendChild(number);
// }
var operator = ''
var count = 0;
var tof = false;
     function makeButtons(number, operators, equals)
     {
          for (i = 0; i < 4; i++)
          {
               var operators = document.createElement('button');
               operators.classList.add('operators');
               operators.textContent = divisibles[i];
               container.appendChild(operators);
               operators.addEventListener('click' , function(event)
               {
                    tof = true;
                    prevOutput.textContent += event.target.textContent
                    output.textContent = '';
                    operator = event.target.textContent;
               });
          }
          equals = document.createElement('button');
          equals.classList.add('equals');
          equals.textContent = '=';
          equals.addEventListener('click', function()
          {
               output.textContent = operate(operator, a, b)
               tof = true;
          });
          container.appendChild(equals);
          for(i = 0; i < 10; i++)
          {
               var number = document.createElement('button');
               number.classList.add('box');
               number.textContent = i;
               number.addEventListener('click' , function(event)
               {
                    count++;
                    prevOutput.textContent += event.target.textContent;
                    output.textContent += event.target.textContent;
                    if (count != 0 && tof == false)
                    {
                         a = output.textContent;
                         a = parseInt(a);
                    }
                    if (tof == true)
                    {
                         b = output.textContent;
                         b = parseInt(b);
                    }
               });
               container.appendChild(number);
          }
     }
     clear.addEventListener('click', function()
     {
          output.textContent = ''
          prevOutput.textContent = '';
          a = 0;
          b = 0;
     });
     
     function add(first, second)
     {
          return first+second;
     }
     
     function subtract(first, second)
     {
          return first-second;
     }

     function multiply(first, second)
     {
          return first*second
     }

     function divide(first, second)
     {
          return first/second;
     }

     function operate(operator, first, second)
     {
          first = Number(first)
          second = Number(second)
          switch (operator) {
          case '+':
               return add(first, second)
          case '-':
               return subtract(first, second)
          case '*':
               return multiply(first, second)
          case '/':
               if (second === 0) return null
               else return divide(first, second)
          default:
               return null
  }
     }


makeButtons();