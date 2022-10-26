import React from "react";

import blog5 from "../../assets/blog/blog5.svg";

const BlogFive = () => {
  return (
    <div className="w-full sm:px-8">
      <h3 className="text-white font-[stolzi-light] font-bold text-2xl md:text-3xl max-w-[470px] mx-auto">
        Turning up the volume on the Saudi electronic music scene
      </h3>
      <div className="w-full flex items-center justify-center pt-10 flex-col lg:flex-row">
        <div className="lg:max-w-[500px] 2xl:max-w-[750px] mb-6 lg:mb-0 lg:mr-[50px] 2xl:mr-[200px]">
          <p className="text-white font-[stolzi-light] text-sm sm:text-xl mb-8">
            Saudi Arabia is on a journey. As part of Saudi Vision 2030, sectors
            of the entertainment industry have become a priority – and that
            includes music. While underground parties have been around for a
            long time, a year ago the very first music strategy was unveiled by
            the Music Commission with Riyadh at its centre where the world’s
            largest flagship recording studio has been created.
          </p>
          <p className="text-white font-[stolzi-light] text-sm sm:text-xl">
            EDM has been following a similar path but recently the volume has
            been turned up and the Saudi electronic music scene cannot be
            ignored.
          </p>
          <p className="text-white font-[stolzi-light] text-sm sm:text-xl">
            The first EDM festival took place in 2019 – a three-day techno event
            organised by MDL Beast on the outskirts of Riyadh that featured
            artists including Steve Aoki, DJ Snake, Tiesto and Swedish House
            Mafia, among others.
          </p>
        </div>
        <div className="w-full">
          <img src={blog5} alt="blog5" className="w-full object-cover" />
        </div>
      </div>
      <div className="py-8">
        <p className="text-white font-[stolzi-light] text-sm sm:text-xl mb-6">
          Fast forward two years and the XP Conference organised by MDL Beast
          was once again opening doors for new concepts. The first Freaks of
          Nature, created and organised by the Disrupt Group, played to a
          capacity crowd and showed the appetite for new music was most
          certainly there and ready to get freaky. Freaks of Nature returned in
          May 2022 with a two-day event featuring by top international four-deck
          DJ, James Hype from the UK, and Dutch mash-up king WeDamnz, alongside
          a huge roster of DJs and performers from across the region.
        </p>
        <p className="text-white font-[stolzi-light] text-sm sm:text-xl mb-6">
          It is clear that the passion and the talent is there for Saudi Arabia
          to take the next step, and with the support of the Music Commission
          and innovators like MDL Beast and Disrupt, there is a huge opportunity
          to shape the future of music, grow the community and be part of a
          movement from the beginning.
        </p>
        <p className="text-white font-[stolzi-light] text-sm sm:text-xl mb-6">
          Freaks of Nature returns for its third edition, Freaks of ARAVEIA, on
          3-4 November in Riyadh. The event will feature three stages, 10
          international headliners and over 25 local DJs and performers,
          alongside designers, artists and food trucks. Get your tickets from
          www.freaksofnature.me and get ready for the party of a lifetime!
        </p>
      </div>
    </div>
  );
};

export default BlogFive;
