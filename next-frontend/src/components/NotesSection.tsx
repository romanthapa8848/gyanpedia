export default function NotesSection() {
    const notes = [
      { title: "Mathematics Notes", link: "/notes/mathematics" },
      { title: "Science Notes", link: "/notes/science" },
      { title: "English Notes", link: "/notes/english" },
      { title: "Computer Science Notes", link: "/notes/computer-science" },
    ];
  
    return (
      <section id="notes" className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Notes</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Access comprehensive notes to help with your studies.
          </p>
  
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {notes.map((note, index) => (
              <a
                key={index}
                href={note.link}
                className="block bg-gray-100 dark:bg-gray-700 shadow-md rounded-lg p-4 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {note.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }
  