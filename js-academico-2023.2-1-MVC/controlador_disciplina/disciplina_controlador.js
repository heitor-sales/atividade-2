class DisciplinaControlador {

    constructor() {
        this.servico = new DisciplinaServico();
    }

    inserir() {
        const codigoElemento = document.querySelector("#codigo");
        const nomeElemento = document.querySelector("#nome");
        try {
            const disciplinaInserida = this.servico.inserir(Number(codigoElemento.value), nomeElemento.value);
            const listaDisciplinasElemento = document.querySelector("#listaDisciplinas");

            if (disciplinaInserida) {
                this.inserirDisciplinaNoHtml(disciplinaInserida, listaDisciplinasElemento);
            }
        } catch(e){
            alert(e);
            console.error(e);
        }
        
    }

    inserirDisciplinaNoHtml(disciplina, elementoDestino) {
        const disciplinaElemento = document.createElement("li");
        disciplinaElemento.textContent = `Código: ${disciplina.codigo} - Nome: ${disciplina.nome}`;
        elementoDestino.appendChild(disciplinaElemento);
    }
}
