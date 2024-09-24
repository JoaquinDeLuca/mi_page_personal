"use client"
import { useState } from 'react';
import styles from './tabs.module.css';
import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabsContainer}>
        <div className={styles.tabs} id='projects'>
          <button
            className={`${styles.tab} ${activeTab === 0 ? styles.active : ''}`}
            onClick={() => handleTabClick(0)}
          >
            Proyectos
          </button>
          <button
            className={`${styles.tab} ${activeTab === 1 ? styles.active : ''}`}
            onClick={() => handleTabClick(1)}
          >
            Experiencia
          </button>
        </div>

        <div className={styles.tabContent}>
          <div className={`${styles.tabPanel} ${activeTab === 0 ? styles.activePanel : ''}`}>
            <Projects />
          </div>
          <div className={`${styles.tabPanel} ${activeTab === 1 ? styles.activePanel : ''}`}>
            <Experience />
          </div>
        </div>
      </div>

    </div>
  );
};