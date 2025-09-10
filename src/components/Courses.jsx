import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css'; // You can rename to CoursePage.css for better clarity

const courses = [
  {
    title: 'Manual Testing',
    description: 'Learn the fundamentals of manual software testing including test case writing, bug tracking, and QA processes.',
    image: 'https://cdn.azilen.com/wp-content/uploads/2023/07/Manual-testing.jpg'
  },
  {
    title: 'Automation Testing',
    description: 'Master automation tools like Selenium, TestNG, and write robust test scripts for web applications.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjDII01lzdsAItRGpyH1GqgijGisE872WD_Q&s'
  },
  {
    title: 'API Testing',
    description: 'Understand REST APIs and use tools like Postman and JMeter to perform effective API testing.',
    image: 'https://www.xenonstack.com/hs-fs/hubfs/xenonstack-api-testing-tools.png?width=1280&height=720&name=xenonstack-api-testing-tools.png'
  },
  {
    title: 'Performance Testing',
    description: 'Measure system performance using load and stress testing techniques with tools like JMeter.',
    image: 'https://images.squarespace-cdn.com/content/v1/5e51872712c0b73372f8fa1a/14b656b0-072d-436b-9746-712f87564b5a/Performance+Testing.png'
  },
  {
    title: 'Functional Testing',
    description: 'Explore functional testing techniques to ensure software meets specified requirements and behaves as expected.',
    image: 'https://media.licdn.com/dms/image/v2/D5612AQFDZKBRfJI4yA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1690921131524?e=2147483647&v=beta&t=q0GRMTYq2ftjHcuQl7jv-c38lCygUKvwM5PSY9S_w9g'
  },
  {
    title: 'Unit Testing',
    description: 'Learn how to write unit tests for individual components of your application using frameworks like JUnit or NUnit.',
    image: 'https://cdn.educba.com/academy/wp-content/uploads/2019/12/unit-testing-tools.jpg'
  }
];

const CoursePage = () => {
  return (
    <div className="container my-5" id="courses">
      <h2 className="text-center mb-4 course">Our Courses</h2>
      <div className="row">
        {courses.map((course, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card h-100 shadow rounded-4 overflow-hidden">
              <img
                src={course.image}
                className="card-img-top"
                alt={course.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
              </div>
              <div className="card-footer text-center bg-white border-0 pb-3">
                <button className="btn but px-4">Enroll Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursePage;

