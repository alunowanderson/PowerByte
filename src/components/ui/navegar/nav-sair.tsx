"use client"

import { faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";


export const NavSair = () => {
    const router = useRouter();

    const handleClick = () => {
        router.replace('/login');
    
    
   }

    return(
        
        <div onClick={handleClick}  className={`cursor-pointer flex items-center gap-6 py-3 opacity-50 hover:opacity-100`}>
            <FontAwesomeIcon icon={faArrowRightFromBracket} className="size-6 text-orange-700"/>
            <div className="texte-lg">Sair</div>
        </div>
        
    );
}