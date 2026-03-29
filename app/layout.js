export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <header style={{background :"teal"}}>header </header>
      <body>{children}</body>

      <footer style={{background :"red"}}>footer</footer>
    </html>
  );
}
