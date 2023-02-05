import React from "react";
import androidImg from '../public/assets/projects/android.png';
import webImg from '../public/assets/projects/web.png';
import ProjectItem from "./projectItem";

const Projects = () => {
    return (
        <div className="w-full h-screen py-32 sm:py-16">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest text-[#8B9A46] uppercase">Projects</p>
                <h2 className="py-4">What I've Built</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectItem 
                        title="Jeu Android"
                        language="Android Studio + Java" 
                        backgroundImg={androidImg} 
                        description="un jeu Android pour deviner les drapeaux de plusieurs pays du monde,
                        qui affiche aléatoirment un nom d’un pays et c’est à l’utilisateur de choisir le bon drapeau,
                        si c’est correct le fond d’écran va se mettre en couleur verte et si c’est le mauvais drapeau ça va se changer vers une couleur rouge et ça va 
                        lui montrer combien de tentatives .l’utilisateur peut aussi cliquer sur n’importe quelle drapeau et ça va lui emmené vers la page wikipedia de ce 
                        pays"
                    />
                    <ProjectItem 
                        title="web"
                        language="HTML + CSS + JAVASCRIPT + NodeJS" 
                        backgroundImg={webImg} 
                        description="une plateforme web d’inscription pour des activitées variées , qui contient 3 pages principales. 
                        Une page pour visualiser toutes les activés auquel l’utilisateur peut s’inscrire, une deuxième page pour voir toutes les inscriptions à notre 
                        compte et une troisième page administrateur"
                    />     
                </div>
            </div>
        </div>
    )
}

export default Projects;