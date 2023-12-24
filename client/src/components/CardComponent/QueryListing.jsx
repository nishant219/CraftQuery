import React, { useState, useEffect } from 'react';
import { CardComponent } from './CardComponent';

export function QueryListing() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch('https://craft-query-server.vercel.app/list/')
      .then(response => response.json())
      .then(data => setData(data.response_data.results || []))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    const filteredResults = data.filter(item =>
      item.properties?.Name?.title?.[0]?.text?.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.properties?.Email?.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
  }, [searchQuery, data]);

  return (
    <div className="mx-auto max-w-2xl p-4">
      <div className="flex items-center space-x-4 mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by name or email"
          className="flex-1 border rounded-md p-2"
        />
        <button
          type="button"
          onClick={() => setSearchQuery('')}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-300"
        >
          Clear
        </button>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4">
        {(searchQuery ? searchResults : data).map((item, index) => (
          <CardComponent
            key={index}
            data={{
              name: item.properties?.Name?.title?.[0]?.text?.content || '',
              email: item.properties?.Email?.email || '',
              subject: item.properties?.Subject?.rich_text?.[0]?.text?.content || '',
              category: item.properties?.Category?.multi_select?.[0]?.name || '',
              description: item.properties?.Description?.rich_text?.[0]?.text?.content || '',
              date: item.properties?.Date?.date?.start || '',
              attachments: item.properties?.Attachments?.files?.[0]?.external?.url || '',
              actionStatus: item.properties?.ActionStatus?.multi_select?.[0]?.name || '',
            }}
          />
        ))}
      </div>
    </div>
  );
}
