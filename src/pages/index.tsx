import { emojisData } from "@/utils/consts/data";
import { EmojiCard } from "@/components/EmojiCard";
import { ChangeEvent, useEffect, useState } from "react";
import { Emoji } from "@/interfaces/emoji.interface";

export default function Home() {
  const [emojis, setEmojis] = useState<Emoji[]>(emojisData);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    const filteredEmojis = emojisData.filter((emoji) =>
      emoji.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setEmojis(filteredEmojis);
  }, [searchText]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text: string = e.target.value;
    setSearchText(text);
  };

  return (
    <>
      <main className="m-2">
        <h1 className="text-3xl font-bold text-center mb-2">
          Emojis next
        </h1>

        <input
          id="searchemoji"
          placeholder="Search for emoji.."
          name="searchemoji"
          onChange={handleInputChange}
          className={`text-gray-900 block w-full border`}
          value={searchText}
        />

        <div className="grid grid-cols-3 gap-y-4 gap-x-4 m-5">
          {emojis.map((emoji) => {
            return <EmojiCard key={emoji.code} emoji={emoji} />;
          })}
        </div>
      </main>
    </>
  );
}
