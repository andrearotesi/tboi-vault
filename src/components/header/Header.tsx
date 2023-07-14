import { useEffect, useState } from 'react';
import './Header.scss';
import MobileHeader from './Mobile/MobileHeader';
import DesktopHeader from './Desktop/DesktopHeader';

function Header() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => setIsMobile(window.innerWidth <= 650);
    
        // Add event listener to handle window resize
        window.addEventListener('resize', checkIsMobile);
    
        // Initial check
        checkIsMobile();
    
        // Clean up the event listener
        return () => {
          window.removeEventListener('resize', checkIsMobile);
        };
    }, []);
    
    return (
        <header className='Header'>
            <span>Logo</span>
            { isMobile ? <MobileHeader/> : <DesktopHeader/> }
        </header>
    );
}

export default Header;