import React from 'react'
import Hero from '../components/Hero'
import ProjectOne from '../components/ProjectOne'
import ProjectTwo from '../components/ProjectTwo'


const Projects = () => {
    return (
        <>
            <div >
                <Hero heading="Projects" message='Detailed Projects Description' />
            </div>
            <ProjectOne />

            <ProjectTwo />

        </>
    )
}

export default Projects