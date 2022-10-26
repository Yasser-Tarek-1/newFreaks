import React from "react";

import blog3 from "../../assets/blog/blog3.svg";

const BlogThree = () => {
  return (
    <div className="w-full sm:px-8">
      <h3 className="text-white font-[stolzi-light] font-bold text-2xl md:text-3xl max-w-[400px] mx-auto text-center">
        What to wear to a freaks of nature event
      </h3>
      <div className="w-full flex items-center justify-center pt-10 flex-col lg:flex-row">
        <div className="lg:max-w-[500px] 2xl:max-w-[750px] mb-6 lg:mb-0 lg:mr-[50px] 2xl:mr-[200px]">
          <p className="text-white font-[stolzi-light] text-sm sm:text-xl mb-8">
            Freaks of Nature is a chance to express your inner freak and dress
            up. Be colourful, bold and be yourself. A rave is not a nightclub,
            so there is no strict dress code, but there are still some
            considerations to keep in mind.
          </p>
          <p className="text-white font-[stolzi-light] text-sm sm:text-xl">
            The rave lasts all night, and there is even a second day, so you
            want clothes that you feel good in and are comfortable. If you’re
            dancing, the last thing you want is to feel cluttered, and in a
            confined space it is likely to get hot. Fashionable t-shirts and
            tank tops, joggers are a great start, and you can customise your
            look with stylistic touches like:
          </p>
        </div>
        <div className="w-full">
          <img src={blog3} alt="blog3" className="w-full object-cover" />
        </div>
      </div>
      <div className="py-8 flex items-center flex-col md:flex-row">
        <div className="w-full flex md:flex-col justify-between  flex-wrap mb-4">
          <p className="flex items-center text-white font-[stolzi-light] text-sm sm:text-xl my-3 mx-1">
            <span className="w-2 h-2 bg-white block rounded-full mr-2"></span>face paint, 
          </p>
          <p className="flex items-center text-white font-[stolzi-light] text-sm sm:text-xl my-3 mx-1">
            <span className="w-2 h-2 bg-white block rounded-full mr-2"></span>bracelets,
          </p>
          <p className="flex items-center text-white font-[stolzi-light] text-sm sm:text-xl my-3 mx-1">
            <span className="w-2 h-2 bg-white block rounded-full mr-2"></span>glasses,
          </p>
          <p className="flex items-center text-white font-[stolzi-light] text-sm sm:text-xl my-3 mx-1">
            <span className="w-2 h-2 bg-white block rounded-full mr-2"></span>necklaces,
          </p>
          <p className="flex items-center text-white font-[stolzi-light] text-sm sm:text-xl my-3 mx-1">
            <span className="w-2 h-2 bg-white block rounded-full mr-2"></span>bandanas,
          </p>
          <p className="flex items-center text-white font-[stolzi-light] text-sm sm:text-xl my-3 mx-1">
            <span className="w-2 h-2 bg-white block rounded-full mr-2"></span>LED gloves, 
          </p>
          <p className="flex items-center text-white font-[stolzi-light] text-sm sm:text-xl my-3 mx-1">
            <span className="w-2 h-2 bg-white block rounded-full mr-2"></span>hoops, 
          </p>
          <p className="flex items-center text-white font-[stolzi-light] text-sm sm:text-xl my-3 mx-1">
            <span className="w-2 h-2 bg-white block rounded-full mr-2"></span>masks,
          </p>
          <p className="flex items-center text-white font-[stolzi-light] text-sm sm:text-xl my-3 mx-1">
            <span className="w-2 h-2 bg-white block rounded-full mr-2"></span>glow sticks,
          </p>
          <p className="flex items-center text-white font-[stolzi-light] text-sm sm:text-xl my-3 mx-1">
            <span className="w-2 h-2 bg-white block rounded-full mr-2"></span>and glitter.
          </p>
        </div>
        <div>
          <p className="text-white font-[stolzi-light] text-sm sm:text-xl mb-6">
            Local designer and race-wear suppliers Gleamsby [and others?] will
            be on site at Freaks of Nature to help complete your look and get
            you ready to freak out over the weekend.
          </p>
          <p className="text-white font-[stolzi-light] text-sm sm:text-xl">
            Freaks of Nature returns on 3-4 November with its third edition,
            Freaks of ARAVEIA. Get your tickets from www.freaksofnature.me and
            get ready for the party of a lifetime!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogThree;


