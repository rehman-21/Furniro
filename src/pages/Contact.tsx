import React from "react";
import { HeadingTitle, PageHeader } from "../components/Commons/HeadingTitle";
import {
  ContactForm,
  ContactInfo,
  ServiceHighlights,
} from "../components/components";

export const Contact: React.FC = () => {
  return (
    <>
      <div>
        <PageHeader title="Contact" to="/contact" />
        <HeadingTitle
          title="Get In Touch With Us"
          className="text-3xl font-bold my-4 text-center"
        />
        <p className="text-center md:text-center mb-10 px-10 text-gray-500 text-xxl text-ellipsis">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do
          Not Hesitate!.
        </p>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16 py-10 grid md:grid-cols-2 gap-8">
            <ContactInfo />
            <ContactForm />
        </div>
        <ServiceHighlights />
      </div>
    </>
  );
};
