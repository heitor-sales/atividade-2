class DisciplinaServico {
    constructor() {
        this.DisciplinaRepositorio = new DisciplinaRepositorio();
    }

    inserir(codigo, nome) {
        const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);
        if (disciplinaPesquisada.length > 0) {
            throw new Error('Disciplina já cadastrada!');
        }

        const disciplinaNova = new Disciplina(codigo, nome);
        this.DisciplinaRepositorio.inserir(disciplinaNova);
        return disciplinaNova;
    }

    pesquisarPorCodigo(codigo) {
        return this.DisciplinaRepositorio.listar().filter(
            disciplina => disciplina.codigo === codigo);
    }

    remover(codigo) {
        this.DisciplinaRepositorio.remover(codigo);
    }
}
