// app/layout.tsx
import './globals.css';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <header className="bg-gray-900 text-white p-4 text-center">
          <h1 className="text-2xl font-bold">Cửa Hàng Digital</h1>
        </header>

        {/* Nội dung chính */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white text-center p-4">
          <p>Bản quyền © 2024 - Cửa Hàng Digital</p>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
