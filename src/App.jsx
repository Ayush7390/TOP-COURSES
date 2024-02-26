import { useEffect, useState } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify'
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Spinner from './components/Spinner'
import Cards from './components/Cards'
import { apiUrl, filterData } from './data'
// import "get-top-courses.json"
function App() {
    const [loader, setLoader] = useState(true);
    const [courses, setCourses] = useState(null);
    const [category,setCategory]=useState(filterData[0].title);
    const[dataFound,setDataFound]=useState(true);
    async function fetchData() {
        try {
            setLoader(true);
            const response = await fetch(apiUrl)
            const output = await response.json();
            
            setCourses(output.data);

        }
        catch (error) {
            toast.error("not found")
        }
        setLoader(false);
    }
    useEffect(() => {
        fetchData();
    },[])

    return (
    <div>
            {dataFound?(<div className='min-h-screen flex flex-col bg-bgDark2'>
            <div>
                <Navbar></Navbar>
            </div>
            <div className=''>
            <div>
                <Filter filterData={filterData}
                category={category} setCategory={setCategory}></Filter>

            </div>
            <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">

                {loader ? (<Spinner/>):(<Cards courses={courses} category={category}/>)
               }

            </div>
            </div>
           
            
            <ToastContainer/>
        </div>):(<div className='min-h-screen flex justify-center items-center bg-bgDark2'>No data found</div>)}
        
            
           
    </div>
            )
            }

            export default App
