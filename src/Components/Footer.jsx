function Footer(){
  return (
    <footer className="bg-gray-900 text-white p-6 fixed bottom-0 w-full">
      <div className="mx-auto flex justify-between items-center px-12">
        <div className="contacts">
          <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
          <p className="text-gray-500"><a href= "https://in.linkedin.com/in/chandramaulig" target="_blank" rel="noreferrer">LinkedIn</a></p>
          <p className="text-gray-500"><a href= "https://twitter.com/NervesOfSilicon" target="_blank" rel="noreferrer">Twitter</a></p>
          <p className="text-gray-500"><a href= "mailto:chandramauliguptach@gmail.com" target="_blank" rel="noreferrer">Email</a></p>
        </div>
        <div className="note">
          <p>You can collect all items from BHS Room nearby hostel exit</p>
      </div>
      </div>
      
  </footer>
  );
}

export default Footer;
