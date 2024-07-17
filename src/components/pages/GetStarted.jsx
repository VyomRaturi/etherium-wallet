import Footer from "../Footer";
import Navbar from "../Navbar";

export default function GetStarted() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center bg-background px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              src="/eth-wallet.jpg"
              alt="Crypto Management"
              height={500}
              className="mx-auto"
            />
            <h2 className="text-center mb-2 mt-8 text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Manage Your Crypto
            </h2>
            <p className="mb-6 text-center sm:text-xl text-sm text-muted-foreground">
              Choose how you&apos;d like to get started
            </p>
          </div>
          <div className="space-y-4">
            <a
              href="/new-wallet"
              className="flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Create Wallet
            </a>
            <a
              href="/import-wallet"
              className="flex w-full items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              Import Wallet
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
