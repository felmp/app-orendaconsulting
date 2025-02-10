'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import WelcomeSection from "./components/WelcomeSection";
import InputField from "./components/InputField";
import RememberPassword from "./components/RememberPassword";
import LoginButton from "./components/LoginButton";

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault()
    // Credenciais fixas para autenticação básica
    // const validEmail = 'admin@example.com'
    // const validPassword = 'password123'

    const validEmail = 'isabella@orendacon.com'
    const validPassword = 'password123'

    if (
      email.toLocaleLowerCase() === validEmail.toLocaleLowerCase() &&
      password === validPassword
    ) {
      setError(null)
      router.push('/consulting/admin')
    } else {
      setError('Email ou senha inválidos')
    }
  }

  return (
    <main className="mx-auto h-screen w-full overflow-hidden bg-white pb-2">
      <div className="flex w-full flex-col px-7">
        <WelcomeSection />

        <form
          className="flex w-full flex-col items-center justify-center"
          onSubmit={handleLogin}
        >
          <InputField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
          />
          <InputField
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
          />
          <RememberPassword />
          {error && (
            <p className="mt-4 text-sm text-red-600">{error}</p> // Mensagem de erro
          )}
          <LoginButton onClick={handleLogin} />
        </form>
      </div>
    </main>
  )
}
