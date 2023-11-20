# Development stage
FROM node:lts-alpine as development

# Set PNPM environment variables
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Set working directory and install dependencies
WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./
RUN pnpm install
COPY --chown=node:node . .
USER node

# Build stage
FROM node:lts-alpine as build

# Set working directory and copy necessary files
WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./
COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules
COPY --chown=node:node . .

# Build the application
RUN pnpm run build
ENV NODE_ENV production
RUN pnpm install --prod && pnpm cache clean --force
USER node

# Production stage
FROM node:lts-alpine as production

# Set working directory and copy production files
WORKDIR /usr/src/app
COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

# Run the application
CMD [ "node", "dist/main.js" ]
