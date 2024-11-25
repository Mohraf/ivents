import React from 'react'

const Experiences = () => {
    return (
      <>
        <div className="text-center py-12 bg-slate-200">
          <h2 className="text-4xl font-bold mb-2 text-black">iVENTFUL EXPERIENCES</h2>
          <h3 className="text-xl green mb-8">by the numbers</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-7xl mx-auto px-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-bold mb-2 green">30+</h4>
              <p className="text-gray-600">Years on the market</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-bold mb-2 green">18</h4>
              <p className="text-gray-600">Years of experience average/consultant</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-bold mb-2 green">55+</h4>
              <p className="text-gray-600">Employees</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-bold mb-2 green">50+</h4>
              <p className="text-gray-600">Clients from a variety of industries</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-bold mb-2 green">500+</h4>
              <p className="text-gray-600">Events/year</p>
            </div>
          </div>
        </div>
      </>
    )
  }

export default Experiences