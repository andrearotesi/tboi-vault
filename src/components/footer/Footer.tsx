import './Footer.scss';

function Footer() {
    return (
        <footer className='Footer'>
            © Andrea Rotesi { new Date().getFullYear() }
        </footer>
    );
}

export default Footer;