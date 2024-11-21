import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import luisPhoto from './assets/luis.jpg';
import camiloPhoto from './assets/camilo.jpg';
import aldairPhoto from './assets/aldair.jpg';
import hogarPhoto from './assets/hogar.png';
import limpiezaPhoto from './assets/limpieza.png';
import cuidadoPhoto from './assets/cuidado.png';


const App = () => {
    const [view, setView] = useState('home');

    const renderView = () => {
        switch (view) {
            case 'about':
                return <About />;
            case 'team':
                return <Team />;
            case 'services':
                return <Services />;
            default:
                return <Home setView={setView} />;
        }
    };

    return (
        <div>
            <Header setView={setView} />
            {renderView()}
        </div>
    );
};
const Header = ({ setView }) => (
    <header style={{ padding: '20px', backgroundColor: '#282c34', color: 'white', textAlign: 'center' }}>
        <h1>FreshHome</h1>
        <nav>
            <button onClick={() => setView('home')}>Home</button>
            <button onClick={() => setView('about')}>About Us</button>
            <button onClick={() => setView('team')}>Our Team</button>
            <button onClick={() => setView('services')}>Services</button>
        </nav>
    </header>
);

// Vista Home
const Home = ({ setView }) => (
    <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>FreshHome</h2>
        <p>Fresh Home is a lovely online platform that makes it easy for you to find and buy all kinds of home services.
            .</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <Card title="About Us" onClick={() => setView('about')} />
            <Card title="Our Team" onClick={() => setView('team')} />
            <Card title="Services" onClick={() => setView('services')} />
        </div>
    </div>
);

// Componente Card
const Card = ({ title, onClick }) => (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', width: '150px', textAlign: 'center' }}>
        <h3>{title}</h3>
        <button onClick={onClick}>View More</button>
    </div>
);

// Vista About Us
const About = () => (
    <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>About Us</h2>
        <p>Design and Development of a Web Platform to Hire Domestic Services at Home in Cartagena de Indias, Colombia

Freshhome is an innovative digital platform created to connect clients with domestic service providers in Cartagena de Indias, Colombia. The main objective of this project is to facilitate the promotion and hiring of home services such as cleaning, cooking, gardening, maintenance, among others, offering a fast, reliable and accessible solution for household needs..</p>
    </div>
);

// Vista Our Team
const Team = () => {
    const teamMembers = [
        { name: 'Luis Angel', role: 'Backend Developer', bio: 'I design and maintain the logic behind applications using languages like Python and Node.js. I work with databases such as PostgreSQL and MongoDB, creating robust APIs and scalable systems to ensure flawless performance.', photo: luisPhoto },
        { name: 'Camilo Andres', role: 'Frontend Developer', bio: 'I build dynamic and visually appealing interfaces with HTML, CSS, and JavaScript, leveraging frameworks like React and Vue.js. My focus is on responsive designs, ensuring an intuitive and impactful user experience.', photo: camiloPhoto },
        { name: 'Aldair Jose', role: 'Database Specialist', bio: 'I organize, manage, and optimize data using MySQL, PostgreSQL, and MongoDB. My goal is to ensure data systems are secure, fast, and ready to handle any information challenge', photo: aldairPhoto },
    ]; 

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Our Team</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                {teamMembers.map((member, index) => (
                    <CardWithDetails key={index} member={member} />
                ))}
            </div>
        </div>
    );
};

// Componente Card con detalles
const CardWithDetails = ({ member }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', width: '150px', textAlign: 'center' }}>
             <img
                src={member.photo}
                alt={`${member.name}'s photo`}
                style={{ width: '100%', borderRadius: '5px', marginBottom: '10px' }}
            />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <button onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? 'Hide Details' : 'View More'}
            </button>
            {showDetails && <p>{member.bio}</p>}
        </div>
    );
};

// Vista Services
const Services = () => {
    const services = [
        { name: 'general clean', description: 'Service focused on keeping the home clean and tidy. Includes tasks such as sweeping, mopping, dusting, vacuuming carpets, cleaning bathrooms and kitchen, and occasionally windows or appliances.' , photo: limpiezaPhoto},
        { name: 'childcare', description: 'Care and supervision of minors. Includes activities such as playing, helping with schoolwork, preparing meals, and in some cases, taking children to or from school.', photo: cuidadoPhoto},
        { name: 'household maintenance', description: 'Technical services to repair and maintain the home in good condition. Includes plumbing, electrical, painting, furniture repair, and yard care.', photo: hogarPhoto},
    ];

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Our Services</h2>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                {services.map((service, index) => (
                    <ServiceCard key={index} service={service} />
                ))}
            </div>
        </div>
    );
};

// Componente ServiceCard
const ServiceCard = ({ service }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', width: '150px', textAlign: 'center' }}>
             <img 
                src={service.photo} 
                alt={service.name} 
                style={{ width: '100%', borderRadius: '5px', marginBottom: '10px' }} 
            />
            <h3>{service.name}</h3>
            <button onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? 'Hide Details' : 'View More'}
            </button>
            {showDetails && <p>{service.description}</p>}
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));



 
