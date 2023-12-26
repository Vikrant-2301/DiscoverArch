import React from "react";

export default function Page() {
  const emailAddress = "contact.discoverarch@gmail.com";
  const linkStyle = {
    color: "blue",
    textDecoration: "none",
  };

  return (
    <div className="px-4 py-2 md:my-20 ">
      <div>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl sm:px-16 xl:px-48 lg:text-6xl dark:text-black">
          Privacy Policy
        </h1>
        <h3 className="mb-8 text-3xl font-normal dark:text-black sm:px-16 xl:px-48">
          Your privacy is very important to DiscoverArch, and for this reason,
          DiscoverArch collects and manages your personal data with the utmost
          attention, adopting specific security measures. Below, you will find
          the main information on how DiscoverArch processes your personal data
          collected through our platform DiscoverArch.org. We invite you to read
          the following Privacy Policy, as well as our Cookie Policy and the
          General Conditions of Use of the Website.
        </h3>
        <h5 className="mb-4 text-xl font-bold dark:text-black sm:px-16 xl:px-48">
          1. Who is the owner of the processing of your personal data?
        </h5>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          In accordance with current Indian data protection legislation and the
          provisions of the Personal Data Protection Bill, 2019 (PDP Bill)
          regarding the protection of individuals in terms of processing their
          personal data, as well as the free circulation of such data, we inform
          you that the Controller of the processing of your personal data in
          India is DiscoverArch. Email:{" "}
          <a href={`mailto:${emailAddress}`} style={linkStyle}>
            {emailAddress}
          </a>
        </p>
        <h5 className="mb-4 text-xl font-bold dark:text-black sm:px-16 xl:px-48">
          2. Which personal data does DiscoverArch process and for which
          purposes?
        </h5>
        <h6 className="mb-4 text-xl font-normal dark:text-black sm:px-16 xl:px-48">
          Data provided voluntarily.
        </h6>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          No personal data is required for the simple browsing on the Website.
          DiscoverArch processes the personal data you provide with the purpose
          to create the account you will use to access the reserved area of the
          Website and to register and participate (by electronically filling in
          the appropriate form of registration) in the competitions promoted
          through our website, also with a Team. The personal data collected for
          the registration on the Website are; name of the participant or Team
          Name and e-mail address of a contact person, while the data collected
          by filling in the form for participation in one of the competitions
          promoted by DiscoverArch are: Full name, Mobile number, e-mail
          address, Date of birth, the role and the University of origin of the
          participant or of the individual members of the team, if the
          participation in the competition will be carried out by a team.
          Billing information will be requested from the person who will be
          marked as Team Leader.
        </p>
        <h6 className="mb-4 text-xl font-normal dark:text-black sm:px-16 xl:px-48">
          DiscoverArch also processes the following personal data:
        </h6>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          <ul>
            <li>
              • the contact or personal data that you provide when you contact
              us for information and / or assistance.
            </li>
            <li>• your e-mail address when you sign up for our newsletter.</li>
            <li>
              • the identity document which will be requested to the winning
              participants to verify their identity before the prizes are
              awarded.
            </li>
          </ul>
        </p>
        <h5 className="mb-4 text-xl font-bold dark:text-black sm:px-16 xl:px-48">
          The personal data provided will be used exclusively for the following
          purposes:
        </h5>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          <ul>
            <li>• Replying to your requests.</li>
            <li>• Managing contacts and sending communications.</li>
            <li>• Managing registration and authentication on the Website.</li>
            <li>
              • Managing the entries to the competitions promoted through the
              Website (registration, payment, etc.…).
            </li>
            <li>
              • Managing the activities related to the development of
              competitions (calendar for the project submission, monitoring of
              the correct sending of the required documentation...).
            </li>
            <li>• Managing prizes awarding process.</li>
            <li>
              • Managing the awards in terms of visibility and / or criticism to
              the winning participants.
            </li>
            <li>
              • Informing and updating you on future competitions that
              DiscoverArch organizes.
            </li>
            <li>
              • Publication of the competitions winning Team and its components
              in a dedicated session of the Website.
            </li>
          </ul>
        </p>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Only with the prior express consent of the team leader and the
          participants to the competition, the personal data will be processed
          for sending commercial or promotional communications regarding the
          initiatives, products and services offered by DiscoverArch and / or by
          its partners (Newsletter).
        </p>
        <h5 className="mb-4 text-xl font-bold dark:text-black sm:px-16 xl:px-48">
          Browsing data
        </h5>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          DiscoverArch may process the personal data it collects while you
          browse the Website or use the services offered by the Website. In
          fact, the IT systems and software procedures used to operate our
          website automatically acquire some personal data whose transmission is
          implicit in the use of the Internet communication protocols.
          <br /> <br />
          This category of data includes your IP addresses or the domain name of
          the computer you use to connect to the Website, the URI (Uniform
          Resource Identifier) addresses of the requested resources, the time of
          the request, the method used in submitting the request to the server,
          the size of the file obtained in response, the numerical code
          indicating the status of the response given by the server (successful,
          error, etc.) and other parameters relating to the operational system
          and your IT environment.
        </p>
        <h5 className="mb-4 text-xl font-bold dark:text-black sm:px-16 xl:px-48">
          These data are used exclusively for the following purposes:
        </h5>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          <ul>
            <li>• allow access to and navigation of the website.</li>
            <li>• obtain statistical information on the use of our website.</li>
            <li>
              • check the correct functioning of the website and to improve our
              offer and our services.
            </li>
          </ul>
        </p>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Browsing data are only processed for the time strictly necessary to
          fulfil the above-mentioned purposes.
        </p>
        <h5 className="mb-4 text-xl font-bold dark:text-black sm:px-16 xl:px-48">
          3. Legal bases of the processing, and mandatory or optional provision
          of data.
        </h5>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          DiscoverArch processes your personal data when one or more of the
          following conditions envisaged by the GDPR occurs:
          <br /> <br />
          3.1. Processing is necessary for the execution of a contract in which
          you are involved and / or for the execution of pre-contractual
          measures. This base legitimizes the personal data processing which
          takes place in the following activities:
        </p>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          <ul>
            <li>
              • conclusion and execution of the contract for the participation
              in one of DiscoverArch competitions.
            </li>
            <li>
              • registration on the Website and use of services reserved to
              registered users.
            </li>
            <li>
              • management of requests in relation to the development of
              competitions organized by DiscoverArch.
            </li>
            <li>• awarding of prizes and publication of the winners.</li>
            <li>
              • recognition in terms of visibility and / or criticism of some
              participants in the competitions.
            </li>
          </ul>
        </p>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          The provision of your personal data for these activities is a
          contractual obligation. You are free to communicate your data or not,
          but in the absence of the requested data, it will not be possible for
          us to conclude or execute the contract and respond to your requests
          and / or assign you the prizes of the competitions.
        </p>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          3.2. Processing is necessary to fulfil a legal obligation to which
          DiscoverArch is subject. In the event of the conclusion of a contract
          for the participation in a competition, the processing of your
          personal data will also be carried out with the aim of giving effect
          to the legal obligations to which DiscoverArch is subject in
          compliance with the tax provisions and other laws on the matter. The
          provision of your personal data for these activities is a contractual
          obligation. You are free to communicate your data to us or not, but in
          the absence of the requested data, it will not be possible for us to
          conclude or execute the contract and fulfil the legal obligations
          imposed on DiscoverArch.
        </p>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          3.3. You have given DiscoverArch a specific consent. We will carry out
          the following processing only if you have given us your express
          consent:
          <br /> • receiving commercial or promotional communications about the
          initiatives, products and services offered by DiscoverArch and / or by
          DiscoverArch partners.
        </p>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          3.4. The treatment is carried out based on the legitimate interest of
          DiscoverArch. DiscoverArch will process user data for general
          assistance activities and to respond to requests for information
          coming from users or to respond to any reports, complaints and / or
          disputes.
        </p>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          It is a legitimate interest of DiscoverArch to respond to user
          requests, which also coincides with the legitimate interest of the
          users of the Website that expect a reply from DiscoverArch to their
          requests.
        </p>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          The legitimate interest of DiscoverArch thus identified can be
          considered prevalent on the fundamental rights and freedoms of the
          interested party, also by virtue of these reasonable expectations and
          the relationship between the interested party and DiscoverArch, as
          well as for the nature of the data processed and the coinciding
          interest of the interested parties themselves.
        </p>
        <h5 className="mb-4 text-xl font-bold dark:text-black sm:px-16 xl:px-48">
          4. How do we process your personal data?
        </h5>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          The processing is carried out by DiscoverArch through the use of IT
          and / or telematic tools, designed to store, manage, and transmit the
          data for the aforementioned purposes.
        </p>
        <h5 className="mb-4 text-xl font-bold dark:text-black sm:px-16 xl:px-48">
          5. Who will process your personal data?
        </h5>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          The data processing will be carried out by personnel appointed and
          instructed by DiscoverArch, with procedures, technical and IT tools
          that guarantee the confidentiality and the safety of your personal
          data. <br />
          <br /> Apart from the communications and disclosures that will be made
          to fulfil legal obligations, the data may be disclosed to third
          parties operating on behalf of DiscoverArch and according to its
          instructions as Data Processors. The interested party may request a
          complete and updated list of the persons appointed as data processors
          by contacting one of the contacts indicated below. <br />
          <br /> The name of the winning team and of its participants or of the
          winner of the competition will be published in a dedicated session of
          the Website. The participants who will receive recognition in terms of
          visibility and / or criticism will also be made known, in a way that
          will be expressed from time to time.
        </p>
        <h5 className="mb-4 text-xl font-bold dark:text-black sm:px-16 xl:px-48">
          6. For how long do we keep your personal data and where?
        </h5>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          The information and personal data that you provide through the
          Website, including the data freely provided by filling out the forms
          on the Website, will be kept for a limited period to fulfil the
          purpose for which they are collected. Once the purpose is completed,
          your personal data will be deleted or destroyed, except different
          requests from the authority, conservation requirements established by
          law, or unless otherwise indicated sections of the Website. <br />
          <br />
        </p>
        <h5 className="mb-4 text-xl font-semibold lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 dark:text-black">
          Transfer of data abroad
        </h5>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          DiscoverArch will not transfer your personal data abroad. <br />
          <br /> Your data are processed at the Data Controller operating
          offices at MongoDB and are stored within servers located in India, at
          the offices of the reference provider appointed as Data Processor.
        </p>
        <h5 className="mb-4 text-xl font-bold dark:text-black sm:px-16 xl:px-48">
          7. Methods of exercising the rights of the interested party.
        </h5>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          You can request information about the methods of processing and the
          exercise of your rights as an interested party, through the following
          methods: <br />
          <br />• In case of doubts or clarifications regarding this Information
          or on the methods of processing of your personal data, you can contact
          the Data Controller DiscoverArch in - Email:{" "}
          <a href={`mailto:${emailAddress}`} style={linkStyle}>
            {emailAddress}
          </a>{" "}
          (the communication of any other type of information is forbidden)
        </p>
        <h5 className="mb-4 text-xl font-bold dark:text-black sm:px-16 xl:px-48">
          9. Changes to this privacy policy
        </h5>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          DiscoverArch can modify or simply update, in whole or in part, this
          Privacy Policy. Any modification or update to the Privacy Policy will
          be available to all users in the Privacy section of the Website as
          soon as the updates are active and will be binding as soon as they are
          published on the Website in this section: the date of the last update
          will also be indicated. We, therefore, invite you to periodically
          check the contents of our Privacy Policy. If you do not intend to
          accept these changes, you can stop using our website at any time.
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
