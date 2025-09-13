import Java from '../assets/java.png';
import Spring from '../assets/spring.png';
import MySql from '../assets/mysql.png';
import ThymeLeaf from '../assets/thymeleaf.png';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import React from '../assets/react.png';
import TailWind from '../assets/tailwind.png';
import GitHub from '../assets/github.png';
import GCloud from '../assets/gcloud.png';
import Firebase from '../assets/firebase.png';

import TravelNest from '../assets/TravelNest.png';
import ComicWorld from '../assets/ComicWorld.png';

export const skillCardsData = [
    {
        id: 1,
        name: 'JAVA',
        icon: Java
    },
    {
        id: 2,
        name: 'SPRING',
        icon: Spring
    },
    {
        id: 3,
        name: 'MYSQL',
        icon: MySql
    },
    {
        id: 4,
        name: 'THYMELEAF',
        icon: ThymeLeaf
    },
    {
        id: 5,
        name: 'HTML',
        icon: HTML
    },
    {
        id: 6,
        name: 'CSS',
        icon: CSS
    },
    {
        id: 7,
        name: 'JAVASCRIPT',
        icon: JavaScript
    },
    {
        id: 8,
        name: 'REACT',
        icon: React
    },
    {
        id: 9,
        name: 'TAILWIND',
        icon: TailWind
    },
    {
        id: 10,
        name: 'GITHUB',
        icon: GitHub
    },
    {
        id: 11,
        name: 'GCLOUD',
        icon: GCloud
    },
    {
        id: 12,
        name: 'FIREBASE',
        icon: Firebase
    },
];

export const projectInfo = [
    {
        id: 1,
        backgroundImage: ComicWorld,
        appType: 'React JS Application',
        demoLink: 'https://comic-world-457306.web.app/',
        codeLink: 'https://github.com/roskonenov/ComicWorld',
        title: 'Comic World',
        subTilte: 'Single-Page Application (React, Firebase, JavaScript, HTML/CSS)',
        description: 'A full-stack ReactJS single-page application where users can explore, buy, and read comics. It implements user authentication, dynamic routing, state management, RESTful API integration, and full CRUD operations. Admins can manage content, while users can rate, comment, and track their personal comic collection. It ensures secure access control, optimized UI with React Router v7, and enhanced UX with React Toastify. It also manages the backend via a REST API and SoftUni`s practice server.',
        mySkill: 'This project demonstrates my ability to architect scalable, interactive web applications with modern technologies and strong attention to detail.'
    },
    {
        id: 2,
        backgroundImage: TravelNest,
        appType: 'Spring Boot Application',
        demoLink: 'https://travelnest-production.up.railway.app',
        codeLink: 'https://github.com/roskonenov/TravelNest',
        title: 'Travel Nest',
        subTilte: 'Full- Stack Web Application(Java, Spring Boot, MySQL, Thymeleaf, REST APIs)',
        description: 'Travel Nest is a full - stack booking platform that allows users to reserve accommodations, rent cars, and purchase tickets for attractions and events.The application is built with Java and Spring Boot on the backend, using MySQL for data persistence and Thymeleaf for server - side rendering.It follows an MVC architecture and integrates REST APIs to ensure scalability and modularity.',
        mySkill: 'This project demonstrates my ability to design and implement end-to-end solutions, combining backend logic, database integration, and user-facing features in a cohesive system.'
    }
]