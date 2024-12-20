import { CadastroForm } from "@/components/ui/auth/cadastro-form";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";

export default function Page() {
    return (
        <div className="max-w-lg mx-auto mt-12 px-6">
           <Logo size={56} />
           <h1 className="mt-10 text-2xl text-orange-500">Crie a sua conta</h1>
           <div className="mt-10 mb-14  flex flex-col gap-6">
                <CadastroForm />
           </div>
           <div className="flex flex-col justify-center items-center gap-1 md:flex-row">
                <div className=" text-orange-500">Já tem uma conta?</div>
                <Link href="/login" className="hover:underline">Entrar no PowerByte</Link>
           </div>
        </div>
    );
}