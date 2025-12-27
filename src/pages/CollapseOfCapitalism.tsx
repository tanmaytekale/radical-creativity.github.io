import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Article.module.css';

const CollapseOfCapitalism: React.FC = () => {
    return (
        <div className={styles.articleWrapper}>
            <nav className={styles.nav}>
                <Link to="/" className={styles.homeLink}>home</Link>
            </nav>

            <header className={styles.header}>
                <span className={styles.date}>27 dec, 2025</span>
                <h1 className={styles.title}>collapse of capitalism</h1>
                <p className={styles.subtitle}>
                    communism is our upcoming<br />
                    economic system
                </p>
            </header>

            <article className={styles.content}>
                <p className={styles.paragraph}>
                    yo, ill write about this soon. abhi i am on a trip in manali. i have a feeling no one will open this blog. so lemme rant here. i am just creating this website to experiment with figma and antigravity.
                    <br /><br />
                    if you are using mobile to view this site, FUCK YOU.
                    <br /><br />
                    i have two blogs before this, they are by ai. i didnt type shit, however the points are mine. these three topics; i have been thinking for a long time, i have created notes on onenote, whatsapp, and made videos talking about, so i just fed that to chatgpt.
                    <br /><br />
                    ill talk about free will next
                    <br /><br />
                    if you reading this, love you gng, dm me.
                </p>
            </article>
        </div>
    );
};

export default CollapseOfCapitalism;
