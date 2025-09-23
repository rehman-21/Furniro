import React from 'react'
import { PageHeader } from '../components/Commons/HeadingTitle'

export const Contact:React.FC = () => {
  return (
    <>
    <div>
        <PageHeader title="Contact" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-10 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-3">Get in touch</h2>
            <form className="space-y-4">
              <input className="w-full border rounded-md px-3 py-2" placeholder="Your name" />
              <input className="w-full border rounded-md px-3 py-2" placeholder="Your email" />
              <textarea className="w-full border rounded-md px-3 py-2 h-28" placeholder="Message" />
              <button className="px-4 py-2 bg-black text-white rounded-md">Send</button>
            </form>
          </div>
          <div className="bg-gray-100 rounded-lg h-56 md:h-72" />
        </div>
    </div>
    </>
  )
}
