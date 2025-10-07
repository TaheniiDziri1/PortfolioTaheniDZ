import { useState } from "react";
import "./Certifications.css";
import c1 from '../../assets/c1.png';
import c2 from '../../assets/c2.png';
import c3 from '../../assets/c3.png';
import c4 from '../../assets/c4.png';
import c5 from '../../assets/c5.png';
import c6 from '../../assets/c6.png';

const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const certifications = [
        { 
            id: 1, 
            src: c1, 
            alt: "Certification 1",
            title: "Introduction to Deep Learning"
        },
        { 
            id: 2, 
            src: c2, 
            alt: "Certification 2",
            title: "Python for Data Science"
        },
        { 
            id: 3, 
            src: c3, 
            alt: "Certification 3",
            title: "Data Analysis with Python"
        },
        { 
            id: 4, 
            src: c4, 
            alt: "Certification 4",
            title: "Symfony Fundamentals"
        },
        { 
            id: 5, 
            src: c5, 
            alt: "Certification 5",
            title: "PHP Programming"
        },
        { 
            id: 6, 
            src: c6, 
            alt: "Certification 6",
            title: "Python for Data Science, AI & Development"
        }
    ];

    const openModal = (cert) => {
        setSelectedCert(cert);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedCert(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section className="certifications-section">
            {/* Éléments animés en arrière-plan qui se DÉPLACENT */}
            <div className="background-elements">
                {/* Grands cercles flottants */}
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="floating-shape shape-3"></div>
                <div className="floating-shape shape-4"></div>
                
                {/* Triangles animés */}
                <div className="floating-triangle triangle-1"></div>
                <div className="floating-triangle triangle-2"></div>
                <div className="floating-triangle triangle-3"></div>
                
                {/* Carrés animés */}
                <div className="floating-square square-1"></div>
                <div className="floating-square square-2"></div>
                
                {/* Lignes traversantes */}
                <div className="moving-line line-1"></div>
                <div className="moving-line line-2"></div>
                <div className="moving-line line-3"></div>
                
                {/* Particules en mouvement */}
                <div className="moving-particle particle-1"></div>
                <div className="moving-particle particle-2"></div>
                <div className="moving-particle particle-3"></div>
                <div className="moving-particle particle-4"></div>
            </div>

            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Certifications</h2>
                    <p className="section-subtitle">
                        Professional certifications and achievements that validate my expertise
                    </p>
                </div>

                <div className="certifications-grid">
                    {certifications.map((cert) => (
                        <div 
                            key={cert.id}
                            className="certification-card"
                            onClick={() => openModal(cert)}
                        >
                            <div className="cert-image-wrapper">
                                <img 
                                    src={cert.src} 
                                    alt={cert.alt}
                                    className="cert-image"
                                    loading="lazy"
                                />
                                <div className="cert-overlay">
                                    <span className="view-text">View Certificate</span>
                                </div>
                                <div className="cert-badge">C{cert.id}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal pour voir l'image en grand */}
            {selectedCert && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeModal}>
                            ×
                        </button>
                        <img 
                            src={selectedCert.src} 
                            alt={selectedCert.alt}
                            className="modal-image"
                        />
                        <div className="modal-info">
                            <span className="cert-title">{selectedCert.title}</span>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certifications;