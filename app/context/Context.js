import { createContext, useState } from "react";

// initialize a context instant (create context)
export const NavContext = createContext();

// create context to open and close navbar

// define the necessary values of the context
export function NavContextProvider({ children }) {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    // provide the context to use
    <NavContext.Provider
      // values available when using context
      //   values can only be destructured inside their provider (when using)
      value={{ toggleMenu, handleToggle }}
    >
      {children}
    </NavContext.Provider>
  );
}
