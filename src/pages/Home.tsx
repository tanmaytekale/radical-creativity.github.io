import React from 'react';
import LandingHero from '../components/LandingHero';
import IntroSection from '../components/IntroSection';
import InterestsSection from '../components/InterestsSection';
import ExperienceSection from '../components/ExperienceSection';
import ChairSection from '../components/ChairSection';

const Home: React.FC = () => {
    return (
        <>
            <LandingHero />
            <IntroSection />
            <InterestsSection />
            <ExperienceSection />
            <ChairSection />
        </>
    );
};

export default Home;
