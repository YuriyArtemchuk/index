import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { usePosts } from "../components/context/usePosts";
import "./blog.css";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const { posts, filterValue } = usePosts();
  console.log(filterValue);

  let filteredPosts = posts;
  if (filterValue) {
    filteredPosts = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(filterValue.toLowerCase()) ||
        post.fullDescription
          .toLowerCase()
          .includes(filterValue.toLowerCase()) ||
        post.description.toLowerCase().includes(filterValue.toLowerCase())
    );
  }

  console.log(filteredPosts);

  // Pagination
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostsPage = lastPostIndex - postsPerPage;
  const currentListPosts = filteredPosts.slice(firstPostsPage, lastPostIndex);
  const totalPosts = filteredPosts.length;

  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  const nextPage = () => {
    if (currentPage < Math.ceil(totalPosts / postsPerPage))
      setCurrentPage((prev) => prev + 1);
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  return (
    <>
      {/* Page Header Start */}
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-2 text-white mb-4 animated slideInDown">
            Blog
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link to="/">Heim</Link>
              </li>

              <li className="breadcrumb-item text-primary" aria-current="page">
                Blog
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}
      <div className="section search-result-wrap">
        <div className="container">
          <div className="row posts-entry">
            <div className="col-lg-8">
              {currentListPosts.map((post) => (
                <div className="blog-entry d-flex blog-entry-search-item">
                  <Link
                    key={post.id}
                    to={`/post/${post.id}`}
                    className="img-link me-4"
                  >
                    <img
                      src={post.image}
                      alt="img_1_sq"
                      className="img-fluid"
                    />
                  </Link>
                  <div>
                    <span className="date">{post.date}</span>
                    <h2>
                      <Link
                        key={post.id}
                        to={`/post/${post.id}`}
                        className="book-link"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p>{post.description}</p>
                    <p>
                      <Link
                        key={post.id}
                        to={{
                          pathname: `/post/${post.id}`,
                          state: { post: post },
                        }}
                        className="btn btn-sm btn-outline-primary"
                      >
                        Mehr lesen
                      </Link>
                    </p>
                  </div>
                </div>
              ))}

              <div className="row text-start pt-5 border-top">
                <div className="col-md-12">
                  <div className="pagination-wrapper">
                    <div className="pagination">
                      <button className="prev page-numbers" onClick={prevPage}>
                        &#8592;
                      </button>
                      <div className="custom-pagination">
                        {pages.map((page, index) => {
                          return (
                            <button
                              key={index}
                              className={`page-numbers ${
                                page === currentPage ? "current" : ""
                              }`}
                              onClick={() => setCurrentPage(page)}
                            >
                              {page}
                            </button>
                          );
                        })}
                      </div>
                      <button className="next page-numbers" onClick={nextPage}>
                        &#8594;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
