import { useState } from "react";
import AddCategories from "./components/AddCategories";
import Gifgrid from "./components/Gifgrid";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball'])

    // const hanlderAdd = () => {
    //     // setCategories([...categories, 'Inuyasha'])
    //     setCategories(catery => [...catery, 'Inushasha'])
    // }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategories setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map( category => (
                        <Gifgrid key={category} category={category} />
                    ))
                }
            </ol>
        </div>
    )
}

export default GifExpertApp;