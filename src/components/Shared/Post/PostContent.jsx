import styles from "./postContent.module.css";

export default function PostContent({ images = [] }) {
  return (
    <div className={styles.container}>
      {images.map((img) => (
        <img
          src={img.src}
          className={"rounded-md mb-4 " + styles[img.type]}
          alt="timeline posted image"
        />
      ))}
    </div>
  );
}
