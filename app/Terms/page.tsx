import React from "react";

export default function Page() {
  const emailAddress = "contact.discoverarch@gmail.com";
  const linkStyle = {
    color: "blue",
    textDecoration: "none",
  };
  return (
    <div className=" px-4 py-2 mt-24 md:my-20">
      <img
        className="rounded-b-[3.4rem] opacity absolute w-full h-full object-cover top-0 left-0"
        src="/images/squares.svg" // Updated image path
        style={{ zIndex: -50 }}
        alt="bg-image"
      />
      <div>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl sm:px-16 xl:px-48 lg:text-6xl dark:text-black ">
          Website Terms & Conditions
        </h1>
        <h3 className="mb-8 text-3xl font-normal dark:text-black sm:px-16 xl:px-48">
          {" "}
          Please review our Terms of Service outlined below to understand the
          rules and regulations governing the use of our website and services.
        </h3>
        <h5 className="mb-4 text-xl font-bold dark:text-black sm:px-16 xl:px-48">
          1. GENERAL TERMS
        </h5>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 ">
          1.1. These Terms (hereinafter - the Terms) determine the procedure for
          using the website https://discoverarch.org/ (hereinafter - the
          Portal). The Terms are binding on all persons using the Portal who
          apply for, search, view, and / or browse architecture and design
          concept competitions (hereinafter - the Competitions) on the Portal,
          and/or use the functionality of the Portal in any other way.
          <br /> <br />
          1.2. The portal is maintained and administrated by DiscoverArch,
          e-mail address{" "}
          <a href={`mailto:${emailAddress}`} style={linkStyle}>
            {emailAddress}
          </a>{" "}
          (hereinafter - the Administrator).
          <br /> <br />
          1.3. TRADEMARK AND COPYRIGHT: All website contents are solely the
          property of DiscoverArch, submitted competitions contents copyrights
          are subject to exclusive disclaimer. All rights are registered and
          protected.
          <br /> <br />
          1.4. The Portal consists of an informative message about organized
          architecture competition (including Competition Terms and Conditions,
          Competition Brief, photos, and any accompanying information) posted on
          the Portal by the Administrator and addressed to a specific group of
          persons - Participants.
          <br /> <br />
          1.5. According to these Terms, only Administrator selected
          Competitions are being placed and published on the Portal. All users
          are eligible to search, browse Competitions, as well as receive other
          services offered on the Portal. Additional terms, conditions, and
          restrictions may apply to all Competitions (see relevant Competition
          Terms and Conditions, Competition Brief).
          <br /> <br />
          1.6. Searching, browsing, and viewing the Competitions placed on the
          Portal or other publicly available information placed on the Portal is
          possible without registration and/or authorization. By performing the
          above actions, the User is in any case obliged to comply with the
          Terms and Conditions and the Privacy Policy.
        </p>
        <h5 className="mb-4 text-xl font-bold dark:text-black sm:px-16 xl:px-48">
          2. REGISTRATION RULES
        </h5>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 ">
          2.1. Using the Portal, the User has the right to apply for
          participation in the Competitions indicated on the Portal.
          <br /> <br />
          2.2. The User has the right to apply for participation in the
          Competitions indicated on the Portal only after registration.
          <br /> <br />
          2.3. In the process of registration, the User indicates the data
          requested in the registration form - a name, e-mail address, and phone
          number, as well as team member data (together hereinafter - the Data).
          <br /> <br />
          2.4. The User irrevocably agrees that the Administrator transfers all
          Data to the competition organizers (see Privacy Policy). The
          Administrator is not responsible for the veracity of the Data entered
          by the User.
          <br /> <br />
          2.5. The Administrator disclaims any liability for the contents of the
          User Submission and expressed opinions in relation to Competitions,
          products, or services on this Portal, as well as opinions expressed or
          published about Buildner Competitions outside the Portal.
        </p>
        <h5 className="mb-4 text-xl font-bold dark:text-black sm:px-16 xl:px-48">
          3. SERVICE FEES
        </h5>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 ">
          3.1. A registration fee is charged when applying for the competition
          on the Portal.
          <br /> <br />
          3.2. Fees may also be charged on the Portal for other paid services
          applied for by the User.
          <br /> <br />
          3.3. Payment is made with the payment methods available on the Portal
          in Rupees through Paytm, by Credit card, Debit card, UPI, Net Banking.
        </p>
        <h5 className="mb-4 text-xl font-bold dark:text-black sm:px-16 xl:px-48">
          4. OBLIGATIONS OF THE USER
        </h5>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 ">
          4.1. The User undertakes not to use automatic or other programs to
          gain access to the Portal, including unauthorized access. Without the
          consent of the Administrator, the use, distribution, copying and / or
          retrieval of any materials or information (including Classifieds,
          descriptions, photographs, etc.) from the Portal manually or
          automatically (using software means) is not permitted.
        </p>
        <h5 className="mb-4 text-xl font-semibold dark:text-black sm:px-16 xl:px-48">
          4.2. In addition, the User undertakes:
        </h5>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 ">
          4.2.1. Not to copy, reproduce, modify, distribute or provide any
          information posted on the Portal without the written consent of the
          Administrator;
          <br /> <br />
          4.2.2. Not to take any actions that may cause a disproportionate load
          on the Portal infrastructure;
          <br /> <br />
          4.2.3. Not to obstruct the operation of the Portal, as well as not to
          obstruct the operation of automatic systems or processes, with the
          intention to block or restrict access to the Portal.
          <br /> <br />
          4.3. In order to prevent User violations and / or damage to the
          Administrator (for example, in case of DDoS-attacks or other hacker
          attacks, etc.), the Administrator has the right to restrict the User
          or third parties access to the Portal by blocking access to the
          Portal.
          <br /> <br />
          4.4. The User agrees that the Administrator is not responsible for
          possible losses caused to the User due to taking measures to prevent
          violations on the Portal related to the User access to the site, as
          well as restriction / blocking of IP-addresses.
          <br /> <br />
          4.5. The User agrees to indemnify Administrator and Organizer from all
          claims, liability, damages, losses, costs, expenses and legal fees
          arising out of breach of these Terms and Conditions by the User or any
          other liability arising out of the User use of this Portal.
        </p>
        <h5 className="mb-4 text-xl font-bold dark:text-black sm:px-16 xl:px-48">
          5. USER INFORMATION AND CONSENT
        </h5>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 ">
          5.1. By exercising access to the Portal, the User consents to receive
          advertising information posted on the Portal by third parties. The
          User understands and agrees that the Administrator does not determine
          the content of such information and is not responsible for it.
        </p>
        <h5 className="mb-4 text-xl font-bold dark:text-black sm:px-16 xl:px-48">
          6. CLAIMS AND DISPUTE RESOLUTION PROCEDURE
        </h5>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 ">
          6.1. If the User has complaints about the services or operation of the
          Portal, then the User is invited to first contact the Administrator,
          describing the situation and sending an e-mail to:{" "}
          <a href={`mailto:${emailAddress}`} style={linkStyle}>
            {emailAddress}
          </a>
          <br /> <br />
          6.2. If disputes cannot be resolved through negotiations, they shall
          be resolved in accordance with the laws and regulations applicable in
          India. The jurisdiction of the court shall be determined based on the
          legal address of the Administrator at the time of initiating legal
          proceedings.
        </p>
        <h5 className="mb-4 text-xl font-bold dark:text-black sm:px-16 xl:px-48 uppercase">
          7. Refund Policy: No Returns/Refunds
        </h5>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 ">
          The Administrator has a strict no returns/refunds policy. Once a user
          has made a payment for a competition registration fee or any other
          paid services, the payment is non-refundable. The Administrator is not
          liable for any dissatisfaction or issues arising from the use of the
          Portal.
          <br /> <br />
        </p>
        <h5 className="mb-4 text-xl font-bold dark:text-black sm:px-16 xl:px-48">
          8. CONCLUSION
        </h5>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 ">
          The User is obliged to get acquainted with the current wording of the
          Terms before each use of the Portal services. Use of the Portal after
          the entry into force of the new wording of the Terms means that the
          User agrees to it and the Terms in the new wording are applicable to
          User in full.
          <br /> <br />
        </p>
        <h5 className="mb-4 text-xl font-bold dark:text-black sm:px-16 xl:px-48">
          Date of wording: October 5, 2023
        </h5>
        <h5 className="mb-4 text-xl font-bold dark:text-black sm:px-16 xl:px-48">
          Date of publication: October 5, 2023
        </h5>
        <br /> <br />
        <br /> <br />
      </div>
    </div>
  );
}
