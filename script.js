const readline = require("readline-sync")

class Reserva{
    constructor(id_cliente, status, data_entrada, data_saida){
        this.id = this.getId();
        this.id_cliente = id_cliente;
        this.status = status;
        this.data_entrada = data_entrada;
        this.data_saida = data_saida;
    }

    getId(){
        return Math.floor(Math.random() * 1000)
    }
}

class Funcionario{
    constructor(nome, cpf, email, senha){
        this.id = this.getId();
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
    }

    getId(){
        return Math.floor(Math.random() * 1000)
    }
}

class Cliente{
    constructor(nome, cpf, email, senha, nascimento){
        this.id = this.getId();
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
        this.nascimento = nascimento;
    }
    getId(){
        return Math.floor(Math.random() * 1000);
    }
}

class Quartos{
    constructor(quantidade_camas, preco_noite, quantidade_disponivel, nome, descricao){
        this.quantidade_camas = quantidade_camas;
        this.preco_noite = preco_noite;
        this.quantidade_disponivel = quantidade_disponivel;
        this.nome = nome;
        this.descricao = descricao;
        this.avaliacao = [];
    }
}

const quarto1 = new Quartos(2, 100, 5, "Quarto 1", "Quarto com cama de casal");
const quarto2 = new Quartos(1, 50, 3, "Quarto 2", "Quarto com cama de solteiro");
const quarto3 = new Quartos(3, 150, 7, "Quarto 3", "Quarto com cama de casal e solteiro");
const quarto4 = new Quartos(4, 200, 10, "Quarto 4", "Quarto com cama de casal e solteiro e banheira");

const cliente1 = new Cliente("João", "12345678910", "Bt1YF@example.com", "senha123", "1990-01-01");

const reserva1 = new Reserva(cliente1.id, "pendente", "2021-10-01", "2021-10-05");
const reserva2 = new Reserva(cliente1.id, "pendente", "2021-10-10", "2021-10-15");

const funcionario1 = new Funcionario("Lucas", "12345678910", "Bt1YF@example.com", "senha123");

class Sistema{
    constructor(){ 
        this.funcionarios = [];
        this.clientes = [];
        this.quartos = [];
        this.reservas = [];
    }

    inicio(){
        let t = true
        this.clientes.push(cliente1)
        this.funcionarios.push(funcionario1)
        this.quartos.push(quarto1, quarto2, quarto3, quarto4)
        this.reservas.push(reserva1, reserva2)
        while (t === true){
            console.log("Bem vindo ao sistema de reservas");
            console.log("1 - Login");
            console.log("2 - Cadastro");
            console.log("3 - Sair do programa");
            const opcao = readline.questionInt("Digite a opcao desejada: ");
            console.log("-----------------------------------------------------------------")
            switch(opcao){
                case 1:
                    this.login();
                    break;
                case 2:
                    this.cadastro();
                    break;
                case 3:
                    console.log("Obrigado por usar o sistema de reservas");
                    t = false;
                    break;
                    default:
                        console.log("Opção invalida");
                        break;
                    }
                }
    }

    ver_dados_cliente(cliente){
        console.log("ID: ", cliente.id);
        console.log("Nome: ", cliente.nome);
        console.log("CPF: ", cliente.cpf);
        console.log("Email: ", cliente.email);
        console.log("Data de Nascimento: ", cliente.nascimento);
        console.log("-----------------------------------------------------------------")
    }

    editar_dados_cliente(cliente){
        console.log("ID: ", cliente.id);
        console.log("Nome: ", cliente.nome);
        console.log("CPF: ", cliente.cpf);
        console.log("Email: ", cliente.email);
        console.log("Senha: ", cliente.senha);
        console.log("Data de Nascimento: ", cliente.nascimento);
        console.log("-----------------------------------------------------------------")
        const nome = readline.question("Digite o novo nome: ");
        const cpf = readline.question("Digite o novo cpf: ");
        const nascimento = readline.question("Digite a nova data de nascimento: ");
        const email = readline.question("Digite o novo email: ");
        const senha = readline.question("Digite a nova senha: ");
        for(let i=0; i< this.clientes.length; i++){
            if(this.clientes[i].cpf === cliente.cpf){
            this.clientes[i].nome = nome; 
            this.clientes[i].cpf = cpf;
            this.clientes[i].email = email; 
            this.clientes[i].senha = senha; 
            this.clientes[i].nascimento = nascimento;
            }
        }
    }

    login(){
    console.log("Quem voce e?");
    console.log("1 - Cliente");
    console.log("2 - Funcionário"); 
    const opcao = readline.questionInt("Digite a opcao desejada: ");
    const email = readline.question("Digite seu email: ");
    const senha = readline.question("Digite sua senha: ");

    if(opcao === 1){
        for(let i = 0; i < this.clientes.length; i++){
            if(this.clientes[i].email === email && this.clientes[i].senha === senha){
                console.log("Login efetuado com sucesso");
                console.log("Bem vindo ", this.clientes[i].nome);
                this.tela_cliente(this.clientes[i]);
            }
        }
        console.log("Login invalido");
    }
    if(opcao === 2){
        for(let i = 0; i < this.funcionarios.length; i++){
            if(this.funcionarios[i].email === email && this.funcionarios[i].senha === senha){
                console.log("Login efetuado com sucesso");
                console.log("Bem vindo ", this.funcionarios[i].nome);
                this.tela_funcionario(this.funcionarios[i])
            }
        }
        console.log("Login invalido");
    }
    }

    cadastro(){
        console.log("Quem você é?");
        console.log("1 - Cliente");
        console.log("2 - Funcionário"); 
        const opcao = readline.questionInt("Digite a opcao desejada: ");
        const nome = readline.question("Digite seu nome: ");
        const cpf = readline.question("Digite seu cpf: "); 
        const email = readline.question("Digite seu email: ");
        const senha = readline.question("Digite sua senha: ");
        if(opcao === 1){
            const nascimento = readline.question("Digite sua data de nascimento: ");
            console.log("-----------------------------------------------------------------")
            const cliente = new Cliente(nome, cpf, email, senha, nascimento);
            console.log(cliente);
            this.clientes.push(cliente);
        }
        if(opcao === 2){
            console.log("-----------------------------------------------------------------")
            this.funcionarios.push(new Funcionario(nome, cpf, email, senha));
            console.log(this.funcionarios);
            }
    }
        
    tela_funcionario(funcionario){
        let t = true
        while(t === true){
        console.log("1 - Ver meus Dados")
        console.log("2 - Ver Lista de Quartos")
        console.log("3 - Editar Quartos")
        console.log("4 - Excluir Quartos")
        console.log("5 - Ver Lista de Clientes");
        console.log("6 - Ver Lista de Reservas");
        console.log("7 - Mudar status da reserva (pendente, adiada, realizada, cancelada)");
        console.log("8 - Voltar para o menu de inicio");
        const opcao = readline.questionInt("Digite a opcao desejada: ");
        console.log("-----------------------------------------------------------------")
        switch(opcao){
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
                t = false
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

    visualizar_avaliacoes(){
        for(let i = 0; i < this.quartos.length; i++){
            console.log("Quarto: ", this.quartos[i].nome);
            console.log("Avaliacao: ", this.quartos[i].avaliacao);
            console.log("-----------------------------------------------------------------");
        }
    }

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

    ver_dados_funcionario(funcionario){
        console.log("ID: ", funcionario.id);
        console.log("Nome: ", funcionario.nome);
        console.log("CPF: ", funcionario.cpf);
        console.log("Email: ", funcionario.email);
        console.log("Senha: ", funcionario.senha);
        console.log("-----------------------------------------------------------------")
    }

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

const sistema = new Sistema()
sistema.inicio()