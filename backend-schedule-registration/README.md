# BACKEND DO PROJETO SCHEDULE REGISTRATION

### Projeto
Permitir o armazenamento de novas agendas e horários,
juntamente com o cadastro do Candidato para realizar a matrícula




### Tecnologias

- Nestjs
- Banco de Dados Postgres


### Arquitetura da Solução
  Duas camadas simples.
    Frontend 
    + Backend
    + Banco de DAdols

### Instalação
```bash
$ git clone https://github.com/hagemelo/schedule-registration.git

# Prepare Backend
$ cd backend-schedule-registration/
$ npm install

# development
$ npm run start:dev

#prod
$ npm run start:prod

#docker
$ docker build --build-arg DB_HOST=127.0.0.1 --build-arg DB_USER=programador --build-arg DB_PASSWORD=hidros --build-arg DB_NAME=tarefas -t backend-schedule-registration:latest .
$ docker run --rm -d -p 9090:9090 --name backend backend-schedule-registration 

#Docker Acessar imagem
$ docker run -it --entrypoint sh  backend-schedule-registration
```

