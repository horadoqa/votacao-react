# Etapa 1: Construir a aplicação React
FROM node:18-alpine AS build

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar os arquivos de dependências
COPY package.json package-lock.json ./

# Instalar as dependências do frontend
RUN npm install

# Copiar o código da aplicação
COPY . .

# Construir a aplicação React
RUN npm run build

# Etapa 2: Servir os arquivos estáticos
FROM nginx:alpine

# Copiar os arquivos construídos para o diretório do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expor a porta 80
EXPOSE 80

# Iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
