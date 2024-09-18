import '@styles/landing-page/LandingPage.css';
import LandingHero from '@components/landing-page/LandingHero'; 
import LandingPartner from '@components/landing-page/LandingPartner';
import LandingMeasure from '@components/landing-page/LandingMeasure';
import { LandingAccordion } from '@components/landing-page/LandingAccordion';
import LandingNewsletter from '@components/landing-page/LandingNewsletter';
import LandingTab from '@components/landing-page/LandingTab';

export default function Home() {
  return (
    <div>
      <LandingHero/>
      <LandingPartner/>
      <LandingTab/>
      <LandingMeasure/>
      <LandingAccordion/>
      <LandingNewsletter/>
    </div>
  );
}
