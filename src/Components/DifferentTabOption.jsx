import React, { useState } from "react";
import "./DifferentTabOption.css"; 

const DifferentTabOption = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);

  const tabs = [
    {
      title: "Cancel",
      options: [
        "What are the advantages of purchasing a bus ticket with redBus?",
        "Do I need to register to use redBus?",
        "Does booking online cost me more?",
      ],
      content: [
        "You can choose your seat according to your choice",
        "No, redBus does not require its customers to go through a registration process",
        "Not at all! The price of the bus ticket is the same as you would get from the bus operator too.The price of hotel voucher is the same or sometimes discounted depending on the season/time.",
      ],
    },
    {
      title: "Ticket-related",
      options: [
        "Is it mandatory to take a printout of the ticket?",
        "I've lost my ticket. What should I do now?",
        "What is an mTicket?",
        "I didn’t receive my mTicket. Can you re-send it?",
        "I entered the wrong mobile number while booking. Can I get my mTicket on a different number?",
      ],
      content: [
        "No need to Printout your Tcket You can Directly show your mTicket",
        "A copy of the ticket would have been sent to you by e-mail when you booked it. Please take a printout of that mail and produce it at the time of boarding. If you have not received the ticket e-mail, please call any of our call centers and our executive will re-send you a copy by mail.",
        "An mTicket is an SMS that is sent to your mobile on booking a ticket with select operators. This SMS has the TIN number and the PNR number along with other ticket related information. It can be used to board the bus. Please note that not all operators accept mTickets. To know which operators are mTicket enabled, look for the mTicket icon  under the mTicket column while searching for buses.",
        "You can generate your mTicket online. Click on the Print/SMS ticket link on the home page on www.redBus.in. Enter your TIN number mentioned on the e-ticket we e-mailed you. Choose the SMS option and click on Submit. In case you don’t have a copy of the e-ticket either, contact our call center and our executive will assist you.",
        "Sure you can. Please contact our call center and our executive will send you the mTicket on your desired number.",
      ],
    },
    {
      title: "Payment",
      options: [
        "Does the owner of the credit card with which the ticket is purchased need to be one of the passengers?",
        "What payment options do I have?",
        "How does the transaction appear on my card / account statement?",
        "Is it safe to use my credit card on this site?",
      ],
      content: [
        "Not at all! A passenger can use any card to pay for the ticket, not necessarily their own. However, please note that the passenger in whose name the ticket is booked should carry a proof of his identity (along with the ticket) at the time of boarding the bus.",
        "The different payment options are-Credit card,Debit card",
        "Transactions on redBus will appear as  www.redbus.in in your bank statement",
        "Transactions on redBus are very safe. We employ the best-in-class security and the transactions done are secure. Apart from being certified by Verisign, redBus uses Secure Socket Layers (SSL) data encryption. Using SSL ensures that the information exchanged with us is never transmitted unencrypted, thus protecting the information from being viewed by unauthorized individuals.",
      ],
    },
    {
      title: "Cancellation",
      options: [
        "Can I cancel my ticket online?",
        "How can I cancel my bus ticket online?",
      ],
      content: [
        "Most of the tickets can be cancelled online. However, there are some tickets that can only be cancelled through our call center.",
        "You need to click on the cancellation link provided on our home page. Enter your ticket number and the e-mail ID that was provided at the time of booking and click on cancel ticket.",
      ],
    },
    {
      title: "Refund",
      options: [
        "I missed the bus. Do I get a refund?",
        "How can I get a refund in case I cancel my ticket?",
      ],
      content: [
        "redBus provides a 100% refund if the bus is missed due to either redBus or its’ partner company's fault. However, if the bus is missed due to any other reason not directly related to redBus no refund is provided.",
        "The refund is provided as per with our cancellation policy. The refund can be credited to the source of payment (Example: debit card, credit card, net banking) or credited to redBus wallet. Wallet credit can be used for bus booking in future (within 6 months of cancellation).",
      ],
    },
    {
      title: "Insurance",
      options: ["Details on Insurance"],
      content: ["For details on Insurance please refer to Insurance Terms"],
    },
  ];

  const showTab = (tabNumber) => {
    setSelectedTab(tabNumber);
    setSelectedOption(null); 
  };

  const toggleOptionContent = (optionIndex) => {
    setSelectedOption((prevOption) =>
      prevOption === optionIndex ? null : optionIndex
    );
  };

  return (
    <div className="tabbed-interface">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${selectedTab === index + 1 ? "selected" : ""}`}
            onClick={() => showTab(index + 1)}
          >
            {tab.title}
          </div>
        ))}
      </div>

      <div className="tab-content">
        {tabs[selectedTab - 1].options.map((option, index) => (
          <div
            key={index}
            className={`option ${selectedOption === index ? "selected" : ""}`}
            onClick={() => toggleOptionContent(index)}
          >
            {option} {selectedOption === index ? "-" : "+"}
            {selectedOption === index && (
              <div className="option-content">
                {tabs[selectedTab - 1].content[index]}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DifferentTabOption;
