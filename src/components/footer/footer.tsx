export default function FooterComponent() {
  return (
    <footer className="flex flex-col px-7 gap-7 items-center justify-center bg-[#E8F5F3] py-3">
      <header className="flex justify-between w-full pl-7">
        <img src="./logo.svg" alt="logo" />
        <ul className="flex [&>*]:mx-12 items-center font-poppins">
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <p className="w-[25%] mr-6 font-poppins">Address : Flat.No.40, 1st Floor, Block No.03, MIG, KPHB 5th Phase, Hyderabad - 500072.</p>
      </header>
      <main className="flex flex-col justify-center items-center w-full gap-3">
        <p className="font-poppins font-semibold">Follow us</p>
        <ul className="flex [&>*]:mx-3">
          <li>
            <img src="./twitter.svg" alt="twitter" />
          </li>
          <li>
            <img src="./linkedin.svg" alt="linkedin" />
          </li>
          <li>
            <img src="./facebook.svg" alt="facebook" />
          </li>
          <li>
            <img src="./instagram.svg" alt="instagram" />
          </li>
        </ul>
      </main>
      <div className="w-[95%] mr-6 h-0.5 bg-black"></div>
      <div className="flex items-center justify-center">
        <img src="./copyright.svg" alt="copyright" />
        <p>Bio Vigilent.LLP, All Rights Reserved.</p>
      </div>
    </footer>
  );
}
