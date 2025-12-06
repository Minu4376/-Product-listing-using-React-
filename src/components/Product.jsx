import React from 'react'

const Product = ({ title, price, image, rating, category }) => {
  const showMessage = (name) => {
    console.log("product name  :" + name)
  }

  return (
    <div className='bg-white/90 backdrop-blur-md border border-orange-300 shadow-xl rounded-2xl p-4 flex-col h-full transform hover:translate-y-2 hover:shadow-amber-600 transition-all duration-300 gap-2'>
      <img className="w-120 h-90" src={image} alt={title} />
      <h2 className='font-medium'>{title}</h2>
      <h2 className='text-orange-700 font-semibold'>{category}</h2>
      <h2 className='text-center text-3xl font-extrabold'>{price} $</h2>
      <div className="flex items-center justify-center m-3 space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 ${star <= rating ? "text-yellow-400" : "text-gray-300"
              }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.463a1 1 0 00-.364 1.118l1.287 3.973c.3.922-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.176 0l-3.39 2.462c-.784.57-1.838-.196-1.539-1.118l1.287-3.973a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.973z" />
          </svg>
        ))}
      </div>
      <button onClick={() => { showMessage(title) }} className="mt-auto w-full rounded-lg bg-gradient-to-r from-orange-500  to-orange-300 text-white py-2">
        Add to Cart
      </button>
    </div>
  )
}

export default Product