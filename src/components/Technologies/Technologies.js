import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
  <SectionDivider divider />
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    I've worked with a range a technologies in the field of Software Engineering, as well as Data Science and Analytics.
  </SectionText>
  <List>
    <ListItem>
      <picture>
        <DiReact size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experiece with <br />
          JavaScript, NodeJS, React.js and web fundamentals HTML & CSS.
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <picture>
        <DiFirebase size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          Node and Databases
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <picture>
        <DiZend size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>Data Science</ListTitle>
        <ListParagraph>
          Experience with <br />
          tools like Machine Learning, Jupyter Notebooks, Python, SQL, Tableau and R.
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
  <SectionDivider colorAlt />
</Section>
);

export default Technologies;
