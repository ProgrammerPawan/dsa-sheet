import api from "./axios";
import type { AuthPayload, LoginCredentials, RegisterCredentials } from "@dsa-sheet/shared";

export const login = (creds: LoginCredentials): Promise<AuthPayload> =>
  api.post("/auth/login", creds).then((r) => r.data);

export const register = (creds: RegisterCredentials): Promise<AuthPayload> =>
  api.post("/auth/register", creds).then((r) => r.data);
