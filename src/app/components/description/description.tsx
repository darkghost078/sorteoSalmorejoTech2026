import React from 'react';
import styles from './description.module.css';

interface DescriptionProps {
  title?: string;
  description?: string;
  date?: string;
  location?: string;
  assistants?: number;
  talks?: number;
  sponsors?: string[];
}

const Description: React.FC<DescriptionProps> = ({
  title = "¿AÚN NO SABES QUÉ ES EL SALMOREJO TECH?",
  description = "Vuelve el evento más cordobés y tech de la provincia otro año más. Con grandes ponentes, networking y productos típicos de la capital de Al-Ándalus.",
  date = "8 de mayo",
  location = "Rectorado",
  assistants = 400,
  talks = 10,
  sponsors = ["patrocinadores", "Aula de Software Libre"]
}) => {

  const fullDescription = `${description} Este ${date} os esperamos en el ${location}. Gracias a nuestros ${sponsors[0]} y al ${sponsors[1]} por hacerlo posible.`;

  return (
    <div className={styles.container}>

      <div className={`${styles.glassCard} ${styles.header}`}>
        <h2 className={styles.title}>{title}</h2>
      </div>

      <div className={`${styles.glassCard} ${styles.stats}`}>
        <div className={styles.stat}>
          <span className={styles.statNumber}>+{assistants}</span>
          <span className={styles.statLabel}>asistentes</span>
        </div>

        <div className={styles.stat}>
          <span className={styles.statNumber}>+{talks}</span>
          <span className={styles.statLabel}>ponencias</span>
        </div>

        <div className={styles.stat}>
          <span className={styles.statLabel}>networking</span>
        </div>
      </div>

      <div className={`${styles.glassCard} ${styles.content}`}>
        <p className={styles.fullText}>{fullDescription}</p>
      </div>

    </div>
  );
};

export default Description;