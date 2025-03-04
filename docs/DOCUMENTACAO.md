# Documentação do Portfólio - Pedro Vitor Balduino Martins

Este documento explica detalhadamente a estrutura e funcionamento do site de portfólio, para facilitar futuras modificações.

## Estrutura de Arquivos

### Arquivos Principais

- **index.html**: Arquivo HTML principal que define a estrutura básica da página, importa fontes e conecta ao JavaScript.
- **src/main.tsx**: Ponto de entrada da aplicação React, renderiza o componente App no elemento root.
- **src/App.tsx**: Componente principal que organiza todas as seções do portfólio.
- **src/index.css**: Arquivo CSS global com configurações do Tailwind e estilos personalizados.

### Componentes

1. **Hero.tsx**: 
   - Seção inicial (banner) do site
   - Contém nome, título, descrição e botões de chamada para ação
   - Inclui animação de seta para baixo

2. **About.tsx**:
   - Seção "Sobre Mim" com foto e descrição pessoal
   - Lista de habilidades técnicas
   - Botão para download do currículo

3. **Projects.tsx**:
   - Exibe projetos em formato de cards
   - Cada projeto tem imagem, título, descrição, tecnologias e links
   - Os projetos são definidos em um array no início do arquivo

4. **Skills.tsx**:
   - Mostra habilidades técnicas com barras de progresso
   - Exibe soft skills em cards
   - As habilidades são definidas em um objeto no início do arquivo

5. **Contact.tsx**:
   - Seção de contato com links para redes sociais
   - Não contém mais o formulário de contato (removido conforme solicitado)

6. **Footer.tsx**:
   - Rodapé do site com informações de copyright
   - Links para redes sociais

7. **WhatsAppButton.tsx**:
   - Botão flutuante de WhatsApp no canto inferior direito
   - Abre conversa com o número configurado quando clicado

## Dependências Principais

- **React**: Biblioteca para construção da interface
- **Tailwind CSS**: Framework CSS para estilização
- **Lucide React**: Biblioteca de ícones
- **React Hot Toast**: Sistema de notificações

## Como Fazer Alterações Comuns

### Alterar Informações Pessoais

- **Nome e título**: Editar em `Hero.tsx`
- **Descrição pessoal**: Editar em `About.tsx`
- **Foto de perfil**: Substituir URL da imagem em `About.tsx`

### Modificar Projetos

- Abra `Projects.tsx`
- Edite o array `projects` no início do arquivo
- Cada projeto tem: título, descrição, imagem, tecnologias e links

### Atualizar Habilidades

- Abra `Skills.tsx`
- Modifique o objeto `skills` no início do arquivo
- Para habilidades técnicas, ajuste o nome e o nível (0-100)
- Para soft skills, edite o array de strings

### Alterar Cores e Estilos

- As cores principais estão definidas nas classes Tailwind em cada componente
- Para alterações globais, edite `tailwind.config.js`

### Adicionar/Remover Seções

- Edite `App.tsx` para adicionar ou remover componentes de seção

## Recursos Externos

- **Imagens**: Hospedadas no Unsplash
- **Ícones**: Fornecidos pela biblioteca Lucide React
- **Fontes**: Inter do Google Fonts

## Contato e Links

- **GitHub**: https://github.com/PedroVitor1312
- **Instagram**: https://www.instagram.com/pedro_vitor_martins/
- **Email**: pedromartins951@hotmail.com
- **WhatsApp**: 34992762873