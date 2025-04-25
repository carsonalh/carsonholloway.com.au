import React, { useState } from 'react'

const TECHNOLOGIES = [
    'android',
    'angular',
    // 'aws',
    'bash',
    'c',
    'cmake',
    'cplusplus',
    'csharp',
    'docker',
    'express',
    'firebase',
    'go',
    'haskell',
    'java',
    'javascript',
    'kotlin',
    'linux',
    'mongodb',
    'nodejs',
    // 'npm',
    'openapi',
    'opengl',
    'postgresql',
    'python',
    'pytorch',
    'react',
    'redis',
    'rust',
    'ssh',
    'tailwindcss',
    'tensorflow',
    'terraform',
    'threejs',
    'typescript',
    'unity',
    'vuejs',
    'wasm',
]

const Search: React.FC = () => {
    const [search, setSearch] = useState('')
    const [results, setResults] = useState(TECHNOLOGIES)

    const onSearchChange = (newSearch: string) => {
        setSearch(newSearch)
        if (newSearch.length === 0) {
            setResults(TECHNOLOGIES)
        }

        const newResults: string[] = []
        for (const technology of TECHNOLOGIES) {
            if (technology.includes(newSearch.toLowerCase())) {
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
                elements.push(<div className='flex flex-col gap-2 min-w-14 items-center' key={String(i) + r}>
                    <img className='size-18' src={`/images/${r}-original.svg`} />
                    <span className='text-sm text-grey'>{r}</span>
                </div>)
            }
        }

        return elements
    }

        if (results.length === 0) {
            return 
        }

    return <>
        <search className='flex flex-col mt-4 w-full'>
            <p className='block text-grey mb-2'>what skill do you value?</p>
            <div className='grid flow-col grid-cols-[1fr_min-content] gap-4 items-center'>
                <input className='placeholder:text-lightgrey border-1 border-grey rounded-sm p-2 w-full mr-10' type='text' placeholder='search here...' value={search} onChange={e => onSearchChange(e.target.value)} />
                <svg className='fill-navy size-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
            </div>
        </search>
        <div className='overflow-hidden'>
            {search === ''
                ?   <div className='flex flex-row w-max h-32 gap-12 mt-4 animate-[carousel_300s_linear_infinite]'>
                        {getTechnologyElementList()}
                    </div>
                : (
                    results.length === 0
                        ? <p>I haven't learned '{search}' yet 😔</p>
                        :   <div className='flex flex-row w-max h-32 gap-12 mt-4'>
                                {getTechnologyElementList().slice(0, results.length / 2)}
                            </div>
                )
            }
            
        </div>
    </>
}

export default Search