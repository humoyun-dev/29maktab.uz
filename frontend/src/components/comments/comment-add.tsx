import React, { useState } from "react";
import { Input, Rating } from "@material-tailwind/react";
import { useRouter } from "next/router";
import axios from "axios";
import api from "@/api.json";
import { useSelector } from "react-redux";

interface CommentAddProps {
  book_id?: number | null;
  blog_id?: number | null;
}

const CommentAdd: React.FC<CommentAddProps> = ({ book_id, blog_id }) => {
  const [comment, setComment] = useState<string>("");
  const [rated, setRated] = useState<number>(4); // Explicitly set the type to number

  const userData = useSelector((state: any) => state.user.token);
  const userId = useSelector((state: any) => state.user.userData.id);
  const [loading, setLoading] = useState<boolean>(false); // Explicitly set the type to boolean

  const router = useRouter();

  const handleCommentSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${api.api}/comments/`, {
        text: comment,
        stars: rated,
        book: book_id,
        user: userId,
        blog: blog_id,
      });

      if (response.status === 201) {
        router.reload();
        setLoading(false);
        setComment("");
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mt-1">
        <Rating
          placeholder={undefined}
          value={rated}
          onChange={(value: number) => setRated(value)}
        />
        <div className="relative duration-300">
          <Input
            onChange={(e) => setComment(e.target.value)}
            type="text" // Use double quotes consistently
            label="Comment"
            crossOrigin={undefined}
          />
          {userData ? (
            <button
              onClick={handleCommentSubmit}
              className={`right-0 top-0 bg-black h-full text-center text-white px-4 rounded-lg ${
                comment ? "absolute" : "hidden"
              }`}
            >
              Yuborish
            </button>
          ) : (
            <button
              type="button"
              onClick={() => router.push("/auth/login")}
              className={`right-0 top-0 bg-black h-full text-center text-white px-4 rounded-lg ${
                comment ? "absolute" : "hidden"
              }`}
            >
              Kirish
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentAdd;
