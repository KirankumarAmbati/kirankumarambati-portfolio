import { FaClock, FaUsers, FaCheck, FaTimes } from 'react-icons/fa';

export default function CoursePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Course Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Introduction to Web Development</h1>
          <p className="text-xl text-gray-600 mb-8">
            Master the fundamentals of web development and build your first website from scratch.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2">
              <FaClock className="text-blue-600" />
              <span>4 weeks</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUsers className="text-blue-600" />
              <span>Beginner Friendly</span>
            </div>
          </div>
          <a
            href="#enroll"
            className="inline-block px-8 py-4 bg-black text-white hover:bg-gray-800 transition"
          >
            Enroll
          </a>
        </div>
      </section>

      {/* Course Description */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Course Description</h2>
            <div className="prose prose-lg">
              <p className="mb-6">
                This comprehensive course is designed for absolute beginners who want to start their journey in web development. You&apos;ll learn the essential skills needed to build modern websites using HTML, CSS, and JavaScript.
              </p>
              <h3 className="text-xl font-bold mt-8 mb-4">What You&apos;ll Learn</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>HTML5 fundamentals and semantic markup</li>
                <li>CSS3 styling and responsive design</li>
                <li>JavaScript basics and DOM manipulation</li>
                <li>Version control with Git and GitHub</li>
                <li>Basic web hosting and deployment</li>
                <li>Best practices and industry standards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Course Schedule */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Course Schedule</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-bold mb-2">Week 1: HTML & CSS Basics</h3>
                <p className="text-gray-600">Learn the building blocks of web development</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-bold mb-2">Week 2: Advanced CSS</h3>
                <p className="text-gray-600">Dive into responsive design and modern practices</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-bold mb-2">Week 3: JavaScript Fundamentals</h3>
                <p className="text-gray-600">Master the programming language of the web</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-bold mb-2">Week 4: Advanced JavaScript & Final Project</h3>
                <p className="text-gray-600">Learn async programming, build and deploy your own website</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id='enroll' className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Course Pricing</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Standard</h3>
                <p className="text-4xl font-bold mb-4">Rs. 5,999/-</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-600" />
                    <span>Live classes & Q/A</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-600" />
                    <span>15+ Activities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-600" />
                    <span>15+ Quizzes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-600" />
                    <span>4 Small Projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-600" />
                    <span>1 Capstone Project</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaTimes className="text-red-600" />
                    <span>1:1 Mentoring</span>
                  </li>
                </ul>
                <a
                  href="https://wa.me/919100704096?text=Hi%2C%20interested%20in%20standard%20package%21"
                  className="block w-full text-center px-6 py-3 bg-black text-white hover:bg-gray-800 transition"
                >
                  Enroll
                </a>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Premium</h3>
                <p className="text-4xl font-bold mb-4">Rs. 7,999/-</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-600" />
                    <span>Live classes & Q/A</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-600" />
                    <span>15+ Activities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-600" />
                    <span>15+ Quizzes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-600" />
                    <span>4 Small Projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-600" />
                    <span>1 Capstone Project</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-600" />
                    <span>1:1 Mentoring</span>
                  </li>
                </ul>
                <a
                  href="https://wa.me/919100704096?text=Hi%2C%20interested%20in%20premium%20package%21"
                  className="block w-full text-center px-6 py-3 bg-black text-white hover:bg-gray-800 transition"
                >
                  Enroll
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Student Testimonials</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                </div>
                <p className="text-gray-600 mb-4">
                  "This course gave me the perfect foundation to start my web development journey. The instructor's teaching style is clear and engaging."
                </p>
                <p className="font-bold">- Sarah Johnson</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                </div>
                <p className="text-gray-600 mb-4">
                  "I was able to build my first website after completing this course. The hands-on projects were especially helpful."
                </p>
                <p className="font-bold">- Michael Chen</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
} 