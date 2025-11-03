




import React, { useState } from "react";

export default function AboutUs() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B182B] text-white flex flex-col items-center">
      {/* Header */}
      <header className="w-full flex justify-between items-center py-4 px-10 border-b border-gray-700 bg-[#0B182B]/90 backdrop-blur">
        <div className="text-2xl font-bold">LOGO</div>
        <nav className="space-x-6">
          <a href="#" className="hover:text-cyan-400">ABOUT US</a>
          <a href="#" className="hover:text-cyan-400">OUR SERVICES</a>
          <a href="#" className="hover:text-cyan-400">WORK WITH US</a>
          <a href="#" className="hover:text-cyan-400">BLOG</a>
          <a href="#" className="hover:text-cyan-400">GET IN TOUCH</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="w-full bg-cover bg-[position:20%_center] py-20 flex flex-col md:flex-row items-left justify-between px-10 gap-20"
        style={{
          backgroundImage:
            "url('image/image 799.png')", 
        }}
      >
        <div className=" w-full h-full flex flex-col md:flex-row justify-between items-center px-10 md:px-20 py-10 gap-5">
          {/* About Text */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-cyan-400 text-4xl font-bold">ABOUT US</h2>
            <p className="text-gray-300 leading-relaxed">
              We are a passionate team of developers, designers, and innovators dedicated
              to crafting digital experiences that make a difference. Our goal is to
              empower communities through technology, creativity, and collaboration.
            </p>
            <button
            className="w-[180px] h-[58px] rounded-[41px] 
         bg-gradient-to-r from-[#00B4D8] to-[#0077B6]
         text-white font-semibold text-lg 
         flex items-center justify-center
         shadow-[0_0_20px_rgba(0,180,216,0.4)]
         hover:shadow-[0_0_25px_rgba(0,180,216,0.7)]
         hover:scale-[1.03] transition-all duration-300 ease-in-out">
            
            KNOW MORE →
            </button>

          </div>

          {/* Login / Signup Card */}
          <div className="md:w-1/2 flex justify-center md:ml-40">
            <div className="
    flex flex-col items-center 
    px-10 py-8 gap-6
    w-[400px] h-[540px]
    bg-[rgba(255,255,255,0.05)]   /* very faint tint */
    backdrop-blur-[5.08px]
    rounded-[25px]
    border border-[rgba(255,255,255,0.2)]
    shadow-[0_0_30px_rgba(0,180,216,0.3)]
    md:ml-[180px]
  "
>
              <div className="flex justify-center mb-6 gap-x-3">
                <button
                  onClick={() => setIsLogin(false)}
                  className={`w-[100px] h-[50px] rounded-[41px] 
         bg-gradient-to-r from-[#00B4D8] to-[#0077B6]
         text-white font-semibold text-lg 
         flex items-center justify-center
         shadow-[0_0_20px_rgba(0,180,216,0.4)]
         hover:shadow-[0_0_25px_rgba(0,180,216,0.7)]
         hover:scale-[1.03] transition-all duration-300 ease-in-out
    ${!isLogin 
      ? "bg-[#00B4D8] text-white shadow-[0_0_10px_rgba(0,180,216,0.6)]"
      : "bg-[rgba(255,255,255,0.1)] text-gray-300 hover:bg-[rgba(255,255,255,0.2)]"}`}
>
                  Sign-Up
                </button>
                <button
                  onClick={() => setIsLogin(true)}
                  className={`w-[100px] h-[50px] rounded-[41px] 
         bg-gradient-to-r from-[#00B4D8] to-[#0077B6]
         text-white font-semibold text-lg 
         flex items-center justify-center
         shadow-[0_0_20px_rgba(0,180,216,0.4)]
         hover:shadow-[0_0_25px_rgba(0,180,216,0.7)]
         hover:scale-[1.03] transition-all duration-300 ease-in-out ${
                    isLogin ? "bg-cyan-500 text-white" : "bg-gray-700 text-gray-300"
                  }`}
                >
                  Login
                </button>
              </div>

              <form className="flex flex-col space-y-4">
                {!isLogin && (
                  <input
                    type="text"
                    placeholder="Name"
                    className="p-2 rounded bg-white/20 text-white placeholder-gray-300 outline-none"
                  />
                )}
                <input
                  type="email"
                  placeholder="Email"
                  className="p-2 rounded bg-white/20 text-white placeholder-gray-300 outline-none"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="p-2 rounded bg-white/20 text-white placeholder-gray-300 outline-none"
                />
                <button className="w-[180px] h-[58px] rounded-[41px] 
         bg-gradient-to-r from-[#00B4D8] to-[#0077B6]
         text-white font-semibold text-lg 
         flex items-center justify-center
         shadow-[0_0_20px_rgba(0,180,216,0.4)]
         hover:shadow-[0_0_25px_rgba(0,180,216,0.7)]
         hover:scale-[1.03] transition-all duration-300 ease-in-out">
                  {isLogin ? "Sign In" : "Register"}
                </button>
              </form>

              <div className="mt-4 text-center text-sm text-gray-300">
                or continue with
              </div>

              <div className="flex justify-center mt-4 space-x-5">
  {/* Google Button */}
  <button className="w-14 h-12 flex items-center justify-center rounded-full bg-white hover:bg-cyan-100 shadow-[0_0_15px_rgba(0,255,255,0.2)] hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all duration-300">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className="w-6 h-6"
    >
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.73 1.22 9.24 3.6l6.84-6.84C35.68 2.38 30.21 0 24 0 14.7 0 6.74 5.06 2.69 12.44l7.98 6.19C12.43 13.57 17.77 9.5 24 9.5z"
      />
      <path
        fill="#34A853"
        d="M46.98 24.55c0-1.57-.14-3.08-.39-4.55H24v9.02h12.94c-.56 2.87-2.26 5.3-4.82 6.93l7.37 5.72C43.84 37.05 46.98 31.3 46.98 24.55z"
      />
      <path
        fill="#4A90E2"
        d="M9.67 28.63c-.87-2.59-1.36-5.36-1.36-8.21s.49-5.62 1.36-8.21l-7.98-6.19C.96 10.34 0 14.04 0 18.42s.96 8.08 2.69 11.4l7.98-6.19z"
      />
      <path
        fill="#FBBC05"
        d="M24 47.5c6.21 0 11.68-2.04 15.57-5.52l-7.37-5.72c-2.05 1.38-4.67 2.19-8.2 2.19-6.23 0-11.57-4.07-13.33-9.93l-7.98 6.19C6.74 42.94 14.7 47.5 24 47.5z"
      />
    </svg>
  </button>

  {/* Facebook Button */}
  <button className="w-14 h-12 flex items-center justify-center rounded-full bg-white hover:bg-cyan-100 shadow-[0_0_15px_rgba(0,255,255,0.2)] hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all duration-300">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-6 h-6"
    >
      <path
        fill="#1877F2"
        d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.09 4.388 23.09 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.017 1.79-4.688 4.533-4.688 1.312 0 2.687.234 2.687.234v2.953h-1.514c-1.492 0-1.953.93-1.953 1.89v2.266h3.328l-.532 3.49h-2.796V24C19.612 23.09 24 18.09 24 12.073z"
      />
    </svg>
  </button>
    
</div>
<div className="mt-7 text-center text-sm text-gray-300">
              Don't have an account yet? <span className="text-cyan-400 cursor-pointer hover:underline">Sign up for free!</span>
            </div>
                
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
