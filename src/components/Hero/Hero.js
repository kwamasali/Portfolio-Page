import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
          Welcome to <br />
          My Frontend Portfolio
      </SectionTitle>
      <SectionText>
      My name is Karen Natozo Wamasali, and I am a Software Engineer majoring in Frontend Web Development, Data Science and eventually, Full Stack.
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/kwamasali'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;