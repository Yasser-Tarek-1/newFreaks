import React from "react";

import blog1 from "../../assets/blog/blog1.svg";

const BlogOne = () => {
  return (
    <div className="w-full sm:px-8">
      <h3 className="text-white font-[stolzi-light] font-bold text-2xl md:text-3xl max-w-[350px] mx-auto">
        Enjoy in moderation – a guide to safe raving
      </h3>
      <div className="w-full flex items-center justify-center pt-10 flex-col lg:flex-row">
        <div className="lg:max-w-[500px] 2xl:max-w-[750px] mb-6 lg:mb-0 lg:mr-[50px] 2xl:mr-[200px]">
          <p className="text-white font-[stolzi-light] text-sm sm:text-xl mb-8">
            Okay, we get it. You want to have fun. Everyone does. But that’s the
            key, everyone does. And sometimes one idea of fun makes another less
            fun. So here are some helpful tips to make sure everyone can enjoy
            the party.
          </p>
          <p className="text-white font-[stolzi-light] text-sm sm:text-xl">
            1) Personal space is personal Raves are busy places. You’re dancing,
            they are dancing, everyone is dancing. That is not a green light to
            bump into others or touch others without their permission. Your
            personal space is yours and theirs is theirs. Some contact here and
            there is expected but don’t make others uncomfortable in the process
            - and apologise if you do colour outside the lines. A simple ‘sorry’
            goes a long way.
          </p>
        </div>
        <div className="w-full">
          <img src={blog1} alt="blog1" className="w-full object-cover" />
        </div>
      </div>
      <div className="py-8">
        <p className="text-white font-[stolzi-light] text-sm sm:text-xl mb-6">
          2) Pace yourself The night is long and you’re just getting started.
          Don’t go all out straight away and miss the rest. The phrase ‘enjoy in
          moderation’ applies to many situations, so please be sensible and make
          sure you can make it to the time the lights come on at the end of the
          night.
        </p>
        <p className="text-white font-[stolzi-light] text-sm sm:text-xl mb-6">
          3) Earplugs are a must The music is loud, and you will want a memory
          of the night to remind you of what a great time it was, but don’t let
          that memory be a ringing in your ears or partial deafness. Free
          earplugs will be available at the entrance so make sure you pick up a
          pair or two to keep your ears safe on the night and for a long time
          afterwards.
        </p>
        <p className="text-white font-[stolzi-light] text-sm sm:text-xl mb-6">
          4) Tell a friend If you are going somewhere or not feeling great then
          tell a friend, let someone know and help keep each other safe. There
          is no need to wander off on a solo adventure because the people you
          came with will worry and not be able to find you. If you say you need
          a five-minute break, or you’re going to get a drink, then they know
          where you were and how long you might be away.
        </p>
        <p className="text-white font-[stolzi-light] text-sm sm:text-xl mb-6">
          5) Take a rest If the night is getting too much for you, take a break,
          get some air and have a rest. That’s fine. Make sure to drink lots of
          water and stay hydrated. It’s hot out there. And you will not want to
          miss the headliner! There is lots to do at Freaks of ARAVEIA, so why
          not check out the art exhibition or grab a bit to eat before hitting
          the dancefloor again? Freaks of Nature returns on 3-4 November with
          its third edition, Freaks of ARAVEIA. Get your tickets from
          www.freaksofnature.me and get ready for the party of a lifetime!
        </p>
      </div>
    </div>
  );
};

export default BlogOne;
