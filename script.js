// Importa o módulo readline-sync para entrada de dados no terminal
const readline = require("readline-sync");

// Classe Reserva para gerenciar as reservas
class Reserva {
    constructor(id_cliente, status, data_entrada, data_saida) {
        // Gera um ID único para a reserva
        this.id = this.getId();
        this.id_cliente = id_cliente; // ID do cliente associado
        this.status = status; // Status da reserva (pendente, realizada, etc.)
        this.data_entrada = data_entrada; // Data de entrada
        this.data_saida = data_saida; // Data de saída
    }

    // Método para gerar um ID aleatório
    getId() {
        return Math.floor(Math.random() * 1000);
    }
}

// Classe Funcionario para gerenciar os funcionários do sistema
class Funcionario {
    constructor(nome, cpf, email, senha) {
        // Gera um ID único para o funcionário
        this.id = this.getId();
        this.nome = nome; // Nome do funcionário
        this.cpf = cpf; // CPF do funcionário
        this.email = email; // E-mail do funcionário
        this.senha = senha; // Senha do funcionário
    }

    // Método para gerar um ID aleatório
    getId() {
        return Math.floor(Math.random() * 1000);
    }
}

// Classe Cliente para gerenciar os clientes
class Cliente {
    constructor(nome, cpf, email, senha, nascimento) {
        // Gera um ID único para o cliente
        this.id = this.getId();
        this.nome = nome; // Nome do cliente
        this.cpf = cpf; // CPF do cliente
        this.email = email; // E-mail do cliente
        this.senha = senha; // Senha do cliente
        this.nascimento = nascimento; // Data de nascimento do cliente
    }

    // Método para gerar um ID aleatório
    getId() {
        return Math.floor(Math.random() * 1000);
    }
}

// Classe Quartos para gerenciar os quartos disponíveis no sistema
class Quartos {
    constructor(quantidade_camas, preco_noite, quantidade_disponivel, nome, descricao) {
        this.quantidade_camas = quantidade_camas; // Quantidade de camas no quarto
        this.preco_noite = preco_noite; // Preço por noite
        this.quantidade_disponivel = quantidade_disponivel; // Quantidade de quartos disponíveis
        this.nome = nome; // Nome do quarto
        this.descricao = descricao; // Descrição do quarto
        this.avaliacao = []; // Lista de avaliações do quarto
    }
}

// Instâncias de quartos pré-cadastrados
const quarto1 = new Quartos(2, 100, 5, "Quarto 1", "Quarto com cama de casal");
const quarto2 = new Quartos(1, 50, 3, "Quarto 2", "Quarto com cama de solteiro");
const quarto3 = new Quartos(3, 150, 7, "Quarto 3", "Quarto com cama de casal e solteiro");
const quarto4 = new Quartos(4, 200, 10, "Quarto 4", "Quarto com cama de casal e solteiro e banheira");

// Cliente de exemplo pré-cadastrado
const cliente1 = new Cliente("João", "12345678910", "Bt1YF@example.com", "senha123", "1990-01-01");

// Reservas de exemplo associadas ao cliente
const reserva1 = new Reserva(cliente1.id, "pendente", "2021-10-01", "2021-10-05");
const reserva2 = new Reserva(cliente1.id, "pendente", "2021-10-10", "2021-10-15");

// Funcionário de exemplo pré-cadastrado
const funcionario1 = new Funcionario("Lucas", "12345678910", "Bt1YF@example.com", "senha123");

// Classe principal para gerenciar o sistema de reservas
class Sistema {
    constructor() {
        this.funcionarios = []; // Lista de funcionários
        this.clientes = []; // Lista de clientes
        this.quartos = []; // Lista de quartos
        this.reservas = []; // Lista de reservas
    }

    // Método inicial do sistema
    inicio() {
        let t = true; // Variável para controle do loop principal
        // Adiciona dados pré-cadastrados ao sistema
        this.clientes.push(cliente1);
        this.funcionarios.push(funcionario1);
        this.quartos.push(quarto1, quarto2, quarto3, quarto4);
        this.reservas.push(reserva1, reserva2);

        // Loop principal do sistema
        while (t) {
            console.log("Bem-vindo ao sistema de reservas");
            console.log("1 - Login");
            console.log("2 - Cadastro");
            console.log("3 - Sair do programa");
            const opcao = readline.questionInt("Digite a opção desejada: ");
            console.log("-----------------------------------------------------------------");
            switch (opcao) {
                case 1:
                    this.login(); // Chama o método de login
                    break;
                case 2:
                    this.cadastro(); // Chama o método de cadastro
                    break;
                case 3:
                    console.log("Obrigado por usar o sistema de reservas");
                    t = false; // Encerra o loop
                    break;
                default:
                    console.log("Opção inválida");
                    break;
            }
        }
    }

    // Exibe os dados de um cliente
    ver_dados_cliente(cliente) {
        console.log("ID: ", cliente.id);
        console.log("Nome: ", cliente.nome);
        console.log("CPF: ", cliente.cpf);
        console.log("Email: ", cliente.email);
        console.log("Data de Nascimento: ", cliente.nascimento);
        console.log("-----------------------------------------------------------------");
    }

    // Método para editar os dados de um cliente
    editar_dados_cliente(cliente) {
        console.log("ID: ", cliente.id);
        console.log("Nome: ", cliente.nome);
        console.log("CPF: ", cliente.cpf);
        console.log("Email: ", cliente.email);
        console.log("Senha: ", cliente.senha);
        console.log("Data de Nascimento: ", cliente.nascimento);
        console.log("-----------------------------------------------------------------");
        const nome = readline.question("Digite o novo nome: ");
        const cpf = readline.question("Digite o novo CPF: ");
        const nascimento = readline.question("Digite a nova data de nascimento: ");
        const email = readline.question("Digite o novo email: ");
        const senha = readline.question("Digite a nova senha: ");
        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].cpf === cliente.cpf) {
                this.clientes[i].nome = nome;
                this.clientes[i].cpf = cpf;
                this.clientes[i].email = email;
                this.clientes[i].senha = senha;
                this.clientes[i].nascimento = nascimento;
            }
        }
    }

    // Método de login
    login() {
        console.log("Quem você é?");
        console.log("1 - Cliente");
        console.log("2 - Funcionário");
        const opcao = readline.questionInt("Digite a opção desejada: ");
        const email = readline.question("Digite seu email: ");
        const senha = readline.question("Digite sua senha: ");

        if (opcao === 1) {
            // Verifica se o cliente existe
            for (let i = 0; i < this.clientes.length; i++) {
                if (this.clientes[i].email === email && this.clientes[i].senha === senha) {
                    console.log("Login efetuado com sucesso");
                    console.log("Bem-vindo ", this.clientes[i].nome);
                    this.tela_cliente(this.clientes[i]); // Chama a tela do cliente
                }
            }
            console.log("Login inválido");
        }

        if (opcao === 2) {
            // Verifica se o funcionário existe
            for (let i = 0; i < this.funcionarios.length; i++) {
                if (this.funcionarios[i].email === email && this.funcionarios[i].senha === senha) {
                    console.log("Login efetuado com sucesso");
                    console.log("Bem-vindo ", this.funcionarios[i].nome);
                    this.tela_funcionario(this.funcionarios[i]); // Chama a tela do funcionário
                }
            }
            console.log("Login inválido");
        }
    }

    // Método de cadastro
    cadastro() {
        console.log("Quem você é?");
        console.log("1 - Cliente");
        console.log("2 - Funcionário");
        const opcao = readline.questionInt("Digite a opção desejada: ");
        const nome = readline.question("Digite seu nome: ");
        const cpf = readline.question("Digite seu CPF: ");
        const email = readline.question("Digite seu email: ");
        const senha = readline.question("Digite sua senha: ");

        if (opcao === 1) {
            const nascimento = readline.question("Digite sua data de nascimento: ");
            console.log("-----------------------------------------------------------------");
            const cliente = new Cliente(nome, cpf, email, senha, nascimento);
            console.log(cliente);
            this.clientes.push(cliente); // Adiciona o cliente à lista
        }

        if (opcao === 2) {
            console.log("-----------------------------------------------------------------");
            this.funcionarios.push(new Funcionario(nome, cpf, email, senha)); // Adiciona o funcionário à lista
            console.log(this.funcionarios);
        }
    }

    // Tela do funcionário
    tela_funcionario(funcionario) {
        let t = true;
        while (t) {
            console.log("1 - Ver meus Dados");
            console.log("2 - Ver Lista de Quartos");
            console.log("3 - Editar Quartos");
            console.log("4 - Excluir Quartos");
            console.log("5 - Ver Lista de Clientes");
            console.log("6 - Ver Lista de Reservas");
            console.log("7 - Mudar status da reserva");
            console.log("8 - Voltar para o menu de início");
            const opcao = readline.questionInt("Digite a opção desejada: ");
            console.log("-----------------------------------------------------------------");
            switch (opcao) {
                case 1:
                    this.ver_dados_funcionario(funcionario);
                    break;
                case 2:
                    this.ver_lista_quartos();
                    break;
                case 3:
                    this.editar_quarto();
                    break;
                case 4:
                    this.excluir_quarto();
                    break;
                case 5:
                    this.ver_lista_clientes();
                    break;
                case 6:
                    this.ver_lista_reservas();
                    break;
                case 7:
                    this.mudar_status_reserva();
                    break;
                case 8:
                    console.log("Obrigado por usar o sistema de reservas");
                    t = false;
                    break;
                default:
                    console.log("Opção inválida");
                    break;
            }
        }
    }

    tela_cliente(cliente){
        let t = true
        while(t === true){
            console.log("1 - Ver meus Dados")
            console.log("2 - Ver Lista de Quartos");
            console.log("3 - Avaliar uma estadia ");
            console.log("4 - Fazer reserva");
            console.log("5 - Cancelar reserva");
            console.log("6 - Verificar reserva");
            console.log("7 - Editar meus Dados");
            console.log("8 - Voltar ao menu de inicio");
        const opcao = readline.questionInt("Digite a opcao desejada: ");
        console.log("-----------------------------------------------------------------")
        switch(opcao){
            case 1:
                this.ver_dados_cliente(cliente);
                break;
            case 2: 
                this.ver_lista_quartos();
    
                break;
            case 3:
                this.avaliar_estadia();
                
                break;
            case 4:
                this.fazer_reserva(cliente);
                
                break;
            case 5:
                this.cancelar_reserva(cliente);
                
                break;
            case 6:
                this.verificar_reserva(cliente);
                
                break;
            case 7:
                this.editar_dados_cliente(cliente);
                break;            
            case 8:
                console.log("Obrigado por usar o sistema de reservas");
                t = false;
                break;
            default:
                console.log("Opção inválida");
                break;
            }
            }
    }
    
    // Exibe a lista de quartos disponíveis no sistema com detalhes como nome, descrição, preço por noite, quantidade de camas e quantidade disponível.
    // Após listar, pergunta ao usuário se deseja ver as avaliações dos quartos.
    // Caso afirmativo, chama o método visualizar_avaliacoes().
    ver_lista_quartos(){
        for(let i = 0; i < this.quartos.length; i++){
            console.log("Quarto: ", this.quartos[i].nome);
            console.log("Descrição: ", this.quartos[i].descricao);
            console.log("Preço por noite: ", this.quartos[i].preco_noite);
            console.log("Quantidade de camas: ", this.quartos[i].quantidade_camas);
            console.log("Quantidade disponível: ", this.quartos[i].quantidade_disponivel);
            console.log("-----------------------------------------------------------------");
        }
        const avaliacoes = readline.question("Deseja ver as avaliacoes? (s para sim)  ");
        if (avaliacoes === "s" || avaliacoes === "S"){
            console.log("-----------------------------------------------------------------");
            this.visualizar_avaliacoes();
        }
    }

    // Permite ao cliente avaliar uma estadia. Primeiro, exibe a lista de quartos.
    // Solicita o nome do quarto e a avaliação. 
    // Adiciona a avaliação ao quarto correspondente se encontrado. Caso contrário, informa que o quarto não foi encontrado.
    avaliar_estadia(){
        let t = false
        this.ver_lista_quartos();
        const nome = readline.question("Digite o nome do quarto: ");
        const avaliacao = readline.question("Digite sua avaliacao: ");
        for(let i = 0; i < this.reservas.length; i++){
            if(this.quartos[i].nome === nome){
                this.quartos[i].avaliacao.push(avaliacao);
                console.log("Avaliacao enviada com sucesso");
                console.log("-----------------------------------------------------------------");
                t = true;
            }
        } if(t === false) {
            console.log("Quarto nao encontrado");
            console.log("-----------------------------------------------------------------");
        }
    }

    // Exibe as avaliações de todos os quartos listados no sistema.
    // Cada quarto é mostrado com seu nome e suas avaliações associadas.
    visualizar_avaliacoes(){
        for(let i = 0; i < this.quartos.length; i++){
            console.log("Quarto: ", this.quartos[i].nome);
            console.log("Avaliacao: ", this.quartos[i].avaliacao);
            console.log("-----------------------------------------------------------------");
        }
    }

     // Permite editar os detalhes de um quarto existente. 
    // Solicita o nome do quarto, encontra-o e atualiza seus dados, como nome, descrição, preço por noite, quantidade de camas e quantidade disponível.
    editar_quarto(){
        this.ver_lista_quartos()
        const nome = readline.question("Digite o nome do quarto que deseja editar: ");
        for(let i = 0; i < this.quartos.length; i++){
            if(this.quartos[i].nome === nome){
                const nome = readline.question("Novo nome do quarto: ");
                const descricao = readline.question("Descrição: ");
                const preco_noite = readline.question("Preço por noite: ");
                const quantidade_camas = readline.question("Quantidade de camas: ");
                const quantidade = readline.question("Quantidade disponível: ");
                this.quartos[i] = new Quartos(quantidade_camas, preco_noite, quantidade, nome, descricao);
                console.log("-----------------------------------------------------------------");
            }
        }
    }

     // Permite excluir um quarto do sistema. 
    // Solicita o nome do quarto, encontra-o e o remove da lista de quartos. 
    // Caso o quarto não seja encontrado, informa que ele não existe.
    excluir_quarto(){
        this.ver_lista_quartos()
        const nome = readline.question("Digite o nome do quarto: ");
        for(let i = 0; i < this.quartos.length; i++){
            if(this.quartos[i].nome === nome){
                this.quartos.splice(i, 1);
                console.log("Quarto excluído com sucesso");
                console.log("-----------------------------------------------------------------");
                return
            }
        } console.log("Quarto não encontrado")
        console.log("-----------------------------------------------------------------");
    }


    // Cria uma reserva para o cliente. 
    // Verifica o ID do cliente e, se válido, solicita detalhes da reserva (status, data de entrada e saída) e os adiciona à lista de reservas.
    // Caso o ID do cliente não seja encontrado, informa o erro.
    fazer_reserva(cliente){
        const id_cliente = readline.questionInt("Digite o id do cliente: ");
        if(cliente.id === id_cliente){
            const status = readline.question("Digite o status da reserva: ");
            const data_entrada = readline.question("Digite a data de entrada: ");
            const data_saida = readline.question("Digite a data de saída: ");
            const reserva = new Reserva(id_cliente, status, data_entrada, data_saida);
            this.reservas.push(reserva);
            console.log("-----------------------------------------------------------------")
        }
        else{
            console.log("ID não encontrado")
        }
    }

     // Cancela uma reserva existente. 
    // Exibe todas as reservas associadas ao cliente, solicita o ID da reserva e remove a correspondente da lista.
    // Caso nenhuma reserva seja encontrada, nada é removido.
    cancelar_reserva(cliente){
        for(let i = 0; i < this.reservas.length; i++){
            if(this.reservas[i].id_cliente === cliente.id){
                console.log("Reserva: ", this.reservas[i].id);
                console.log("Cliente: ", cliente.nome);
                console.log("Status: ", this.reservas[i].status);
                console.log("Data de entrada: ", this.reservas[i].data_entrada);
                console.log("Data de saída: ", this.reservas[i].data_saida);
                console.log("-----------------------------------------------------------------")
            }}
            const id = readline.questionInt("Digite o id da reserva: ");
            for(let i = 0; i < this.reservas.length; i++){
            if(this.reservas[i].id === id){
                this.reservas.splice(i, 1);
            }
        }
    }

     // Exibe todas as reservas de um cliente específico.
    // Caso o cliente não tenha reservas, informa que nenhuma reserva foi encontrada.
    verificar_reserva(cliente){
        let t = false
        for(let i = 0; i < this.reservas.length; i++){
            if(this.reservas[i].id_cliente === cliente.id){
                t = true
                console.log("Cliente: ", cliente.nome);
                console.log("Status: ", this.reservas[i].status);
                console.log("Data de entrada: ", this.reservas[i].data_entrada);
                console.log("Data de saída: ", this.reservas[i].data_saida);
                console.log("-----------------------------------------------------------------")
            }}
        if(t===false){
            console.log("Desculpe, nenhuma reserva encontrada.");
        }
    }

    // Exibe os dados do funcionário, como ID, nome, CPF, email e senha.
    ver_dados_funcionario(funcionario){
        console.log("ID: ", funcionario.id);
        console.log("Nome: ", funcionario.nome);
        console.log("CPF: ", funcionario.cpf);
        console.log("Email: ", funcionario.email);
        console.log("Senha: ", funcionario.senha);
        console.log("-----------------------------------------------------------------")
    }

    // Lista todos os clientes cadastrados no sistema com detalhes como ID, nome, CPF, email e data de nascimento.
    ver_lista_clientes(){
        for(let i = 0; i < this.clientes.length; i++){
            console.log("ID: ", this.clientes[i].id);
            console.log("Nome: ", this.clientes[i].nome);
            console.log("CPF: ", this.clientes[i].cpf);
            console.log("Email: ", this.clientes[i].email);
            console.log("Data de Nascimento: ", this.clientes[i].nascimento);
            console.log("-----------------------------------------------------------------")
        }
    }

    ver_lista_reservas(){
        for(let i = 0; i < this.reservas.length; i++){
            console.log("ID: ", this.reservas[i].id);
            console.log("ID Cliente: ", this.reservas[i].id_cliente);
            console.log("Status: ", this.reservas[i].status);
            console.log("Data de Entrada: ", this.reservas[i].data_entrada);
            console.log("Data de Saída: ", this.reservas[i].data_saida);
            console.log("-----------------------------------------------------------------")
        }
    }

     // Permite alterar o status de uma reserva existente. 
    // Exibe todas as reservas, solicita o ID da reserva e o novo status, e atualiza a reserva correspondente.
    mudar_status_reserva(){
        for(let i = 0; i < this.reservas.length; i++){
            console.log("ID: ", this.reservas[i].id);
            console.log("ID Cliente: ", this.reservas[i].id_cliente);
            console.log("Status: ", this.reservas[i].status);
            console.log("Data de Entrada: ", this.reservas[i].data_entrada);
            console.log("Data de Saída: ", this.reservas[i].data_saida);
            console.log("-----------------------------------------------------------------")
        }
        const id = readline.questionInt("Digite o id da reserva: ");
        const status = readline.question("Digite o novo status da reserva: ");
        for(let i = 0; i < this.reservas.length; i++){
            if(this.reservas[i].id === id){
                this.reservas[i].status = status;
                console.log("Reserva alterada com sucesso");
            }
        }
    }
}


// Instancia o sistema e inicia o programa
const sistema = new Sistema()
sistema.inicio()