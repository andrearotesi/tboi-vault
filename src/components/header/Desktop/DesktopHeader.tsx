import './DesktopHeader.scss';
import navigation from '../../../data/navigation.json';
import { Link } from 'react-router-dom';

function DesktopHeader() {
    return (
        <nav className='main-nav'>
            {
                navigation.map((data, index) => (
                    <Link key={index} to={data.path}>{data.label}</Link>
                ))
            }
        </nav>
    );
}

export default DesktopHeader;