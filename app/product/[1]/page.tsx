"use client";

import React, { useState } from 'react';

// Dữ liệu mẫu cho các sản phẩm
const products = [
  {
    id: '1',
    name: 'Ace Chibi',
    description: 'Mô hình nhân vật Ace Chibi, có thể in 3D.',
    price: 0.91,
    downloadLink: '/path-to-download', // Đường dẫn tải xuống
    images: [
      '/product1.gif',
      '/product1_2.jpg',
    ],
  },
  // Thêm sản phẩm khác tại đây
];

const ProductDetail = ({ params }: { params: { id: string } }) => {
  // Debug để kiểm tra giá trị params.id
  console.log('params.id:', params.id);

  // Tìm sản phẩm dựa trên ID
  const product = products.find((p) => p.id === params.id);

  // Nếu sản phẩm không tồn tại, hiển thị thông báo
  if (!product) {
    return <div>Sản phẩm không tồn tại</div>;
  }

  // Ảnh lớn hiện tại
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-white">{product.name}</h1>

      {/* Hiển thị ảnh phóng to */}
      <div className="mt-4">
        <img
          src={selectedImage}
          alt={product.name}
          className="w-full h-96 object-cover"
        />
      </div>

      {/* Ảnh nhỏ để chọn */}
      <div className="flex mt-4 space-x-4">
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${product.name} ${index + 1}`}
            className={`w-24 h-24 object-cover cursor-pointer ${
              selectedImage === image ? 'border-4 border-blue-500' : ''
            }`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {/* Mô tả sản phẩm */}
      <p className="text-gray-300 mt-6">{product.description}</p>

      {/* Thông tin thêm và nút tải xuống */}
      <div className="mt-6">
        <p className="text-xl text-white">Giá: ${product.price}</p>
        <a
          href={product.downloadLink}
          className="inline-block mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          Tải xuống
        </a>
      </div>
    </div>
  );
};

export default ProductDetail;
