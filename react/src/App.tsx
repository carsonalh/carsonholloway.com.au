import Search from "./Search";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const App: React.FC = () => {
    return <>
        <main className='max-w-full sm:max-w-280 pl-8 pr-8 pb-24 lg:pl-32 lg:pr-32 pt-8 ml-auto mr-auto'>
            <nav className='flex flex-row w-fill justify-end items-center'>
                <a className='ml-4 block' href='mailto:carsonalh@gmail.com'>
                    <FontAwesomeIcon icon={faEnvelope} className="text-navy text-3xl hover:text-grey transition-colors duration-100" />
                </a>
                <a className='ml-4 block' href='https://github.com/carsonalh'>
                    <FontAwesomeIcon icon={faGithub} className="text-navy text-3xl hover:text-grey transition-colors duration-100" />
                </a>
                <a className='ml-4 block' href='https://www.linkedin.com/in/carson-holloway-849b2b197/'>
                    <FontAwesomeIcon icon={faLinkedin} className="text-navy text-3xl hover:text-grey transition-colors duration-100" />
                </a>
            </nav>

            <section className='mt-12'>
                <h1 className='font-extrabold text-navy text-4xl mb-4'>carson holloway</h1>
                <h2 className='text-grey text-2xl mb-3'>full-stack developer</h2>
                <h3 className='text-lightgrey text-xl mb-3'>brisbane, au</h3>
            </section>

            <section className='mt-12 text-right'>
                <h2 className='font-extrabold text-2xl text-navy mb-2'>this site comes in</h2>
                <div className="flex justify-end gap-4">
                    <div className="font-extrabold text-grey">react</div>
                    <div className="text-grey">vue (coming soon)</div>
                </div>
            </section>

            <section className='mt-12'>
                <h2 className='font-extrabold text-2xl text-navy mb-8'>my best technologies</h2>
                <ul className='grid grid-rows-2 grid-cols-2 items-end gap-y-6 sm:flex sm:flex-row sm:justify-evenly'>
                    <li className='flex flex-col gap-2 items-center text-grey'><img className='sm:max-h-28' src='nodejs.svg' alt='NodeJS stylised logo' />node js</li>
                    <li className='flex flex-col gap-2 items-center text-grey'><img className='sm:max-h-28' src='typescript.svg' alt='Typescript stylised logo' />typescript</li>
                    <li className='flex flex-col gap-2 items-center text-grey'><img className='sm:max-h-28' src='react.svg' alt='React stylised logo' />react</li>
                    <li className='flex flex-col gap-2 items-center text-grey'><img className='sm:max-h-28' src='go.svg' alt='Go stylised logo' />go</li>
                </ul>
            </section>

            <section className='mt-12'>
                <h2 className='font-extrabold text-2xl text-navy mb-2'>also excellent with</h2>
                <Search />
            </section>

            <section className='mt-12'>
                <h2 className='font-extrabold text-2xl text-navy mb-8'>want to learn more?</h2>
                <p className='text-navy'>
                    send me an
                    <a className='ml-1' href='mailto:carsonalh@gmail.com'><span className='underline'>email</span> <img className='size-3 inline mr-1' src='/arrow-up-right-from-square-solid.svg'/></a>,
                    message me on
                    <a className='ml-1' href='https://www.linkedin.com/in/carson-holloway-849b2b197/'><span className='underline'>linkedin</span> <img className='size-3 inline mr-1' src='/arrow-up-right-from-square-solid.svg'/></a>,
                    or <a download className='inline' href='/carson-holloway-full-stack-developer.pdf'><span className='underline'>download my resume</span> <img className='size-3 inline mr-1' src='/arrow-up-right-from-square-solid.svg'/></a>
                </p>
            </section>

        </main>
    </>
};

export default App