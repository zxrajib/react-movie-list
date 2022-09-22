import Meta from "./meta";
import Navbar from "./navbar";

const Layout =({children})=>{
  return(
    <>
    {/* <Meta /> */}
    <Navbar />
      <main>
        {children}
      </main>
    </>
  )
}
export default Layout;