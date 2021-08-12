import React from "react";
import "../stylesheets/mainpage.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <p className="title">
          Welcome to book<span className="my">my</span>show
        </p>
        <img
          className="firstimg"
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362"
          alt="loading"
        />
        &nbsp; &nbsp; &nbsp;
        <img
          className="firstimg"
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1576732289"
          alt="loading"
        />
        &nbsp; &nbsp; &nbsp;
        <img
          className="firstimg"
          src="https://cdn.pastemagazine.com/www/system/images/photo_albums/best-movie-posters-2016/large/moonlight-ver2-xlg.jpg?1384968217"
          alt="loading"
        />
        &nbsp; &nbsp; &nbsp;
        <img
          className="firstimg"
          src="https://images.hindustantimes.com/rf/image_size_800x600/HT/p2/2015/07/21/Incoming/Pictures/ripoff-movie-posters_ffa489fd-2fb5-11e5-a8da-005056b4648e.jpg"
          alt="loading"
        />
        &nbsp; &nbsp; &nbsp;
        <img
          className="firstimg"
          src="https://www.indiewire.com/wp-content/uploads/2019/12/JokerPoster1200_5ca3c435318d42.29270548.jpg?w=800"
          alt="loading"
        />
      </>
    );
  }
}
export default Home;
