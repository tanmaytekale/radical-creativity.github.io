import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './IntroSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const IntroSection: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        gsap.from(headerRef.current, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%"
            },
            x: -50, opacity: 0, duration: 0.8
        });

        gsap.from(`.${styles.image}`, {
            scrollTrigger: {
                trigger: `.${styles.feature}`,
                start: "top 80%"
            },
            scale: 0.9, opacity: 0, duration: 0.8
        });

    }, { scope: containerRef });

    return (
        <div className={styles.introWrapper} ref={containerRef}>
            <div className={styles.heroSub}>
                <h2 className={styles.header} ref={headerRef}>the fuck?</h2>
            </div>

            <div className={styles.feature}>
                <div className={styles.imageContainer}>
                    <div className={styles.imageInner}>
                        <img
                            src="/images/profile-feature.png"
                            alt="Feature"
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.textContainer}>
                    <h3 className={styles.subHeader}>i am tanmay</h3>
                    <p className={styles.paragraph}>
                        writing about yourself is soo tedious, like damn, first you gotta know yourself well. its a constant endeavor. an on going feedback loop, which is obvious, cause people change. asking questions like: what is your favorite color/song/movie, is just dumb; like dude how the fuck are you expecting me having a favorite movie which would represent a pedestal of my personality, when even my morals keep on changing every 6 months.
                    </p>
                    <p className={styles.paragraph}>
                        btw my fav color is red for now, it might change later :)
                    </p>
                </div>
            </div>
        </div>
    );
};

export default IntroSection;
