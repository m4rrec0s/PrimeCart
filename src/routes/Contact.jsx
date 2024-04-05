import { createRoot } from 'react-dom/client';
import '../styles/Contact.css';
import Header from '../components/header';

const Contact = () => {
    return (
        <div className='container'>
            <Header />
            <h1>Contact</h1>
        </div>
    );
};

export default Contact;

createRoot(document.getElementById('root')).render(<Contact />);