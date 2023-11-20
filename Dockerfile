# Base stage
FROM node:lts-alpine as base

# Set PNPM environment variables and enable corepack
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Set working directory
WORKDIR /usr/src/app

# Development stage
FROM base as development

# Install dependencies
COPY --chown=node:node package*.json ./
RUN pnpm install
COPY --chown=node:node . .

USER node

# Build stage
FROM base as build

# Copy dependencies and source code from development stage
COPY --chown=node:node --from=development /usr/src/app ./

# Build the application
RUN pnpm run build

# Set production environment variable and install production dependencies
ENV NODE_ENV=production
RUN pnpm install --prod && pnpm store prune

USER node

# Production stage
FROM node:lts-alpine as production

# Set working directory
WORKDIR /usr/src/app

# Copy production files from build stage
COPY --chown=node:node --from=build /usr/src/app ./

# Set NODE_ENV to production (if not inherited)
ENV NODE_ENV=production

# Run the application
CMD [ "node", "dist/src/main.js" ]

