export default function OldQuestionsSection() {
    const oldQuestions = [
      { title: "Mathematics Past Papers", link: "/old-questions/mathematics" },
      { title: "Science Past Papers", link: "/old-questions/science" },
      { title: "English Past Papers", link: "/old-questions/english" },
      { title: "Computer Science Past Papers", link: "/old-questions/computer-science" },
    ];
  
    return (
      <section id="old-questions" className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Old Questions</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Prepare for exams by practicing past questions.
          </p>
  
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {oldQuestions.map((question, index) => (
              <a
                key={index}
                href={question.link}
                className="block bg-white dark:bg-gray-700 shadow-md rounded-lg p-4 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {question.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }
  