import { LoginForm } from "@/components/ui/auth/login-form";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";

export default function Page() {
    return (
        <div className="max-w-lg mx-auto mt-12 px-6">
           <Logo size={56} />
           <h1 className="mt-10 text-2xl text-orange-500">Entre na sua conta</h1>
           <div className="mt-10 mb-14  flex flex-col gap-6">
                <LoginForm />
           </div>
           <div className="flex flex-col justify-center items-center gap-1 md:flex-row">
                <div className=" text-orange-500">Ainda não tem uma conta?</div>
                <Link href="/cadastro" className="hover:underline">Cadastre-se</Link>
           </div>
        </div>
    );
}