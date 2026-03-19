import React from "react";
import "./Smc.css";

const smcMembers = [
  {
    name: { mr: "श्री. सुधीर खाशाबा कचरे", en: "Mr. Sudhir Khashaba Kachare" },
    post: { mr: "अध्यक्ष", en: "Chairman" },
    type: { mr: "पालक", en: "Parent" }
  },
  {
    name: { mr: "सौ. सुकेशिनी अमोल निकाळजे", en: "Mrs. Sukeshini Amol Nikalje" },
    post: { mr: "उपाध्यक्ष", en: "Vice Chairman" },
    type: { mr: "पालक", en: "Parent" }
  },
  {
    name: { mr: "श्री. बलराज उत्तम चव्हाण", en: "Mr. Balraj Uttam Chavan" },
    post: { mr: "सदस्य", en: "Member" },
    type: { mr: "शिक्षणप्रेमी", en: "Education Enthusiast" }
  },
  {
    name: { mr: "श्री. सचिन मधुकर चव्हाण", en: "Mr. Sachin Madhukar Chavan" },
    post: { mr: "सदस्य", en: "Member" },
    type: { mr: "पालक", en: "Parent" }
  },
  {
    name: { mr: "सौ. सुजाता विजय चव्हाण", en: "Mrs. Sujata Vijay Chavan" },
    post: { mr: "सदस्य", en: "Member" },
    type: { mr: "लोकप्रतिनिधी", en: "Public Representative" }
  },
  {
    name: { mr: "सौ. विजया विजय वेलवणकर", en: "Mrs. Vijaya Vijay Velvankar" },
    post: { mr: "सदस्य", en: "Member" },
    type: { mr: "पालक", en: "Parent" }
  },
  {
    name: { mr: "सौ. वैशाली सरदार चव्हाण", en: "Mrs. Vaishali Sardar Chavan" },
    post: { mr: "सदस्य", en: "Member" },
    type: { mr: "पालक", en: "Parent" }
  },
  {
    name: { mr: "सौ. दिपाली सुधीर कचरे", en: "Mrs. Dipali Sudhir Kachare" },
    post: { mr: "सदस्य", en: "Member" },
    type: { mr: "पालक", en: "Parent" }
  },
  {
    name: { mr: "श्री. प्रकाश शंकर चव्हाण", en: "Mr. Prakash Shankar Chavan" },
    post: { mr: "सदस्य", en: "Member" },
    type: { mr: "पालक", en: "Parent" }
  },
  {
    name: { mr: "सौ. अनिता राजेंद्र केंगार", en: "Mrs. Anita Rajendra Kengar" },
    post: { mr: "सदस्य", en: "Member" },
    type: { mr: "पालक", en: "Parent" }
  },
  {
    name: { mr: "श्री. मारुती शंकर मुळगांवकर", en: "Mr. Maruti Shankar Mulgavkar" },
    post: { mr: "सदस्य", en: "Member" },
    type: { mr: "पालक", en: "Parent" }
  },
  {
    name: { mr: "सौ. सुजाता अंकुश गरुड", en: "Mrs. Sujata Ankush Garud" },
    post: { mr: "सदस्य", en: "Member" },
    type: { mr: "पालक", en: "Parent" }
  },
  {
    name: { mr: "श्री. अमोल अंकुश यादव", en: "Mr. Amol Ankush Yadav" },
    post: { mr: "सदस्य", en: "Member" },
    type: { mr: "पालक", en: "Parent" }
  },
  {
    name: { mr: "कु. श्रीरंग प्रकाश चव्हाण", en: "Mr. Shrirang Prakash Chavan" },
    post: { mr: "सदस्य", en: "Member" },
    type: { mr: "विद्यार्थी प्रतिनिधी", en: "Student" }
  },
  {
    name: { mr: "कु. पंकजा जयवंत पाटील", en: "Miss Pankaja Jaywant Patil" },
    post: { mr: "सदस्य", en: "Member" },
    type: { mr: "विद्यार्थी प्रतिनिधी", en: "Invitee" }
  },
  {
    name: { mr: "श्री. संतोषकुमार लक्ष्मण कांबळे", en: "Mr. Santoshkumar Laxman Kamble" },
    post: { mr: "सदस्य", en: "Member" },
    type: { mr: "सहशिक्षक", en: "Assistant Teacher" }
  },
  {
    name: { mr: "श्री. पांडुरंग एकनाथ माने", en: "Mr. Pandurang Eknath Mane" },
    post: { mr: "सचिव", en: "Secretary" },
    type: { mr: "मुख्याध्यापक", en: "Headmaster" }
  }
];

export default function SMC({ language = "mr" }) {
  const lang = language;

  return (
    <section className="smc-section" id="smc">
      <div className="smc-hero">
        <h1>
          {lang === "mr"
            ? "शाळा व्यवस्थापन समिती"
            : "School Management Committee"}
        </h1>
      </div>

      <div className="smc-table-wrapper">
        <table className="smc-table">
          <thead>
            <tr>
              <th>{lang === "mr" ? "सदस्याचे नाव" : "Member Name"}</th>
              <th>{lang === "mr" ? "पद" : "Designation"}</th>
              <th>{lang === "mr" ? "प्रकार" : "Category"}</th>
            </tr>
          </thead>

          <tbody>
            {smcMembers.map((m, i) => (
              <tr key={i}>
                <td data-label={lang === "mr" ? "सदस्याचे नाव" : "Member Name"}>
                  {m.name[lang]}
                </td>
                <td data-label={lang === "mr" ? "पद" : "Designation"}>
                  {m.post[lang]}
                </td>
                <td
                  className="type"
                  data-label={lang === "mr" ? "प्रकार" : "Category"}
                >
                  {m.type[lang]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}