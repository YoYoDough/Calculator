var container = document.getElementById('container');
var output = document.querySelector('.output')
var divisibles = ['+', '-', '/', '*', '=']
var clear = document.getElementById('clear')
var a = 0;
var b = 0;
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
function makeButtonsAndOutput(number, operators)
{
     for (i = 0; i < 5; i++)
     {
          var operators = document.createElement('button');
          operators.classList.add('operators');
          operators.textContent = divisibles[i];
          container.appendChild(operators);
          operators.addEventListener('click' , function(event)
          {
               output.textContent = event.target.textContent;
          });
     }
     for(i = 0; i < 10; i++)
     {
          var number = document.createElement('button');
          number.classList.add('box');
          number.textContent = i;
          number.addEventListener('click' , function(event)
          {
               output.textContent += event.target.textContent;
               a = parseInt(output.textContent);
          });
          container.appendChild(number);
     }
}
     clear.addEventListener('click', function()
     {
          output.textContent = ''
     });
     
     function add(a)
     {
          sum = 0;
          return sum += a;
     }
     
     function subtract(a)
     {
          return a-b;
     }

     function multiply(a, b)
     {
          return a*b
     }

     function divide(a, b)
     {
          return a/b;
     }


makeButtonsAndOutput();