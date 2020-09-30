#language:pt

# Tela 0001 


Funcionalidade: Enviar os dados na tela Iniciando Na Automacao de Testes

@ValidacaoUsuario

Cenário: Informar um Usuario para validar nos campos de textos

    Dado que eu acesse a pagina inicial do sistema
    Então o campo de Usuario deve ser exibido vazio, para que eu possa preencher

@ValidarSenha

Cenário: Digitar o campo Senha para exibir os caracteres de forma mascarada, para isso o campo inicial deve ser vazio inicialmente

    Dado que eu acesse a pagina inicial do sistema
    E que o campo de Senha esteja vazio para que eu possa preencher
    Quando eu preencher o campo de senha
    Então o campo irá ocultar os valores digitados

@ValidarNome

Cenário: Informar um Nome para validar nos campos de textos

    Dado que eu acesse a pagina inicial do sistema
    Então o campo de Nome deve ser exibido vazio, para que eu possa preencher

@ValidarEnviarFalha

Cenário: Mostrar mensagem de falha ao apertar o botao Enviar sem os dados preenchidos
    Dado que eu acione o botao enviar
    E o campo Usuario esteja vazio
    Então eu verei uma mensagem de falha solicitando que eu preencha este campo

# @ValidarEnviarSucesso

# Cenário: Realizar o preenchimento dos dados e ao enviar, os dados serao direcionados para uma tabela

#     Dado que eu acesse a pagina inicial do sistema
#     E que o campo de Usuario esteja preenchido
#     E que o campo de Nome esteja preenchido
#     E que o campo de Senha esteja preenchido
#     Quando eu clicar no botao de Enviar
#     Então o envio dos dados sera realizados para a tabela resultados

# @AtualizarPagina

# Cenário: Recarregar pagina ao botao ser clicado
#     Dado que eu acesse a pagina inicial do sistema
#     Quando eu clicar no botao texto Clique aqui
#     Então a pagina sera recarregada


# # Tela 0010

# @AcionarEnviar2

# Cenário: Apertar o botao Enviar para tratar as informacoes 

#     Dado que eu acesse a pagina inicial do sistema
#     E que o campo de Usuario esteja preenchido
#     E que o campo de Senha nao esteja preenchido
#     Quando eu clicar no botao de Enviar
#     Então eu verei uma mensagem de falha solicitando que eu preencha este campo de Senha


# # Tela 0011

# @AcionarEnviar3

# Cenário: Apertar o botao Enviar para tratar as informacoes 

#     Dado que eu acesse a pagina inicial do sistema
#     E que o campo de Usuario esteja preenchido
#     E que o campo de Senha esteja preenchido
#     E que o campo de Nome esteja preenchido
#     Quando eu clicar no botao de Enviar
#     Então eu verei uma mensagem de falha informando que existem campos em branco

# # Tela 0100
