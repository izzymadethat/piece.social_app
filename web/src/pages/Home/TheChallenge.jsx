const TheChallenge = () => {
  return (
    <section className="p-8 lg:p-24">
      <div className="p-4 rounded-md bg-accent-secondary text-background">
        <h3 className="text-2xl">The Challenge</h3>
      </div>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div>
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-xl font-semibold text-gray-900 sm:text-5xl">
                <span className="underline">Gro</span>up Housing
              </h2>

              <p className="mt-4">
                <strong>Housing is wellness.</strong> Due to the decline in
                local community resources and family sizes, people are falling
                in <strong>between the cracks of society</strong>.
              </p>
              <p className="mt-4">
                Enormous demand for group housing, largely run by nonprofit
                organizations, is <strong>filling the void.</strong> These serve
                many populations: workers, students, veterans, seniors, mental
                and behavioral health affected, <strong>homeless</strong>, and
                people that simply need a place to stay for a few days.
              </p>
              <p className="mt-4">
                Public funding is <strong>flooding</strong> into these
                nonprofits. The easiest way to address it is to take housing
                that&apos;s not currently on the market, and fix it up for those
                that <strong>help</strong> others.
              </p>
            </div>
          </div>

          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1694475451278-17f78264b686?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default TheChallenge;
