# Documentação da API - Beleza in Home #


### Questões tecnicas ###

1. O projeto está sendo estruturado com NestJs 

2. O ORM que está sendo utilizado é o Prisma

3. Banco de dados que está configurado é o MySql
  - Caminho para alterar as credencias para acessar o banco, deve alterar as informações da URL que esta dentro do arquivo **.env**

  ![env](resource/env.PNG)

### Diagramas do Projeto ###

1. Diagrama de classes 

![Diagrama](resource/DiagramaDeClasses.PNG)

2. Diagrama de Relacionamento

![Diagrama](resource/DiagramaDeRelacionamentos.PNG)

## EndPoint - User ## 

1. End Point para cria o user 

![Criar](resource/EndPointCriar.PNG)

Modelo do arquivo JSON para realizar o cadastro 

![JSON](resource/JSONCriar.PNG)

2. End Point para buscar todos os usuarios cadastrados

![Todos](resource/EndPoint-buscartodos.PNG)

3. End Point para buscar cadastros pelo cpf

![cpf](resource/buscar%20pelo%20cpf.PNG)

4. End Point para atualizar cadastro

A busca do cadastro será feita pelo cpf 

![atualizar](resource/endpointAtualizar.PNG)

E o json por enquanto segue o mesmo padrao do criar, irei criar um dto mais estruturado para ele 

![json](resource/JSONAtualizar.PNG)

5. End Point do delete

Será feita o delete apartir do cpf do usuario 

![exluir](resource/delete.PNG)
