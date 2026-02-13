import Image from "next/image";

export default function Home() {
  const navItems = ["Tentang", "Skill", "Proyek", "Pengalaman", "Kontak"];
  const skills = [
    "Social Media Strategy",
    "Content Calendar Planning",
    "Data Analytics & Reporting",
    "Marketing Automation",
    "A/B Testing Konten",
    "Community Engagement",
  ];
  const projects = [
    {
      title: "Growth Campaign F&B Lokal",
      description:
        "Menyusun strategi konten dan optimasi jam posting berbasis insight audience, mendorong engagement rate naik 68% dalam 8 minggu.",
      stack: "Instagram Insights, TikTok Analytics, Notion",
    },
    {
      title: "DM Automation Beauty Brand",
      description:
        "Membangun alur automasi DM untuk campaign launching produk agar respon lebih cepat dan lead masuk lebih terstruktur.",
      stack: "ManyChat, Meta API, Google Sheets",
    },
    {
      title: "Social Media Intelligence Report",
      description:
        "Membuat dashboard performa bulanan dengan rekomendasi topik konten prioritas berdasarkan data reach, save, share, dan retention.",
      stack: "Looker Studio, GA4, BigQuery",
    },
  ];
  const experiences = [
    {
      period: "2024 - Sekarang",
      role: "Freelance Social Media Specialist",
      summary:
        "Membantu bisnis dan personal brand meningkatkan engagement melalui strategi konten, optimasi performa, dan automasi workflow campaign.",
    },
    {
      period: "2022 - 2024",
      role: "Social Media & Performance Intern",
      summary:
        "Mendukung eksekusi kalender konten, A/B testing copy-visual, serta pelaporan KPI mingguan untuk kebutuhan growth tim marketing.",
    },
  ];

  return (
    <main className="page-shell">
      <header className="flex items-center justify-between rounded-full border border-[var(--line)] bg-white/90 px-5 py-3 backdrop-blur md:px-7">
        <a className="display text-xl font-semibold tracking-tight" href="#">
          hernanda ramon<span className="text-[var(--accent)]">.</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-[var(--muted)] lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              className="transition hover:text-[var(--foreground)]"
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </a>
          ))}
        </nav>
        <details className="relative lg:hidden">
          <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-[var(--line)] bg-white text-[#314055] transition hover:bg-[var(--surface)] [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Buka navigasi</span>
            <span className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 rounded-full bg-current" />
              <span className="h-0.5 w-5 rounded-full bg-current" />
              <span className="h-0.5 w-5 rounded-full bg-current" />
            </span>
          </summary>
          <nav className="absolute top-12 right-0 z-20 w-52 rounded-2xl border border-[var(--line)] bg-white p-2 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.35)]">
            {navItems.map((item) => (
              <a
                key={`mobile-${item}`}
                className="block rounded-xl px-3 py-2 text-sm text-[#314055] transition hover:bg-[var(--surface)]"
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </a>
            ))}
          </nav>
        </details>
        <a
          href="#kontak"
          className="hidden rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-semibold text-[#04362d] transition hover:bg-[var(--accent-strong)] sm:inline-flex"
        >
          Hubungi Saya
        </a>
      </header>

      <section className="mx-auto mt-20 grid max-w-5xl gap-10 md:mt-24 md:grid-cols-12 md:items-stretch">
        <div className="md:col-span-7 md:flex md:self-stretch md:items-center">
          <div>
            <p className="reveal-up delay-80 text-sm font-semibold tracking-wide text-[var(--muted-soft)] uppercase">
              Personal Profile
            </p>
            <h1 className="reveal-up delay-140 display mt-4 text-5xl leading-[1.05] font-semibold text-[#202939] md:text-7xl">
              Halo, saya
              <span className="block text-[var(--accent)]">HERNANDA RAMON</span>
            </h1>
            <p className="reveal-up delay-200 mt-5 text-sm font-semibold tracking-[0.12em] text-[var(--muted-soft)] uppercase md:text-base">
              Social Media Specialist
            </p>
            <p className="reveal-up delay-200 mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              Berbasis data dan automasi untuk meningkatkan engagement social
              mediamu secara konsisten dan terukur.
            </p>
            <div className="reveal-pop delay-260 mt-8 flex flex-wrap gap-3">
              <a
                href="#proyek"
                className="rounded-full bg-[var(--accent)] px-7 py-3 text-sm font-semibold text-[#04362d] transition hover:bg-[var(--accent-strong)]"
              >
                Lihat Proyek
              </a>
              <a
                href="#pengalaman"
                className="rounded-full border border-[var(--line)] px-7 py-3 text-sm font-semibold text-[#314055] transition hover:bg-[var(--surface)]"
              >
                Pengalaman
              </a>
            </div>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="reveal-pop delay-320 rounded-[28px] border border-[var(--line)] bg-gradient-to-br from-[#f4fffc] via-white to-[#eef3f8] p-6 shadow-[0_24px_80px_-40px_rgba(26,36,54,0.35)]">
            <p className="text-xs font-semibold tracking-wide text-[var(--muted-soft)] uppercase">
              Professional Profile
            </p>
            <div className="mt-4 overflow-hidden rounded-3xl border border-[var(--line)]">
              <Image
                src="/images/Whisk_5ff43da219faa369e3a462d8a710e327dr.png"
                alt="Foto Hernanda Ramon"
                width={1080}
                height={1280}
                className="h-[358px] w-full object-cover object-[center_18%]"
                priority
              />
            </div>

            <div className="mt-5 rounded-2xl border border-[var(--line)] bg-white p-4">
              <p className="text-sm font-semibold text-[#253246]">Call Me</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href="https://wa.me/62888230334213"
                  className="rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-semibold text-[#04362d] transition hover:bg-[var(--surface)]"
                >
                  WhatsApp
                </a>
                <a
                  href="https://instagram.com/hernanda97"
                  className="rounded-full border border-[var(--line)] px-4 py-2 text-xs font-semibold text-[#314055] transition hover:bg-[var(--surface)]"
                >
                  Instagram
                </a>
              </div>
              <a
                href="mailto:nandaramin97@gmail.com?subject=Konsultasi%20Social%20Media&body=Halo%20Hernanda%2C%20saya%20ingin%20diskusi%20terkait%20kebutuhan%20social%20media."
                className="mt-3 inline-flex rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-semibold text-[#04362d] transition hover:bg-[var(--surface)]"
              >
                Kirim Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="tentang"
        className="reveal-up delay-80 mx-auto mt-18 max-w-5xl rounded-[28px] border border-[var(--line)] bg-[var(--surface)] p-8 md:mt-20 md:p-10"
      >
        <p className="text-sm font-semibold tracking-wide text-[var(--muted-soft)] uppercase">
          Tentang Saya
        </p>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#334155]">
          Saya fokus membantu brand bertumbuh di social media lewat pendekatan
          strategis yang terukur: riset audience, eksperimen konten, evaluasi KPI,
          dan automasi proses agar hasil engagement lebih stabil dari waktu ke waktu.
        </p>
      </section>

      <section id="skill" className="mx-auto mt-16 max-w-5xl md:mt-20">
        <p className="reveal-up delay-80 display text-3xl font-semibold text-[#202939] md:text-5xl">
          Skill yang saya gunakan sehari-hari.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={skill}
              className="reveal-pop rounded-full border border-[var(--line)] bg-white px-5 py-2 text-sm font-medium text-[#2b3a4f]"
              style={{ animationDelay: `${160 + index * 70}ms` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="proyek" className="mx-auto mt-16 max-w-5xl md:mt-20">
        <div className="reveal-up delay-80 flex items-end justify-between gap-4">
          <h2 className="display text-3xl font-semibold text-[#202939] md:text-4xl">
            Proyek Pilihan
          </h2>
          <a className="text-sm font-semibold text-[var(--muted)] hover:text-[#273246]" href="#">
            Lihat semua
          </a>
        </div>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="reveal-pop rounded-3xl border border-[var(--line)] bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-[0_20px_45px_-30px_rgba(0,0,0,0.45)]"
              style={{ animationDelay: `${180 + index * 100}ms` }}
            >
              <h3 className="text-lg font-semibold text-[#223047]">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {project.description}
              </p>
              <p className="mt-4 text-xs font-semibold tracking-wide text-[var(--muted-soft)] uppercase">
                {project.stack}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="pengalaman" className="mx-auto mt-16 max-w-5xl md:mt-20">
        <h2 className="reveal-up delay-80 display text-3xl font-semibold text-[#202939] md:text-4xl">
          Pengalaman
        </h2>
        <div className="mt-7 space-y-4">
          {experiences.map((experience, index) => (
            <article
              key={experience.role}
              className="reveal-pop rounded-3xl border border-[var(--line)] bg-white p-6"
              style={{ animationDelay: `${180 + index * 120}ms` }}
            >
              <p className="text-xs font-semibold tracking-wide text-[var(--muted-soft)] uppercase">
                {experience.period}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-[#223047]">{experience.role}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {experience.summary}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="kontak"
        className="reveal-up delay-80 mx-auto mt-16 max-w-5xl rounded-[28px] border border-[var(--line)] bg-gradient-to-r from-[#ecfbf7] via-white to-[#f6f9fc] p-8 text-center md:mt-20 md:p-10"
      >
        <p className="text-sm font-semibold tracking-wide text-[var(--muted-soft)] uppercase">
          Kontak
        </p>
        <h2 className="display mt-3 text-3xl font-semibold text-[#202939] md:text-4xl">
          Tertarik kerja sama?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-[var(--muted)]">
          Kirim pesan lewat email atau DM agar saya bisa bantu kebutuhan website
          kamu dari konsep sampai rilis.
        </p>
        <div className="reveal-pop delay-200 mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="mailto:nandaramin97@gmail.com?subject=Kolaborasi%20Social%20Media&body=Halo%20Hernanda%2C%20saya%20tertarik%20untuk%20berkolaborasi."
            className="rounded-full bg-[var(--accent)] px-7 py-3 text-sm font-semibold text-[#04362d] transition hover:bg-[var(--accent-strong)]"
          >
            nandaramin97@gmail.com
          </a>
          <a
            href="https://instagram.com/hernanda97"
            className="rounded-full border border-[var(--line)] px-7 py-3 text-sm font-semibold text-[#314055] transition hover:bg-white"
          >
            Instagram
          </a>
        </div>
      </section>
    </main>
  );
}
