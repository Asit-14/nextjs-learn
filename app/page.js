import Link from "next/link";
export default    function Home() {


  return (
    <>
      <h1>home page this is u know na </h1>
      <Link href="/about"> About page</Link>

      <Link href="/services"> services page</Link>
    </>
  );
}



export const metadata = {
  title: 'Asit kumar',
  Discription: 'Hey there what  are u  doing ',
};
