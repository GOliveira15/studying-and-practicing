/*
let nome = "Gabriel";
let idade = 17;
let idade2 = 10;
let frase = "Anitta é a melhor cantora";

//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);

console.log(nome);
console.log(idade + idade2);
//console.log(frase.replace("Anitta", "Pabllo"));

//console.log(frase.toLocaleLowerCase());
console.log(frase.toUpperCase());
*/



/*
let lista = ["Laranja", "Maça", "Banana"];
lista.push("Uva");
lista.pop("Uva");

//console.log(lista.length);
//console.log(lista.reverse());

//console.log(lista.toString());

console.log(lista.join(" - "));
*/



/*
let fruta = {nome: "Maça", cor: "Vermelho"};
console.log(fruta);
console.log(fruta.nome);
*/



/*
let frutas = [{nome: "Maça", cor: "Vermelho"}, {nome: "Uva", cor: "Roxo"}];
console.log(frutas);
console.log(frutas.nome);
*/




/*
var idade = prompt("Qual é a sua idade?");
//var idade = 18;

if (idade >= 18)
{
    alert("Maior de idade");
}
else
{
    alert("Menor de idade");
}
*/



/*
let count = 0;

while (count <= 5)
{
    console.log(count);
    count += 1;
}
*/



/*
let count;

for (count = 0; count <= 5; count++)
{
    console.log(count);
}
*/



/*
var d = new Date();
//alert(d.getMonth()+1);
alert(d.getDay());
*/



/*
function soma(n1, n2)
{
    return n1 + n2;
}

alert(soma(10, 5));
*/



/*
function validaIdade(idade)
{
    var validar;

    if (idade >= 18)
    {
        validar = true;
    }
    else
    {
        validar = false;
    }

    return validar
}

var idade = prompt("Qual é a sua idade?");
console.log(validaIdade(idade));
*/



/*
function setReplace (frase, nome, novo_nome)
{
    return frase.replace(nome, novo_nome);
}

alert(setReplace("Vai Pabllo", "Pabllo", "Anitta"));
*/



function clicou()
{
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"

    //alert("Obrigado por clicar")
}

function redirecionar()
{
    window.open("http://instagram.com/");
    //window.location.href = "http://instagram.com/";
}

function trocar(elemento)
{
    //document.getElementById("mousemove").innerHTML = "<b>Obrigado por passar o mouse</b>"
    elemento.innerHTML = "<b>Obrigado por passar o mouse</b>"
}

function voltar(elemento)
{
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}

function load()
{
    alert("Página carregada")
}

function funcaoChange(elemento)
{
    console.log(elemento.value)
}