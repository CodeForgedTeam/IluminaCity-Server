## 🚀 Como rodar o projeto (Onboarding)
Se é seu primeiro dia aqui, siga estes passos para configurar seu ambiente.

1. Pré-requisitos

Certifique-se de ter instalado:
- Node.js (Versão LTS recomendada)
- Git

2. Instalação
Clone o repositório e instale as dependências:

```
# 1. Clone o projeto
git clone https://github.com/SuaOrg/IluminaCity-Server.git

# 2. Entre na pasta
cd IluminaCity-Server

# 3. Instale os pacotes
npm install
```
3. Configuração de Ambiente (.env)

O sistema precisa de variáveis de ambiente para rodar (senhas do banco, etc).
Crie um arquivo .env na raiz do projeto e preencha conforme o exemplo abaixo (peça os valores reais ao Tech Lead):

```
# Exemplo de .env
DATABASE_URL="postgres://usuario:senha@host:6543/postgres?pgbouncer=true"
```

4. Rodando o Servidor
```
npm run dev
```

O servidor estará rodando em: ``http://localhost:3333``

---
## 🤝 Fluxo de Trabalho (Git Workflow)
Para manter a sanidade do código e evitar conflitos, a branch main é protegida.
NUNCA faça commit direto na main. Siga o fluxo abaixo:

### Passo 1: Começando uma tarefa (Sincronização)
Antes de começar a codar, garanta que seu projeto está atualizado com a nuvem:
```
git checkout main
git pull origin main
```

### Passo 2: Criando sua Branch
Crie uma "sala separada" para sua tarefa. Use nomes semânticos:
- ``feat/ para novas funcionalidades (ex: feat/login-screen)``
- ``fix/ para correção de bugs (ex: fix/botao-quebrado)``
- ``docs/ para documentação``

```
git checkout -b feat/nome-da-sua-tarefa
```

### Passo 3: Salvando o Trabalho (Commit)
Faça suas alterações e salve:

```
git add .
git commit -m "feat: descrição clara do que você fez"
```

### Passo 4: Enviando para o GitHub
Envie sua branch para a nuvem:

```
git push origin feat/nome-da-sua-tarefa
```

(Se o terminal reclamar de "upstream", copie e cole o comando que ele sugerir).

### Passo 5: Pull Request (PR)
1. Acesse o repositório no GitHub.
2. Clique no botão "Compare & pull request".
3. Descreva o que foi feito.
4. Solicite revisão (Review) e aguarde a aprovação para o merge.

---
## ⚠️ Comandos Úteis

| Comando | O que faz? |
| :--- | :--- |
| npm run dev | Inicia o servidor |
| npm run build | Cria a versão final |

---
## 🐳 Infraestrutura Local (Docker)
Para garantir que todo mundo rode o projeto com o mesmo banco de dados e configurações, utilizamos Docker Compose.
Não é necessário instalar o PostgreSQL na sua máquina, apenas o Docker.

1. Pré-requisitos
- Docker Desktop instalado e rodando (a baleia tem que estar verde/ativa).

2. Comandos do Dia a Dia
- Subir o ambiente (Banco + Interface):
```
docker-compose up -d
```
O parâmetro -d (detached) libera seu terminal para continuar usando.

- Derrubar o ambiente
```
docker-compose down
```

- Ver o que está rodando
```
docker ps
```
---
3. Acessando o Banco de Dados
Nós incluímos o Adminer (uma interface visual leve) para você não precisar instalar nada extra.
- URL de Acesso: http://localhost:8080

🔑 Credenciais de Acesso (Copie exatamente assim):

| Campo | Valor | Explicação |
| :--- | :--- | :--- |
| Sistema | PostgreSQL | O tipo do nosso banco. |
| Servidor | db | Atenção: Dentro do Docker, o host é o nome do serviço, não "localhost". |
| Usuário | admin | Definido no docker-compose.yml. |
| Senha | admin | Definido no docker-compose.yml. |
| Banco | iluminacity_db | O nome do banco do projeto. |

(OBS: coloquei os valores padrão do docker-compose.yml, isso vai mudar no futuro)