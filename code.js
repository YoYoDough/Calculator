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
     var tof = false;
     for (i = 0; i < 5; i++)
     {
          var operators = document.createElement('button');
          operators.classList.add('operators');
          operators.textContent = divisibles[i];
          container.appendChild(operators);
          operators.addEventListener('click' , function(event)
          {
               tof = !tof;
               if (event.target.textContent = "=")
               {
                    tof = true;
               }
               add(a, b)
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
               if (tof = true)
               {
                    a += parseInt(output.textContent);
               }
               if (tof = false)
               {
                    b += parseInt(output.textContent);
               }
               if (output.textContent = '=')
               {
                    output.textContent = a;
               }
          });
          container.appendChild(number);
          if (output.textContent = '=')
          {
               output.textContent = add(a,b)
          }
     }
}
     if (output.textContent = '=')
     {
          output.textContent = add(a,b)
     }
     clear.addEventListener('click', function()
     {
          output.textContent = ''
     });
     
     function add(a, b)
     {
          return a+b;
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