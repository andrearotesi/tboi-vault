import './About.scss';

function About() {
    return (
        <section className='About'>
            <h1>About The Vault</h1>
            <br/>

            <article>
                <h3>What?</h3>
                <p>
                    The Vault is a side project created by <a href='https://andrearotesi.com/'>Andrea Rotesi</a>, 
                    an avid The Binding of Isaac player and software engineer.
                </p>
            </article>

            <article>
                <h3>Why?</h3>
                <p>
                    The Vault aims to function as a fast, versatile wiki for all the items in TBOI.
                    Unlike other wikis, it uses a powerful search engine, to make finding items dead easy and blazingly fast.
                    <br/>
                    The main focus of The Vault is to provide an intuitive, fast, and no-time-wasting UX.
                </p>
            </article>

            <article>
                <h3>How?</h3>
                <p>
                    The tech stack is very simple: <a href='https://react.dev/'>React</a> with <a href='https://www.typescriptlang.org/'>Typescript</a>, 
                    hosted on <a href='https://firebase.google.com/'>Firebase</a>, 
                    using <a href='https://www.oramasearch.com/'>Orama Search</a>.
                    <br/>
                    The project is open-source, and can be found <a href='https://github.com/andrearotesi/tboi-vault'>on GitHub.</a>
                </p>
            </article>

            <article>
                <h3>Resources</h3>
                <p>
                    The dataset used on this project is public and can be found <a href='https://github.com/andrearotesi/tboi-vault/tree/master/src/data/dataset.json'>here</a>,
                    while the sprites for every item are public as well, 
                    available <a href='https://github.com/andrearotesi/tboi-vault/tree/master/src/assets/sprites'>here</a>.
                </p>
            </article>

        </section>
    );
}

export default About;