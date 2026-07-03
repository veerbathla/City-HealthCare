import BlogCard from "./BlogCard";

const blogs = [
  {
    id: 1,
    image: "/images/blog/blog-1.jpg",
    category: "Cardiology",
    title: "10 Early Warning Signs of Heart Disease",
    excerpt:
      "Learn the common symptoms of heart disease and why early diagnosis can save lives.",
    date: "July 3, 2026",
    readTime: "8 min read",
  },
  {
    id: 2,
    image: "/images/blog/blog-2.jpg",
    category: "Neurology",
    title: "Migraine vs Headache: What's the Difference?",
    excerpt:
      "Understand the key differences between migraines and common headaches.",
    date: "June 28, 2026",
    readTime: "6 min read",
  },
  {
    id: 3,
    image: "/images/blog/blog-3.jpg",
    category: "Orthopedics",
    title: "Why Knee Pain Becomes Common After 40",
    excerpt:
      "Discover the causes of knee pain and the best treatment options available.",
    date: "June 22, 2026",
    readTime: "7 min read",
  },
  {
    id: 4,
    image: "/images/blog/blog-4.jpg",
    category: "Diabetes",
    title: "7 Foods Every Diabetic Should Eat Daily",
    excerpt:
      "Healthy food choices that help manage blood sugar effectively.",
    date: "June 18, 2026",
    readTime: "5 min read",
  },
  {
    id: 5,
    image: "/images/blog/blog-5.jpg",
    category: "Pediatrics",
    title: "When Should You Visit a Pediatrician?",
    excerpt:
      "Know the warning signs and routine checkups every child needs.",
    date: "June 14, 2026",
    readTime: "4 min read",
  },
  {
    id: 6,
    image: "/images/blog/blog-6.jpg",
    category: "Women's Health",
    title: "PCOS: Symptoms, Causes & Treatment",
    excerpt:
      "Everything you need to know about Polycystic Ovary Syndrome.",
    date: "June 10, 2026",
    readTime: "7 min read",
  },
];

const BlogGrid = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            Latest Articles
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Explore Our Health Library
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Stay informed with expert-written healthcare articles covering
            diseases, treatments, wellness, and preventive care.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;