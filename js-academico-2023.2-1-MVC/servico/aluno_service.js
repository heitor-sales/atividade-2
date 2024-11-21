class AlunoService {
    constructor() {
        this.repositorio = new AlunoRepositorio();
    }

    inserir(nome, idade, matricula) {
        const alunoPesquisado = this.pesquisarPorMatricula(matricula);
        if (alunoPesquisado.length > 0) {
            throw new Error('Aluno já cadastrado!');
        }
        if (!this.idadeValida(idade)) {
            throw new Error ('Idade inválida!');
        }
        const alunoNovo = new Aluno(nome, idade, matricula);
        this.repositorio.inserir(alunoNovo);
        return alunoNovo;
    }

    pesquisarPorMatricula(matricula) {
        return this.repositorio.listar().filter(
            aluno => aluno.matricula === matricula);
    }

    remover(matricula) {
        this.repositorio.remover(matricula);
    }

    // listarMenoresIdade() {
    //     return this.repositorio.listar().filter(aluno => aluno.idade < 18);
    // }

    idadeValida (idade) {
        return idade >= 18;
    }
}
