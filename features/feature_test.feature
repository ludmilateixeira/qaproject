
@EnviarDados

Feature: Enviar os dados na tela Iniciando Na Automação de Testes

Scenario: Informar um usuario, senha e nome valido nos campos de texto

    Given que o usuario acesse a pagina inicial do sistema
    Then o campo de Usuario deve ser exibido vazio, para ser preenchido