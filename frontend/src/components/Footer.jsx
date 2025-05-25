import React from 'react'

const Footer = () => {
  return (
  <div className="max-w-screen-2xl w-full mx-auto px-2 sm:px-4 lg:px-[100px]">
  <footer className=" bg-white text-black py-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Services Section */}
      <div>
        {/* <h2 className="text-xl font-semibold mb-4">Services</h2> */}
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">Web Development</a></li>
          <li><a href="#" className="hover:underline">App Development</a></li>
          <li><a href="#" className="hover:underline">SEO Optimization</a></li>
          <li><a href="#" className="hover:underline">Consulting</a></li>
        </ul>
      </div>

      {/* Contact Us Section */}
      <div>
        {/* <h2 className="text-xl font-semibold mb-4">Contact Us</h2> */}
        <ul className="space-y-2">
          <li>Email: <a href="mailto:support@example.com" className="hover:underline">support@example.com</a></li>
          <li>Phone: <a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a></li>
          <li>Address: 123 Main St, YourCity</li>
          <li><a href="#" className="hover:underline">Contact Form</a></li>
        </ul>
      </div>

    </div>

    {/* Footer Bottom */}
    <div className="mt-10 text-center text-sm text-gray-400">
      &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
    </div>
  </footer>
</div>

  )
}

export default Footer