import React from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPage] = React.useState([1]);
  const [infinity, setInfinity] = React.useState(true);

  React.useEffect(() => {
    let wait = false;
    function infinityScroll() {
      if (infinity) {
        const scroll = window.scrollY;
        const heigth = document.body.offsetHeight - window.innerHeight;
        if (scroll > heigth * 0.75 && !wait) {
          setPage((pages) => [...pages, pages.length + 1]);
          wait = true;

          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }
    window.addEventListener("scroll", infinityScroll);
    window.addEventListener("wheel", infinityScroll);
    return () => {
      window.removeEventListener("scroll", infinityScroll);
      window.removeEventListener("wheel", infinityScroll);
    };
  }, [infinity]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          page={page}
          key={page}
          user={user}
          setInfinity={setInfinity}
          setModalPhoto={setModalPhoto}
        />
      ))}
    </div>
  );
};

export default Feed;
