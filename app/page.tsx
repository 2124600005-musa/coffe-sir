"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Bean,
  Clock,
  Coffee,
  Compass,
  Flame,
  AtSign,
  Mail,
  Menu,
  MapPin,
  MessageCircle,
  Navigation,
  Sprout,
  Sparkles,
  Users,
  Wifi,
  Workflow,
  X
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const menuItems = [
  { name: "Espresso", desc: "Karakter kuat, ringkas, dan jujur.", price: "IDR 22K", image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=900&q=80" },
  { name: "Americano", desc: "Bersih, ringan, untuk jeda yang panjang.", price: "IDR 25K", image: "https://images.unsplash.com/photo-1494314671902-399b18174975?auto=format&fit=crop&w=900&q=80" },
  { name: "Cappuccino", desc: "Espresso, susu, dan foam dalam harmoni.", price: "IDR 30K", image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=900&q=80" },
  { name: "Cafe Latte", desc: "Lembut dan hangat untuk obrolan yang pelan.", price: "IDR 32K", image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=900&q=80" },
  { name: "Caramel Latte", desc: "Manis elegan dengan sentuhan karamel.", price: "IDR 35K", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80" },
  { name: "Croissant", desc: "Pastry renyah untuk menemani secangkir kopi.", price: "IDR 28K", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=80" }
];

const gallery = [
  { title: "Interior", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80", className: "md:col-span-2 md:row-span-2" },
  { title: "Barista", image: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&w=900&q=80", className: "" },
  { title: "Brewing Process", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80", className: "" },
  { title: "Coffee Menu", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80", className: "" },
  { title: "Customer Experience", image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80", className: "md:col-span-2" }
];

const coffeeJourney = [
  {
    title: "Petani Kopi",
    desc: "Biji kopi dipanen dengan penuh perhatian dari kebun pilihan untuk menghasilkan kualitas terbaik.",
    icon: Sprout
  },
  {
    title: "Roastery",
    desc: "Dipanggang dengan presisi untuk menghadirkan aroma dan karakter rasa yang khas.",
    icon: Flame
  },
  {
    title: "Barista",
    desc: "Diracik dengan keterampilan, pengalaman, dan dedikasi dalam setiap cangkir.",
    icon: Coffee
  },
  {
    title: "Coffee Sirpang",
    desc: "Menjadi tempat bertemunya berbagai cerita, ide, inspirasi, dan perjalanan hidup.",
    icon: Compass,
    featured: true
  },
  {
    title: "Cerita Anda",
    desc: "Pada akhirnya, kopi bukan hanya tentang rasa. Setiap cangkir menjadi bagian dari momen, percakapan, inspirasi, pertemanan, dan cerita yang Anda ciptakan.",
    icon: Users
  }
];

function SirpangLogo({ className = "", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Image
      src="/coffee-sirpang-logo.jpg"
      alt="Logo Coffee Sirpang"
      width={220}
      height={220}
      priority={priority}
      className={`${className} rounded-full object-cover`}
    />
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#2D221C]/10 bg-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-[#786A60]">
      <Sparkles className="h-3.5 w-3.5" /> {children}
    </p>
  );
}

function ButtonLink({ href, children, dark = false }: { href: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <a
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#2D221C]/40 sm:min-h-0 ${
        dark
          ? "bg-[#111111] text-[#F7F3EE] hover:bg-[#2D221C]"
          : "border border-[#2D221C]/20 bg-white/40 text-[#2D221C] hover:border-[#2D221C]/40 hover:bg-white/70"
      }`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    ["Cerita", "#about"],
    ["Nama", "#name"],
    ["Logo", "#logo"],
    ["Menu", "#menu"],
    ["Lokasi", "#location"]
  ];

  return (
    <main className="overflow-x-hidden bg-[#F7F3EE] text-[#2D221C]">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[#2D221C]/10 bg-[#F7F3EE]/82 backdrop-blur-xl">
        <div className="section-shell flex h-16 items-center justify-between sm:h-20">
          <a href="#hero" className="flex min-w-0 items-center gap-3" aria-label="Coffee Sirpang home">
            <SirpangLogo className="h-11 w-11 shrink-0 text-[#111111] sm:h-12 sm:w-12" priority />
            <div className="min-w-0">
              <p className="truncate text-xs font-bold uppercase tracking-[0.18em] sm:text-sm sm:tracking-[0.22em]">Coffee Sirpang</p>
              <p className="text-[11px] text-[#786A60] sm:text-xs">Kopi Persimpangan</p>
            </div>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-[#2D221C]/75 lg:flex">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="hover:text-[#111111]">{label}</a>
            ))}
          </div>
          <a href="#location" className="hidden rounded-full bg-[#111111] px-5 py-2.5 text-sm font-semibold text-[#F7F3EE] transition hover:bg-[#2D221C] sm:inline-flex">
            Kunjungi
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#2D221C]/15 bg-white/50 text-[#111111] lg:hidden"
            aria-label="Buka menu navigasi"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-[#111111]/45 p-3 backdrop-blur-sm lg:hidden"
          >
            <motion.div
              initial={{ y: -28, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.28 }}
              className="min-h-[calc(100vh-24px)] rounded-[2rem] bg-[#F7F3EE] p-5 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <SirpangLogo className="h-12 w-12" priority />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em]">Coffee Sirpang</p>
                    <p className="text-xs text-[#786A60]">Kopi Persimpangan</p>
                  </div>
                </div>
                <button onClick={() => setMenuOpen(false)} className="flex h-11 w-11 items-center justify-center rounded-full bg-[#111111] text-[#F7F3EE]" aria-label="Tutup menu">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-14 space-y-2">
                {navItems.map(([label, href], idx) => (
                  <motion.a
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06 }}
                    className="display-font flex items-center justify-between rounded-3xl px-4 py-4 text-4xl font-semibold tracking-[-0.04em] text-[#111111] hover:bg-[#E9E0D5]"
                  >
                    {label}
                    <ArrowRight className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
              <a href="https://wa.me/6281364083093" className="mt-10 flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#111111] px-6 py-4 text-base font-semibold text-[#F7F3EE]" onClick={() => setMenuOpen(false)}>
                <MessageCircle className="h-5 w-5" /> Hubungi WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="hero" className="coffee-gradient relative min-h-[86svh] pt-16 sm:pt-24">
        <div className="absolute inset-0 map-lines opacity-50" aria-hidden="true" />
        <div className="section-shell relative grid min-h-[calc(86svh-64px)] items-center gap-8 py-8 sm:min-h-[calc(100vh-96px)] sm:gap-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} transition={{ duration: 0.8 }}>
              <SectionLabel>Premium Coffee Story</SectionLabel>
            </motion.div>
            <motion.h1 variants={fadeUp} transition={{ duration: 0.8 }} className="display-font max-w-4xl text-[2.55rem] font-semibold leading-[0.96] tracking-[-0.055em] text-[#111111] min-[375px]:text-5xl md:text-7xl lg:text-8xl">
              Setiap Persimpangan Punya Cerita.
            </motion.h1>
            <motion.p variants={fadeUp} transition={{ duration: 0.8 }} className="mt-5 max-w-2xl text-base leading-7 text-[#5f5148] min-[390px]:text-lg md:mt-7 md:text-xl md:leading-8">
              Menyajikan kopi berkualitas dalam ruang yang menghubungkan cerita, inspirasi, dan perjalanan hidup.
            </motion.p>
            <motion.div variants={fadeUp} transition={{ duration: 0.8 }} className="mt-8 grid grid-cols-1 gap-3 min-[390px]:grid-cols-2 sm:flex sm:gap-4 md:mt-10">
              <ButtonLink href="#menu" dark>Lihat Menu</ButtonLink>
              <ButtonLink href="#location">Kunjungi Kami</ButtonLink>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.94, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1, delay: 0.25 }} className="relative">
            <div className="absolute -left-6 top-8 hidden rounded-full border border-[#2D221C]/15 bg-white/60 px-5 py-3 text-sm font-semibold shadow-2xl backdrop-blur md:block">
              Kopi • Cerita • Arah Baru
            </div>
            <div className="overflow-hidden rounded-[2.2rem] border border-white/50 bg-[#111111] p-3 shadow-[0_40px_120px_rgba(45,34,28,0.22)]">
              <Image
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1400&q=85"
                alt="Suasana coffee shop modern yang hangat"
                width={900}
                height={680}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-[300px] w-full rounded-[1.7rem] object-cover opacity-90 min-[390px]:h-[340px] sm:h-[520px]"
              />
            </div>
            <div className="absolute -bottom-8 right-6 w-64 rounded-3xl bg-[#F7F3EE]/90 p-5 shadow-2xl backdrop-blur">
              <p className="text-xs uppercase tracking-[0.22em] text-[#786A60]">Filosofi</p>
              <p className="mt-2 text-sm leading-6">Sebuah persimpangan dapat menjadi awal dari cerita baru.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-28">
        <div className="section-shell grid items-center gap-14 lg:grid-cols-2">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
            <motion.div variants={fadeUp}><SectionLabel>Tentang Brand</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="display-font text-4xl font-semibold tracking-[-0.035em] text-[#111111] md:text-6xl">
              Lebih dari Sekadar Kedai Kopi
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-7 text-lg leading-8 text-[#66584f]">
              Coffee Sirpang adalah ruang pertemuan berbagai cerita, ide, dan perjalanan hidup. Di sini, secangkir kopi menjadi alasan untuk berhenti sejenak, bertukar cerita, menemukan inspirasi, dan menentukan arah perjalanan berikutnya.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-5 text-lg leading-8 text-[#66584f]">
              Kami percaya bahwa kualitas kopi bukan hanya tentang rasa, tetapi juga pengalaman: suasana yang hangat, percakapan yang tumbuh, dan momen kecil yang meninggalkan jejak.
            </motion.p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="grid gap-4 sm:grid-cols-2">
            <Image src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=85" alt="Kopi diseduh" width={700} height={520} sizes="(max-width: 768px) 100vw, 25vw" className="h-72 w-full rounded-[2rem] object-cover shadow-2xl sm:mt-16" loading="lazy" />
            <Image src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=85" alt="Pengunjung coffee shop" width={700} height={720} sizes="(max-width: 768px) 100vw, 25vw" className="h-96 w-full rounded-[2rem] object-cover shadow-2xl" loading="lazy" />
          </motion.div>
        </div>
      </section>

      <section id="name" className="bg-[#111111] py-28 text-[#F7F3EE]">
        <div className="section-shell grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative min-h-[420px] overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#1b1714] p-8 map-lines">
            <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-[#F7F3EE]/50" />
            <div className="absolute left-8 right-8 top-1/2 h-1 -translate-y-1/2 rounded-full bg-[#F7F3EE]/50" />
            <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F7F3EE]/40 bg-[#111111] p-6 shadow-2xl">
              <Compass className="h-full w-full text-[#E9E0D5]" />
            </div>
            <span className="absolute left-8 top-8 rounded-full bg-[#F7F3EE]/10 px-4 py-2 text-xs uppercase tracking-[0.22em]">Simpang</span>
            <span className="absolute bottom-8 right-8 rounded-full bg-[#F7F3EE]/10 px-4 py-2 text-xs uppercase tracking-[0.22em]">Cerita Baru</span>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
            <motion.div variants={fadeUp}><SectionLabel>Mengapa Sirpang?</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="display-font text-4xl font-semibold tracking-[-0.035em] md:text-6xl">
              Sirpang berarti persimpangan.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-7 text-lg leading-8 text-[#D8CFC7]">
              Kata “Sirpang” berasal dari bahasa Batak yang berarti simpang atau persimpangan. Nama ini dipilih karena memiliki keterkaitan dengan lokasi kedai sekaligus merepresentasikan filosofi bahwa setiap persimpangan dapat menjadi awal dari cerita baru.
            </motion.p>
            <motion.blockquote variants={fadeUp} className="mt-8 border-l border-[#E9E0D5]/40 pl-6 text-xl leading-9 text-[#F7F3EE]">
              “Sirpang adalah pengingat bahwa setiap persimpangan dapat menjadi awal cerita baru. Tempat di mana orang-orang berhenti sejenak, berbagi cerita, dan menemukan arah perjalanan berikutnya.”
            </motion.blockquote>
          </motion.div>
        </div>
      </section>

      <section id="logo" className="py-28">
        <div className="section-shell text-center">
          <SectionLabel>Filosofi Logo</SectionLabel>
          <h2 className="display-font mx-auto max-w-3xl text-4xl font-semibold tracking-[-0.035em] text-[#111111] md:text-6xl">
            Makna di Balik Logo
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#66584f]">
            Logo Coffee Sirpang terinspirasi dari bentuk persimpangan jalan — sederhana, kuat, dan menjadi simbol pertemuan berbagai arah kehidupan.
          </p>

          <div className="relative mx-auto mt-16 grid max-w-6xl items-center gap-8 lg:grid-cols-[1fr_420px_1fr]">
            <div className="space-y-5 text-left">
              <div className="premium-card rounded-3xl p-6"><p className="font-semibold">Perjalanan hidup</p><p className="mt-2 text-sm leading-6 text-[#66584f]">Garis vertikal melambangkan arah perjalanan setiap individu.</p></div>
              <div className="premium-card rounded-3xl p-6"><p className="font-semibold">Pilihan dan keputusan</p><p className="mt-2 text-sm leading-6 text-[#66584f]">Lengkungan kiri dan kanan menggambarkan cabang pilihan yang menyatu.</p></div>
            </div>
            <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 180 }} className="relative mx-auto flex h-[420px] w-full max-w-[420px] items-center justify-center rounded-full bg-[#111111] text-[#F7F3EE] shadow-[0_40px_120px_rgba(17,17,17,0.24)]">
              <SirpangLogo className="h-72 w-72" />
              <div className="absolute -top-4 rounded-full bg-[#E9E0D5] px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#111111]">Minimal Mark</div>
            </motion.div>
            <div className="space-y-5 text-left">
              <div className="premium-card rounded-3xl p-6"><p className="font-semibold">Pertemuan cerita</p><p className="mt-2 text-sm leading-6 text-[#66584f]">Titik tengah menjadi ruang temu ide, cerita, dan inspirasi.</p></div>
              <div className="premium-card rounded-3xl p-6"><p className="font-semibold">Kesederhanaan dan kualitas</p><p className="mt-2 text-sm leading-6 text-[#66584f]">Warna hitam dan bentuk minimalis mewakili karakter elegan dan fokus pada kualitas kopi.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="journey" className="relative overflow-hidden bg-[#F7F3EE] py-24 sm:py-28">
        <div className="absolute inset-0 map-lines opacity-40" aria-hidden="true" />
        <div className="absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#E9E0D5]/55 blur-3xl" aria-hidden="true" />
        <div className="section-shell relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={stagger} className="mx-auto max-w-3xl text-center">
            <motion.div variants={fadeUp}><SectionLabel>Story Journey</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="display-font text-4xl font-semibold tracking-[-0.04em] text-[#111111] min-[390px]:text-5xl md:text-6xl">
              Perjalanan Secangkir Kopi
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#66584f]">
              “Dari berbagai perjalanan, akhirnya bertemu di satu persimpangan.”
            </motion.p>
            <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#66584f] sm:text-lg">
              Setiap cangkir kopi memiliki perjalanan panjang sebelum sampai di hadapan Anda. Dari tangan petani, proses roasting yang teliti, hingga sentuhan barista yang meraciknya dengan penuh perhatian. Di Coffee Sirpang, perjalanan itu tidak berakhir saat kopi tersaji. Justru di sinilah cerita baru dimulai.
            </motion.p>
          </motion.div>

          <div className="relative mt-16 lg:mt-20">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1.3, ease: "easeOut" }}
              className="absolute left-[2.05rem] top-0 hidden h-1 w-[calc(100%-4rem)] origin-left rounded-full bg-gradient-to-r from-[#2D221C]/20 via-[#2D221C] to-[#2D221C]/20 lg:block"
              aria-hidden="true"
            />
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute bottom-12 left-6 top-5 w-px origin-top bg-gradient-to-b from-[#2D221C]/20 via-[#2D221C] to-[#2D221C]/10 lg:hidden"
              aria-hidden="true"
            />

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="grid gap-5 lg:grid-cols-5 lg:gap-4">
              {coffeeJourney.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.article
                    key={step.title}
                    variants={fadeUp}
                    whileHover={{ y: -8, scale: step.featured ? 1.02 : 1.01 }}
                    className={`relative ml-12 rounded-[1.8rem] border p-6 transition duration-300 lg:ml-0 lg:mt-10 ${
                      step.featured
                        ? "border-[#111111]/30 bg-[#111111] text-[#F7F3EE] shadow-[0_30px_90px_rgba(17,17,17,0.22)] lg:-mt-2"
                        : "border-[#2D221C]/10 bg-white/55 text-[#2D221C] shadow-[0_20px_70px_rgba(45,34,28,0.08)] hover:bg-white"
                    }`}
                  >
                    <div className={`absolute -left-[3.15rem] top-6 flex h-12 w-12 items-center justify-center rounded-full border text-sm font-bold lg:-top-[4.05rem] lg:left-6 ${
                      step.featured
                        ? "border-[#E9E0D5] bg-[#F7F3EE] text-[#111111]"
                        : "border-[#2D221C]/15 bg-[#F7F3EE] text-[#111111]"
                    }`}>
                      {index + 1}
                    </div>
                    <div className={`mb-7 flex h-14 w-14 items-center justify-center rounded-2xl ${step.featured ? "bg-[#F7F3EE] text-[#111111]" : "bg-[#111111] text-[#F7F3EE]"}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold tracking-[-0.02em]">{step.title}</h3>
                    <p className={`mt-4 text-sm leading-7 ${step.featured ? "text-[#E9E0D5]" : "text-[#66584f]"}`}>{step.desc}</p>
                    {step.featured && (
                      <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm leading-6 text-[#F7F3EE]">
                        Di titik inilah perjalanan kopi berubah menjadi ruang pertemuan — dari rasa menjadi cerita.
                      </div>
                    )}
                    {step.title === "Cerita Anda" && (
                      <div className="mt-6 flex items-center gap-3 rounded-2xl bg-[#E9E0D5]/70 p-4 text-sm font-semibold text-[#2D221C]">
                        <Sparkles className="h-5 w-5" /> Cerita berlanjut bersama Anda.
                      </div>
                    )}
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="menu" className="bg-[#E9E0D5] py-28">
        <div className="section-shell">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel>Menu</SectionLabel>
              <h2 className="display-font text-4xl font-semibold tracking-[-0.035em] text-[#111111] md:text-6xl">Signature Selection</h2>
            </div>
            <p className="max-w-md text-[#66584f]">Racikan pilihan untuk setiap ritme hari: dari espresso yang tegas sampai latte yang lembut.</p>
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {menuItems.map((item, index) => (
              <motion.article key={item.name} variants={fadeUp} className="group overflow-hidden rounded-[1.8rem] border border-[#2D221C]/10 bg-[#F7F3EE]/80 transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-2xl">
                <div className="relative h-52 overflow-hidden sm:h-56">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={720}
                    height={520}
                    sizes="(max-width: 768px) 92vw, (max-width: 1024px) 45vw, 30vw"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#111111]/90 text-[#F7F3EE] backdrop-blur transition group-hover:rotate-6">
                    {index === 5 ? <Sparkles className="h-5 w-5" /> : <Coffee className="h-5 w-5" />}
                  </div>
                </div>
                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold tracking-[-0.02em]">{item.name}</h3>
                    <span className="shrink-0 rounded-full bg-[#2D221C]/10 px-3 py-1 text-xs font-bold">{item.price}</span>
                  </div>
                  <p className="mt-4 text-base leading-7 text-[#66584f]">{item.desc}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="gallery" className="py-28">
        <div className="section-shell">
          <div className="mb-14 text-center">
            <SectionLabel>Gallery</SectionLabel>
            <h2 className="display-font text-4xl font-semibold tracking-[-0.035em] text-[#111111] md:text-6xl">Suasana yang Menghubungkan Cerita</h2>
          </div>
          <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:auto-rows-[220px] md:grid-cols-4 md:gap-5 md:overflow-visible md:px-0 md:pb-0">
            {gallery.map((item) => (
              <div key={item.title} className={`group relative h-[320px] w-[82vw] shrink-0 snap-center overflow-hidden rounded-[1.8rem] md:h-auto md:w-auto ${item.className}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={900}
                  height={700}
                  sizes="(max-width: 768px) 82vw, 25vw"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-5 text-lg font-semibold text-white">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="bg-[#111111] py-28 text-[#F7F3EE]">
        <div className="section-shell">
          <div className="mb-14 max-w-3xl">
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 className="display-font text-4xl font-semibold tracking-[-0.035em] md:text-6xl">Kenapa Coffee Sirpang?</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              [Bean, "Biji Kopi Berkualitas", "Dipilih untuk karakter rasa yang bersih, kuat, dan konsisten."],
              [Coffee, "Barista Berpengalaman", "Setiap cangkir diracik dengan presisi dan perhatian."],
              [Wifi, "Nyaman untuk Bekerja", "Ruang hangat untuk fokus, berdiskusi, dan beristirahat."],
              [Users, "Komunitas dan Cerita", "Tempat bertemunya orang, ide, dan perjalanan baru."]
            ].map(([Icon, title, desc]) => {
              const IconCmp = Icon as typeof Bean;
              return (
                <motion.div key={title as string} whileHover={{ y: -8 }} className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-7">
                  <IconCmp className="h-8 w-8 text-[#E9E0D5]" />
                  <h3 className="mt-8 text-xl font-semibold">{title as string}</h3>
                  <p className="mt-4 leading-7 text-[#D8CFC7]">{desc as string}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="location" className="py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionLabel>Location</SectionLabel>
            <h2 className="display-font text-4xl font-semibold tracking-[-0.035em] text-[#111111] md:text-6xl">Temukan Kami di Persimpangan Cerita</h2>
            <div className="mt-10 space-y-5">
              <div className="premium-card flex gap-4 rounded-3xl p-6"><MapPin className="mt-1 h-5 w-5" /><div><p className="font-semibold">Alamat</p><p className="mt-1 text-[#66584f]">Abdi Tani, simp. Du skpd, Jalan Lintas Sumatera, Rambah, Kec. Rambah Hilir, Kabupaten Rokan Hulu, Riau 28558</p></div></div>
              <div className="premium-card flex gap-4 rounded-3xl p-6"><Clock className="mt-1 h-5 w-5" /><div><p className="font-semibold">Jam Operasional</p><p className="mt-1 text-[#66584f]">Senin - Minggu, 08.00 - 22.00 WIB</p></div></div>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="https://wa.me/6281364083093" dark><MessageCircle className="h-4 w-4" /> WhatsApp</ButtonLink>
              <ButtonLink href="https://www.google.com/maps/search/?api=1&query=Abdi%20Tani%2C%20simp.%20Du%20skpd%2C%20Jalan%20Lintas%20Sumatera%2C%20Rambah%2C%20Kec.%20Rambah%20Hilir%2C%20Kabupaten%20Rokan%20Hulu%2C%20Riau%2028558" ><Navigation className="h-4 w-4" /> Google Maps</ButtonLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-[#2D221C]/10 bg-[#E9E0D5] p-3 shadow-2xl">
            <iframe
              title="Google Maps Coffee Sirpang"
              src="https://www.google.com/maps?q=Abdi%20Tani%2C%20simp.%20Du%20skpd%2C%20Jalan%20Lintas%20Sumatera%2C%20Rambah%2C%20Kec.%20Rambah%20Hilir%2C%20Kabupaten%20Rokan%20Hulu%2C%20Riau%2028558&output=embed"
              className="h-[460px] w-full rounded-[1.4rem] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <motion.a
        href="https://wa.me/6281364083093"
        aria-label="Hubungi Coffee Sirpang via WhatsApp"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#111111] text-[#F7F3EE] shadow-[0_18px_50px_rgba(17,17,17,0.28)] ring-4 ring-[#F7F3EE]/80 before:absolute before:inset-0 before:-z-10 before:animate-ping before:rounded-full before:bg-[#111111]/20 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.a>

      <footer className="border-t border-[#2D221C]/10 bg-[#E9E0D5] py-12">
        <div className="section-shell flex flex-col justify-between gap-10 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <SirpangLogo className="h-14 w-14 text-[#111111]" />
            <div>
              <p className="text-lg font-bold uppercase tracking-[0.2em]">Coffee Sirpang</p>
              <p className="text-sm text-[#66584f]">Kopi Persimpangan</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-[#66584f]">
            <a className="inline-flex items-center gap-2 hover:text-[#111111]" href="https://instagram.com/coffeesirpang"><AtSign className="h-4 w-4" /> @coffeesirpang</a>
            <a className="inline-flex items-center gap-2 hover:text-[#111111]" href="https://wa.me/6281364083093"><MessageCircle className="h-4 w-4" /> +62 813-6408-3093</a>
            <a className="inline-flex items-center gap-2 hover:text-[#111111]" href="mailto:hello@coffeesirpang.id"><Mail className="h-4 w-4" /> Email</a>
          </div>
        </div>
        <div className="section-shell mt-10 flex flex-col justify-between gap-3 border-t border-[#2D221C]/10 pt-6 text-xs text-[#786A60] md:flex-row">
          <p>© 2026 Coffee Sirpang. All rights reserved.</p>
          <p className="inline-flex items-center gap-2"><Workflow className="h-3.5 w-3.5" /> Every intersection begins a new story.</p>
        </div>
      </footer>
    </main>
  );
}
