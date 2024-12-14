import styles from "../styles/portfolio.module.css";

interface ProjectCardProps {
  project: { id: number; title: string; image: string };
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={project.image} alt={project.title} className={styles.cardImage} />
      <h3 className={styles.cardTitle}>{project.title}</h3>
    </div>
  );
}
