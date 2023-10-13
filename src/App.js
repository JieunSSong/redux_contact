import logo from './logo.svg';
import './App.css';
import './style/reset.css';
import './style/contact.css';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';

function App() {
  return (
    <div className="App">
      <h1 className='title'>Contact Us</h1>
      <div className='contact'>
        <ContactForm></ContactForm>
        <ContactList></ContactList>
      </div>
      
    </div>
  );
}

export default App;
