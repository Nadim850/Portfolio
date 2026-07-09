import React, { useEffect, useState } from 'react';

const TechUpdates = () => {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch from Django API
    fetch('http://127.0.0.1:8000/api/tech-updates/')
      .then((res) => res.json())
      .then((data) => {
        setUpdates(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching tech updates:", err);
        setLoading(false);
        // Fallback for demonstration if API isn't running
        setUpdates([
          { id: 1, title: 'Salesforce Summer \'26 Release', category: 'salesforce', date: '2026-06-15', description: 'New features in LWC and Flow.' },
          { id: 2, title: 'React 19 Hooks', category: 'react', date: '2026-05-20', description: 'Exploring the new use() hook for data fetching.' }
        ]);
      });
  }, []);

  return (
    <section id="updates" className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Technology Updates</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">Staying ahead of the curve with the latest in Salesforce, React, and Django ecosystem.</p>
        </div>

        {loading ? (
          <div className="flex justify-center"><div className="w-8 h-8 border-4 border-sfBlue border-t-transparent rounded-full animate-spin"></div></div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {updates.map((update) => (
              <div key={update.id} className="group relative p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sfBlue/50 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-sfBlue bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                    {update.category}
                  </span>
                  <span className="text-sm text-slate-400">{update.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-sfBlue transition-colors">{update.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3">{update.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TechUpdates;
