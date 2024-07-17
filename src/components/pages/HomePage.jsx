import Footer from "../Footer.jsx";
import Navbar from "../Navbar.jsx";

export default function HomePage() {
  return (
    <div className="flex w-full flex-col min-h-[100dvh]">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-7">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Secure Your Crypto with Our Ethereum Wallet
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our user-friendly Ethereum wallet provides top-notch
                    security, seamless cross-platform compatibility, and easy
                    access to your digital assets.
                  </p>
                  <div className="mt-8">
                    <a
                      href="get-started"
                      className="py-2 rounded-2xl items-center justify-center bg-primary px-10 text-xl font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <img
                src="/eth-wallet.jpg"
                width="550"
                height="510"
                alt="Ethereum Wallet"
                className="mx-auto aspect-video overflow-hidden rounded-2xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid gap-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Why Choose Our Ethereum Wallet?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our Ethereum wallet offers a secure, user-friendly, and
                  cross-platform experience to manage your digital assets.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl divide-y divide-border rounded-lg border md:grid-cols-3 md:divide-x md:divide-y-0">
              <div className="grid gap-1 p-8 md:p-10">
                <h3 className="text-xl font-bold">Secure Storage</h3>
                <p className="text-muted-foreground">
                  Your private keys are stored securely on your device, ensuring
                  your assets are protected.
                </p>
              </div>
              <div className="grid gap-1 p-8 md:p-10">
                <h3 className="text-xl font-bold">Easy to Use</h3>
                <p className="text-muted-foreground">
                  Our intuitive interface makes managing your Ethereum seamless,
                  even for beginners.
                </p>
              </div>
              <div className="grid gap-1 p-8 md:p-10">
                <h3 className="text-xl font-bold">Cross-Platform</h3>
                <p className="text-muted-foreground">
                  Access your wallet from any device, whether it&apos;s your
                  desktop, mobile, or tablet.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="security" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-8">
              <div className="inline-block rounded-3xl bg-muted px-3 py-1 text-sm">
                Security
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Safeguard Your Crypto Assets
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our Ethereum wallet employs industry-leading security measures
                to protect your digital assets, including end-to-end encryption,
                two-factor authentication, and offline storage options.
              </p>
            </div>
            <img
              src="/eth-wallet.jpg"
              width="550"
              height="310"
              alt="Ethereum Wallet Security"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </section>
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  FAQ
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about our Ethereum wallet.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl divide-y divide-border rounded-lg border md:grid-cols-2 md:divide-x md:divide-y-0">
              <div className="grid gap-1 p-8 md:p-10">
                <h3 className="text-xl font-bold">
                  How secure is your Ethereum wallet?
                </h3>
                <p className="text-muted-foreground">
                  Our Ethereum wallet uses industry-leading security measures,
                  including end-to-end encryption, two-factor authentication,
                  and offline storage options, to ensure your digital assets are
                  protected.
                </p>
              </div>
              <div className="grid gap-1 p-8 md:p-10">
                <h3 className="text-xl font-bold">
                  Can I access my wallet from multiple devices?
                </h3>
                <p className="text-muted-foreground">
                  Yes, our Ethereum wallet is designed to be cross-platform,
                  allowing you to access your digital assets from your desktop,
                  mobile, or tablet.
                </p>
              </div>
              <div className="grid gap-1 p-8 md:p-10">
                <h3 className="text-xl font-bold">
                  What are the fees for using your wallet?
                </h3>
                <p className="text-muted-foreground">
                  We do not charge any fees for using our Ethereum wallet.
                  However, you may be responsible for paying network fees (gas
                  fees) when making transactions on the Ethereum blockchain.
                </p>
              </div>
              <div className="grid gap-1 p-8 md:p-10">
                <h3 className="text-xl font-bold">
                  Do you offer customer support?
                </h3>
                <p className="text-muted-foreground">
                  Yes, we have a dedicated customer support team available to
                  assist you with any questions or issues you may encounter
                  while using our Ethereum wallet.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 border-t"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Contact Us
                </div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Get in Touch
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a question or need assistance? Our team is here to help.
                  Contact us through the form below or reach out through our
                  social media channels.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Contact Us
                  </a>
                  <a
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Follow on Twitter
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Policies
                </div>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Review our privacy policy, terms of service, and other legal
                  information.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

// function XIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M18 6 6 18" />
//       <path d="m6 6 12 12" />
//     </svg>
//   );
// }
