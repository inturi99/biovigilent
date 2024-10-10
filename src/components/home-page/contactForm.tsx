export default function ContactUs() {
  return (
    <section className="flex px-7 my-5 items-stretch h-[75vh] justify-center">
      <div className="flex pl-7 h-full items-stretch justify-between">
        <div className="flex flex-col border p-16 gap-11 w-1/2 bg-[#E8F5F3] h-full">
          <header className="flex flex-col gap-4">
            <h3 className="font-poppins font-bold text-xl text-[#336DBC] underline decoration-[3px] decoration-[#69D7C1] underline-offset-8">
              Contact Us
            </h3>
            <h1 className="text-5xl font-poppins font-bold">Get in Touch with Us</h1>
          </header>
          <p className="font-poppins text-[#767676]">
            Have questions or need more information about our clinical audit services? We're here to help. Reach out to us through any of
            the methods below, and our team will be happy to assist you.
          </p>
        </div>

        <ContactForm />
        <img className="self-end py-7 px-2" src="/scroll_up.svg" alt="scroll_up" />
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <div className="w-1/2 h-full flex flex-col gap-4 items-center justify-center border-t border-r border-b border-[#D7D7D7] p-4">
      <h6 className="text-[#336DBC]">* Required field</h6>
      <form className="flex flex-col gap-8 w-full font-poppins text-[#3A3A3A]">
        <div className="flex gap-3 items-center w-full px-4">
          <div className="flex flex-col items-start w-full">
            <label>Full name*</label>
            <input className="border border-[#D7D7D7] w-full rounded-md p-1 py-1.5 outline-none" type="text" />
          </div>
          <div className="flex flex-col items-start w-full">
            <label>Mail ID*</label>
            <input className="border border-[#D7D7D7] w-full rounded-md p-1 py-1.5 outline-none" type="text" />
          </div>
        </div>
        <div className="flex gap-3 items-center w-full px-4 font-poppins">
          <div className="flex flex-col items-start w-full">
            <label>Phone*</label>
            <input className="border border-[#D7D7D7] w-full rounded-md p-1 py-1.5 outline-none" type="text" />
          </div>
          <div className="flex flex-col items-start w-full">
            <label>Website</label>
            <input className="border border-[#D7D7D7] w-full rounded-md p-1 py-1.5 outline-none" type="text" />
          </div>
        </div>
        <div className="w-full px-4 font-poppins">
          <label className="font-poppins">Message</label>
          <textarea className="border border-[#D7D7D7] w-full rounded-md outline-none p-1 py-1.5" rows={4}></textarea>
        </div>
      </form>
      <footer className="flex flex-col justify-start gap-4 px-4 text-sm">
        <div className="flex h-full items-start gap-3 justify-start">
          <input className="mt-1.5" type="checkbox" />
          <p className="font-poppins">
            Sign me up to receive updates on our latest audit services, industry insights, and upcoming events."
          </p>
        </div>
        <p className="font-poppins font-normal">
          By submitting this form, I authorize Bio Vigilent to contact me regarding this inquiry or according to my choice to register for
          future communications. See our Privacy Policy for more detail or opt-out at any point using the unsubscribe link on any of our
          emails.
        </p>
      </footer>
      <button className="self-center text-white rounded-full bg-[#336DBC] tracking-wide font-poppins px-10 py-2 tracking-wide font-semibold">
        Submit
      </button>
    </div>
  );
}
