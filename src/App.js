import {Routes,Route} from "react-router-dom";

function App(){
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                
                <Route path='about' element={<About />}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;