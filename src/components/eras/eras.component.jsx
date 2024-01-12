import EraItem from "../era-item/era-item.component"
import { useState, useEffect } from "react"
import { getErasAndDocuments } from "../../utils/firebase/firebase.utils"
import './eras.styles.scss'



const Eras = () => {
    const [erasMap, setErasMap] = useState([]);

    useEffect(() => {
        const fetchEras = async () => {
            const erasData = await getErasAndDocuments();
            setErasMap(erasData);
        }

        fetchEras()
    }, []);

    const allEras = Object.values(erasMap);
    // const a = addCollectionAndDocuments(allEras)
    
    return (
        <div className="eras-container">
            {allEras.map((era) => (
                <EraItem key={era.id} era={era} />
            ))}
        </div>
    )
}

export default Eras
