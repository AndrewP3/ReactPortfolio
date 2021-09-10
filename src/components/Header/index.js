import React from "react";
import Nav from "../Nav";

function Header(props) {
  const { currentTab, setCurrentTab } = props;

  return (
    <header>
      <div>
        <h2>Andrew's React Portfolio</h2>
      </div>
      <div>
        <Navigation>
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        </Navigation>
      </div>
    </header>
  );
}

export default Header;
