import React from "react";
import emailjs from "@emailjs/browser";
import useAlert from "../hooks/useAlert.js";
import Alert from "../components/Alert.jsx";
const emailJsUserId = import.meta.env.VITE_EMAILJS_USERID;
const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATEID;
const emailJsReceiverId = import.meta.env.VITE_EMAILJS_RECEIVERID;

const Contact = () => {
  const { alert, showAlert, hideAlert } = useAlert();
  const formRef = React.useRef();
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = React.useState(false);
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        emailJsReceiverId,
        emailJsTemplateId,
        {
          from_name: form.name,
          to_name: "Hemanshu",
          from_email: form.email,
          to_email: "upadhyayhri@gmail",
          message: form.message,
        },
        emailJsUserId
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };
  return (
    <section className="c-space my-20 mt-0" id="contact">
      {alert.show && <Alert {...alert} />}
      <div className="relative flex items-center justify-center flex-col">
        {/* <img
          src="/assets/terminal.png"
          alt="terminal"
          className=" hidden xl:block absolute inset-0 min-h-screen "
        /> */}
        <div className="max-w-xl relative z-10 sm:px-10 px-5  ">
          <h3 className="head-text"> Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            I am always interested in working on new projects, so if you have
            any ideas, please don't hesitate to reach out. also i am open to
            opportunities that are remotely.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                className="field-input"
                required
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                className="field-input"
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Johndoe@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Message</span>
              <textarea
                required
                className="field-input"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Type your Query."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
