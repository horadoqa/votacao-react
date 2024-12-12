# Etapa 1: Construir a imagem para o backend
FROM node:18-alpine

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar o package.json e o package-lock.json
COPY package.json package-lock.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Expor a porta em que o backend irá rodar
EXPOSE 5000

# Rodar o servidor quando o container for iniciado
CMD ["npm", "start"]
