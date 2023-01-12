<div align="center"> 
 

 <img align="center" alt="tech" width="40" height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                 
 <img align="center" alt="tech" width="40" height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                 
</div>

<h3 align="center">Cars Store</h3>

<div align="center">
	
</div>

## Sumário
- [Regras de Negócio](#backend)
- [Backend](#backend)
	- [Tecnologias](#tecnologias_back)
	- [Rotas](#rotas)
- [Frontend](#frontend)
	- [Tecnologias](#tecnologias_front)
	- [Funcionamento](#funcionamento_front)
- [Executar Projeto](#executar)

## Regras de Negócio <a name = "regra"></a>
Site de Loja da carros.
- Homepage exibindo os Veiculos
- Usuario pode se cadastrar e efetuar login
- As imagens dos veiculos são salvas no S3.
- Apenas o admin pode cadastrar, editar e excluir livros.
- Usuario pode adicionar e remover veiculos do seu carrinho de compras. 
- Usuario pode adicionar e remover veiculos da sua conta. 



## BackEnd<a name = "backend"></a>
### lib's utilizadas: <a name = "tecnologias_back"></a>

- node 16.17.0
- express
- passport - jwt 
- jsonWebToken
- Multer
- mysql
- Sequelize
- AWS S3

### Funcionalidades <a name = "rotas"></a>
<p>O projeto é dividido nas seguintes rotas:</p>

**/car**: 
<p>Para utilizar as rotas de POST, PUT, DELETE é necessário que o user seja admin e fornecer token JWT valido.</p>

- `/car` (GET)
- `/car/registercar` (GET)
- `/car/:id` (GET, PUT, DELETE)

**/user**:

- `/user` (GET)
- `/user/:id` (GET, PUT, DELETE)
- `/user/register` (POST)
- `/user/:id/seeowned` (GET)
- `/user/:id/buy` (DELETE)
- `/user/login` (POST)



**imagens**:
  As imagens são salvas em bucket S3 da aws:


As rotas podem ser testadas utilizando a interface gráfica do frontend.



## FrontEnd <a name = "frontend"></a>

### lib's utilizadas: <a name = "tecnologias_front"></a>

- node 16.17.0
- React
- scss
- Bootstrap
- React Icons
- React Hook Forms

### Funcionamento <a name = "funcionamento_front"></a>

**Estrutura do Projeto:**

- `./pages`: são todas as páginas disponiveis para acesso
- `./components`: Todos os componentes e utilizados nas páginas
- `./services`: Possui funções responsaveis por armazenar as rotas e interargir com a API
- `./styles`: Onde fica localizado as variaveis globais de estilo.
- `./routes`: Onde fica localizado as rotas de cada pagina do projeto.
- `./helpers`: Onde fica todas as funções e arquivos de ajuda, como por exemplo funções responsaveis por colocar maskara.

## Como executar Projeto ? <a name = "executar"></a>


#### Rodar Backend
- Preencher a env de acordo com o .env.example
- Executar `npm start`


#### Rodar Frontend

- Executar `npm start`
