import React, { useState } from "react";
import { CommentInterface } from "@/interfaces/comment/comment.interface";
import { Rating } from "@material-tailwind/react";
import moment from "moment/moment";
import { CommentAdd } from "@/components";

interface CommentProps {
  data: CommentInterface[];
  book_id?: number | null;
  blog_id?: number | null;
}

const Comments: React.FC<CommentProps> = ({ data, blog_id, book_id }) => {
  const starsArray = data.map((comment) => comment.stars);
  const sumArray = (numbers: number[]) =>
    numbers.reduce((sum, num) => sum + num, 0);

  const sum = sumArray(starsArray);
  const [show, setShow] = useState<boolean>(false);
  const averageRating = data.length > 0 ? sum / data.length : 0;
  const wholeNumberRating = Math.round(averageRating);

  return (
    <div className="mt-1 flex md:flex-row flex-col items-start justify-between md:gap-x-4 gap-y-4">
      <div className="md:w-2/12 w-full md:sticky py-10 top-24 rounded-lg shadow-md border bg-gray-100 p-4 flex flex-col gap-y-2 items-center justify-center">
        <h1 className="text-6xl font-bold">
          {averageRating.toString().slice(0, 3)}
        </h1>
        <Rating
          readonly={true}
          value={wholeNumberRating}
          placeholder={"Bal bering"}
        />
        <p className="opacity-50">of {data.length} reviews</p>
      </div>
      <div className="md:w-10/12 w-full">
        <div className="mb-5">
          <CommentAdd book_id={book_id} blog_id={blog_id} />
          <hr className="mt-3" />
        </div>
        {show ? (
          <>
            {data.map((comment: CommentInterface) => (
              <div
                key={comment.id}
                className="bg-gray-50 mb-4 rounded-lg border shadow p-3 flex items-start justify-between"
              >
                <div>
                  <p className="text-2xl font-[500]"></p>
                  <Rating
                    placeholder={"bal"}
                    readonly={true}
                    value={comment.stars}
                  />
                  <p>{comment.text}</p>
                  <p className="opacity-50 underline mt-2">
                    {moment(comment.created_at)
                      .utcOffset(5)
                      .format("YYYY/MM/DD, HH:mm")}
                  </p>
                </div>
              </div>
            ))}
            <p
              onClick={() => setShow((show) => !show)}
              className={`underline underline-offset-4 text-orange-600 hover:text-black duration-300 text-lg text-center`}
            >{`Kamroq`}</p>
          </>
        ) : (
          <>
            {data
              .map((comment: CommentInterface) => (
                <div
                  key={comment.id}
                  className="bg-gray-50 mb-4 rounded-lg border shadow p-3 flex items-start justify-between"
                >
                  <div>
                    <p className="text-2xl font-[500]"></p>
                    <Rating
                      placeholder={"bal"}
                      readonly={true}
                      value={comment.stars}
                    />
                    <p>{comment.text}</p>
                    <p className="opacity-50 underline mt-2">
                      {moment(comment.created_at)
                        .utcOffset(5)
                        .format("YYYY/MM/DD, HH:mm")}
                    </p>
                  </div>
                </div>
              ))
              .slice(0, 6)}
            <p
              onClick={() => setShow((show) => !show)}
              className={`underline underline-offset-4 text-orange-600 hover:text-black duration-300 text-lg text-center`}
            >{`Ko'proq`}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Comments;
