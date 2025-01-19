import React, { useState } from "react";

const ImagePicker = (props) => {
  const [image, setImage] = useState<File | null>(null); // Initialize with null
  const [preview, setPreview] = useState<string | null>("https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="); // For image preview URL

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      setImage(selectedFile);

      // Generate a preview URL
      const previewURL = URL.createObjectURL(selectedFile);
      setPreview(previewURL);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      {preview ? (
        <img src={preview} alt="Selected" className="mb-5 w-1/2"/>
      ) : (
        <p>No image selected</p>
      )}

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange} // Handle file input change
        className="w-1/2 px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2  focus:ring-[#318eda] focus:border-[#318eda] outline-none transition-all mb-2"
        id={props.id}
      />
      {/* {image && (
        <div className="mt-2">
          <p>Selected File: {image.name}</p>
        </div>
      )} */}
    </div>
  );
};

export default ImagePicker;
