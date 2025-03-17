import { useState } from "react";
import { Heart, Ban, Share, Plus, Play } from "lucide-react";

export default function LikeDislikeButtons({ playlist, setCurrentTrack }) {
    const [like, setLike] = useState(false);
    const [dislike, setDislike] = useState(false);

    const handleLike = () => {
        setLike(!like);
        setDislike(false);
        console.log("нажал лайк");
    };

    const handleDislike = () => {
        setDislike(!dislike);
        setLike(false);
        console.log("нажал дизлайк");
    };

    return (
        <div className="like-buttons">
            <button
                className={`like-buttons__like ${like ? "active" : ""}`}
                onClick={handleLike}
            >
                <Heart className="like-buttons__icon" />
            </button>
            <button className="like-buttons__plus">
                <Plus />
            </button>
            <button className="like-buttons__share">
                <Share />
            </button>
            <button
                className={`like-buttons__dislike ${dislike ? "active" : ""}`}
                onClick={handleDislike}
            >
                <Ban />
            </button>
            <button
                className="like-buttons__play"
                onClick={() => setCurrentTrack(playlist)}
            >
                <Play />
            </button>
        </div>
    );
}
