import React, { useState } from 'react'

type ExperienceLevel = 'weeks' | 'months' | 'years'

interface TechnologyItem {
    name: string
    displayName?: string
    experience: ExperienceLevel
}

const TECHNOLOGIES: TechnologyItem[] = [
    { name: 'typescript', experience: 'years' },
    { name: 'bash', experience: 'months' },
    { name: 'go', experience: 'months' },
    { name: 'ssh', experience: 'years' },
    { name: 'react', experience: 'years' },
    { name: 'android', experience: 'months' },
    { name: 'haskell', experience: 'months' },
    { name: 'tailwindcss', experience: 'weeks' },
    { name: 'mongodb', experience: 'weeks' },
    { name: 'javascript', experience: 'years' },
    { name: 'java', experience: 'years' },
    { name: 'terraform', experience: 'months' },
    { name: 'linux', experience: 'years' },
    { name: 'amazonwebservices', experience: 'months', displayName: 'aws' },
    { name: 'nodejs', experience: 'years' },
    { name: 'wasm', experience: 'months', displayName: 'webassembly' },
    { name: 'c', experience: 'years' },
    { name: 'cmake', experience: 'years' },
    { name: 'firebase', experience: 'weeks' },
    { name: 'docker', experience: 'months' },
    { name: 'threejs', experience: 'months' },
    { name: 'vuejs', experience: 'weeks' },
    { name: 'postgresql', experience: 'months' },
    { name: 'express', experience: 'months' },
    { name: 'redis', experience: 'weeks' },
    { name: 'python', experience: 'years' },
    { name: 'openapi', experience: 'weeks' },
    { name: 'npm', experience: 'years' },
    { name: 'pytorch', experience: 'months' },
    { name: 'angular', experience: 'weeks' },
    { name: 'unity', experience: 'months' },
    { name: 'rust', experience: 'months' },
    { name: 'cplusplus', experience: 'months', displayName: 'c++' },
    { name: 'opengl', experience: 'months' },
    { name: 'kotlin', experience: 'months' },
    { name: 'csharp', experience: 'months', displayName: 'c#' },
    { name: 'tensorflow', experience: 'weeks' },

]

const Search: React.FC = () => {
    const [search, setSearch] = useState('')
    const [results, setResults] = useState(TECHNOLOGIES)

    const onSearchChange = (newSearch: string) => {
        setSearch(newSearch)
        if (newSearch.length === 0) {
            setResults(TECHNOLOGIES)
        }

        newSearch = newSearch.toLowerCase()

        const newResults: TechnologyItem[] = []
        for (const technology of TECHNOLOGIES) {
            if (technology.name.includes(newSearch) || technology.displayName?.includes(newSearch)) {
                newResults.push(technology)
            }
        }
        setResults(newResults)
    }

    const getTechnologyElementList = () => {
        const elements = []

        // double the elements for css animation effect
        for (const i of [0, 1]) {
            for (const r of results) {
                let imageSrc: string
                let imageSizeClass: string
                switch (r.experience) {
                    case 'weeks':
                        imageSrc = '/star-week.svg'
                        imageSizeClass = 'size-3'
                        break
                    case 'months':
                        imageSrc = '/star-month.svg'
                        imageSizeClass = 'size-4'
                        break
                    case 'years':
                        imageSrc = '/star-year.svg'
                        imageSizeClass = 'size-6'
                        break
                }

                const imageTitle = `${r.experience} of ${r.displayName ?? r.name} experience`

                elements.push(<div className='flex flex-col gap-2 min-w-14 items-center' key={String(i) + r.name}>
                    <div className='size-18 relative group'>
                        <img src={`/images/${r.name}-plain.svg`} />
                        <img className={`${imageSizeClass} absolute right-0 top-0 transform-[translateX(50%)_translateY(-50%)]`} src={imageSrc} />
                        <div className='absolute bottom-[calc(100%+6*var(--spacing))] hidden p-2 group-hover:block z-10 text-sm text-navy bg-white cursor-default rounded-sm shadow-sm'>{imageTitle}</div>
                    </div>
                    <span className='text-sm text-grey'>{r.displayName ?? r.name}</span>
                </div>)
            }
        }

        return elements
    }

    return <>
        <search className='flex flex-col mt-4 w-full relative z-0'>
            <p className='block text-grey mb-2'>what skill do you value?</p>
            <div className='grid flow-col grid-cols-[1fr_min-content] gap-4 items-center mb-2'>
                <input className='text-navy placeholder:text-lightgrey border-1 border-grey rounded-sm p-2 w-full mr-10' type='text' placeholder='search here...' value={search} onChange={e => onSearchChange(e.target.value)} />
                <svg className='fill-navy size-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
            </div>
        </search>
        <div className='h-38 flex items-center overflow-x-clip'>
            {search === ''
                ? <div className='flex flex-row w-max h-32 gap-12 pr-12 mt-4 animate-[carousel_150s_linear_infinite]'>
                    {getTechnologyElementList()}
                </div>
                : (
                    results.length === 0
                        ? <p className='text-grey text-center w-full'>i haven't learned '<span className="text-navy">{search}</span>' yet 😔</p>
                        : <div className='flex flex-row h-32 gap-12 justify-right mt-4'>
                            {getTechnologyElementList().slice(0, results.length)}
                        </div>
                )
            }

        </div>
        <p className='text-lightgrey text-right text-tiny'>shoutout to <a className='underline' href='https://devicon.dev'>devicon.dev</a> for the icons</p>
    </>
}

export default Search