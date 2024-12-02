import { user } from "@/data/usuario";
import { redirect } from "next/navigation";

export default function Page() {
    redirect('/' + user.slug);

    return null;
}