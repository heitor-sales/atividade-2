class Disciplina {
    constructor(codigo, nome) {
        this._codigo = codigo;
        this._nome = nome;
        this._alunos = [];
    }

    inserirAlunoNaDisciplina(aluno) {
        if (this.alunos.some(a => a.matricula === aluno.matricula)) {
            throw new Error('Aluno já cadastrado na disciplina!');
        }
        this.alunos.push(aluno);
    }

    get codigo() {
        return this._codigo;
    }

    set codigo(novoCodigo) {
        this._codigo = novoCodigo;
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    get alunos() {
        return this._alunos;
    }

    set alunos(novosAlunos) {
        this._alunos = novosAlunos;
    }
}
