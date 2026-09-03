const usuarios = [
    { nome: "Ana", idade: 20, ativo: true, compras: [100, 50, 25]
    },
    { nome: "Bruno", idade: 17, ativo: false, compras: [30, 20] },
    { nome: "Carlos", idade: 32, ativo: true, compras: [200, 150,
    50, 100] },
    { nome: "Diana", idade: 25, ativo: true, compras: [] },
    { nome: "Eduardo", idade: 15, ativo: false, compras: [10] }
    ];
//Parte 1

console.log('Parte 1');

const comprasTotais = usuarios.map(usuario => {
    const total = usuario.compras.reduce(
        (total, compra) => total + compra,0
    );
    return `${usuario.nome}: total = ${total}`;
});


console.log(comprasTotais.join('\n'));

console.log();

//Parte 2 

console.log('Parte 2');

const Ativos = usuarios.filter(usuarios => usuarios.ativo == true).map
    (usuarios => usuarios.nome);

console.log(Ativos.join('\n'));

console.log();

//Parte 3

console.log('Parte 3');

const MaiorIdade = usuarios.filter(usuarios => usuarios.idade >= 18).map
    (usuarios => usuarios.nome);

console.log(MaiorIdade.join('\n'));

console.log();

//Parte 4

console.log('Parte 4');

const total = usuarios.map(usuario => usuario.compras.reduce ((soma,compra) => soma + compra,0))
const Maior = Math.max(...total)

console.log('Usuário com maior volume:',usuarios[total.indexOf(Maior)].nome);
console.log('total:',Maior)
console.log()

//Parte 5

console.log('Parte 5');

console.log("5" + 2);
console.log("5" - 2);
console.log(true + 1);
console.log(false == 0);
console.log(false === 0);
console.log()

console.log('"5" + 2 =  "+" é um operador aritmetico , mas também é um operador de concatenação, como a concatenação tem prioridade acima da aritmetíca e um dos valores é string,então ele converte o 1 em string')
console.log('"5" - 2 = por "-" estritamente númerico, o javascript converte o "5" para number')
console.log('true + 1 = como aqui a um boolean e um number, o "+" aqui tem atribuição de operador aritmetico, assim o javascript converte o true para 1')
console.log('false == 0 = "==" é um operador lógico que permite coerção de tipos, no caso a um boolean e um number,o boolean e convertido para number conforme regra')
console.log('false === 0 = "==" é um operador lógico não permite coerção de tipos, no caso a um boolean e um number,o resultado se torna false porque ambos são estão em tipagens distintas.')

//Parte 6

console.log('Parte 6');

//Codígo 1

const pessoa = {
  nome: "Maria",
  falar: function(){
    console.log(this.nome)
  }
};


pessoa.falar();
console.log()

//Código 2

const pessoa1 = {
  nome: "Maria",
  falar: () => {
    console.log(this.nome)
  }
};

pessoa.falar();

console.log()

console.log("1)O codigo 1 Funciona corretamente , porque falr é uma função que foi chamada por objeto no caso pessoa, por funções terem seu proprio this, elas podem apontar para um objeto fora do contexto, no caso pessoa.falar, sendo this === pessoa")

console.log("2)o codigo 2 não funciona corretamente, pois arrow function não possuem um proprio this, sendo herdados do contexto, ou por não haver um this no contexto externo, ele se torna undefined")

console.log("3) arrow functions não possuem seu proprio this, elas herdam o this do contexto que estão inseridos , como em uma function.")

function gerarRelatorio(usuarios){
    const somaIdades = usuarios.reduce((soma,usuario) => soma + usuario.idade,0)
    const somaCompras = usuarios.map(usuario => 
    usuario.compras.reduce((soma,compra) => soma + compra,0))
    const Maior = Math.max(...somaCompras)

    const relatorio = {
        totalUsuarios: usuarios.length,

        usuariosAtivos: usuarios.length - usuarios.filter(usuarios => usuarios.ativo == false).map
        (usuarios => usuarios.nome).length,

        usuariosInativos: usuarios.length - usuarios.filter(usuarios => usuarios.ativo == true).map
        (usuarios => usuarios.nome).length,

        mediaIdade: somaIdades/usuarios.length,

        maiorComprador: usuarios[somaCompras.indexOf(Maior)].nome
    }

    return relatorio
}

console.log(gerarRelatorio(usuarios))

