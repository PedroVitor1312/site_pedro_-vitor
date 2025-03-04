# Como Adicionar Novos Projetos ao Portfólio

Este documento explica passo a passo como adicionar novos projetos ao seu portfólio.

## Localização do Arquivo de Projetos

Os projetos são definidos no arquivo `src/components/Projects.tsx`. Este arquivo contém um array chamado `projects` que armazena todos os projetos exibidos no site.

## Estrutura de um Projeto

Cada projeto no array tem a seguinte estrutura:

```javascript
{
  title: 'Título do Projeto',
  description: 'Descrição detalhada do projeto',
  image: 'URL da imagem do projeto',
  tech: ['Tecnologia1', 'Tecnologia2', 'Tecnologia3'],
  github: 'Link para o repositório no GitHub',
  live: 'Link para a versão online do projeto'
}
```

## Passo a Passo para Adicionar um Novo Projeto

### 1. Prepare os Recursos Necessários

Antes de adicionar um projeto, tenha em mãos:

- **Título do projeto**: Nome claro e conciso
- **Descrição**: Explicação breve mas informativa (recomendado: 1-3 frases)
- **Imagem**: URL de uma imagem representativa do projeto
  - Recomendação: Use o Unsplash para imagens profissionais
  - Formato ideal: 16:9 ou 4:3
  - Resolução recomendada: 800px de largura
- **Tecnologias**: Lista das principais tecnologias/ferramentas utilizadas
- **Links**: URLs para o repositório GitHub e versão live do projeto

### 2. Edite o Arquivo Projects.tsx

1. Abra o arquivo `src/components/Projects.tsx` em um editor de código
2. Localize o array `projects` no início do arquivo (aproximadamente linhas 4-27)
3. Adicione seu novo projeto ao array, seguindo o formato dos projetos existentes

**Exemplo de como adicionar um novo projeto:**

```javascript
const projects = [
  // Projetos existentes...
  
  // Seu novo projeto
  {
    title: 'Aplicativo de Finanças Pessoais',
    description: 'Aplicativo web para controle de finanças pessoais com gráficos e relatórios personalizados.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800',
    tech: ['React', 'Firebase', 'Chart.js', 'Tailwind CSS'],
    github: 'https://github.com/PedroVitor1312/finance-app',
    live: 'https://finance-app-demo.netlify.app'
  }
];
```

### 3. Salve o Arquivo

Após adicionar seu novo projeto, salve o arquivo. Se o servidor de desenvolvimento estiver rodando, as alterações serão refletidas automaticamente no site.

## Dicas para Descrições Eficazes

- **Seja conciso**: Mantenha a descrição entre 100-150 caracteres
- **Destaque o valor**: Explique o problema que o projeto resolve
- **Mencione características únicas**: O que torna seu projeto especial?
- **Use linguagem clara**: Evite jargões técnicos excessivos

## Dicas para Imagens de Projeto

- **Qualidade profissional**: Use screenshots de alta qualidade ou imagens do Unsplash
- **Consistência visual**: Mantenha proporções e estilo consistentes com os outros projetos
- **Relevância**: A imagem deve representar claramente o projeto
- **Otimização**: Certifique-se que a imagem carrega rapidamente (tamanho de arquivo adequado)

## Ordem dos Projetos

Os projetos são exibidos na ordem em que aparecem no array. O primeiro projeto no array será o primeiro exibido na página. Para reorganizar seus projetos:

1. Corte (Ctrl+X) o bloco de código do projeto que deseja mover
2. Cole (Ctrl+V) o bloco na nova posição desejada dentro do array

## Removendo Projetos

Para remover um projeto, simplesmente delete o objeto correspondente do array `projects`.

## Testando as Alterações

Após fazer as alterações:

1. Salve o arquivo
2. Verifique se o servidor de desenvolvimento está rodando (`npm run dev`)
3. Abra o navegador e verifique se o novo projeto aparece corretamente
4. Teste os links para garantir que funcionam
5. Verifique a responsividade em diferentes tamanhos de tela

## Problemas Comuns

- **Imagem não carrega**: Verifique se a URL da imagem está correta e acessível
- **Layout quebrado**: Certifique-se que a descrição não é muito longa
- **Links não funcionam**: Verifique se os URLs estão completos (incluindo https://)

## Exemplo Completo

Aqui está um exemplo completo de como o array `projects` ficaria com três projetos existentes e um novo:

```javascript
const projects = [
  {
    title: 'Site Institucional',
    description: 'Site institucional para uma empresa local, com design responsivo e integração com APIs.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800',
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    github: 'https://github.com/PedroVitor1312/site-institucional',
    live: 'https://empresa-exemplo.com'
  },
  {
    title: 'Gerenciador de Tarefas',
    description: 'Aplicação web para gerenciamento de tarefas, com funcionalidades de CRUD e autenticação.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/PedroVitor1312/task-manager',
    live: 'https://task-manager-demo.netlify.app'
  },
  {
    title: 'Landing Page',
    description: 'Landing page moderna para uma campanha de marketing, com animações e SEO otimizado.',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/PedroVitor1312/landing-page',
    live: 'https://landing-page-demo.netlify.app'
  },
  {
    title: 'Aplicativo de Finanças Pessoais',
    description: 'Aplicativo web para controle de finanças pessoais com gráficos e relatórios personalizados.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800',
    tech: ['React', 'Firebase', 'Chart.js', 'Tailwind CSS'],
    github: 'https://github.com/PedroVitor1312/finance-app',
    live: 'https://finance-app-demo.netlify.app'
  }
];
```

Lembre-se que você pode adicionar quantos projetos desejar, mas é recomendável manter entre 3-6 projetos para não sobrecarregar a página.