FROM node:20-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy workspace config
COPY pnpm-workspace.yaml ./
COPY package.json ./
COPY tsconfig.base.json ./

# Copy packages
COPY packages/shared ./packages/shared

# Copy server app
COPY apps/server ./apps/server

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build server
RUN pnpm --filter server build

EXPOSE 5000

CMD ["node", "apps/server/dist/index.js"]