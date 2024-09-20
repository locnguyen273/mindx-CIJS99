/* eslint-disable react/jsx-key */
import PostList from "./components/postList";
import PostProvider, { PostContext } from "./contexts/postProvider";
import UserSelectDropdown from "./components/UserSelectDropdown";
import PostListItem from "./components/postListItem";
import Spinner from "./components/spinner";

function App() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 d-flex justify-content-center">
          <img
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            alt="React Logo"
            style={{ width: "200px" }}
          />
        </div>
        <div className="col-12">
          <PostProvider>
            <PostContext.Consumer>
              {({
                isLoading,
                posts,
                getPostsForUserWithId,
                // deletePostWithId,
                handleDeleteById,
              }) => (
                <>
                  <UserSelectDropdown
                    handleChange={(userId) => getPostsForUserWithId(userId)}
                  />
                  {isLoading ? (
                    <Spinner />
                  ) : (
                    <PostList>
                      {posts.map((post) => (
                        <PostListItem
                          {...post}
                          handleDeleteClicked={handleDeleteById}
                        />
                      ))}
                    </PostList>
                  )}
                </>
              )}
            </PostContext.Consumer>
          </PostProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
