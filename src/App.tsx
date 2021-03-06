import { useEffect, useRef, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Resume from "./components/Resume/Resume";
import { GlobalStyle, ResumeWrapper } from "./components/GlobalStyle";
import Education from "./components/Education/Education";
import Menu from "./components/Menu/Menu";

function App() {
  const navBar = useRef<HTMLDivElement>(null);
  const [navHeight, setNavHeight] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const menuToggle = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    setTimeout(() => {
      if (navBar.current) {
        const getNavHeight = navBar.current;
        setNavHeight(getNavHeight.offsetHeight);
      }
    }, 250);
  }, [navHeight]);

  return (
    <>
      <GlobalStyle />
      <NavBar ref={navBar} menuToggle={menuToggle} />
      <ResumeWrapper navHeight={navHeight}>
        <Resume />
        <Education />
        <Menu showMenu={showMenu} menuToggle={menuToggle} />
      </ResumeWrapper>
    </>
  );
}

export default App;
