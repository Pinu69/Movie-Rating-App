import React, { useState } from 'react';
import Slider from 'react-slick';
import StarRating from './components/StarRating';
import './App.css';
const App = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  const movies = [
    {
      title: 'Salaar: CeaseFire Part 1',
      imageUrl: '/images/salaar.png',
      description: 'A high-octane action thriller exploring themes of revenge and redemption.',
      id: 1,
    },
    {
      title: 'KGF Chapter 1',
      imageUrl: '/images/kgf1.png',
      description: 'The epic tale of Rocky, a man with a dream to conquer the world.',
      id: 2,
    },
    {
      title: 'KGF Chapter 2',
      imageUrl: '/images/kgf2.png',
      description: 'Rocky returns, seeking vengeance and building his empire.',
      id: 3,
    },
    {
      title: 'Golam',
      imageUrl: '/images/golam.png',
      description: 'A gripping story of betrayal, loyalty, and personal sacrifice.',
      id: 4,
    },
    {
      title: 'Karma: Destiny Strikes Back',
      imageUrl: '/images/karma.png',
      description: 'A tale of destiny, justice, and the choices we make.',
      id: 5,
    },
  ];
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="app-container">
      <h1 className="app-title">Movie Rating App</h1>

      <Slider {...sliderSettings}>
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <div className="movie-image-container">
              <img className="movie-image" src={movie.imageUrl} alt={movie.title} />
            </div>

            <div className="movie-content-container">
              <div className="movie-header">
              <h2 className="movie-title">{movie.title}</h2>
              <StarRating rating={rating} onRatingChange={handleRatingChange} />
              </div>
              <p className="movie-description">{movie.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default App;
