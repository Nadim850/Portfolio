import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar } from 'lucide-react';
import { API_URL } from '../config';

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    fetch(`${API_URL}/api/blogs/${slug}/`)
      .then((res) => {
        if (!res.ok) throw new Error('Blog not found');
        return res.json();
      })
      .then((data) => {
        setBlog(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-sfBlue border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Article Not Found</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">The article you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="text-sfBlue font-medium hover:underline inline-flex items-center gap-2">
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <article className="py-20 px-6 max-w-3xl mx-auto min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/" className="text-sfBlue font-medium hover:underline inline-flex items-center gap-2 mb-10">
          <ArrowLeft size={18} /> Back to Home
        </Link>
        
        <header className="mb-12 border-b border-slate-200 dark:border-slate-800 pb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
            {blog.title}
          </h1>
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
            <Calendar size={16} />
            <time dateTime={blog.publish_date}>
              {new Date(blog.publish_date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert prose-slate max-w-none prose-headings:font-bold prose-a:text-sfBlue hover:prose-a:text-blue-600 whitespace-pre-line">
          {blog.content}
        </div>
      </motion.div>
    </article>
  );
};

export default BlogDetail;
