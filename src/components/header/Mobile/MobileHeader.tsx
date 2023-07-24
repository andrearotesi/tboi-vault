import { useState } from 'react';
import './MobileHeader.scss';
import { Close, Menu } from '@mui/icons-material';
import navigation from '../../../data/navigation.json';
import { Link } from 'react-router-dom';

function MobileHeader() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div>
            <Menu onClick={toggleMenu} className='toggle'/>
            <div className={`MobileMenu ${isOpen ? 'open' : ''}`}>
                {isOpen && (
                    <div>
                        <Close onClick={toggleMenu} className='toggle'/>
                        <section className='center'>
                            <div className='menu-items'>
                                {
                                    navigation.map((data, index) => (
                                        <p key={index} onClick={toggleMenu}>
                                            <Link to={data.path}>{data.label}</Link>
                                        </p>
                                    ))
                                }
                            </div>
                        </section>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MobileHeader;