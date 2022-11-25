import { useEffect, useState } from "react";

export default function PostDescription({ description }) {
  const [seeMore, setSeeMore] = useState(false);
  const [content, setContent] = useState(description);

  const handleSeeMore = () => {
    setSeeMore((currentVal) => !currentVal);
  };

  useEffect(() => {
    if (description.length > 300 && !seeMore) {
      const str = description.substring(0, 250);
      setContent(str);
    } else {
      setContent(description);
    }
  }, [description, seeMore]);

  return (
    <p className="text-[13px] leading-5 mb-4">
      {content}{" "}
      {description.length > 300 && (
        <button onClick={handleSeeMore} className="no-underline text-[#0469FF] hover:underline">
          {seeMore ? "See Less" : "See More"}
        </button>
      )}
    </p>
  );
}
