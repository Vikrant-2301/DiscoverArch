"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

function Loader() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
      <div className="border-t-8 border-blue-500 border-solid h-16 w-16 rounded-full animate-spin"></div>
    </div>
  );
}

function Register() {
  const initialStudent = {
    name: "",
    email: "",
    academicYear: "",
    dob: "",
    collegeName: "",
    phone: "",
  };

  const [numStudents, setNumStudents] = useState(1);
  const [students, setStudents] = useState(
    Array(numStudents).fill(initialStudent)
  );
  const [loadingPayment, setLoadingPayment] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);

  const router = useRouter();

  const makePayment = async (e) => {
    e.preventDefault();
    try {
      const key = "rzp_live_8oRm9OX8RCbPFd";
      const totalAmount = numStudents * 20000;
      setLoadingPayment(true);
      const response = await fetch("/api/razorpay", {
        method: "POST",
        body: JSON.stringify({ totalAmount: totalAmount }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { order } = await response.json();

      const options = {
        key: key,
        name: "DiscoverArch",
        currency: "INR",
        amount: totalAmount,
        description: "Understanding RazorPay Integration",
        order_id: order.id,
        handler: async function (response) {
          const paymentData = {
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
          };

          const verifyResponse = await fetch("/api/paymentverify", {
            method: "POST",
            body: JSON.stringify(paymentData),
            headers: {
              "Content-Type": "application/json",
            },
          });

          const verificationResult = await verifyResponse.json();

          if (verificationResult.message === "success") {
            console.log("Payment successful");

            const studentsData = students.filter(
              (student) => student.name.trim() !== ""
            );

            if (studentsData.length < 1) {
              toast.error("Please enter at least one student's name.");
              return;
            }

            try {
              setLoadingUpdate(true);
              const formResponse = await axios.post("/api/form", {
                students: studentsData,
                paymentData: paymentData,
              });
              toast.success("Registering...");
              console.log("Form submitted successfully:", response);
              toast.success("Registration Success!");
              router.push(
                `/paymentsuccess?paymentid=${response.razorpay_payment_id}`
              );
            } catch (error) {
              toast.error(error.message);
              console.error("Error submitting form:", error);
            } finally {
              setLoadingUpdate(false);
            }
          } else {
            toast.error("Payment Failed!");
            router.push("/");
            console.log("Payment failed");
          }
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();

      window.addEventListener("beforeunload", function (event) {
        toast.error("Payment Failed! You have exited the payment process.");
      });

      paymentObject.on("payment.failed", function (response) {
        toast.error(
          "Payment failed. Please try again. Contact support for help"
        );
      });
    } catch (error) {
      toast.error("Payment Failed", error);
      router.push("/");
      console.log(error);
    }
  };

  const handleNumStudentsChange = (e) => {
    const num = parseInt(e.target.value, 10);
    setNumStudents(num);
    setStudents(
      Array(num)
        .fill(initialStudent)
        .map(() => ({ ...initialStudent }))
    );
  };

  const handleStudentFieldChange = (e, index, field) => {
    const updatedStudents = [...students];
    updatedStudents[index][field] = e.target.value;
    setStudents(updatedStudents);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const studentsData = students.filter(
      (student) => student.name.trim() !== ""
    );

    if (studentsData.length < 1) {
      toast.error("Please enter at least one student's name.");
      return;
    }

    try {
      setLoadingUpdate(true);
      const response = await axios.post("/api/form", {
        students: studentsData,
      });
      toast.success("Registering...");
      console.log("Form submitted successfully:", response);
      toast.success("Registration Success!");
      router.push("/");
    } catch (error) {
      toast.error(error.message);
      console.error("Error submitting form:", error);
    } finally {
      setLoadingUpdate(false);
    }
  };

  return (
    <section id="#register" className="bg-white text-[#010101] ">
      {loadingPayment || loadingUpdate ? <Loader /> : null}
      <div className="py-2 px-4 mx-auto max-w-2xl lg:py-2">
        <div className="mb-2 flex justify-center leading-8 items-center flex-col ">
          <h2 className=" text-3xl font-bold text-gray-900">Register Now</h2>
          <h2 className="text-md text-base">Per Student Fees: ₹200</h2>
        </div>
        <form action="#" onSubmit={makePayment} className="">
          <div className="w-full ">
            <label
              htmlFor="num-students"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Number of Students
            </label>
            <select
              id="num-students"
              name="num-students"
              value={numStudents}
              onChange={handleNumStudentsChange}
              className="bg-white border border-gray-300 text-gray-900 text-sm my-2 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            >
              {[1, 2, 3, 4].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          {students.map((student, index) => (
            <div
              key={index}
              className="w-full bg-[#f1f7fe]  space-y-4 border border-gray-300 p-4 rounded-lg mb-4"
            >
              <label
                htmlFor={`student-name-${index}`}
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Student {index + 1} Name
              </label>
              <input
                type="text"
                name={`student-name-${index}`}
                id={`student-name-${index}`}
                className="bg-white  text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Name"
                value={student.name}
                onChange={(e) => handleStudentFieldChange(e, index, "name")}
                required
              />
              <label
                htmlFor={`student-email-${index}`}
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Student {index + 1} Email
              </label>
              <input
                type="email"
                name={`student-email-${index}`}
                id={`student-email-${index}`}
                className="bg-white  text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Email"
                value={student.email}
                onChange={(e) => handleStudentFieldChange(e, index, "email")}
                required
              />
              <label
                htmlFor={`student-academic-year-${index}`}
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Student {index + 1} Academic Year
              </label>
              <input
                type="text"
                name={`student-academic-year-${index}`}
                id={`student-academic-year-${index}`}
                className="bg-white  text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Academic Year"
                value={student.academicYear}
                onChange={(e) =>
                  handleStudentFieldChange(e, index, "academicYear")
                }
                required
              />
              <label
                htmlFor={`student-dob-${index}`}
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Student {index + 1} Date of Birth
              </label>
              <input
                type="date"
                name={`student-dob-${index}`}
                id={`student-dob-${index}`}
                className="bg-white text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Date of Birth"
                value={student.dob}
                onChange={(e) => handleStudentFieldChange(e, index, "dob")}
                required
              />
              <label
                htmlFor={`student-college-name-${index}`}
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Student {index + 1} College Name
              </label>
              <input
                type="text"
                name={`student-college-name-${index}`}
                id={`student-college-name-${index}`}
                className="bg-white  text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="College Name"
                value={student.collegeName}
                onChange={(e) =>
                  handleStudentFieldChange(e, index, "collegeName")
                }
                required
              />
              <label
                htmlFor={`student-phone-${index}`}
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Student {index + 1} Phone
              </label>
              <input
                type="text"
                name={`student-phone-${index}`}
                id={`student-phone-${index}`}
                className="bg-white text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Phone"
                value={student.phone}
                onChange={(e) => handleStudentFieldChange(e, index, "phone")}
                required
              />
            </div>
          ))}
          <button
            type="submit"
            className="continue-application mx-auto flex justify-center"
            disabled={loadingPayment || loadingUpdate}
          >
            <div>
              <div className="pencil"></div>
              <div className="folder">
                <div className="top">
                  <svg viewBox="0 0 24 27">
                    <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                  </svg>
                </div>
                <div className="paper"></div>
              </div>
            </div>
            {loadingPayment
              ? "Redirecting to Payment..."
              : loadingUpdate
              ? "Submitting Details..."
              : "Continue Application"}
          </button>
        </form>
      </div>
      <Toaster />
    </section>
  );
}

export default Register;

// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import toast, { Toaster } from "react-hot-toast";

// function Register() {
//   const initialStudent = {
//     name: "",
//     email: "",
//     academicYear: "",
//     dob: "",
//     collegeName: "",
//     phone: "",
//   };

//   const [numStudents, setNumStudents] = useState(1);
//   const [students, setStudents] = useState(
//     Array(numStudents).fill(initialStudent)
//   );
//   const [loadingPayment, setLoadingPayment] = useState(false);
//   const [loadingUpdate, setLoadingUpdate] = useState(false);

//   const router = useRouter();

//   const makePayment = async (e) => {
//     e.preventDefault();
//     try {
//       const key = "rzp_test_BFxkLQxfMEgTnu";
//       const totalAmount = numStudents * 10000; // Assuming 100 rupees per student
//       setLoadingPayment(true);
//       const response = await fetch("/api/razorpay", {
//         method: "POST",
//         body: JSON.stringify({ totalAmount: totalAmount }), // Pass the totalAmount
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const { order } = await response.json();

//       const options = {
//         key: key,
//         name: "DiscoverArch",
//         currency: "INR",
//         amount: totalAmount, // Amount should be in paise
//         description: "Understanding RazorPay Integration",
//         order_id: order.id, // Set the order ID here
//         handler: async function (response) {
//           // Handle the response from Razorpay
//           const paymentData = {
//             razorpay_payment_id: response.razorpay_payment_id,
//             razorpay_order_id: response.razorpay_order_id,
//             razorpay_signature: response.razorpay_signature,
//           };

//           // Make a server request to verify the payment
//           const verifyResponse = await fetch("/api/paymentverify", {
//             method: "POST",
//             body: JSON.stringify(paymentData),
//             headers: {
//               "Content-Type": "application/json",
//             },
//           });

//           const verificationResult = await verifyResponse.json();

//           if (verificationResult.message === "success") {
//             console.log("Payment successful");

//             // Submit the data for multiple students to your API endpoint
//             const studentsData = students.filter(
//               (student) => student.name.trim() !== ""
//             );

//             if (studentsData.length < 1) {
//               toast.error("Please enter at least one student's name.");
//               return;
//             }

//             try {
//               e.preventDefault();
//               // Call /api/form to append data to the database
//               const formResponse = await axios.post("/api/form", {
//                 students: studentsData,
//                 paymentData: paymentData, // Include payment data
//               });
//               toast.success("Registering...");
//               console.log("Form submitted successfully:", response);
//               toast.success("Registration Success!");
//               router.push(
//                 `/paymentsuccess?paymentid=${response.razorpay_payment_id}`
//               );
//             } catch (error) {
//               toast.error(error.message);
//               console.error("Error submitting form:", error);
//             }
//           } else {
//             toast.error("Payement Failed!");
//             router.push("/");
//             console.log("Payment failed");
//           }
//         },
//         // prefill: {
//         //   name: "DiscoverArch",
//         //   email: "discoverarch@gmail.com",
//         //   contact: "7973617761",
//         // },
//       };
//       const paymentObject = new window.Razorpay(options);
//       paymentObject.open();

//       // Listen for the beforeunload event
//       window.addEventListener("beforeunload", function (event) {
//         // Show a toast message when the user is leaving the page
//         toast.error("Payment Failed! You have exited the payment process.");
//         // Optionally, you can return a custom message to be displayed in the browser dialog
//         // Uncomment the line below if you want to display a custom message in the browser dialog
//         // event.returnValue = "Are you sure you want to leave?";
//       });

//       paymentObject.on("payment.failed", function (response) {
//         toast.error(
//           "Payment failed. Please try again. Contact support for help"
//         );
//       });
//     } catch (error) {
//       toast.error("Payment Failed", error);
//       router.push("/");
//       console.log(error);
//     }
//   };

//   const handleNumStudentsChange = (e) => {
//     const num = parseInt(e.target.value, 10);
//     setNumStudents(num);
//     setStudents(
//       Array(num)
//         .fill(initialStudent)
//         .map(() => ({ ...initialStudent }))
//     );
//   };

//   const handleStudentFieldChange = (e, index, field) => {
//     const updatedStudents = [...students];
//     updatedStudents[index][field] = e.target.value;
//     setStudents(updatedStudents);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const studentsData = students.filter(
//       (student) => student.name.trim() !== ""
//     );

//     if (studentsData.length < 1) {
//       toast.error("Please enter at least one student's name.");
//       return;
//     }

//     try {
//       setLoadingUpdate(true);
//       // Submit the data for multiple students to your API endpoint
//       const response = await axios.post("/api/form", {
//         students: studentsData,
//       });
//       toast.success("Registering...");
//       console.log("Form submitted successfully:", response);
//       toast.success("Registration Success!");
//       router.push("/");
//     } catch (error) {
//       toast.error(error.message);
//       console.error("Error submitting form:", error);
//     } finally {
//       setLoadingUpdate(false); // Hide loading indicator
//     }
//   };

//   return (
//     <section id="#register" className="bg-white text-[#010101]">
//       <div className="py-2 px-4 mx-auto max-w-2xl lg:py-2">
//         <div className="mb-2 flex justify-center leading-8 items-center flex-col ">
//           <h2 className=" text-3xl font-bold text-gray-900">Register Now</h2>
//           <h2 className="text-md text-base">Per Student Fees : ₹100</h2>
//         </div>
//         <form action="#" onSubmit={makePayment}>
//           <div className="w-full ">
//             <label
//               htmlFor="num-students"
//               className="block mb-2 text-sm font-medium text-gray-900"
//             >
//               Number of Students
//             </label>
//             <select
//               id="num-students"
//               name="num-students"
//               value={numStudents}
//               onChange={handleNumStudentsChange}
//               className="bg-white border border-gray-300 text-gray-900 text-sm my-2 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
//             >
//               {[1, 2, 3, 4].map((num) => (
//                 <option key={num} value={num}>
//                   {num}
//                 </option>
//               ))}
//             </select>
//           </div>
//           {students.map((student, index) => (
//             <div
//               key={index}
//               className="w-full bg-[#f1f7fe]  space-y-4 border border-gray-300 p-4 rounded-lg mb-4"
//             >
//               <label
//                 htmlFor={`student-name-${index}`}
//                 className="block mb-2 text-sm font-medium text-gray-900"
//               >
//                 Student {index + 1} Name
//               </label>
//               <input
//                 type="text"
//                 name={`student-name-${index}`}
//                 id={`student-name-${index}`}
//                 className="bg-white  text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
//                 placeholder="Name"
//                 value={student.name}
//                 onChange={(e) => handleStudentFieldChange(e, index, "name")}
//                 required
//               />
//               <label
//                 htmlFor={`student-email-${index}`}
//                 className="block mb-2 text-sm font-medium text-gray-900"
//               >
//                 Student {index + 1} Email
//               </label>
//               <input
//                 type="email"
//                 name={`student-email-${index}`}
//                 id={`student-email-${index}`}
//                 className="bg-white  text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
//                 placeholder="Email"
//                 value={student.email}
//                 onChange={(e) => handleStudentFieldChange(e, index, "email")}
//                 required
//               />
//               <label
//                 htmlFor={`student-academic-year-${index}`}
//                 className="block mb-2 text-sm font-medium text-gray-900"
//               >
//                 Student {index + 1} Academic Year
//               </label>
//               <input
//                 type="text"
//                 name={`student-academic-year-${index}`}
//                 id={`student-academic-year-${index}`}
//                 className="bg-white  text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
//                 placeholder="Academic Year"
//                 value={student.academicYear}
//                 onChange={(e) =>
//                   handleStudentFieldChange(e, index, "academicYear")
//                 }
//                 required
//               />
//               <label
//                 htmlFor={`student-dob-${index}`}
//                 className="block mb-2 text-sm font-medium text-gray-900"
//               >
//                 Student {index + 1} Date of Birth
//               </label>
//               <input
//                 type="date"
//                 name={`student-dob-${index}`}
//                 id={`student-dob-${index}`}
//                 className="bg-white text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
//                 placeholder="Date of Birth"
//                 value={student.dob}
//                 onChange={(e) => handleStudentFieldChange(e, index, "dob")}
//                 required
//               />
//               <label
//                 htmlFor={`student-college-name-${index}`}
//                 className="block mb-2 text-sm font-medium text-gray-900"
//               >
//                 Student {index + 1} College Name
//               </label>
//               <input
//                 type="text"
//                 name={`student-college-name-${index}`}
//                 id={`student-college-name-${index}`}
//                 className="bg-white  text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
//                 placeholder="College Name"
//                 value={student.collegeName}
//                 onChange={(e) =>
//                   handleStudentFieldChange(e, index, "collegeName")
//                 }
//                 required
//               />
//               <label
//                 htmlFor={`student-phone-${index}`}
//                 className="block mb-2 text-sm font-medium text-gray-900"
//               >
//                 Student {index + 1} Phone
//               </label>
//               <input
//                 type="text"
//                 name={`student-phone-${index}`}
//                 id={`student-phone-${index}`}
//                 className="bg-white text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
//                 placeholder="Phone"
//                 value={student.phone}
//                 onChange={(e) => handleStudentFieldChange(e, index, "phone")}
//                 required
//               />
//             </div>
//           ))}
//           <button
//             type="submit"
//             className="continue-application mx-auto flex justify-center  "
//             disabled={loadingPayment || loadingUpdate} // Disable the button during loading
//           >
//             <div>
//               <div class="pencil"></div>
//               <div class="folder">
//                 <div class="top">
//                   <svg viewBox="0 0 24 27">
//                     <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
//                   </svg>
//                 </div>
//                 <div class="paper"></div>
//               </div>
//             </div>
//             {loadingPayment
//               ? "Redirecting to Payment..."
//               : loadingUpdate
//               ? "Submitting Details..."
//               : "Continue Application"}
//           </button>
//         </form>
//       </div>
//       <Toaster />
//     </section>
//   );
// }
// export default Register;
