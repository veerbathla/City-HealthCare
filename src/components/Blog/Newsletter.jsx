const Newsletter = () => {
  return (
    <section className="bg-sky-700 py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-sky-100">
          Stay Updated
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white">
          Get Trusted Health Tips in Your Inbox
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-sky-100">
          Subscribe to receive expert health articles, wellness tips,
          preventive care advice, and the latest updates from City Healthcare.
        </p>

        <form className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email address"
            className="h-14 flex-1 rounded-xl border border-white/20 bg-white px-5 text-gray-800 outline-none"
          />

          <button
            type="submit"
            className="h-14 rounded-xl bg-white px-8 font-semibold text-sky-700 transition hover:bg-sky-100"
          >
            Subscribe
          </button>
        </form>

        <p className="mt-4 text-sm text-sky-200">
          We respect your privacy. No spam, unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;