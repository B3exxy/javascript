console.log(document);
console.clear();
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.head);
console.log(document.body);

document.title = 123;
let heading = document.createElement('H1');
heading.innerHTML = 'Olá alunos!';
document.body.appendChild(heading);
heading.style.borderBottom = 'solid 3px #000';