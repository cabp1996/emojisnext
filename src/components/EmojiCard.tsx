import { Emoji } from "@/interfaces/emoji.interface";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  emoji: Emoji;
}

export const EmojiCard:FC<Props> = ({emoji}) => {
  return (
    <div className="bg-[#F7F6F3] p-2 rounded-xl shadow-md flex flex-col items-center">
        <span>{emoji.emoji}</span>
        <p>{emoji.name}</p>
        <Link href="/" className="underline text-teal-900">MORE INFO</Link>
    </div>
  );
};
