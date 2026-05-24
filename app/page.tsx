export default function Home() {
  const apps = [
    { name: "About", icon: "👤" },
    { name: "Projects", icon: "💻" },
    { name: "Art", icon: "🎨" },
    { name: "Contact", icon: "✉️" },
  ]

  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,#7dd3fc,transparent_30%),radial-gradient(circle_at_bottom_right,#c084fc,transparent_30%),linear-gradient(135deg,#020617,#111827)] text-white">
      {/* Top Menu Bar */}
      <div className="fixed left-0 top-0 z-50 flex h-9 w-full items-center justify-between border-b border-white/10 bg-white/10 px-5 text-sm backdrop-blur-2xl">
        <div className="flex items-center gap-4">
          <span className="font-semibold"> Portfolio</span>
          <span>Finder</span>
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
        </div>
        <div className="opacity-80">Wi-Fi · 100% · Mon 20:14</div>
      </div>

      {/* Desktop */}
      <section className="relative flex min-h-screen items-center justify-center px-6 pt-12">
        {/* Desktop Icons */}
        <div className="absolute left-8 top-20 grid gap-6">
          {apps.map((app) => (
            <div key={app.name} className="flex w-20 flex-col items-center gap-2 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-3xl shadow-xl backdrop-blur-xl transition hover:scale-110">
                {app.icon}
              </div>
              <span className="text-xs drop-shadow">{app.name}</span>
            </div>
          ))}
        </div>

        {/* Main Window */}
        <div className="w-full max-w-4xl overflow-hidden rounded-[28px] border border-white/20 bg-white/15 shadow-2xl backdrop-blur-2xl">
          {/* Window Header */}
          <div className="flex h-12 items-center gap-2 border-b border-white/10 bg-white/10 px-5">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
            <span className="ml-4 text-sm text-white/70">home — macOS desktop portfolio</span>
          </div>

          {/* Window Content */}
          <div className="grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-white/60">
                Creative Portfolio
              </p>
              <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
                A Mac-style digital desktop.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
                Welcome to my interactive portfolio. Explore my work through windows,
                folders, apps, and visual stories inspired by macOS.
              </p>

              <div className="mt-8 flex gap-4">
                <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-105">
                  Open Projects
                </button>
                <button className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10">
                  Contact Me
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-black/20 p-5 shadow-inner">
              <div className="mb-4 text-sm text-white/60">System Preview</div>
              <div className="space-y-3">
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="text-sm text-white/60">Current Mode</div>
                  <div className="text-xl font-semibold">Design OS</div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="text-sm text-white/60">Focus</div>
                  <div className="text-xl font-semibold">Art · Web · Motion</div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="text-sm text-white/60">Status</div>
                  <div className="text-xl font-semibold">Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dock */}
        <div className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 gap-3 rounded-[28px] border border-white/20 bg-white/20 px-4 py-3 shadow-2xl backdrop-blur-2xl">
          {apps.map((app) => (
            <button
              key={app.name}
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-3xl shadow-lg transition hover:-translate-y-3 hover:scale-125"
              title={app.name}
            >
              {app.icon}
            </button>
          ))}
        </div>
      </section>
    </main>
  )
}
