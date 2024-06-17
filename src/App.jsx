import React from 'react'
import PageOne from "./Components/PageOne";
import PageTwo from './Components/PageTwo';

const myContext = React.createContext();
export default function Home() {
  const [flipPage, setFlipPage] = React.useState(false);
  return (
    <myContext.Provider value={{setFlipPage}}>
      <div className="bg-white-color">
        {flipPage === false && <PageOne />}
        {flipPage && <PageTwo />}
      </div>
    </myContext.Provider>
  );
}
export {myContext}