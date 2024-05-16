import { useContext, useEffect } from "react";
import PageContextProvider from "./context/contextProvider";
import { PageContext } from "./context/contextProvider";
import Calculator from "./components/gradedLab";

function Heading() {
  const { user, setUser } = useContext(PageContext)
  useEffect(() => {
    console.log(user)
  }, [user])


  return (
    <>
    {/* <h1>This is an h1 heading text</h1> */}
    <h2>This is fron the header: {user.user}</h2>
    <button onClick={() => setUser({user: "Emmanuel"})}>Change User</button>
    </>
  );
}

function Body () {
  const data = useContext(PageContext)
  return (
    <h2>This is from the body: {data.user.user}</h2>
  )
}

function App() {
  return ( 
    <div className="App"> 
    <PageContextProvider>
      <Heading /> 
      <Body />
    <Calculator />
    </PageContextProvider>
    </div> 
  ); 
} 
 
export default App;