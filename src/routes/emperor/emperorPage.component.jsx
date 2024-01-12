import "./emperorPage.styles.scss"
import { useParams } from "react-router-dom"
import { Fragment } from "react"

const EmperorPage = ({eraDetails}) => {
    const emperors = eraDetails.emperors

    const allIds = useParams()

    const emperorId = allIds.emperorId

    const selectedEmperor = emperors.find((emperor) => emperor.id == emperorId )

    const { full_name, reign, imageUrl } = selectedEmperor

    console.log(full_name, reign, imageUrl)

    return (
        <div className="emperor-container">
                <img src={imageUrl}  className="emperor-pic"/>
                <div className="text-container">
                    <h1 className="emperor-name">{full_name}</h1>
                    <h1 className="emperor-reign">{reign}</h1>
                </div>
        </div>
    )
}

export default EmperorPage