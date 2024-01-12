import React from 'react';

export function TableComponent({ data = {} }) {
  const {
    name,
    email,
    subject,
    category,
    date,
    attachments,
    actionStatus,
  } = data;

  return (
    <tr>
      <td className="whitespace-nowrap px-4 py-4">
        <div className="flex items-center">
          <div className="h-10 w-10 flex-shrink-0">
            {attachments && (
              <img
                className="h-10 w-10 rounded-full object-cover"
                src={attachments}
                alt={subject || 'Image not available'}
              />
            )}
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{name}</div>
            <div className="text-sm text-gray-700">{email}</div>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap px-12 py-4">
        <div className="text-sm text-gray-900 ">{subject}</div>
        <div className="text-sm text-gray-700">{category}</div>
      </td>
      <td className="whitespace-nowrap px-4 py-4">
        <span className={`inline-flex rounded-full ${actionStatus === 'Resolved' ? 'bg-green-100' : 'bg-red-100'} px-2 text-xs font-semibold leading-5 text-${actionStatus === 'Resolved' ? 'green' : 'red'}-800`}>
          {actionStatus}
        </span>
      </td>
      <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
        {date}
      </td>
    </tr>
  );
}
