import { TrendingItem, TrendingItemSkeleton } from "./momento-itens";

export const TrendingArea = () => {
    return(
        <div className="bg-gray-600 rounded-3xl">
            <h2 className="text-xl p-6">Assuntos do momento</h2>
            <div className="flex flex-col gap-4 p-6 pt-0">
            <TrendingItem label="#Placa de vídeo" count={2244}/>
            <TrendingItemSkeleton />
            <TrendingItemSkeleton />
            </div>

        </div>
    );
}

