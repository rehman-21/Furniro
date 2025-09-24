import React from 'react'
import {
  CustomInput,
  LabelComp,
} from "../../components/components";

export const ContactForm: React.FC = () => {
  return (
   <>
    <form className="space-y-6">
              <LabelComp LabelTag="Your Name" htmlFor="name" />
              <CustomInput
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded"
                required
                onChange={() => {}}
              />

              <LabelComp LabelTag="Email Address" htmlFor="email" />
              <CustomInput
                type="email"
                name="email"
                placeholder="Abc@det.com"
                className="w-full p-3 border border-gray-300 rounded"
                required
                onChange={() => {}}
              />

              <LabelComp LabelTag="Subject" htmlFor="subject" />
              <CustomInput
                type="text"
                name="subject"
                placeholder="This is an optional"
                className="w-full p-3 border border-gray-300 rounded"
                required
                onChange={() => {}}
              />

              <LabelComp LabelTag="Message" htmlFor="message" />
              <textarea
                name="message"
                placeholder="Hi I'd like to ask about..."
                className="w-full p-3 border border-gray-300 rounded h-32"
                required
              ></textarea>

              <button
                type="submit"
                className="bg-[#B88E2F] text-white px-8 py-3 rounded hover:bg-[#f1cb72]"
              >
                Submit
              </button>
            </form>
   </>
  )
}

