export default function SyllabusSection() {
    const syllabi = [
      { title: "Mathematics", link: "/syllabus/mathematics" },
      { title: "Science", link: "/syllabus/science" },
      { title: "English", link: "/syllabus/english" },
      { title: "Computer Science", link: "/syllabus/computer-science" },
    ];
  
    return (
      <section id="syllabus" className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Syllabus</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Browse through the latest syllabus for different subjects.
          </p>
  
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {syllabi.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="block bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }
  