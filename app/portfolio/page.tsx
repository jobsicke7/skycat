"use client";

import { useState } from "react";
import styles from "./styles/portfolio.module.css";
import ProjectCard from "./components/ProjectCard";
import ProjectPopup from "./components/ProjectPopup";

const projects = [
  { id: 1, title: "프로젝트 1", description: "설명 1", image: "/project1.jpg" },
  { id: 2, title: "프로젝트 2", description: "설명 2", image: "/project2.jpg" },
  { id: 3, title: "프로젝트 3", description: "설명 3", image: "/project3.jpg" },
];

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Portfolio</h1>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectPopup
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
