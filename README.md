# Gateway de Pagamento

Este é um projeto em JavaScript que implementa um gateway de pagamento integrado com a plataforma Pagarme e o banco de dados MongoDB. O objetivo deste projeto é fornecer uma solução para processamento de pagamentos online de forma segura e eficiente.

## Funcionalidades

- **Processamento de Pagamentos**: Permite processar pagamentos online utilizando a API da Pagarme, incluindo operações como autorização, captura, estorno e consulta de transações.

- **Integração com MongoDB**: Utiliza o banco de dados MongoDB para armazenar informações sobre transações, clientes e produtos, garantindo a persistência e integridade dos dados.

## Tecnologias Utilizadas

- **JavaScript**: Linguagem de programação utilizada para o desenvolvimento do projeto.

- **Pagarme**: Plataforma de pagamentos online que fornece uma API para processamento de transações financeiras.

- **MongoDB**: Banco de dados NoSQL utilizado para armazenar informações relacionadas a transações, clientes e produtos.

- **Docker**: Utilizado para conteneirizar o banco de dados MongoDB, facilitando o processo de implantação e gerenciamento do ambiente de desenvolvimento.

## Pré-requisitos

- Node.js e npm instalados na máquina local.
- Conta na Pagarme para obter as chaves de API.
- Docker instalado na máquina local para conteneirizar o MongoDB.

## Instalação

1. Clone este repositório:

    ```
    git clone https://github.com/eryalefvs/payment-gateway-with-pagarme.git
    ```

2. Instale as dependências:

    ```
    npm install
    ```

3. Configure as variáveis de ambiente:

   - Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis:

    ```
    PORT=5000
    MONGODB_URI=mongodb://localhost:27017/nome-do-banco-de-dados
    PAGARME_API_KEY=SuaChaveDeAPIPagarme
    PAGARME_WEBHOOK_URL=
    ```

4. Inicie o contêiner do MongoDB usando Docker:

    ```
    docker-compose up -d
    ```

5. Inicie o servidor:

    ```
    npm start
    ```

## Uso

Após iniciar o servidor, o gateway de pagamento estará pronto para processar pagamentos online. Você pode integrar este sistema com seu site ou aplicação para permitir que os clientes realizem pagamentos de forma segura e eficiente. Para fins de testes, utilize o Postman ou Insomnia para enviar as requisições.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) para relatar bugs ou propor novas funcionalidades. Se deseja contribuir diretamente, faça um fork do repositório, faça as alterações e envie um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
