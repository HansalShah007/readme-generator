import React from 'react'
import Navbar from '../Navbar/Navbar'
import ProjectDetails from '../ProjectDetails/ProjectDetails'
import GeneralInfo from '../GeneralInfo/GeneralInfo'
import TechnologiesUsed from '../TechnologiesUsed/TechnologiesUsed'
import Features from '../Features/Features'
import Screenshots from '../Screenshots/Screenshots'
import GenerateReadme from '../GenerateReadme/GenerateReadme'
import Contact from '../Contact/Contact'
import RoomForImrpovement from '../RoomForImprovement/RoomForImprovement'
import Setup from '../Setup/Setup'
import './App.css'
import Acknowledgement from '../Acknowledgement/Acknowledgement'
import Usage from '../Usage/Usage'
import ProjectStatus from '../ProjectStatus/ProjectStatus'
import Footer from '../Footer/Footer'


const App = () => {
    return (
        <div className="page">
            <Navbar />
            <div className="container projectInfo">
                <ProjectDetails />
                <GeneralInfo />
                <TechnologiesUsed />
                <Features />
                <Screenshots />
                <Setup />
                <Usage />
                <ProjectStatus />
                <RoomForImrpovement />
                <Acknowledgement />
                <Contact />
            </div>
            <GenerateReadme />
            <Footer />
        </div>
    )
}

export default App