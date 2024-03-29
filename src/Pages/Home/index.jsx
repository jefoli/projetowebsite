import { ComponentCarousel } from '../../Components/Carousel';
import { Gallery } from '../../Components/Gallery';
import { ExperienceSection } from '../../Components/ExperienceSection';
import { QuickLinksSection } from '../../Components/QuickLinksSection';
import { IntroTextContent } from '../../Components/IntroTextContent';
import { CookieBanner } from '../../Components/CookieBanner';
import * as Styled from './styles';

export const Home = () => {
  return (
    <Styled.Container>
      <IntroTextContent />
      <ExperienceSection />
      <QuickLinksSection />
      <ComponentCarousel />
      <Gallery />
      <CookieBanner />
    </Styled.Container>
  );
};
