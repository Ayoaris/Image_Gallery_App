import React from 'react'

const ImageCard = ({ image }) => {
  
  const tags = image.tags.split(',');
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border-4 border-teal-500">
      <img src={image.webformatURL} alt="" className="w-full"></img>
      <div className="px-10 py-6">
        <div className="font-bold text-center text-teal-500 text-xl mb-6">
          {image.user}
        </div>
        <ul>
          <li className="text-center">
            <strong>Views: </strong>
            {image.views}
          </li>
          <li className="text-center">
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li className="text-center">
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-5">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="flex my-2 bg-teal-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ImageCard