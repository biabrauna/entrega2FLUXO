const readline = require("readline-sync")

class Reserva{
    construtor(id_cliente, status, data_entrada, data_saida){
        this.id = getId();
        this.id_cliente = id_cliente;
        this.status = status;
        this.data_entrada = data_entrada;
        this.data_saida = data_saida;
    }

    getId(){
        id = Math.floor(Math.random() * 1000);
        return id;
    }
}

class Funcionario{
    construtor(nome, cpf, email, senha){
        this.id = getId();
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
    }

    getId(){
        id = Math.floor(Math.random() * 1000);
        return id;
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
    construtor(){
        this.quantidade_camas = quantidade_camas;
        this.preco_noite = preco_noite;
        this.quantidade_disponivel = quantidade_disponivel;
        this.nome = nome;
        this.descricao = descricao;
    }
}

class Sistema{
    construtor(){ 
        this.funcionarios = [];
        this.clientes = [];
        this.quartos = [];
        this.reservas = [];
    }

    inicio(){
        let t = true
        while (t === true){
            console.log("Bem vindo ao sistema de reservas");
            console.log("1 - Login");
            console.log("2 - Cadastro");
            console.log("3 - Sair do programa");
            const opcao = readline.questionInt("Digite a opcao desejada: ");
            switch(opcao){
                case 1:
                    sistema.login();
                    break;
                case 2:
                    this.cadastro();
                    break;
                case 3:
                    console.log("Obrigado por usar o sistema de reservas");
                    t = false;
                    break;
                    default:
                        console.log("Opção inválida");
                        break;
                    }
                }
    }

    ver_dados_cliente(cliente){
        console.log("Nome: ", cliente.nome);
        console.log("CPF: ", cliente.cpf);
        console.log("Email: ", cliente.email);
        console.log("Data de Nascimento: ", cliente.nascimento);
    }

    login(){
    console.log("Quem você é?");
    console.log("1 - Cliente");
    console.log("2 - Funcionário"); 
    const opcao = readline.questionInt("Digite a opção desejada: ");
    const email = readline.question("Digite seu email: ");
    const senha = readline.question("Digite sua senha: ");

    if(opcao === 1){
        for(let i = 0; i < this.clientes.length; i++){
            if(this.clientes[i].email === email && this.clientes[i].senha === senha){
                console.log("Login efetuado com sucesso");
                console.log("Bem vindo ", this.clientes[i].nome);
                tela_funcionario(this.clientes[i]);
            }
        }
        console.log("Login inválido");
    }
    if(opcao === 2){
        for(let i = 0; i < this.funcionarios.length; i++){
            if(this.funcionarios[i].email === email && this.funcionarios[i].senha === senha){
                console.log("Login efetuado com sucesso");
                console.log("Bem vindo ", this.funcionarios[i].nome);
                tela_cliente(this.funcionarios[i])
            }
        }
        console.log("Login inválido");
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
            const cliente = new Cliente(nome, cpf, email, senha, nascimento);
            console.log(cliente);
            sistema.clientes.push(cliente);
        }
    if(opcao === 2){
            this.funcionarios.push(new Funcionario(nome, cpf, email, senha));
            console.log(this.funcionarios);
        }
    }
    
    tela_funcionario(funcionario){
        console.log("1 - Ver meus Dados")
        console.log("2 - Ver Lista de Quartos")
        console.log("3 - Ver Lista de Clientes");
        console.log("4 - Ver Lista de Reservas");
        console.log("5 - Mudar status da reserva (pendente, adiada, realizada, cancelada");
        console.log("6 - Sair do programa");
        const opcao = readline.questionInt("Digite a opcao desejada: ");
        switch(opcao){
            case 1:
                sistema.ver_dados_funcionario(funcionario);
                break;
            case 2:
                sistema.ver_lista_quartos(quartos);
                break;
            case 3:
                sistema.ver_lista_clientes(clientes);
                break;
            case 4:
                sistema.ver_lista_reservas(reservas);
                break;
            case 5:
                sistema.mudar_status_reserva(reservas);
                break;
            case 6:
                console.log("Obrigado por usar o sistema de reservas");
                break;
            default:
                console.log("Opção inválida");
                break;
        }
    }

    
    tela_cliente(cliente){
        console.log("1 - Ver meus Dados")
        console.log("2 - Ver Lista de Quartos")
        console.log("3 - Fazer reserva");
        console.log("4 - Cancelar reserva");
        console.log("5 - Verificar reserva");
        console.log("6 - Sair do programa");
        const opcao = readline.questionInt("Digite a opcao desejada: ");
        switch(opcao){
            case 1:
                sistema.ver_dados_cliente(cliente);
                break;
            case 2:
                sistema.ver_lista_quartos(quartos);
                break;
            case 3:
                sistema.fazer_reserva(reservas);
                break;
            case 4:
                sistema.cancelar_reserva(reservas);
                break;
            case 5:
                sistema.verificar_reserva(reservas);
                break;
            case 6:
                sistema.console.log("Obrigado por usar o sistema de reservas");
                break;
            default:
                console.log("Opção inválida");
                break;
        }
    }


    ver_lista_quartos(quartos){
        for(i = 0; i < quartos.length; i++){
            console.log("Quarto: ", quartos[i].nome);
            console.log("Descrição: ", quartos[i].descricao);
            console.log("Preço por noite: ", quartos[i].preco_noite);
            console.log("Quantidade de camas: ", quartos[i].quantidade_camas);
            console.log("Quantidade disponível: ", quartos[i].quantidade_disponivel);
        }
    }

    fazer_reserva(reservas){
        const id_cliente = readline.questionInt("Digite o id do cliente: ");
        const status = readline.question("Digite o status da reserva: ");
        const data_entrada = readline.question("Digite a data de entrada: ");
        const data_saida = readline.question("Digite a data de saída: ");
        const reserva = new Reserva(id_cliente, status, data_entrada, data_saida);
        reservas.push(reserva);
    }

    cancelar_reserva(reservas, cliente){
        for(i = 0; i < reservas.length; i++){
            if(reservas[i].id_cliente === cliente.id){
                console.log("Reserva: ", reservas[i].id);
                console.log("Cliente: ", cliente.nome);
                console.log("Status: ", reservas[i].status);
                console.log("Data de entrada: ", reservas[i].data_entrada);
                console.log("Data de saída: ", reservas[i].data_saida);
            }}
            const id = readline.questionInt("Digite o id da reserva: ");
            for(i = 0; i < reservas.length; i++){
            if(reservas[i].id === id){
                reservas.splice(i, 1);
            }
        }
    }

    verificar_reserva(reservas, cliente){
        for(i = 0; i < reservas.length; i++){
            if(reservas[i].id_cliente === cliente.id){
                console.log("Cliente: ", cliente.nome);
                console.log("Status: ", reservas[i].status);
                console.log("Data de entrada: ", reservas[i].data_entrada);
                console.log("Data de saída: ", reservas[i].data_saida);
            }}
        }

    ver_dados_funcionario(funcionario){
        console.log("ID: ", funcionario.id);
        console.log("Nome: ", funcionario.nome);
        console.log("CPF: ", funcionario.cpf);
        console.log("Email: ", funcionario.email);
        console.log("Senha: ", funcionario.senha);
    }

    ver_lista_clientes(clientes){
        for(i = 0; i < clientes.length; i++){
            console.log("ID: ", clientes[i].id);
            console.log("Nome: ", clientes[i].nome);
            console.log("CPF: ", clientes[i].cpf);
            console.log("Email: ", clientes[i].email);
            console.log("Data de Nascimento: ", clientes[i].nascimento);
        }
    }

    ver_lista_reservas(reservas){
        for(i = 0; i < reservas.length; i++){
            console.log("ID: ", reservas[i].id);
            console.log("ID Cliente: ", reservas[i].id_cliente);
            console.log("Status: ", reservas[i].status);
            console.log("Data de Entrada: ", reservas[i].data_entrada);
            console.log("Data de Saída: ", reservas[i].data_saida);
        }
    }

    mudar_status_reserva(reservas){
        for(i = 0; i < reservas.length; i++){
            console.log("ID: ", reservas[i].id);
            console.log("ID Cliente: ", reservas[i].id_cliente);
            console.log("Status: ", reservas[i].status);
            console.log("Data de Entrada: ", reservas[i].data_entrada);
            console.log("Data de Saída: ", reservas[i].data_saida);
        }
        const id = readline.questionInt("Digite o id da reserva: ");
        const status = readline.question("Digite o novo status da reserva: ");
        for(i = 0; i < reservas.length; i++){
            if(reservas[i].id === id){
                reservas[i].status = status;
            }
        }
    }
}


const sistema = new Sistema()
sistema.inicio()