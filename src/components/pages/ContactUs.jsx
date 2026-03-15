import "./ContactUs.css";
import contact from "../../assets/images/Contact/outgoing-call.png";

const contactText = {
  mr: {
    heading: "संपर्क",
    info: {
      head: "मुख्याध्यापक",
      name: "श्री पांडुरंग एकनाथ माने",
      school: "जिल्हा परिषद प्राथमिक शाळा, साजूर",
      address: "📍 साजूर, ता. कराड, जि. सातारा, महाराष्ट्र",
      email: "zpsajur2012@gmail.com",
      mobile: "26310205509",
      button: "बोनाफाईड अर्ज",
    },
  },

  en: {
    heading: "Contact Us",
    info: {
      head: "Headmaster",
      name: "Mr. Pandurang Eknath Mane",
      school: "Zilla Parishad Primary School, Sajur",
      address: "📍 Sajur, Taluka Karad, District Satara, Maharashtra",
      email: "zpsajur2012@gmail.com",
      mobile: "26310205509",
      button: "Apply for Bonafide",
    },
  },
};

function ContactUs({ language = "mr" }) {
  const { heading, info } = contactText[language];

  return (
    <section className="contact-section" id="contactus">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h2 className="contact-heading">{heading}</h2>

          <p className="contact-text">
            <strong>{info.head}</strong>
          </p>

          <p className="contact-text">{info.name}</p>
          <p className="contact-text">{info.school}</p>
          <p className="contact-text">{info.address}</p>

          <p className="contact-text contact-details">
            Email: {info.email} <br />
            Mobile: {info.mobile}
          </p>

          {/* POINTER IMAGE */}
          <img
            src={contact}   // update path if needed
            alt="Contact Pointer"
            className="contact-pointer"
          />

          <a
            href="https://forms.gle/oAGgAveGphzj9g288"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="contact-btn">{info.button}</button>
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <iframe
            title="Z P Primary School Sajur"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.1455735300783!2d74.05539697368717!3d17.30852400507523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc187660f6925f1%3A0x43a80eb958747f36!2sZ.%20P.%20Primary%20School%20Sajur!5e1!3m2!1sen!2sin!4v1770456966716!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
}

export default ContactUs;
