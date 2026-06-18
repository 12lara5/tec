import { useState } from 'react';
import './ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    const res = await fetch('https://formspree.io/f/mkoalpnw', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
    if (res.ok) {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } else {
      setStatus('idle');
      alert('Greška pri slanju. Pokušajte ponovno.');
    }
  };

  return (
    <form className="smooth-contact-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <input 
          type="text" 
          name="name" 
          placeholder="Vaše ime" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div className="input-group">
        <input 
          type="email" 
          name="email" 
          placeholder="Vaš email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div className="input-group">
        <textarea 
          name="message" 
          placeholder="Opišite što vam treba..." 
          rows="5" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        />
      </div>
      <button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Šaljem...' : status === 'sent' ? 'Poruka poslana ✓' : 'Pošaljite poruku'}
      </button>
    </form>
  );
}
