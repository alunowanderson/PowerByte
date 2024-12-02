import { ProfileFeed } from "@/components/profile/profile-feed";
import { Button } from "@/components/ui/botao";
import { GeneralHeader } from "@/components/ui/general-header";
import { user } from "@/data/usuario";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Page() {
    const isMe = true;

    return(
        <div>
            <GeneralHeader backHref="/">
                    <div className="font-bold text-lg">{user.name}</div>
                    <div className="text-xs text-gray-600">{user.postCount} posts</div>
            </GeneralHeader>
            <section className="border-b-2 border-orange-800">
                <div 
                    className="bg-gray-600 h-28 bg-no-repeat bg-cover bg-center" 
                    style={{ backgroundImage:'url(' + user.cover + ')' }}
                ></div> 
                <div className="-mt-12 flex justify-between items-end px-6">
                    <img
                        src={user.avatar}
                        alt={user.name}
                        className="size-24 rounded-full"
                    />
                    <div className="w-32">
                        {isMe &&
                            <Link href={`/${user.slug}/edit`}>
                                <Button label="Editar Perfil" size={2}/>
                            </Link>
                        }
                        {!isMe &&
                            <Button label="Seguir" size={2}/>
                        }
                    </div>
                </div>

                <div className="px-6 mt-4">
                    <div className="text-xl font-bold">{user.name}</div>
                    <div className="text-gray-600">@{user.slug}</div>
                    <div className="py-5 text-lg text-gray-400">{user.bio}</div>
                    {user.link &&
                        <div className="flex gap-2 items-center">
                            <FontAwesomeIcon icon={faLink} className="size-5"/>
                            <Link href={user.link}  target="_blank" className="text-blue-100">{user.link}</Link>
                        </div>
                    }
                    <div className="my-5 flex gap-6">
                        <div className="text-xl text-white"><span className="text-orange-600">94</span> Seguindo</div>
                        <div className="text-xl text-white"><span className="text-orange-600">2024</span> Seguidores</div>
                    </div>
                </div>
            </section>
            <ProfileFeed />
        </div>
    );
}