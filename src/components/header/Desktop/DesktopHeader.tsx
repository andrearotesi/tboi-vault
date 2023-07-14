import './DesktopHeader.scss';

function DesktopHeader() {
    return (
        <nav className='main-nav'>
            TODO - navigation data
        </nav>
    );
}

/*
Navigation data jsx example

{ navigationData.map((data, index) => (
    <Link key={ index } to={ data.path }
        onClick={ data.download ? openResume : undefined }>
            { data.label }
    </Link>
    )
)}
*/

export default DesktopHeader;