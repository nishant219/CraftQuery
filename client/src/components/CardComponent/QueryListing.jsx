import React, { useState, useEffect } from 'react';
import { CardComponent } from './CardComponent';

export function QueryListing() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/list/')
      .then(response => {
        console.log("response:", response);
        return response.json(); // Add the return statement here
      })
      .then(data => {
        console.log("data:", data);
        setData(data.response_data.results || []); // Ensure data.response_data.results is an array
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  

  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      {data.map((item, index) => (
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
  );
}
