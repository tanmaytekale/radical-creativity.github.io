import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './InterestsSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const InterestsSection: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(`.${styles.gallery}`, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%"
            },
            opacity: 0, y: 50, duration: 0.8
        });
    }, { scope: containerRef });

    return (
        <div className={styles.interestsWrapper} ref={containerRef}>
            <div className={styles.body}>
                <div className={styles.mainContent}>
                    <h2 className={styles.quote}>
                        “to fuck around is human,<br /> &nbsp;&nbsp;to find out is divine.”
                    </h2>
                    <p className={styles.paragraph}>
                        we all gonna die, life doesnt have a meaning. finding the purpose of life is pointless; a wrong question to ask. seek questions worth sought. there is no good-bad, no evil-divine, no right-wrong, there just is. find which illusion you like the best, what semblance makes most sense to you; choose your poison, cause in the end we all just gonna die.
                    </p>
                </div>
            </div>

            <div className={styles.gallery}>
                <div className={styles.imageContainer1}>
                    <div className={styles.imageInner1}>
                        {/* Image 1 had NO object-fit in legacy, so it uses .img (stretched) */}
                        <img src="/images/gallery-1.jpg" alt="Gallery 1" className={styles.img} />
                    </div>
                </div>
                <div className={styles.imageContainer2}>
                    <div className={styles.imageInner2}>
                        {/* Image 2 HAD object-fit: cover in legacy */}
                        <img src="/images/gallery-2.jpg" alt="Gallery 2" className={styles.imgCover} />
                    </div>
                </div>
                <div className={styles.imageContainer3}>
                    <div className={styles.imageInner3}>
                        {/* Image 3 had NO object-fit in legacy */}
                        <img src="/images/gallery-3.jpg" alt="Gallery 3" className={styles.img} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InterestsSection;
