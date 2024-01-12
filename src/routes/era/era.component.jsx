import { getErasAndDocuments } from "../../utils/firebase/firebase.utils.js";
import { Fragment, useState, useEffect } from "react";
import './era.styles.scss'
import { useParams } from 'react-router-dom'
import EmperorCard from "../../components/emperor-card/emperor-card.component.jsx";
import EmperorPage from "../emperor/emperorPage.component.jsx";
import { Route, Routes } from "react-router-dom";

const Era = () => {
    const [erasMap, setErasMap] = useState({});
    const [emperors, setEmperors] = useState([]);
    
    useEffect(() => {
        const getErasMap = async () => {
            const erasMap = await getErasAndDocuments();
            setErasMap(erasMap)
        }

        getErasMap()
    }, [])

    const { eraId } = useParams()
    const eraDetails = erasMap[eraId]
    useEffect(() => {
        // Check if eraDetails exists before setting emperors
        if (eraDetails) {
            setEmperors(eraDetails.emperors);
        }
    }, [eraId, eraDetails])

    return (
        <Fragment>
            <Routes>
                <Route index element={eraDetails && <h1 className="era-title">{eraDetails.title}</h1>} />
                <Route index element={eraDetails && <h1 className="era-title">{eraDetails.time}</h1>}  />
            </Routes>
            <div className="era-container">
                {emperors && emperors.map((emperor) => (
                    <Routes>
                        <Route index element={eraDetails && <EmperorCard key={emperor.id} emperor={emperor} />} />
                    </Routes>
                    
                ))}
            </div>
            <Routes>
                <Route index element={eraDetails && <h2 className="era-brief">{eraDetails.brief}</h2>} />
                <Route path=":emperorId" element={eraDetails && <EmperorPage eraDetails={eraDetails}/>} />
            </Routes>
        </Fragment>
    )
}

export default Era