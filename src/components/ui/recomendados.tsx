import { user } from "@/data/usuario";
import { RecommendationItem } from "./recomendados-itens";

export const RecommendationArea = () => {
    return(
        <div className="bg-gray-600 rounded-3xl">
            <h2 className="text-xl p-6">Quem seguir</h2>
            <div className="flex flex-col gap-4 p-6 pt-0">
                <RecommendationItem user={user}/>
                <RecommendationItem user={user}/>
            </div>

        </div>
    );
}
