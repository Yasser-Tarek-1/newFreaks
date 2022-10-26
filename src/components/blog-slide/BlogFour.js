import React from "react";

import blog4 from "../../assets/blog/blog4.svg";

const BlogFour = () => {
  return (
    <div className="w-full sm:px-8">
      <h3 className="text-white font-[stolzi-light] font-bold text-2xl md:text-3xl max-w-[450px] mx-auto">
        Why music festivals can be good for your mental health
      </h3>
      <div className="w-full flex items-center justify-center pt-10 flex-col lg:flex-row">
        <div className="lg:max-w-[500px] 2xl:max-w-[750px] mb-6 lg:mb-0 lg:mr-[50px] 2xl:mr-[200px]">
          <p className="text-white font-[stolzi-light] text-sm sm:text-xl mb-8">
            With Freaks of ARAVEIA set to get Riyadh jumping in November, what
            better way to get into a positive head space than live music!
          </p>
          <p className="text-white font-[stolzi-light] text-sm sm:text-xl">
            Music has long been used as a form of therapy, especially for those
            suffering from depression and anxiety, and the chance to lose
            oneself in sound, sing and dance, has also been shown to combat
            stress. Allowing the feel-good hormones to flow puts you in a better
            mood, and dance could be even more beneficial than vigorous
            exercise.
          </p>
          <p className="text-white font-[stolzi-light] text-sm sm:text-xl">
            So, when Freaks of Nature returns with its third edition on 3-4
            November, Freaks of ARAVEIA, leave your worries at the door and have
            a good time. You’ll feel better for it!
          </p>
        </div>
        <div className="w-full">
          <img src={blog4} alt="blog4" className="w-full object-cover" />
        </div>
      </div>
      <div className="py-8">
        <p className="text-white font-[stolzi-light] text-sm sm:text-xl mb-6">
          Festivals and concerts are a communal experience and help to alleviate
          the sense of loneliness many struggle with. If you are invested in a
          group activity, sharing the energy and emotion of being with
          like-minded people in the same place for a single purpose, then the
          ‘collective effervescence’, as it has been termed, takes over and
          brings a sense of connected joy to the audience.
        </p>
        <p className="text-white font-[stolzi-light] text-sm sm:text-xl mb-6">
          Furthermore, studies show that live concerts reduce the release of
          cortisol, the stress hormone which controls our body’s responses to
          stress. Sustained spikes in cortisol have been linked to heart disease
          and diabetes. Researchers also noted that participants had reduced
          blood pressure and heart rate after experiencing live music. Live
          music experiences can even serve as a natural way of managing pain;
          concerts can trigger the release of endorphins, which reduces the
          perception of pain, or even intercepts pain signals before they reach
          the brain.
        </p>
        <p className="text-white font-[stolzi-light] text-sm sm:text-xl mb-6">
          Even better still, exposure to new live or new music challenges the
          brain to understand a new sound, becoming a workout for the brain and
          leading to improved creativity, memory, alertness and clarity. Live
          music has even been shown to improve cognitive function in patients
          with dementia, and in early development as babies are able to process
          music before they process speech.
        </p>
        <p className="text-white font-[stolzi-light] text-sm sm:text-xl mb-6">
          There you have it. Music festivals have wide-reaching benefits at all
          stages of life. Tickets for Freaks of ARAVEIA go on sale on [date]
          from www.freaksofnature.me. Be sure to get yours and get ready to feel
          better! With three stages, 10 international artists and more than 25
          local artists putting on a show over the two days, alongside local
          creators, designers and food trucks, this is a weekend not to be
          missed. And it will definitely leave you in a great mood!
        </p>
      </div>
    </div>
  );
};

export default BlogFour;
