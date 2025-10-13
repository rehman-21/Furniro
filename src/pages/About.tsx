import React from 'react'
import { PageHeader } from '../components/Commons/HeadingTitle'

export const About:React.FC = () => {
  return (
    <>
    <div>
      <PageHeader title="About" to="/about" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-10 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-3">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            We craft beautiful, functional furniture designed to elevate everyday living.
            Our mission is to bring comfort and style to every home with quality materials
            and thoughtful design.
          </p>
        </div>
        <div className="bg-gray-100 rounded-lg h-48 md:h-64" />
      </div>
    </div>
    </>
  )
}
