import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "../ui/logo";
import { faHouse, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { SearchInput } from "../ui/input-busca";
import { NavItem } from "../ui/navegar/nav-item";
import { NavSair } from "../ui/navegar/nav-sair";


type Props = {
    closeAction: () => void;
}

export const HomeMenu = ({ closeAction }: Props) => {
    return (
        <div className="lg:hidden fixed inset-0 p-6 bg-[#212327]">
            <div onClick={closeAction} className="flex justify-between items-center">
                <Logo size={32}/>
                <div className="cursor-pointer flex justify-center items-center size-12 rounded-full border-2 border-[#212327] bg-orange-700">
                    <FontAwesomeIcon icon={faXmark} className="size-6"/>
                </div>
            </div>

            <div className="my-6">
                <SearchInput />
            </div>

            <div>
                <NavItem
                    href="/home"
                    icon={faHouse}
                    label="Página inicial"
                />
                <NavItem
                    href="/profile"
                    icon={faUser} 
                    label="Ver perfil"
                />
                <NavSair />
            </div>
        </div>
    );
}