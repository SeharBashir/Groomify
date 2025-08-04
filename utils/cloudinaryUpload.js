// utils/NetworkUtils.js or utils/cloudinaryUpload.js

export const uploadImageToCloudinary = async (imageUri) => {
  const cloudName = 'djcnuxf7r';
  const uploadPreset = 'groomifysalon';

  const formData = new FormData();
  formData.append('file', {
    uri: imageUri,
    type: 'image/jpeg',
    name: 'upload.jpg',
  });
  formData.append('upload_preset', uploadPreset);

  try {
    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error('Cloudinary upload failed:', error);
    throw error;
  }
};
