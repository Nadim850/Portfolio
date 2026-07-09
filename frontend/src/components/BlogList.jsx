import React, { useEffect, useState } from 'react';
import { API_URL } from '../config';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/blogs/`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
        // Fallback data
        setBlogs([
          { id: 1, title: 'Mastering LWC Wire Adapters', slug: 'mastering-lwc-wire', publish_date: '2026-07-01T10:00:00Z', content: 'An in-depth look at @wire in Lightning Web Components...' }
        ]);
      });
  }, []);

  return (
    <section id="blog" className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 tracking-tight text-center">Latest Articles</h2>
        
        {loading ? (
           <div className="flex justify-center"><div className="w-8 h-8 border-4 border-sfBlue border-t-transparent rounded-full animate-spin"></div></div>
        ) : (
          <div className="space-y-8">
            {blogs.map((blog) => (
              <article key={blog.id} className="p-8 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-shadow">
                <p className="text-sm text-slate-500 mb-3">{new Date(blog.publish_date).toLocaleDateString()}</p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 hover:text-sfBlue transition-colors cursor-pointer">
                  {blog.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">
                  {blog.content}
                </p>
                <a href={`#blog/${blog.slug}`} className="text-sfBlue font-medium hover:underline inline-flex items-center gap-1">
                  Read Article <span aria-hidden="true">&rarr;</span>
                </a>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogList;
