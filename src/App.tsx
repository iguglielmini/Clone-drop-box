import React from 'react';

// Css Styled components
import GlobalStyle from './styles/GlobalStyles';

//COmponents
import Section from './components/Section';
import SideMenu from './components/SideMenu';
import FormMenu from './components/FormMenu';
// Data conteudo
import data from './data'

function App() {
  return (
    <>
      <Section
        variant="blue"
        title={data[0].title}
        description={data[0].description}
      />
      <Section
        variant="beige"
        title={data[1].title}
        description={data[1].description}
      />
      <Section
        variant="blue"
        title={data[2].title}
        description={data[2].description}
      />
      <Section
        variant="white"
        title={data[3].title}
        description={data[3].description}
      />
      <Section
        variant="black"
        title={data[4].title}
        description={data[4].description}
      />
      <SideMenu>
        <FormMenu />
      </SideMenu>

      <GlobalStyle />
    </>
  );
}

export default App;
