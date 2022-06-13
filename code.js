var container = document.getElementById('container');
var output = document.querySelector('.output')
var divisibles = ['+', '-', '/', '*', '=']
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
        output.textContent = event.target.textContent;
   });
   container.appendChild(number);
}