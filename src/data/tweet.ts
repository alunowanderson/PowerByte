import { Tweet } from "@/types/tweet";
import { user } from "./usuario";

export const tweet: Tweet = {
    id: 123,
    user: user,
    body: 'Vale a pena?',
    image: 'https://www.clubedohardware.com.br/uploads/attachments/monthly_2022_05/image.thumb.png.34ab252b3e44a66e7778802c5c8ee49f.png',
    likeCount: 333,
    commentCount: 4,
    retweetCount: 0,
    liked: true,
    retweeted: false,
    dataPost: new Date(2024, 8, 1, 10, 0, 0)
}

