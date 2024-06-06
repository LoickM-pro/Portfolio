import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import 'tailwindcss/tailwind.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    sendCopy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'marin.loick@gmail.com',
      };

      console.log('Sending email with the following parameters:', templateParams);

    emailjs.send('service_8acmsia', 'template_5h7qe7d', templateParams, 'HI9kTGVoHUAYxz6qf')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormData({
            name: '',
            email: '',
            message: '',
            sendCopy: false,
          });
        if (formData.sendCopy) {
          emailjs.send('service_8acmsia', 'template_5h7qe7d', { ...templateParams, to_email: formData.email }, 'HI9kTGVoHUAYxz6qf');
        }
      }, (error) => {
        console.log('FAILED...', error);
      });
  };

  return (
    <div class="font-ptsans p-24 flex flex-col items-center min-h-[85vh]">
            <h3 class="font-ptsans mb-10 text-base font-bold leading-6 bg-gradient-to-r from-cyan-400 to-purple-600 inline-block text-transparent bg-clip-text">
                    Contact -
                </h3>
    <form onSubmit={handleSubmit} className="w-1/2 mx-auto p-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Nom
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        ></textarea>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="sendCopy">
          Garder une copie
        </label>
        <input
          type="checkbox"
          name="sendCopy"
          id="sendCopy"
          checked={formData.sendCopy}
          onChange={handleChange}
          class="mr-2 leading-tight"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          type="submit"
          class="bg-blue-300 hover:bg-blue-600/50 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Envoyer
        </button>
      </div>
    </form>
    </div>
  );
};

export default Form;
