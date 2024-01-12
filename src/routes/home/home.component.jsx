import { Outlet, Link } from 'react-router-dom';
import './home.styles.scss'

const Home = () => {
    return(
        <div className='home_container'>
            <h1 className='intro'>
                Rome will rule the world. It is her destiny and always has been.
            </h1>
            <h1 className='intro'>
                Claiming a line of descent back to Hercules, Romans are not lacking in civic pride. Romans are not lacking in fierceness: their city was founded by Romulus and Remus, twins raised by a wolf. Their armies may have been beaten, but they have always dragged themselves back into any fight, and battled on.
            </h1>
            <Link to={'main'}>
                <button className='homepage_into_main'>
                    <h2 className='text_in'>Dive into the Roman World</h2>
                </button>
            </Link>  
            <Outlet />
        </div>
    )
}

export default Home