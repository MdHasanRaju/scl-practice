import PostAuthor from "./PostAuthor";
import PostContent from "./PostContent";
import PostDescription from "./PostDescription";
import PostFooter from "./PostFooter";

export default function Post({ author, description, images }) {
  return (
    <div className="p-4 bg-[#FFFFFF] rounded-md shadow-md">
      <div>
        <PostAuthor {...author} />
        <PostDescription description={description} />
        <PostContent images={images} />
        <PostFooter />
      </div>
    </div>
  );
}
