# ProCV - Professional Executive Atelier

Sistema profissional de criação de currículos executivos com monetização integrada Kiwify e blindagem anti-cópia de nível máximo.

## 🚀 Funcionalidades Implementadas

### ✨ **Interface Profissional**
- Design luxuoso com tema dark e dourado
- Layout responsivo e intuitivo
- Preview em tempo real do currículo
- Editor dinâmico para experiências e formação

### 💰 **Sistema de Monetização**
- **Modo Bloqueado (Padrão):**
  - Marca d'água em grade "PROCV - ACESSO BLOQUEADO"
  - Efeito de desfoque (blur 1.5px) no conteúdo
  - Botão "LIBERAR ACESSO EXECUTIVO" para checkout Kiwify

- **Modo Desbloqueado (?status=pago):**
  - Remoção instantânea da marca d'água
  - Conteúdo nítido sem desfoque
  - Botão "BAIXAR EM ALTA DEFINIÇÃO" com animação dourada

### 🛡️ **Blindagem Anti-Cópia (Nível Máximo)**
- Bloqueio de Ctrl+P (Imprimir)
- Bloqueio de Ctrl+S (Salvar)
- Bloqueio de F12 e DevTools
- Bloqueio de clique direito
- Prevenção de seleção de texto
- Marca d'água contínua impossível de remover

## 🌐 **Deploy na Vercel**

### Pré-requisitos
```bash
# Instalar Vercel CLI
npm i -g vercel
```

### Deploy Automático
1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente (se necessário)
3. Deploy automático a cada push

### Deploy Manual
```bash
# Clonar repositório
git clone https://github.com/CodeBy-red/ProCV-Professional-Executive-Atelier.git
cd ProCV-Professional-Executive-Atelier

# Instalar dependências
npm install

# Fazer deploy
npm run deploy
# ou
vercel --prod
```

## ⚙️ **Configuração Kiwify**

1. **Substitua o ID do produto:**
   ```javascript
   // Em client/src/js/main.js, linha 44
   window.location.href = 'https://pay.kiwify.com.br/oQppxrj';
   ```

2. **Configure o redirecionamento pós-pagamento:**
   - URL de retorno: `https://seu-dominio.vercel.app?status=pago`
   - **Sales Page:** https://kiwify.app/tJMJEZm

## 📁 **Estrutura do Projeto**

```
procv-app/
├── client/
│   ├── index.html              # Página principal
│   └── src/
│       ├── css/
│       │   └── main.css        # Estilos e blindagem
│       └── js/
│           ├── main.js         # Lógica de monetização
│           └── editor.js       # Editor de currículo
├── server/                     # Backend (pronto para desenvolvimento)
├── vercel.json                 # Configuração Vercel
├── package.json                # Dependências e scripts
└── README.md                   # Este arquivo
```

## 🎯 **Como Usar**

### Modo Desenvolvimento
```bash
npm run dev
# Acessar: http://localhost:3000
```

### Modo Produção
```bash
npm run start
# Acessar: http://localhost:3000
```

### Testar Sistema de Pagamento
- **Modo Bloqueado:** `http://localhost:3000`
- **Modo Desbloqueado:** `http://localhost:3000?status=pago`

## 🔧 **Tecnologias Utilizadas**

- **Frontend:** HTML5, CSS3, JavaScript Vanilla
- **Estilo:** CSS Grid, Flexbox, CSS Variables
- **Ícones:** Lucide Icons
- **Fontes:** Google Fonts (Playfair Display)
- **Deploy:** Vercel
- **Monetização:** Kiwify

## 💡 **Próximos Melhorias**

- [ ] Backend completo com Node.js/Express
- [ ] Sistema de autenticação de usuários
- [ ] Múltiplos templates de currículo
- [ ] Exportação em PDF e DOCX
- [ ] Integração com LinkedIn
- [ ] Sistema de assinatura recorrente

## 📄 **Licença**

MIT License - Copyright (c) 2024 CodeBy-red

## 🤝 **Contribuições**

Contribuições são bem-vindas! Abra uma issue ou envie um pull request.

---

**ProCV - O padrão ouro em currículos executivos** 🏆
