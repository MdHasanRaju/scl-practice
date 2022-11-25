import postTimeline from "../../../assets/images/post-timeline.png";

export default function ProfilePicture({ width = 48, height = 48 }) {
  return (
    <img
      className={`w-[${width}px] h-[${height}px] rounded-lg`}
      src={postTimeline}
      alt="user image"
    />
  );
}
