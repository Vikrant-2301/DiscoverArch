"use client";
import React, { Suspense } from "react";
import Buy from "./Buy";
import { useRouter } from "next/navigation"; // Use 'next/router' instead of 'next/navigation'
import Loading from "@/app/loading";
import { NextResponse } from "next/server";
const dotenv = require("dotenv");
dotenv.config();

const BuyProduct = () => {
  const router = useRouter();

  const makePayment = async () => {
    const key = "rzp_test_BFxkLQxfMEgTnu";

    const response = await fetch("/api/razorpay");
    const { order } = await response.json();

    const options = {
      key: key,
      name: "DiscoverArch",
      currency: "INR",
      amount: order.amount,
      order_id: order.id,
      description: "Understanding RazorPay Integration",
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
          router.push(
            `/paymentsuccess?paymentid=${response.razorpay_payment_id}`
          );
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

  return (
    <Suspense fallback={<Loading />}>
      <Buy makePayment={makePayment} />
    </Suspense>
  );
};

export default BuyProduct;
