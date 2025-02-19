

const Contact = () => {
  

  return (
    <div id="Contact" className="flex min-h-[70vh] min-w-full items-center justify-center">
    <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
      <h1 className="text-center text-5x1 md:text 7x1">
        <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">Get in Touch</span>
      </h1>
      <p className="text-center text-1g font-semibold text-gray-500">
      Wanto to chat? send me a e-mail through this bottom and ill get back to you as soon as possible.

      </p>
      <a href="" className="text-nowrap rounded-1g border border-indigo-600 bg-black px-5 py-3 text-1g font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-x1 hover:shadow-indigo-600">Contact Me</a>
    </div>
    </div>

  )
}

export default Contact
