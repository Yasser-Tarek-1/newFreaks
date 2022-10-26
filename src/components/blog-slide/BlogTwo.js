import React from "react";

import blog2 from "../../assets/blog/blog2.svg";

const BlogTwo = () => {
  return (
    <div className="w-full sm:px-8">
      <h3 className="text-white font-[stolzi-light] font-bold text-2xl md:text-3xl max-w-[350px] mx-auto text-center">
        The rise of boutique festivals
      </h3>
      <div className="w-full flex items-center justify-center pt-10 flex-col lg:flex-row">
        <div className="lg:max-w-[500px] 2xl:max-w-[750px] mb-6 lg:mb-0 lg:mr-[50px] 2xl:mr-[200px]">
          <p className="text-white font-[stolzi-light] text-sm sm:text-xl mb-1">
            Now preparing for its third edition, Freaks of ARAVEIA, on 3-4
            November, Freaks of Nature, created by the Disrupt Group, has left
            audiences in Riyadh enthralled at the array of local talent and
            international artists headlining the boutique festival.
          </p>
          <p className="text-white font-[stolzi-light] text-sm sm:text-xl">
            The popularity of Freaks of Nature is indicative of a seismic shift
            in the events which has seen smaller, more focused festivals rapidly
            grow in popularity. In the UK, 7 out of 10 people surveyed by events
            and ticketing agent Skiddle said they prefer smaller festivals to
            larger ones, citing that it is easier to see the artists you really
            want to see. Others commented that the cost and safety also make
            boutique festivals more comfortable to attend.
          </p>
        </div>
        <div className="w-full">
          <img src={blog2} alt="blog2" className="w-full object-cover" />
        </div>
      </div>
      <div className="py-8">
        <p className="text-white font-[stolzi-light] text-sm sm:text-xl mb-4">
          This trend is echoed around the world, and as the buzz around smaller
          festivals grows, so does the selection of arts, music and
          entertainment on offer.
        </p>
        <p className="text-white font-[stolzi-light] text-sm sm:text-xl mb-4">
          In May 2022, the second edition of Freaks of Nature boasted the
          world’s best four-deck DJ, James Hype from the UK, who – at the time –
          was on the cusp of international fame with his hit track ‘Ferrari’
          gaining major airplay just a few weeks later. The two-night event was
          also headlined by WeDamnz, the mashup king from The Netherlands. And
          both were joined by 20 local talents looking to bring their own
          flavour to the event and learn benefit from the experience.
        </p>
        <p className="text-white font-[stolzi-light] text-sm sm:text-xl mb-4">
          Playing to a sell-out crowd of 300 revellers on its debut in December
          2021, Freaks of Nature attracted well over 1000 when it returned just
          five months later. Now, as plans for a three-stage, two-night
          extravaganza near completion, there will be 10 international acts and
          more than 25 talents on show – with a star search winner also getting
          a 60-minute set on stage at the festival.
        </p>
        <p className="text-white font-[stolzi-light] text-sm sm:text-xl mb-4">
          It is this level of freedom that has allowed a boutique festival to
          stand out and become an undoubted success story of the music industry.
          As larger festivals became a commodified product, the smaller
          festivals reach out to a community and make the experience more
          personal. Freaks of Nature provided exhibition space for local artists
          to create, designers to display their work and local food suppliers to
          cater the event, giving back and forging a connection between the
          festival goers and the organisers, creating a unique experience which
          has led to greater enjoyment and a growing appreciation of what is
          being built here.
        </p>
        <p className="text-white font-[stolzi-light] text-sm sm:text-xl mb-4">
          The line-up of international artists performing at Freaks of Nature
          continues to evolve to remain fresh and expose a growing audience to
          never-before-seen styles and subgenres, while the local artists gain
          experience and have started to make a name for themselves in the local
          music scene.
        </p>
        <p className="text-white font-[stolzi-light] text-sm sm:text-xl mb-4">
          As the entertainment sector in Saudi Arabia develops, Freaks of Nature
          will become known as one of the pioneers of a brand new experience and
          the innovator of an entire industry.
        </p>
        <p className="text-white font-[stolzi-light] text-sm sm:text-xl mb-4">
          Tickets for Freaks of ARAVEIA are available from www.freaksofnature.me
          and you can receive a 10% discount by using the promo code FREAK10 at
          checkout.
        </p>
      </div>
    </div>
  );
};

export default BlogTwo;
