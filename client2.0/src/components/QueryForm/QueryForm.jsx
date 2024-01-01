import React, { useState } from 'react';

const QueryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '', 
    description: '',
    date: '',
    attachments: '',
    actionStatus: '', 
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://craft-query-server.vercel.app/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        console.log('Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          category: '',
          description: '',
          date: '',
          attachments: '',
          actionStatus: '',
        });
      } else {
        setSubmissionStatus('error');
        console.error('Form submission failed.');
      }
    } catch (error) {
      setSubmissionStatus('error');
      console.error('Error during form submission:', error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 py-9 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Create Query Here </h2>
      {submissionStatus === 'success' && (
        <div className="mb-4 text-green-600">Form submitted successfully!</div>
      )}
      {submissionStatus === 'error' && (
        <div className="mb-4 text-red-600">Form submission failed. Please try again.</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-600">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Subject:</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          >
            <option value="" disabled>Select Category</option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Technical">Technical</option>
            <option value="Marketing">Marketing</option>
            <option value="Finance">Finance</option>
            <option value="CustomerSupport">Customer Support</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Date:</label>
          <input
            type="date"
            name="date"
            placeholder='Enter the date of query'
            value={formData.date}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Attachments:</label>
          <input
            type="text"
            name="attachments"
            placeholder='Enter the link of the attachments'
            value={formData.attachments}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Action Status:</label>
          <select
            name="actionStatus"
            value={formData.actionStatus}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          >
            <option value="" disabled>Select Action Status</option>
            <option value="initiate">Initiate</option>
            <option value="pending">Pending</option>
            <option value="resolved">Resolved</option>
            <option value="inProgress">In Progress</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default QueryForm;
