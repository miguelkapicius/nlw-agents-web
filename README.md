# Projeto NLW Agents

Este é um projeto desenvolvido durante o evento Next Level Week (NLW), com foco na criação de uma aplicação web para gerenciamento de salas e perguntas.

## Funcionalidades

- Criação de salas
- Listagem de salas
- Envio de perguntas
- Listagem de perguntas
- Gravação de áudio em salas

## Tecnologias Utilizadas

- React
- TypeScript
- Vite
- Day.js

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

```
├── public\
├── src\
│   ├── app.tsx
│   ├── components\
│   │   ├── create-room-form.tsx
│   │   ├── question-list.tsx
│   │   ├── room-list.tsx
│   │   └── ui\
│   ├── http\
│   │   ├── types\
│   │   ├── use-create-question.ts
│   │   ├── use-create-room.ts
│   │   ├── use-room-questions.ts
│   │   └── use-rooms.ts
│   ├── pages\
│   │   ├── create-room.tsx
│   │   ├── question-form.tsx
│   │   ├── question-item.tsx
│   │   ├── record-room-audio.tsx
│   │   └── room.tsx
│   ├── utils\
│   │   └── dayjs.ts
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
```

## Como Executar

1. Clone o repositório:

   ```bash
   git clone https://github.com/miguelkapicius/nlw-agents-web.git
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse a aplicação em seu navegador pelo endereço:
   [http://localhost:3000](http://localhost:3000)

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.

## Licença

Este projeto está licenciado sob a licença MIT.
