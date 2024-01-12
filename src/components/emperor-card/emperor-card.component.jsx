import './emperor-card.styles.scss'
import { useNavigate } from 'react-router-dom';

const EmperorCard = ({emperor}) => {
    const { short_name, reign, imageUrl, route } = emperor
    const navigate = useNavigate();
    const onNavigateHandler = () => navigate(route);

    return (
        <div  className='emperor-card-container' onClick={onNavigateHandler}>
            <img src={imageUrl}/>
            <div className='footer'>
                <span className='name'>{short_name}</span>
                <span className='reign'>{reign}</span>
            </div>
        </div>
    )
}

export default EmperorCard