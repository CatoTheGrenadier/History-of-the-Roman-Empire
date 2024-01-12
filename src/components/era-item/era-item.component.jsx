import { useNavigate } from 'react-router-dom';
import { Backgroundimage, Body, EraItemContainer  } from './era-item.styles';

const EraItem = ({ era }) => {
    const { imageUrl, title, time, route } = era;
    const navigate = useNavigate();
    const onNavigateHandler = () => navigate(route);

    return (
        <EraItemContainer onClick={onNavigateHandler}>
            <Backgroundimage imageUrl={imageUrl} />
            <Body>
                <h2>{title}</h2>
                <p>{time}</p>
            </Body>
        </EraItemContainer>
    )

}

export default EraItem