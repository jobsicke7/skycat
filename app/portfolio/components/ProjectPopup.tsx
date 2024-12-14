import styles from "../styles/portfolio.module.css";

interface ProjectPopupProps {
  project: { title: string; description: string; image: string };
  onClose: () => void;
}

export default function ProjectPopup({ project, onClose }: ProjectPopupProps) {
  return (
    <div className={styles.popupOverlay} onClick={onClose}>
      <div
        className={styles.popupContent}
        onClick={(e) => e.stopPropagation()} // Prevent closing on content click
      >
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <img
          src={project.image}
          alt={project.title}
          className={styles.popupImage}
        />
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
    </div>
  );
}
