import { useState } from "react";
import { Heart } from 'lucide-react';
import { Ban } from 'lucide-react';
import { Share } from 'lucide-react';
import { Plus } from 'lucide-react';

export default function LikeDislikeButtons() {
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
                <Heart/>
            </button>
            <button
                className="like-buttons__plus"><Plus/>
            </button>
            <button
                className="like-buttons__share"><Share/>
            </button>
            <button
                className={`like-buttons__dislike ${dislike ? "active" : ""}`}
                onClick={handleDislike}
            >
                <Ban/>
            </button>
        </div>
    );
}