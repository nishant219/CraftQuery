import React from 'react';

export function CardComponent({ data = {
  "name": "tom Cruise",
  "email": "tom.doe@example.com",
  "subject": "Testing Notion Integration",
  "category": "Category1",
  "description": "This is a test description for the Notion integration.",
  "date": "2023-01-01",
  "attachments": "https://picsum.photos/200/300",
  "actionStatus": "Resolved"
} }) {
  const {
    name,
    email,
    subject,
    category,
    description,
    date,
    attachments,
    actionStatus,
  } = data;

  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="max-w-md w-full bg-white shadow-md rounded-md overflow-hidden">
        <img
          src={attachments}
          alt={subject}
          className="h-48 w-full object-cover"
        />
        <div className="p-4 text-center">
          <h1 className="text-2xl font-semibold mb-2">
            {subject}
          </h1>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="mb-4">
            <span className="inline-block bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-900">
              {category}
            </span>
          </div>

          <div className="mb-2">
            <span className="block text-xs font-medium text-gray-900">Name:</span>
            <span className="block text-xs text-gray-600">{name}</span>
          </div>

          <div className="mb-2">
            <span className="block text-xs font-medium text-gray-900">Email:</span>
            <span className="block text-xs text-gray-600">{email}</span>
          </div>

          <div className="mb-2">
            <span className="block text-xs font-medium text-gray-900">Date:</span>
            <span className="block text-xs text-gray-600">{date}</span>
          </div>

          <div className="mb-2">
            <span className="block text-xs font-medium text-gray-900">Action Status:</span>
            <span className="block text-xs text-gray-600">{actionStatus}</span>
          </div>
          
        </div>
      </div>
    </div>
  );
}
