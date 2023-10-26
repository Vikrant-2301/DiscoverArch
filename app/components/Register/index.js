"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

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
    const key = "rzp_test_BFxkLQxfMEgTnu";
    const totalAmount = numStudents * 10000; // Assuming 100 rupees per student
    setLoadingPayment(true);
    const response = await fetch("/api/razorpay", {
      method: "POST",
      body: JSON.stringify({ totalAmount: totalAmount }), // Pass the totalAmount
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { order } = await response.json();

    const options = {
      key: key,
      name: "DiscoverArch",
      currency: "INR",
      amount: totalAmount, // Amount should be in paise
      description: "Understanding RazorPay Integration",
      order_id: order.id, // Set the order ID here
      handler: async function (response) {
        // Handle the response from Razorpay
        const paymentData = {
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
        };

        // Make a server request to verify the payment
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

          // Submit the data for multiple students to your API endpoint
          const studentsData = students.filter(
            (student) => student.name.trim() !== ""
          );

          if (studentsData.length < 1) {
            toast.error("Please enter at least one student's name.");
            return;
          }

          try {
            e.preventDefault();
            // Call /api/form to append data to the database
            const formResponse = await axios.post("/api/form", {
              students: studentsData,
              paymentData: paymentData, // Include payment data
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
          }
        } else {
          console.log("Payment failed");
        }
      },
      // prefill: {
      //   name: "DiscoverArch",
      //   email: "discoverarch@gmail.com",
      //   contact: "7973617761",
      // },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    paymentObject.on("payment.failed", function (response) {
      alert("Payment failed. Please try again. Contact support for help");
    });
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
      // Submit the data for multiple students to your API endpoint
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
      setLoadingUpdate(false); // Hide loading indicator
    }
  };

  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Register Now</h2>
        <form action="#" onSubmit={makePayment}>
          <div className="w-full">
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
              className="w-full space-y-4 border border-gray-300 p-4 rounded-lg mb-4"
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
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
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
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
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
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
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
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
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
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
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
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Phone"
                value={student.phone}
                onChange={(e) => handleStudentFieldChange(e, index, "phone")}
                required
              />
            </div>
          ))}
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover-bg-primary-800"
            disabled={loadingPayment || loadingUpdate} // Disable the button during loading
          >
            {loadingPayment
              ? "Processing Payment..."
              : loadingUpdate
              ? "Updating Database..."
              : "Register Students"}
          </button>
        </form>
      </div>
      <Toaster />
    </section>
  );
}
export default Register;
