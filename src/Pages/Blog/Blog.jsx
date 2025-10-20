import React from "react";

// Sample blog posts
const BLOG_POSTS = [
  {
    title: "Unlocking Every Child's Unique Learning Path",
    author: "Priya Sharma",
    date: "Oct 20, 2025",
    summary:
      "Discover how one-to-one mentorship and modern pedagogy can transform student outcomes by adapting to individual strengths.",
    image:
      "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
    link: "#",
  },
  {
    title: "The Power of Parental Involvement",
    author: "Rahul Mehta",
    date: "Oct 18, 2025",
    summary:
      "Weekly updates and live dashboards empower parents to support their child's academic journey with confidence.",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    link: "#",
  },
  {
    title: "Why Traditional Tuition Fails Most Students",
    author: "Team MashMagic",
    date: "Oct 15, 2025",
    summary:
      "Explore why personalized, mastery-based methods outperform the one-size-fits-all tuition approach.",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80",
    link: "#",
  },
];

export default function Blog() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#e0f7fa] to-[#fff] py-14 px-6 font-sans">
      {/* Blog Header */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-5xl font-extrabold text-teal-900 mb-4">MashMagic Blog</h1>
        <p className="text-lg text-gray-700">
          Insights and inspiration for parents, students, and educators.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {BLOG_POSTS.map((post, idx) => (
          <a
            href={post.link}
            key={idx}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <img
              src={post.image}
              alt={post.title}
              className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-xl font-bold text-teal-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                {post.title}
              </h2>
              <p className="text-gray-700 mb-3">{post.summary}</p>
              <div className="mt-auto pt-3 flex items-center justify-between text-sm text-gray-500">
                <span>By {post.author}</span>
                <span>{post.date}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
