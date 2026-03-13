/* 🚨NÃO ALTERAR A CLASSE 🚨 */

class Senai {
  constructor(codigo, cidade, anoConstrucao, qtdeCursos) {
    this.codigo = codigo;
    this.cidade = cidade;
    this.anoConstrucao = anoConstrucao;
    this.qtdeCursos = qtdeCursos;

    // js moderno: calculando a idade com base no ano atual do sistema
    this.idade = new Date().getFullYear() - anoConstrucao;
    this.statusFuncionamento = false;
  }

      /*se status estiver True ele deve abrir a escola */
    abrirEscola(){
        this.statusFuncionamento = true;
        return `Aberta: Bem-Vindos ao SENAI ${this.cidade}`;
        }
        /*mesma coisa mas com false */
    fecharEscola(){
        this.statusFuncionamento = false;
        return `Fechada: Atividades encerradas`;
        }

  }
const codigoA = document.querySelector('unidadeA__codigo');
const cidadeA = document.querySelector('unidadeA__cidade');
const anoConstrucaoA = document.querySelector('unidadeA__ano');
const qtdeCursosA = document.querySelector('unidadeA__cursos');

const codigoB = document.querySelector('unidadeB__codigo');
const cidadeB = document.querySelector('unidadeB__cidade');
const anoConstrucaoB = document.querySelector('unidadeB__ano');
const qtdeCursosB = document.querySelector('unidadeB__cursos');

const instanciarA = document.querySelector('unidadeA__instanciar');
const instanciarB = document.querySelector('unidadeB__instanciar');

const abrirA = document.querySelector('unidadeA__abrir')
const fecharA = document.querySelector('unidadeA__fechar')
const abrirB = document.querySelector('unidadeB__abrir')
const fecharB =document.querySelector('unidadeB__abrir')

const  compararBtn = document.querySelector('.sistema_comparar')
const  resetBtn = document.querySelector('.sistema_reset')

const  mensagemA = document.querySelector('.unidadeA_mensagem')
const  mensagemB = document.querySelector('.unidadeB_mensagem')

const relatorio = document.querySelector('.relatorio')
const veredito = document.querySelector('.relatorio_veredito')
const linhaA = document.querySelector('.relatorio__linha--a')
const linhaB = document.querySelector('.relatorio__linha--b')

let escolaA = null;
let escolab = null;

function validarCampos(cidade,codigo,ano, cursos){

  if{
    cidade.value === "" ||
    codigo.value ==="" ||
    ano.value ===""||
    cursos.value ===""
  } {
    return false;
    }

    return true;
};

/*instanciar*/

instanciarA.addEventListener("click", () => {
  if (validarCampos(cidadeA, codigoA, anoA, cursosA)){
     mensagemA.textContent = "Preencha todos os campos para criar a escola";
     return;
  }

//   escolaA = new Senai {
//   Number(codigoA.value),
  
//   };
// });






  
    /*COMPARAÇÃO ENTRE ESCOLAS*/
    const compararEsc = (e1, e2) => {
      console.log(`>comparando quantia de cursos: ${e1.cidade} x ${e2.cidade}...`)

      if (e1.cursos > e2.cursos) {
          console.log(`resultado: ${e1.cidade} possui mais cursos`); /*se a escola 1 possuir mais cursos*/
      }else if (e2.cursos > e1.cursos)/*a escola 2 tiver mais*/{
          console.log(`resultado: ${e2.cidade} possui mais cursos`);
      } else{
          console.log(`resultado: As duas unidades possuem a mesma quantia de cursos`)
      }
      console.log(`status: ${e1.cidade} (${e1.cursos}) | ${e2.cidade} (${e2.cursos})\n`)
    }

    /* Criando instâncias */
    const escolaA = new Senai (603, 'Araraquara', 1998, 60, false);
    const escolaB = new Senai (201, 'São Carlos', 2000, 120, false);
    
    // execução
    
    compararEscolas(escolaA, escolaB);
    escolaA.fecharEscola()

/*para passar as informações:*/
const escola1 = new Senai(603, 'Araraquara', '1998', '60');
const escola2 = new Senai(201, 'São Carlos', '2000', '120');

escola1.dadosEscola();
escola2.dadosEscola();
   































/* 🚨NÃO ALTERAR A CLASSE 🚨 */



/* SUGESTÃO DE LÓGICA PARA O DESENVOLVIMENTO */



/* ===== OBTER ELEMENTOS ===== */


/* ===== FUNÇÃO DE VALIDAÇÃO ===== */


/* ===== INSTANCIAR ESCOLA A ===== */


/* ===== INSTANCIAR ESCOLA B ===== */


/* ===== ABRIR ESCOLA ===== */


/* ===== FECHAR ESCOLA ===== */


/* ===== RELATÓRIO DE COMPARAÇÃO ===== */


/* ===== NOVA CONSULTA ===== */


