import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css'; // You can create a separate Gallery.css for clarity

const images = [
  { id: 1, category: 'Online', url: 'https://media.istockphoto.com/id/1434116614/photo/teamwork-diversity-and-sales-manager-planning-branding-ideas-with-a-creative-designer-on-a.jpg?s=612x612&w=0&k=20&c=0qDHz0EDKEgxqcRP7V-YWaGv9nrjKDXG5lz8svrlbcQ=' },
  { id: 2, category: 'Offline', url: 'https://media.istockphoto.com/id/669775712/photo/teacher-giving-an-it-class-at-school-to-a-group-of-students.jpg?s=612x612&w=0&k=20&c=kFR__hBLIM-0PW6k4lSqAQJGo-ukLu-bbsOQk_V6edA=' },
  { id: 3, category: 'Workshop', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStaYWNXLHK7k5PX-QRU3vDmWchHX0c-0aORQ&s' },
  { id: 4, category: 'Online', url: 'https://media.istockphoto.com/id/1355302969/photo/happy-african-american-employee-talking-on-video-conference-call.jpg?s=612x612&w=0&k=20&c=xgdW23NNI85wR64YjnX6Vm2yz8MrKETcOKXBsHQG3ZI=' },
  { id: 5, category: 'Offline', url: 'https://media.istockphoto.com/id/473738106/photo/rear-view-of-group-of-people-in-a-computer-seminar.jpg?s=612x612&w=0&k=20&c=1vB9PlD-w62HAVvU6Stdl1OJG1rnbNpxpkK4sgO07jE=' },
  { id: 6, category: 'Workshop', url: 'https://thumbs.dreamstime.com/b/workshop-university-rear-view-students-sitting-listening-lecture-hall-doing-practical-tasks-their-laptops-copy-56376392.jpg' },
];

const categories = ['All', 'Online', 'Offline', 'Workshop'];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages =
    selectedCategory === 'All'
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="container my-5" id="gallery">
      <h2 className="text-center mb-4 gallery">Gallery</h2>

      <div className="text-center mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`btn but mx-1 ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="row">
        {filteredImages.map((img) => (
          <div className="col-md-4 mb-4" key={img.id}>
            <div className="card gallery-card shadow-sm">
              <img
                src={img.url}
                className="card-img-top"
                alt={img.category}
                style={{ height: '250px', objectFit: 'cover', borderRadius: '12px' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
