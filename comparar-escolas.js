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

    dadosEscola() {
      console.log(`\n=== RELATÓRIO DE CADASTRO: ${this.cidade.toUpperCase()} ===`);
      console.log(`- Código: ${this.codigo}`);
      console.log(`- Fundação: ${this.anoConstruçao} (${this.idade} anos de história)`);
      console.log(`Capacidade: ${this.qtdeCursos} cursos ativos.`);
      console.log(`=========================================\n`);
  }
      /*se status estiver True ele deve abrir a escola */
    abrirEscola(){
        this.statusFuncionamento = true;
        console.log(`O SENAI: ${this.cidade} está ABERTO`);
        }
        /*mesma coisa mas com false */
    fecharEscola(){
        this.statusFuncionamento = false;
        console.log(`O SENAI: ${this.cidade} está FECHADO`);
        }

  }
  
    /*COMPARAÇÃO ENTRE ESCOLAS*/
    const compararEsc = (e1, e2) => {
      console.log(`>comparando quantia de cursos: ${e1.cidade} x ${e2.cidade}...`)

      if (e1.cursos > e2.cursos) {
          console.log(`resultado: ${e1.cidade} possui mais cursos`); /*se a escola 1 possuir mais cursos*/
      }else if (e2.cursos > e1.cursos)/*a esocla 2 tiver mais*/{
          console.log(`resultado: ${e2.cidade} possui mais cursos`);
      } else{
          console.log(`resultado: As duas unidades possuem a mesma quantia de cursos`)
      }
      console.log(`status: ${e1.cidade} (${e1.cursos}) | ${e2.cidade} (${e2.cursos})\n`)
    }

    /* Criando instâncias */
    const escolaA = new Senai (603, 'Araraquara', 1998, 60, false);
    const escolaB = new Senai (603, 'São Carlos', 2000, 120, false);
    
    // execução
    
    compararEscolas(escolaA, escolaB);
    escolaA.fecharEscola()

/*para passar as informações:*/
const escola1 = new Senai(603, 'Araraquara', '1998', '60');
const escola2 = new Senai(102, 'São Carlos', '2000', '120');

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


