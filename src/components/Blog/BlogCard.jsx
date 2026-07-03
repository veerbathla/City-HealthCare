import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";

const BlogCard = ({ blog }) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <span className="inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
          {blog.category}
        </span>

        <h3 className="mt-4 line-clamp-2 text-2xl font-bold leading-snug text-gray-900 transition-colors group-hover:text-sky-700">
          {blog.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-gray-600">
          {blog.excerpt}
        </p>

        <div className="mt-6 flex items-center justify-between border-t pt-4 text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <CalendarDays size={16} />
              <span>{blog.date}</span>
            </div>

            <div className="flex items-center gap-1">
              <Clock3 size={16} />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>

       
      </div>
    </article>
  );
};

export default BlogCard;