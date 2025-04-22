'use client';

import React from 'react';

export default function About() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
  
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message
        }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }
  
      alert('Message sent successfully!');
      // Reset form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
  
    } catch (error: any) {
      console.error('Error:', error);
      alert(error.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="contact" className="py-16 pb-12 bg-black relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="mx-auto w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-300 mb-6">
              Have a project in mind or want to learn more about our services? Fill out the form and we'll get back to you as soon as possible.
            </p>
            <div className="space-y-4">
              <ContactItem
                title="Email"
                description="buzz@bithive.in"
                iconPath="M3 8l7.89 5.26a2 2 0 002.22 0L21 8..."
              />
              <ContactItem
                title="Phone"
                description="+91 7070030645 , +91 9369450531"
                iconPath="M3 5a2 2 0 012-2h3.28..."
              />
              <ContactItem
                title="Head Office"
                description="Gurugram, Haryana, India"
                iconPath="M17.657 16.657L13.414 20.9..."
              />
              <ContactItem
                title="Sub Office"
                description="Dehradun, Uttarakhand, India"
                iconPath="M17.657 16.657L13.414 20.9..."
              />
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg mx-auto w-full">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <InputField label="Name" value={name} onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setName(e.target.value)} />
                <InputField label="Email" type="email" value={email} onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)} />
              </div>
              <InputField label="Subject" value={subject} onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setSubject(e.target.value)} />
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-black border border-gray-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-violet-600 rounded-md text-white font-medium hover:from-blue-600 hover:to-violet-700 transition-all shadow-lg shadow-blue-500/20"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable Input Field component
function InputField({ label, value, onChange, type = "text" }: any) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-400 mb-2">{label}</label>
      <input
        type={type}
        className="w-full bg-black border border-gray-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

// Reusable Contact Item component
function ContactItem({ title, description, iconPath }: any) {
  return (
    <div className="flex items-start">
      <div className="bg-gray-900 p-3 rounded-lg mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={iconPath} />
        </svg>
      </div>
      <div>
        <h3 className="font-medium mb-1">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}
