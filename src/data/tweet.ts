import { Tweet } from "@/types/tweet";
import { user } from "./usuario";

export const tweet: Tweet = {
    id: 123,
    user: user,
    body: 'Vale a pena esse preço ?',
    image: 'https://www.pichauarena.com.br/wp-content/uploads/2024/08/GPUI1.png',
    likeCount: 333,
    commentCount: 4,
    retweetCount: 0,
    liked: true,
    retweeted: false,
    dataPost: new Date(2024, 8, 1, 10, 0, 0)
}

