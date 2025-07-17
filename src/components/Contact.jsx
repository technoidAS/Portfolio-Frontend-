import React from "react";
import Swal from "sweetalert2";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b07a5820-5018-4ace-a45b-b014f3a4dc2c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      Swal.fire({
        title: "Success!",
        text: "Message sent Successfully!",
        icon: "success",
      });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4  my-16 bg-orange-400 p-5 "
      >
        <h1 className="text-3xl font-bold mb-4">Contact me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className=" flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={onSubmit}
            className="bg-white w-96 px-8 py-6 rounded-xl text-black"
          >
            <h1 className="text-xl font-semibold mb-4 text-[#3a65e7]">
              Send Your Message
            </h1>
            <div className="flex flex-col mb-4">
              <label className="block ">FullName</label>
              <input
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                required={true}
                placeholder="Enter your fullname"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="block ">Email Address</label>
              <input
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                required={true}
                placeholder="Enter your email address"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="block ">Message</label>
              <textarea
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                required={true}
                type="text"
                placeholder="Enter your Query"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-300 text-white rounded-xl px-3 py-2 hover:bg-blue-600 duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
