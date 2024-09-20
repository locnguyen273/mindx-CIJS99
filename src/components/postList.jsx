/* eslint-disable react/prop-types */

const PostList = ({ children }) => {
  return (
    <>
      <div className="list-group pb-5">{children}</div>
    </>
  );
};

export default PostList;
