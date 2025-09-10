import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css'; // Optional: consider renaming to Home.css if it's specific

const Home = () => {
  useEffect(() => {
    const myCarousel = document.querySelector('#carouselExampleIndicators');
    if (myCarousel && window.bootstrap) {
      new window.bootstrap.Carousel(myCarousel);
    }
  }, []);

  return (
    <div>

      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        {/* Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" />
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <img src="https://classwork.com/wp-content/uploads/2021/01/Teachers-say-scaled.webp" className="d-block w-100" alt="Slide 1" />
            <div className="carousel-caption">
              <h5>"Master Software Testing with Sikha Mam"</h5>
              <p>
                Software testing is not just about finding bugs—it's about preventing failure, ensuring quality, and building trust.
                A tester is the guardian of user experience, the last line of defense before software meets the world.
              </p>
              <a href="#courses" className="btn bt mt-3">Explore Courses</a>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img src="https://media.istockphoto.com/id/1278975231/photo/professor-helping-student-during-computer-class.jpg?s=612x612&w=0&k=20&c=tWPEUG8Nodw3g7kC_SbB8Zl--N8AuUPaGFEVUNKYyfM=" className="d-block w-100" alt="Slide 2" />
            <div className="carousel-caption">
              <h5>"Master Software Testing with Sikha Mam"</h5>
              <p>
                Software testing is not just about finding bugs—it's about preventing failure, ensuring quality, and building trust.
                A tester is the guardian of user experience, the last line of defense before software meets the world.
              </p>
              <a href="#courses" className="btn bt mt-3">Explore Courses</a>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <img src="https://blog.arborbridge.com/hubfs/Student%20using%20laptop-1.png" className="d-block w-100" alt="Slide 3" />
            <div className="carousel-caption">
              <h5>"Master Software Testing with Sikha Mam"</h5>
              <p>
                Software testing is not just about finding bugs—it's about preventing failure, ensuring quality, and building trust.
                A tester is the guardian of user experience, the last line of defense before software meets the world.
              </p>
              <a href="#courses" className="btn bt mt-3">Explore Courses</a>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;


