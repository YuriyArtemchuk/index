import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { usePosts } from "../components/context/usePosts";
import sanitizeHtml from "sanitize-html";
import "./singleBlog.css";

const SingleBlog = () => {
  const { posts } = usePosts();
  const { pageID } = useParams();

  const currentPost = posts.find((item) => item.id === parseInt(pageID));

  const cleanHtml = sanitizeHtml(currentPost.fullDescription, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["style"]), // Разрешенные теги
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes, // Разрешенные атрибуты по умолчанию
      style: ["color", "font-size", "text-align"], // Разрешенные стили
    },
  });
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row blog-entries element-animate">
            <div className="col-md-12 col-lg-8 main-content">
              <div className="post-content-body ">
                <div className="row my-4">
                  <div className="col-md-12 mb-4 row2">
                    <p className="text-post">
                      <img
                        src={currentPost.image}
                        alt="current"
                        className="img-fluid rounded d-inline me-3"
                      />
                      {/* <p className="text-post">{currentPost.fullDescription}</p> */}

                      <p
                        className="text-post"
                        dangerouslySetInnerHTML={{
                          __html: cleanHtml,
                        }}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlog;
