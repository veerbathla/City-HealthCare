import BlogHero from "../components/Blog/BlogHero";
import FeaturedBlog from "../components/Blog/FeaturedBlog";
import BlogGrid from "../components/Blog/BlogGrid";
import BlogCategories from "../components/Blog/BlogCategories";
import Newsletter from "../components/Blog/Newsletter";
import BlogCTA from "../components/Blog/BlogCTA";
import BlogFAQ from "../components/Blog/BlogFAQ";

const BlogPage = () => {
  return (
    <>
      <BlogHero />
      <FeaturedBlog />
      <BlogGrid />
      <BlogCategories />
      <Newsletter />
      <BlogCTA />
      <BlogFAQ />
    </>
  );
};

export default BlogPage;