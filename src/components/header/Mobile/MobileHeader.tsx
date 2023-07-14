import { useState } from 'react';
import './MobileHeader.scss';
import { Close, Menu } from '@mui/icons-material';

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
                                TODO - navigation data
                            </div>
                        </section>
                    </div>
                )}
            </div>
        </div>
    );
}

/*
Navigation data jsx portion

{navigationData.map((data, index) => (
    <p key={index} onClick={toggleMenu}>
        <Link to={data.path}
        onClick={data.download ? openResume : undefined}>
        {data.label}
        </Link>
    </p>
))}
*/

export default MobileHeader;