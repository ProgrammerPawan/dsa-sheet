import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {useAuthStore} from "@/store/authStore";

function getErrorMessage(err: unknown): string {
  if (axios.isAxiosError(err)) {
    const data = err.response?.data as { message?: string } | undefined;
    if (data?.message) return data.message;
    if (err.code === "ERR_NETWORK" || !err.response) {
      return "We couldn't reach the app. Check your connection and try again.";
    }
    return "Something went wrong. Please try again.";
  }
  if (err instanceof Error) return err.message;
  return "Something went wrong. Please try again.";
}

export default function LoginPage() {
  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);
  const register = useAuthStore((s) => s.register);

  const [loginUser, setLoginUser] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regUser, setRegUser] = useState("");
  const [regPass, setRegPass] = useState("");

  const [loginError, setLoginError] = useState<string | null>(null);
  const [regError, setRegError] = useState<string | null>(null);
  const [loginLoading, setLoginLoading] = useState(false);
  const [regLoading, setRegLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    setLoginLoading(true);
    try {
      await login({username: loginUser, password: loginPass});
      navigate("/", {replace: true});
    } catch (err) {
      setLoginError(getErrorMessage(err));
    } finally {
      setLoginLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setRegError(null);
    setRegLoading(true);
    try {
      await register({
        name: regName,
        email: regEmail,
        username: regUser,
        password: regPass,
      });
      navigate("/", {replace: true});
    } catch (err) {
      setRegError(getErrorMessage(err));
    } finally {
      setRegLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-600 via-violet-600 to-pink-500 p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center text-white">
          <h1 className="text-3xl font-bold tracking-tight">DSA Sheet</h1>
          <p className="mt-2 text-sm text-white/80">
            Track your grind across topics, subtopics, and curated problems.
          </p>
        </div>

        <Card className="border-white/20 bg-white/95 shadow-2xl backdrop-blur">
          <CardHeader>
            <CardTitle>Welcome back</CardTitle>
            <CardDescription>Sign in or create an account.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form className="space-y-4 pt-2" onSubmit={handleLogin}>
                  {loginError ? (
                    <Alert variant="destructive">
                      <AlertTitle>Login failed</AlertTitle>
                      <AlertDescription>{loginError}</AlertDescription>
                    </Alert>
                  ) : null}
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium text-foreground"
                      htmlFor="login-username"
                    >
                      Username
                    </label>
                    <Input
                      id="login-username"
                      autoComplete="username"
                      value={loginUser}
                      onChange={(e) => setLoginUser(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium text-foreground"
                      htmlFor="login-password"
                    >
                      Password
                    </label>
                    <Input
                      id="login-password"
                      type="password"
                      autoComplete="current-password"
                      value={loginPass}
                      onChange={(e) => setLoginPass(e.target.value)}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700"
                    disabled={loginLoading}
                  >
                    {loginLoading ? "Signing in…" : "Sign In"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="register">
                <form className="space-y-4 pt-2" onSubmit={handleRegister}>
                  {regError ? (
                    <Alert variant="destructive">
                      <AlertTitle>Registration failed</AlertTitle>
                      <AlertDescription>{regError}</AlertDescription>
                    </Alert>
                  ) : null}
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium text-foreground"
                      htmlFor="reg-name"
                    >
                      Name
                    </label>
                    <Input
                      id="reg-name"
                      autoComplete="name"
                      value={regName}
                      onChange={(e) => setRegName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium text-foreground"
                      htmlFor="reg-email"
                    >
                      Email
                    </label>
                    <Input
                      id="reg-email"
                      type="email"
                      autoComplete="email"
                      value={regEmail}
                      onChange={(e) => setRegEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium text-foreground"
                      htmlFor="reg-username"
                    >
                      Username
                    </label>
                    <Input
                      id="reg-username"
                      autoComplete="username"
                      value={regUser}
                      onChange={(e) => setRegUser(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium text-foreground"
                      htmlFor="reg-password"
                    >
                      Password
                    </label>
                    <Input
                      id="reg-password"
                      type="password"
                      autoComplete="new-password"
                      value={regPass}
                      onChange={(e) => setRegPass(e.target.value)}
                      required
                      minLength={6}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700"
                    disabled={regLoading}
                  >
                    {regLoading ? "Creating account…" : "Create Account"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
