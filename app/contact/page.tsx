"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [invalidFields, setInvalidFields] = useState<string[]>([]);

  const validateForm = (data: {
    name: FormDataEntryValue | null;
    email: FormDataEntryValue | null;
    phone: FormDataEntryValue | null;
    message: FormDataEntryValue | null;
  }) => {
    const invalid = [];
    if (!data.name) invalid.push("name");
    if (!data.email) invalid.push("email");
    if (!data.phone) invalid.push("phone");
    if (!data.message) invalid.push("message");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (data.email && !emailPattern.test(data.email.toString())) {
      return { valid: false, message: "Please enter a valid email address." };
    }

    setInvalidFields(invalid);
    return {
      valid: invalid.length === 0,
      message: invalid.length ? "All fields are required." : "",
    };
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize duration of animations
      easing: "ease-in-out",
      once: false, // Trigger animation only once/always
    });
  }, []);

  return (
    <>
      <div className="bg-white min-h-96 text-black md:pb-5 pb-10">
        <div
          // style={{ backgroundImage: "url('/green-bg.png')" }}
          className="py-16 md:h-[36vh] h-[32vh] bg-white bg-opacity-100 bg-center bg-cover bg-no-repeat"
        >
          <h3 className="md:px-32 px-4 text-black md:font-thin md:text-5xl text-4xl font-light md:text-start text-center">
            Get <span className="md:font-semibold">In Touch</span>
          </h3>
          <p className="md:px-32 px-4 text-black md:font-extralight md:text-xl text-base font-thin md:text-start text-center mt-10">
            Our team will be happy to assist you!
          </p>
          <p className="md:px-32 px-4 text-black md:font-extralight md:text-xl text-base font-thin md:text-start text-center mt-1">
            Please provide us with the relevant details below and we’ll get back
            to you as soon as we can to discuss your event.
          </p>
        </div>

        <div className="md:px-24 md:py-20 py-10 px-4 rounded-lg">
          <div className="flex md:flex-row flex-col rounded-lg bg-black">
            <div className="lg:w-2/3 w-full flex flex-col">
              <form className="p-10 flex flex-col gap-5">
                <div className="flex flex-col">
                  <label htmlFor="name" className=" text-white mb-2">
                    Full Name{" "}
                    {invalidFields.includes("name") && (
                      <span className="text-red-500">* Name Required *</span>
                    )}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-lime-500"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="mb-2 text-white">
                    Email Address{" "}
                    {invalidFields.includes("email") && (
                      <span className="text-red-500">* Email Required *</span>
                    )}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-lime-500"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="phone" className="mb-2 text-white">
                    Phone Number{" "}
                    {invalidFields.includes("phone") && (
                      <span className="text-red-500">* Phone Required *</span>
                    )}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-lime-500"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="message" className="mb-2 text-white">
                    Message{" "}
                    {invalidFields.includes("message") && (
                      <span className="text-red-500">* Message Required *</span>
                    )}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-lime-500"
                    placeholder="In your message, please include as much information about your event as possible, such as date(s), estimated guest count, preferred venue, and event needs (audio & visual, conference and/or exhibition, stage and lighting, printing and branding)"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-white text-black py-3 px-6 rounded-md hover:bg-black hover:text-white hover:ring-white hover:ring-1 transition duration-300"
                  onClick={async (e) => {
                    e.preventDefault();
                    setIsSubmitting(true);
                    setSubmitStatus(null);

                    const form = (e.target as HTMLElement).closest(
                      "form"
                    ) as HTMLFormElement;
                    const formData = new FormData(form);
                    const data = {
                      name: formData.get("name"),
                      email: formData.get("email"),
                      phone: formData.get("phone"),
                      message: formData.get("message"),
                    };

                    const validation = validateForm(data);
                    if (!validation.valid) {
                      setSubmitStatus({
                        type: "error",
                        message: validation.message,
                      });
                      setIsSubmitting(false);
                      return;
                    }

                    try {
                      const response = await fetch("/api/", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify(data),
                      });

                      if (!response.ok)
                        throw new Error("Failed to send message");

                      setSubmitStatus({
                        type: "success",
                        message: "Message sent successfully!",
                      });
                      form.reset();
                    } catch (error) {
                      setSubmitStatus({
                        type: "error",
                        message: "Failed to send message. Please try again.",
                      });
                    } finally {
                      setIsSubmitting(false);
                    }
                  }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            <div className="lg:w-1/3 w-full bg-black flex flex-col py-4 px-10 gap-5 rounded-lg">
              <h2 className="text-white md:text-2xl md:font-thin my-5">
                Office Information
              </h2>
              <div className="flex flex-row gap-5">
                <Image
                  alt="call"
                  src="/new-phone.svg"
                  width={50}
                  className="block bg-white rounded-full p-2"
                  height={50}
                />
                <div className="text-white">
                  <h4 className="md:text-xl text-xl font-medium">
                    GIVE US A CALL
                  </h4>
                  <p className="text-base font-thin">+254 798 259 215</p>
                </div>
              </div>

              <div className="flex flex-row gap-5">
                <div className="bg-white hover:bg-white text-green rounded-full p-4 shadow-lg transition-all duration-300 z-50 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2">
                  <FaWhatsapp className="text-2xl" />
                </div>
                <div className="text-white">
                  <h4 className="md:text-xl text-xl font-medium">
                    WHATSAPP US
                  </h4>
                  <p className="text-base font-thin">+254 798 259 215</p>
                </div>
              </div>

              <div className="flex flex-row gap-5">
                <Image
                  alt="call"
                  src="/new-mail.svg"
                  width={50}
                  className="block bg-white rounded-full"
                  height={50}
                />
                <div className="text-white">
                  <h4 className="md:text-xl text-xl font-medium">
                    SEND US AN EMAIL
                  </h4>
                  <p className="text-base font-thin">info@geicoevents.net</p>
                </div>
              </div>

              <div className="flex flex-row gap-5 mb-10 items-center">
                <div>
                  <Image
                    alt="call"
                    src="/new-location.svg"
                    width={50}
                    className="bg-white rounded-full"
                    height={50}
                  />
                </div>
                <div className="text-white">
                  <h4 className="md:text-xl text-xl font-medium">LOCATION</h4>
                  <p className="text-base font-thin">Suite 516,</p>
                  <p className="text-base font-thin">
                    Consolidated Bank Building
                  </p>
                  <p className="text-base font-thin">
                    Koinange St. Nairobi, Kenya
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
