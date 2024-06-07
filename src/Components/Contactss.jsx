import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

const Contacts = () => {
  const recaptchaRef = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const contactMethods = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      contact: "Support@example.com",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      contact: "+1 (555) 000-000",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
      contact: "Mountain View, California, United States",
    },
  ];

  const onSubmit = (data) => {
    const recaptchaValue = recaptchaRef.current.getValue();
    if (!recaptchaValue) {
      alert("Please complete the CAPTCHA");
      return;
    }
    // Add logic to handle the form submission with recaptchaValue and form data
    console.log("Form Data:", data);
    console.log("reCAPTCHA value:", recaptchaValue);

    // Reset the form fields
    reset();
    recaptchaRef.current.reset();
  };

  return (
    <main className="relative overflow-hidden py-14 bg-white">
      <div className="absolute inset-0">
        <div
          className="absolute bg-gradient-to-r from-purple-400 to-pink-600 opacity-50 rounded-full w-80 h-80 top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
          style={{ filter: "blur(100px)" }}
        ></div>
        <div
          className="absolute bg-gradient-to-r from-blue-400 to-indigo-600 opacity-50 rounded-full w-80 h-80 bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2"
          style={{ filter: "blur(100px)" }}
        ></div>
        <div
          className="absolute bg-gradient-to-r from-green-400 to-teal-600 opacity-50 rounded-full w-80 h-80 top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2"
          style={{ filter: "blur(100px)" }}
        ></div>
        <div
          className="absolute bg-gradient-to-r from-yellow-400 to-orange-600 opacity-50 rounded-full w-80 h-80 bottom-1/3 left-1/4 transform -translate-x-1/2 translate-y-1/2"
          style={{ filter: "blur(100px)" }}
        ></div>
        <div
          className="absolute bg-gradient-to-r from-red-400 to-pink-500 opacity-50 rounded-full w-80 h-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ filter: "blur(100px)" }}
        ></div>
      </div>
      <div
        className="relative max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/asfalt-light.png')",
        }}
      >
        <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
          <div className="max-w-lg space-y-3">
            <h3 className="text-indigo-600 font-montserrat font-bold">
              Contact
            </h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl font-mukta">
              Let us know how we can help
            </p>
            <p>
              We’re here to help and answer any question you might have. We look
              forward to hearing from you! Please fill out the form, or use the
              contact information below.
            </p>
            <div>
              <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                {contactMethods.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-x-3">
                    <div className="flex-none text-gray-400">{item.icon}</div>
                    <p className="font-mukta">{item.contact}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094377!2d144.95592331531672!3d-37.8172099797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d18f1b2a1f0b!2sMountain%20View%2C%20California%2C%20United%20States!5e0!3m2!1sen!2sus!4v1616332206404!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg shadow-sm"
              ></iframe>
            </div>
          </div>
          <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label htmlFor="full-name" className="font-medium">
                  Full name
                </label>
                <input
                  id="full-name"
                  type="text"
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                  className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border ${
                    errors.fullName
                      ? "border-red-500"
                      : "focus:border-indigo-600"
                  } shadow-sm rounded-lg`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email address",
                    },
                  })}
                  className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border ${
                    errors.email ? "border-red-500" : "focus:border-indigo-600"
                  } shadow-sm rounded-lg`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="phone" className="font-medium">
                  Phone (optional)
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register("phone", {
                    pattern: {
                      value: /^\+?[0-9]{10,15}$/,
                      message: "Invalid phone number",
                    },
                  })}
                  className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border ${
                    errors.phone ? "border-red-500" : "focus:border-indigo-600"
                  } shadow-sm rounded-lg`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="company" className="font-medium">
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  {...register("company", { required: "Company is required" })}
                  className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border ${
                    errors.company
                      ? "border-red-500"
                      : "focus:border-indigo-600"
                  } shadow-sm rounded-lg`}
                />
                {errors.company && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.company.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message", { required: "Message is required" })}
                  className={`w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border ${
                    errors.message
                      ? "border-red-500"
                      : "focus:border-indigo-600"
                  } shadow-sm rounded-lg`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <div>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6Le1LfIpAAAAAFh1uG2xfht3XgDHpcS-Lo82EmHi"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white font-medium font-montserrat bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contacts;
