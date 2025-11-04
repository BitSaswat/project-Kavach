import React from 'react';
import Navbar from './Navbar';
import { ArrowRight } from 'lucide-react'; 

const features = [
 
  {
    title: "EMAIL CLASSIFIER",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    link: "/email-classifier"
  },
  {
    title: "PHISHING URL DETECTOR",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    link: "/phishing-detector"
  },
  {
    title: "TERMS & CONDITION SUMMARISER",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    link: "/tcs-summarizer"
  },
];

export default function OurServices() {
  return (
    
    <div>

      <div className="absolute inset-0 bg-[#0B182B]/80 z-0">
 
      <Navbar/>

    <section
        className="w-full bg-cover bg-[position:20%_center] py-20 flex flex-col md:flex-row items-left justify-between px-10 gap-20"
        style={{
          backgroundImage:
            "url('image/image 799.png')", 
        }}
      >
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-64px)] py-12 px-4 md:px-8 lg:px-16">
        

        <div className="text-center mb-16 mt-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 drop-shadow-lg mb-2">
            HELLO, USER!!
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-medium">
            WHAT YOU WANT ME TO DO TODAY?
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 w-full max-w-4xl">
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                bg-gradient-to-r from-cyan-900/40 to-blue-900/40 
                border border-cyan-700/50 
                rounded-xl 
                p-6 
                shadow-2xl 
                shadow-cyan-500/10 
                hover:shadow-cyan-400/30 
                hover:border-cyan-400 
                transition-all duration-300 
                flex items-center justify-between gap-4
                backdrop-blur-sm 
              "
            >
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-cyan-300 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <button className="
                flex-shrink-0 
                w-12 h-12 
                bg-gradient-to-br from-cyan-500 to-blue-600 
                rounded-full 
                flex items-center justify-center 
                shadow-lg shadow-cyan-500/30 
                
                transition-all duration-200
              ">
                <ArrowRight className="w-8 h-20 text-white" />
              </button>
            </div>
          ))}
        </div>
      </main>
      </section>
      </div> 
    </div>
  );
}