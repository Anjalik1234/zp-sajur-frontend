import "./Contribute.css";
import { useState, useEffect } from "react";

const contributeText = {
    mr: {
        heading: "शाळेसाठी योगदान द्या",
        name: "आपले नाव (ऐच्छिक)",
        phone: "फोन नंबर (ऐच्छिक)",
        address: "पत्ता (ऐच्छिक)",
        instruction:
            "कृपया प्रथम QR कोड स्कॅन करून पेमेंट पूर्ण करा. त्यानंतर खाली योगदानाची रक्कम आणि व्यवहार आयडी भरून आपले योगदान नोंदवा.",
        amount: "योगदानाची रक्कम *",
        transaction: "व्यवहार आयडी *",
        button: "योगदान करा",
        scan: "पेमेंटसाठी स्कॅन करा",
        upi: "शाळेला समर्थन देण्यासाठी कोणतेही UPI अ‍ॅप वापरा",
        success: "शाळेला समर्थन दिल्याबद्दल धन्यवाद!",
        errorAmount: "कृपया योगदानाची रक्कम भरा",
        errorSubmit: "योगदान पाठवताना त्रुटी आली",
    },

    en: {
        heading: "Support Our School",
        name: "Your Name (Optional)",
        phone: "Phone Number (Optional)",
        address: "Address (Optional)",
        instruction:
            "Please scan the QR code and complete the payment first. After payment, enter the contributed amount and transaction ID below to confirm your contribution.",
        amount: "Contribution Amount *",
        transaction: "Transaction ID *",
        button: "Contribute",
        scan: "Scan to Pay",
        upi: "Use any UPI app to support our school",
        success: "Thank you for supporting our school!",
        errorAmount: "Please enter contribution amount",
        errorSubmit: "Error submitting contribution",
    },
};

function Contribute({ language = "mr" }) {
    const text = contributeText[language];
     useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        amount: "",
        transactionID: "",
    });

    const [qrImage, setQrImage] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.amount) {
            alert(text.errorAmount);
            return;
        }

        try {
            const response = await fetch(
                "https://zpsajur-backend-production.up.railway.app/api/contributions/add",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const data = await response.json();

            if (response.ok) {
                alert(text.success);
                setFormData({
                    name: "",
                    phone: "",
                    address: "",
                    amount: "",
                    transactionID: "",
                });
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error(error);
            alert(text.errorSubmit);
        }
    };

    useEffect(() => {
        fetchQR();
    }, []);

    const fetchQR = async () => {

        const response = await fetch("https://zpsajur-backend-production.up.railway.app/api/qr");

        const data = await response.json();

        if (data) {
            setQrImage(data.imageUrl);
        }

    };

    return (
        <div className="contribute-page">
            <h1>{text.heading}</h1>

            <div className="contribute-container">
                {/* FORM */}
                <form className="contribute-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder={text.name}
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder={text.phone}
                        value={formData.phone}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="address"
                        placeholder={text.address}
                        value={formData.address}
                        onChange={handleChange}
                    />

                    <p className="payment-instruction">{text.instruction}</p>

                    <input
                        type="number"
                        name="amount"
                        placeholder={text.amount}
                        value={formData.amount}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="number"
                        name="transactionID"
                        placeholder={text.transaction}
                        value={formData.transactionID}
                        onChange={handleChange}
                    />

                    <button type="submit">{text.button}</button>
                </form>

                {/* QR CODE */}
                <div className="qr-section">
                    <h3>{text.scan}</h3>

                    <img src={qrImage} alt="UPI QR Code" className="qr-image" />

                    <p>{text.upi}</p>
                </div>
            </div>
        </div>
    );
}

export default Contribute;
