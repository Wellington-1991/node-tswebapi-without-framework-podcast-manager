# 🎧 Podcast Manager (Back-End)

O **Podcast Manager** é uma API back-end desenvolvida em **Node.js + TypeScript**, criada para centralizar e gerenciar episódios de **podcasts em vídeo**.  
Inspirado em plataformas como **Netflix**, o projeto organiza os episódios em **categorias temáticas** e permite **filtrar** por nome do podcast.

---

## 🧩 Descrição
O **Podcast Manager (Back-End)** é responsável por fornecer os dados em formato **JSON** para consumo por um cliente (front-end ou mobile).  
Ele expõe endpoints REST para listar e filtrar episódios de podcasts armazenados localmente em um arquivo `.json`.

---

## 🎬 Domínio
Podcasts em **formato de vídeo**, geralmente hospedados no **YouTube**.

---

## 🚀 Funcionalidades
- Listar episódios de podcasts por categoria:
  - Saúde
  - Fitness
  - Mentalidade
  - Humor
- Filtrar episódios pelo **nome do podcast** via query string.
- Retornar respostas formatadas em **JSON**.

---

## ⚙️ Como funciona

### 🔹 Feature:
**Listar os podcasts em sessões de categorias**

### 🔹 Implementação:
O servidor expõe endpoints REST que retornam uma lista de episódios, cada um contendo:
- Nome do podcast  
- Nome do episódio  
- Imagem de capa  
- Link para o vídeo  
- Categorias associadas  

---

## 🌐 API REST

### **GET /** – Listar todos os episódios
Retorna todos os episódios disponíveis.

**Exemplo:**
```bash
GET api/episodes
```
---
## 🚀 Como Rodar o Projeto

## Instalar as dependências
```
npm install
```

Compilar o TypeScript
```
npm run build
```

Executar o servidor
```
npm start:watch
```
💡 Tecnologias Utilizadas

Node.js

TypeScript

Express

dotenv (para variáveis de ambiente)
