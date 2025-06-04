import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import { useParams } from "react-router-dom";
import { useGetASingleBlogQuery } from "../redux/features/data/dataManagement.api";
import { CalendarDays, User, Folder } from "lucide-react";
import LoadingSpinner from "../utils/LoadingSpinner";
import { NoDataCard } from "../utils/NoDataCard";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import { Card } from "antd";

const ReadBlog = () => {
  const { blogId } = useParams();
  const { data, isLoading } = useGetASingleBlogQuery(blogId as string);

  const blog = data?.data;

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!blog) {
    return <NoDataCard title="Empty" description="Blog Not Found" />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl max-w-5xl"
      style={{ margin: "auto" }}
    >
      {/* Card Container for Blog */}
      <Card className="shadow-xl rounded-2xl p-4 md:p-8">
        {/* Thumbnail */}
        <motion.div
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center"
          style={{ marginBottom: "5%" }}
        >
          <img
            src={blog.thumbnail}
            alt={blog.title}
            className="w-fit h-full md:h-96 object-cover rounded-2xl"
          />
        </motion.div>

        <div className="p-6 md:p-10">
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-snug mb-4">
            {blog.title}
          </h1>
          {/* Meta Info */}
          <div className="flex flex-col sm:flex-row flex-wrap text-sm text-gray-500 gap-x-6 gap-y-2 mb-6">
            <div className="flex items-center gap-1">
              <User size={16} /> {blog.author}
            </div>
            <div className="flex items-center gap-1">
              <CalendarDays size={16} />{" "}
              {dayjs(blog.createdAt).format("MMM D, YYYY")}
            </div>
            <div className="flex items-center gap-1">
              <Folder size={16} /> {blog.category}
            </div>
          </div>
          {/* Short Description */}
          <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
            {blog.shortDescription}
          </p>
          {/* Markdown Content */}
          <article className="prose lg:prose-xl max-w-none prose-headings:text-gray-800 prose-p:text-gray-700 prose-a:text-blue-600 prose-code:bg-gray-100 prose-code:rounded prose-code:px-2 prose-code:py-1 prose-code:text-sm prose-pre:bg-gray-800 prose-pre:text-white prose-pre:rounded-xl">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw, rehypeHighlight]}
            >
              {blog.content}
            </ReactMarkdown>
          </article>
          <article className="prose lg:prose-xl max-w-none prose-headings:text-gray-800 prose-p:text-gray-700 prose-a:text-blue-600 prose-code:bg-gray-100 prose-code:rounded prose-code:px-2 prose-code:py-1 prose-code:text-sm prose-pre:bg-gray-800 prose-pre:text-white prose-pre:rounded-xl">
            <ReactMarkdown
              children={blog.content}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw, rehypeHighlight]}
            />
          </article>
        </div>
      </Card>
    </motion.div>
  );
};

export default ReadBlog;
