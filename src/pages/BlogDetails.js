//import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";//removed -with-html
import Layout from "../components/Layout";
import remarkGfm from 'remark-gfm';
import BlogLandingFile from "../blog/twelvenines-all-md.md";
//removed props param
function BlogDetails() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(BlogLandingFile)
    .then(response => { 
      if(response.ok) return response.text();
      else return Promise.reject("Didn't fetch text correctly");
    })
    .then(text => {
      setContent(text);
    })
    .catch((error) => console.error(error));
  }, [content]);

  return (
    <Layout>
      <div className="mi-blog-details mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <ReactMarkdown children={content} remarkPlugins={[remarkGfm]}></ReactMarkdown> 
        </div>
      </div>
    </Layout>
  );
}

export default BlogDetails;
