import React, { useState } from "react";
import styles from "./Timetable.module.css";

const Schedule: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<{
    title: string;
    author: string;
    track?: string;
  } | null>(null);

  const handleEventClick = (title: string, author: string, track?: string) => {
    setSelectedEvent({ title, author, track });
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className={styles.scheduleContainer}>
      <div className={styles.timetableBlock}>
        <h2 className={styles.textPurple}>HORARIOS</h2>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>08:30</p>
          <p className={styles.timeText}>08:55</p>
        </div>
        <div
          className={styles.fullWidthEvent}
          onClick={() => handleEventClick("CHECK IN", "TBA")}
        >
          <h3 className={styles.scheduleTitleTimetable}>CHECK IN</h3>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>09:00</p>
          <p className={styles.timeText}>09:25</p>
        </div>
        <div
          className={styles.fullWidthEvent}
          onClick={() => handleEventClick("ACTO DE BIENVENIDA", "TBA")}
        >
          <h3 className={styles.scheduleTitleTimetable}>ACTO DE BIENVENIDA</h3>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>09:30</p>
          <p className={styles.timeText}>10:20</p>
        </div>
        <div className={styles.tracksContainer}>
          <div
            className={styles.trackEvent}
            onClick={() =>
              handleEventClick(
                "Seguridad exponencial para un tráfico exponencial: Inside Plenitas",
                "José Antonio Castelo y Jaime Esquivias",
                "TRACK OMEYA",
              )
            }
          >
            <h5 className={styles.scheduleAuthor}>TRACK OMEYA</h5>
            <h3 className={styles.scheduleTitle}>
              Seguridad exponencial para un tráfico exponencial: Inside Plenitas
            </h3>
            <p className={styles.scheduleAuthor}>
              José Antonio Castelo y Jaime Esquivias
            </p>
          </div>
          <div
            className={styles.trackEvent}
            onClick={() =>
              handleEventClick(
                "Cómo convertirse en el perfil que todos los recruiters quieran fichar",
                "Gabriela Alba Ballesteros",
                "TRACK MUDÉJAR",
              )
            }
          >
            <h5 className={styles.scheduleAuthor}>TRACK MUDÉJAR</h5>
            <h3 className={styles.scheduleTitle}>
              Cómo convertirse en el perfil que todos los recruiters quieran
              fichar
            </h3>
            <p className={styles.scheduleAuthor}>Gabriela Alba Ballesteros</p>
          </div>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>10:25</p>
          <p className={styles.timeText}>10:55</p>
        </div>
        <div
          className={styles.fullWidthEvent}
          onClick={() => handleEventClick("DESAYUNO", "TBA")}
        >
          <h3 className={styles.scheduleTitleTimetable}>DESAYUNO</h3>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>11:00</p>
          <p className={styles.timeText}>11:40</p>
        </div>
        <div className={styles.tracksContainer}>
          <div
            className={styles.trackEvent}
            onClick={() =>
              handleEventClick(
                "Arquitectura Limpia en el Front",
                "Rubén Aguilera",
                "TRACK OMEYA",
              )
            }
          >
            <h5 className={styles.scheduleAuthor}>TRACK OMEYA</h5>
            <h3 className={styles.scheduleTitle}>
              Arquitectura Limpia en el Front
            </h3>
            <p className={styles.scheduleAuthor}>Rubén Aguilera</p>
          </div>
          <div
            className={styles.trackEvent}
            onClick={() =>
              handleEventClick(
                "Debug Your Life: Enfrentando el Burnout en Tech",
                "Mariana Rolfo",
                "TRACK MUDÉJAR",
              )
            }
          >
            <h5 className={styles.scheduleAuthor}>TRACK MUDÉJAR</h5>
            <h3 className={styles.scheduleTitle}>
              Debug Your Life: Enfrentando el Burnout en Tech
            </h3>
            <p className={styles.scheduleAuthor}>Mariana Rolfo</p>
          </div>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>11:45</p>
          <p className={styles.timeText}>12:25</p>
        </div>
        <div className={styles.tracksContainer}>
          <div
            className={styles.trackEvent}
            onClick={() =>
              handleEventClick(
                "Beyond the Tab: How Modern Browsers are being built",
                "Marc Rodríguez",
                "TRACK OMEYA",
              )
            }
          >
            <h5 className={styles.scheduleAuthor}>TRACK OMEYA</h5>
            <h3 className={styles.scheduleTitle}>
              Beyond the Tab: How Modern Browsers are being built
            </h3>
            <p className={styles.scheduleAuthor}>Marc Rodríguez</p>
          </div>
          <div
            className={styles.trackEvent}
            onClick={() =>
              handleEventClick(
                "Awesome Selfhosted versión gratuita",
                "Eduardo Roldán Pijuán",
                "TRACK MUDÉJAR",
              )
            }
          >
            <h5 className={styles.scheduleAuthor}>TRACK MUDÉJAR</h5>
            <h3 className={styles.scheduleTitle}>
              Awesome Selfhosted versión gratuita
            </h3>
            <p className={styles.scheduleAuthor}>Eduardo Roldán Pijuán</p>
          </div>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>12:30</p>
          <p className={styles.timeText}>13:05</p>
        </div>
        <div
          className={styles.fullWidthEvent}
          onClick={() => handleEventClick("TAPA", "TBA")}
        >
          <h3 className={styles.scheduleTitleTimetable}>TAPA</h3>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>13:10</p>
          <p className={styles.timeText}>13:50</p>
        </div>
        <div className={styles.tracksContainer}>
          <div
            className={styles.trackEvent}
            onClick={() =>
              handleEventClick(
                "Generando código en arquitectura hexagonal desde contratos",
                "Carlos Agudo Belloso",
                "TRACK OMEYA",
              )
            }
          >
            <h5 className={styles.scheduleAuthor}>TRACK OMEYA</h5>
            <h3 className={styles.scheduleTitle}>
              Generando código en arquitectura hexagonal desde contratos
            </h3>
            <p className={styles.scheduleAuthor}>Carlos Agudo Belloso</p>
          </div>
          <div
            className={styles.trackEvent}
            onClick={() =>
              handleEventClick(
                "Datos y política: MP Scrape",
                "Sofía Aritz Albors Escobés",
                "TRACK MUDÉJAR",
              )
            }
          >
            <h5 className={styles.scheduleAuthor}>TRACK MUDÉJAR</h5>
            <h3 className={styles.scheduleTitle}>
              Datos y política: MP Scrape
            </h3>
            <p className={styles.scheduleAuthor}>Sofía Aritz Albors Escobés</p>
          </div>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>13:55</p>
          <p className={styles.timeText}>14:35</p>
        </div>
        <div className={styles.tracksContainer}>
          <div
            className={styles.trackEvent}
            onClick={() =>
              handleEventClick(
                "Cómo construir un interprete de lenguaje de signos con IA",
                "Rafa, Alba y Jesús",
                "TRACK OMEYA",
              )
            }
          >
            <h5 className={styles.scheduleAuthor}>TRACK OMEYA</h5>
            <h3 className={styles.scheduleTitle}>
              Cómo construir un interprete de lenguaje de signos con IA
            </h3>
            <p className={styles.scheduleAuthor}>Rafa, Alba y Jesús</p>
          </div>
          <div
            className={styles.trackEvent}
            onClick={() =>
              handleEventClick(
                "Accesibilidad web: Guía de supervivencia para noobies",
                "Mía Salazar",
                "TRACK MUDÉJAR",
              )
            }
          >
            <h5 className={styles.scheduleAuthor}>TRACK MUDÉJAR</h5>
            <h3 className={styles.scheduleTitle}>
              Accesibilidad web: Guía de supervivencia para noobies
            </h3>
            <p className={styles.scheduleAuthor}>Mía Salazar</p>
          </div>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>14:40</p>
          <p className={styles.timeText}>15:50</p>
        </div>
        <div
          className={styles.fullWidthEvent}
          onClick={() => handleEventClick("COMIDA", "TBA")}
        >
          <h3 className={styles.scheduleTitleTimetable}>COMIDA</h3>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>15:55</p>
          <p className={styles.timeText}>16:35</p>
        </div>
        <div className={styles.tracksContainer}>
          <div
            className={styles.trackEvent}
            onClick={() =>
              handleEventClick(
                "Game of Forums",
                "Ainoa Guillén González y Gloria Jorge Lema",
                "TRACK OMEYA",
              )
            }
          >
            <h5 className={styles.scheduleAuthor}>TRACK OMEYA</h5>
            <h3 className={styles.scheduleTitle}>Game of Forums</h3>
            <p className={styles.scheduleAuthor}>
              Ainoa Guillén González y Gloria Jorge Lema
            </p>
          </div>
          <div
            className={styles.trackEvent}
            onClick={() =>
              handleEventClick(
                "Buenas Prácticas para la Gestión de Repositorios en GitHub",
                "Juan Ariza Toledano",
                "TRACK MUDÉJAR",
              )
            }
          >
            <h5 className={styles.scheduleAuthor}>TRACK MUDÉJAR</h5>
            <h3 className={styles.scheduleTitle}>
              Buenas Prácticas para la Gestión de Repositorios en GitHub
            </h3>
            <p className={styles.scheduleAuthor}>Juan Ariza Toledano</p>
          </div>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>16:40</p>
          <p className={styles.timeText}>17:20</p>
        </div>
        <div className={styles.tracksContainer}>
          <div
            className={styles.trackEvent}
            onClick={() =>
              handleEventClick(
                "No, lo que haces no es DDD (y tampoco pasa nada)",
                "Rolando Caldas Sánchez",
                "TRACK OMEYA",
              )
            }
          >
            <h5 className={styles.scheduleAuthor}>TRACK OMEYA</h5>
            <h3 className={styles.scheduleTitle}>
              No, lo que haces no es DDD (y tampoco pasa nada)
            </h3>
            <p className={styles.scheduleAuthor}>Rolando Caldas Sánchez</p>
          </div>
          <div
            className={styles.trackEvent}
            onClick={() =>
              handleEventClick(
                "Mamá, de mayor quiero ser ponente",
                "Marisa Martín y Lourdes Martínez",
                "TRACK MUDÉJAR",
              )
            }
          >
            <h5 className={styles.scheduleAuthor}>TRACK MUDÉJAR</h5>
            <h3 className={styles.scheduleTitle}>
              Mamá, de mayor quiero ser ponente
            </h3>
            <p className={styles.scheduleAuthor}>
              Marisa Martín y Lourdes Martínez
            </p>
          </div>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>17:25</p>
          <p className={styles.timeText}>18:15</p>
        </div>
        <div className={styles.tracksContainer}>
          <div
            className={styles.trackEvent}
            onClick={() =>
              handleEventClick(
                "El Poder del Código Libre. Hablemos de Open Source",
                "Leifer Mendez",
                "TRACK OMEYA",
              )
            }
          >
            <h5 className={styles.scheduleAuthor}>TRACK OMEYA</h5>
            <h3 className={styles.scheduleTitle}>
              El Poder del Código Libre. Hablemos de Open Source
            </h3>
            <p className={styles.scheduleAuthor}>Leifer Mendez</p>
          </div>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>18:30</p>
          <p className={styles.timeText}>20:00</p>
        </div>
        <div
          className={styles.fullWidthEvent}
          onClick={() => handleEventClick("NETWORKING", "TBA")}
        >
          <h3 className={styles.scheduleTitleTimetable}>NETWORKING</h3>
        </div>
      </div>

      {selectedEvent && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <span className={styles.close} onClick={closeModal}>
              &times;
            </span>
            {selectedEvent.track && (
              <p className={styles.modalTrack}>{selectedEvent.track}</p>
            )}
            <h2 className={styles.modalTitle}>{selectedEvent.title}</h2>
            <p className={styles.modalAuthor}> {selectedEvent.author}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedule;
