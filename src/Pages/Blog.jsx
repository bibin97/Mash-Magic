import React from "react";
import AnimatedSection from "../Components/Animatedsection";

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
    <main className="min-h-screen py-14 px-6 font-sans ">
      {/* Heading */}
      <AnimatedSection className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-5xl font-extrabold text-teal-900 mb-4">Blogs</h1>
        <p className="text-lg text-gray-700">
          Insights and inspiration for parents, students, and educators.
        </p>
      </AnimatedSection>

      {/* Blog Flip Cards */}
      <AnimatedSection className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post, idx) => (
          <div
            key={idx}
            className="group perspective w-full h-[420px] cursor-pointer"
          >
            {/* Flip Wrapper */}
            <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute inset-0 bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col backface-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <h2 className="text-lg md:text-xl font-bold text-teal-900 mb-3 leading-snug">
                    {post.title}
                  </h2>
                  <div className="mt-auto flex items-center justify-between text-sm text-gray-500">
                    <span>By {post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 bg-white rounded-2xl shadow-lg p-5 rotate-y-180 backface-hidden flex flex-col justify-between">
                <p className="text-gray-700 text-[1.05rem] leading-relaxed mb-5 flex-grow">
                  {post.summary}
                </p>
                <a
                  href={post.link}
                  className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-full font-semibold text-center shadow hover:scale-105 transition-transform duration-300"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </AnimatedSection>
    </main>
  );
}