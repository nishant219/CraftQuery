import React from 'react';

export function FutureScope() {
  const futureScopes = [
    {
      title: 'User Authentication',
      description: 'Implement a robust user authentication system to ensure secure access to your platform.',
    },
    {
      title: 'Admin Dashboard and Security',
      description: 'Build an intuitive admin dashboard with advanced security features for efficient management.',
    },
    {
      title: 'Automated Reporting',
      description: 'Enable automated reporting functionality to streamline data analysis and decision-making processes.',
    },
    
  ];

  return (
    <section className="px-2">
      <div className="mx-auto max-w-7xl py-10">
        <div>
          <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold text-black text-center">Future Scope</h1>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {futureScopes.map((scope, index) => (
              <div key={index} className="rounded-md border border-black/30 p-6">
                <dt className="text-lg font-semibold leading-6 text-gray-900">
                  {scope.title}
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {scope.description}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
