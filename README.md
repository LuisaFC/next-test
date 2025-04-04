# ✅ Lista de Tarefas (Task Manager)

## 🌐 Demo Online
Acesse a aplicação em produção: [Task Manager](https://task-manager-next.vercel.app)

[![Deploy with Vercel](https://vercel.com/button)](https://task-manager-next.vercel.app)


## 📝 Descrição
Uma aplicação web moderna para gerenciamento de tarefas, construída com Next.js e TypeScript. O projeto oferece uma interface intuitiva com suporte a temas claro/escuro e gerenciamento de estado eficiente.

## 🛠️ Tecnologias Utilizadas
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Zustand (Gerenciamento de Estado)
- React
- Shadcn/UI
- Lucide-react
- Prisma
- PostgreSQL
- Vercel

## ⚙️ Funcionalidades
- ✨ Criação e gerenciamento de tarefas
- 🌓 Alternância entre tema claro e escuro
- 📱 Design responsivo
- 💾 Gerenciamento de estado persistente
- ⚡ Interface de usuário moderna e intuitiva

## 🚀 Como executar o projeto

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

Clone este repositório

```
git clone https://github.com/LuisaFC/next-test
```

Instale as dependências

```
npm install
```

Execute o projeto em modo de desenvolvimento

```
npm run dev
```

## 📁 Estrutura do Projeto

```
├── app/
│ └── page.tsx # Página principal
├── components/
│ ├── Analytics/ # Componentes relacionados a dashboard
│ ├── Tasks/ # Componentes relacionados a tarefas
│ └── ThemeSwitcher/ # Componente de alternância de tema
├── Context/
│ └── ThemeContext.tsx # Contexto para gerenciamento de tema
├── hooks/
│ ├── useAnalytics.ts # Hook para gerenciamento do dashboard
│ └── useTasks.ts # Hook para gerenciamento das tarefas
├── pages/
│ ├── api/ # Rotas da API
├── services/
│ ├── http.ts # Configuração do cliente HTTP
│ └── api # Serviços relacionados às tarefas e dashboard
├── store/
│ └── tasksStore.ts # Estado global com Zustand
└── types/ # Tipos e interfaces

```

## 🔧 Configuração
O projeto utiliza as seguintes configurações padrão:
- TypeScript para tipagem estática
- Tailwind CSS para estilização
- Next.js App Router para roteamento
- Zustand para gerenciamento de estado

## 🤝 Como Contribuir
1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Faça commit das suas alterações (`git commit -m 'Add some AmazingFeature'`)
4. Faça push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença
Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

⭐ Desenvolvido com ♥ por Luísa