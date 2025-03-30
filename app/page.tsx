'use client';
import Link from 'next/link';
import { lazy, Suspense, useEffect, useState } from 'react';

// Lazy load the InteractiveBackground component
const InteractiveBackground = lazy(() => import('../components/InteractiveBackground'));
export default function Page() {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        // Throttle scroll event for better performance
        let scrollTimeout: NodeJS.Timeout | null;
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (scrollTimeout) {
                return;
            }

            scrollTimeout = setTimeout(() => {
                // Only process if we've scrolled significantly
                if (Math.abs(window.scrollY - lastScrollY) > 50 || scrollTimeout === null) {
                    lastScrollY = window.scrollY;

                    const sections = document.querySelectorAll('section');
                    const scrollPosition = window.scrollY + 100;

                    sections.forEach((section) => {
                        const sectionTop = section.offsetTop;
                        const sectionHeight = section.offsetHeight;
                        if (
                            scrollPosition >= sectionTop &&
                            scrollPosition < sectionTop + sectionHeight
                        ) {
                            setActiveSection(section.id);
                        }
                    });
                }
                scrollTimeout = null;
            }, 100); // 100ms throttle
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout) clearTimeout(scrollTimeout);
        };
    }, []);
    const services = [
        {
            title: 'Website Development',
            description:
                'Custom, Responsive Websites built with Modern Frameworks and Optimized for Performance.',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    data-oid="aq2nue:"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        data-oid="6hnko:v"
                    />{' '}
                </svg>
            ),
        },
        {
            title: 'Mobile App Development',
            description:
                'Native and Cross-Platform Mobile Applications that deliver Exceptional User Experiences.',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    data-oid="o9y05ch"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        data-oid="ahoe9tm"
                    />{' '}
                </svg>
            ),
        },
        {
            title: 'UI/UX Design',
            description:
                'Intuitive Interfaces and Seamless User Experiences that engage and convert Visitors.',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    data-oid="8of31ax"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                        data-oid="purgxfw"
                    />{' '}
                </svg>
            ),
        },
        {
            title: 'Product Design',
            description:
                'End-to-end Product Design Solutions tailored for Startups and Growing Businesses.',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    data-oid="ozamjc1"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                        data-oid="c8qlxb5"
                    />{' '}
                </svg>
            ),
        },
    ];

    const values = [
        {
            title: 'Fast Turnaround',
            description:
                'We Deliver High-Quality Work within Tight Deadlines without Compromising on Quality.',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    data-oid="k2bz:1t"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        data-oid="d5ckhj0"
                    />{' '}
                </svg>
            ),
        },
        {
            title: 'Scalable Code',
            description:
                'Our Solutions are Built to Grow with Your Business, Ensuring Long-Term Sustainability.',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    data-oid="jub:.mr"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        data-oid="v1n2fde"
                    />{' '}
                </svg>
            ),
        },
        {
            title: 'Startup-Focused',
            description:
                'We Understand the Unique Challenges of Startups and Tailor Our Approach Accordingly.',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    data-oid="akyd3sl"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                        data-oid="jp12zho"
                    />{' '}
                </svg>
            ),
        },
        {
            title: 'Collaborative',
            description:
                'We Work Closely with Your Team, Ensuring Transparent Communication throughout the Process.',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    data-oid="rm2p2a4"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        data-oid="zeus3r4"
                    />{' '}
                </svg>
            ),
        },
    ];

    const portfolio = [
        {
            title: 'Crime Alert',
            description:
                'Crime Alert is a Full-Stack Application focused on Secure, Anonymous Incident Reporting. It Integrates Google’s Gemini AI for Structured Reports !',
            image: 'https://s5.cdn.memeburn.com/wp-content/uploads/2020/09/crimespotter-crime-reporting-app.jpg',
            tags: ['Next.js', 'Typescript', 'Prisma', 'Tailwind CSS', 'NextAuth'],
        },
        {
            title: 'WealthX',
            description:
                'Wealth is an AI-powered Financial Management Solution designed to simplify Income and Expense Tracking across Multiple Accounts.',
            image: 'https://www.etmoney.com/learn/wp-content/uploads/2022/09/wealth-building.jpg',
            tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
        },
        {
            title: 'Yoom',
            description:
                'Yoom is a Modern Zoom alternative , offering a High-Quality Video Conferencing experience with Real-time Chat, Responsive Design, and Extensive Meeting Controls',
            image: 'https://blog.techsoup.org/hs-fs/hubfs/Blog%20Images/202001/blg-20.01.30-videoconferencing-comparison.png?width=720&name=blg-20.01.30-videoconferencing-comparison.png',
            tags: ['Next.js', 'Typescript', 'Clerk', 'ShadCN'],
        },
        {
            title: 'DashAdmin',
            description:
                ' DashboardX is an Industry-level Management Solution designed to Simplify Administrative Tasks and Data Oversight ',
            image: 'https://s3.envato.com/files/503370354/03_preview.png',
            tags: ['MERN Stack', 'PostgreSQL', 'Sequilizer'],
        },
    ];

    const testimonials = [
        {
            name: 'Pramath Srivastava ',
            role: 'Entrepreneur',
            quote: 'BitHive transformed our Concept into a Polished Product that exceeded our Expectations. Their Attention to Detail and Technical Expertise is Unmatched.',
            image: 'images/Pramath.jpg',
        },
        {
            name: 'Diwakar Y.',
            role: 'Founder, Organic Foods House',
            quote: 'Working with BitHive was Seamless from Start to Finish. They Delivered our Web app Ahead of Schedule and their Ongoing Support has been Exceptional.',
            image: 'images/DiwakarClient1.jpeg',
        },
        {
            name: 'Andria',
            role: 'Business Owner',
            quote: "The Team at BitHive doesn't just Build what you Ask for—they improve upon your Ideas with their Expertise. True Partners in our Success.",
            image: 'images/Andria.jpg',
        },
        {
            name: 'Prakhar Singh',
            role: 'Personal Website',
            quote: 'The BitHive Team Totally got our Vision. Super Easy to Work with, Fast Turnaround, and the End Result Looked Amazing. Felt More like a Creative Partner than an Agency.',
            image: 'images/Prakhar.png',
        },
    ];

    const process = [
        {
            title: 'Discovery',
            description:
                'We Dive Deep into Understanding Your Business, Goals, and Target Audience.',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    data-oid="cdgz09m"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        data-oid="qk0sk5_"
                    />{' '}
                </svg>
            ),
        },
        {
            title: 'Plan',
            description:
                'We Create a Detailed Roadmap with Milestones, Deliverables, and Timelines.',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    data-oid="80mze:b"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        data-oid="w5ayjpu"
                    />{' '}
                </svg>
            ),
        },
        {
            title: 'Build',
            description:
                'Our Team Develops Your Solution with Regular Updates and Iterative Feedback.',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    data-oid="iyp49po"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        data-oid="hdddz8o"
                    />{' '}
                </svg>
            ),
        },
        {
            title: 'Launch',
            description:
                'We Ensure a Smooth Deployment and Provide Post-Launch Support and Optimization.',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    data-oid="b.64w5o"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        data-oid="r:23651"
                    />{' '}
                </svg>
            ),
        },
    ];

    return (
        <div className="bg-black text-white font-sans min-h-screen relative" data-oid="5tkx6_v">
            <Suspense
                fallback={
                    <div
                        className="fixed top-0 left-0 w-full h-full bg-black z-0"
                        data-oid="unes6ta"
                    ></div>
                }
                data-oid="lf8fk_0"
            >
                <InteractiveBackground data-oid="yq1zqw3" />
            </Suspense>
            {/* Header */}{' '}
            <header
                className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800"
                data-oid="pw7uc.."
            >
                {' '}
                <div className="container mx-auto px-6 py-4" data-oid="_uyorun">
                    {' '}
                    <div className="flex justify-between items-center" data-oid="kks37zd">
                        {' '}
                        <div className="flex items-center space-x-2" data-oid="9vwn19d">
                            {' '}
                            <div className="h-14" data-oid="p449vpr">
                                {' '}
                                <Link href="/" data-oid="xuyymv7">
                                    <img
                                        src="/images/PHOTO-2025-03-28-20-01-27.jpg"
                                        alt="BitHive Technologies Logo"
                                        className="h-full w-auto rounded-md object-contain"
                                        loading="eager"
                                        data-oid="ys6nl._"
                                    />{' '}
                                </Link>
                            </div>{' '}
                        </div>{' '}
                        {/* Desktop Navigation */}{' '}
                        <nav className="hidden md:flex space-x-8" data-oid="0cbo:nr">
                            {' '}
                            {[
                                'home',
                                'services',
                                'portfolio',
                                'process',
                                'about',
                                'team',
                                'contact',
                            ].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item}`}
                                    className={`text-sm uppercase tracking-wider hover:text-blue-400 transition-colors ${activeSection === item ? 'text-blue-400' : 'text-gray-300'}`}
                                    data-oid="bxquixg"
                                >
                                    {' '}
                                    {item}{' '}
                                </a>
                            ))}{' '}
                        </nav>{' '}
                        {/* Mobile Menu Button */}{' '}
                        <button
                            className="md:hidden text-gray-300 focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                            data-oid="652_euw"
                        >
                            {' '}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="wen7fuv"
                            >
                                {' '}
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                        data-oid="txhu3z1"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                        data-oid="9qpj8y."
                                    />
                                )}{' '}
                            </svg>{' '}
                        </button>{' '}
                    </div>{' '}
                    {/* Mobile Navigation */}{' '}
                    {isMenuOpen && (
                        <nav
                            className="md:hidden pt-4 pb-2 border-t border-gray-800 mt-4"
                            data-oid=".34.uet"
                        >
                            {' '}
                            <div className="flex flex-col space-y-3" data-oid="bg6gb_k">
                                {' '}
                                {[
                                    'home',
                                    'services',
                                    'portfolio',
                                    'process',
                                    'about',
                                    'team',
                                    'contact',
                                ].map((item) => (
                                    <a
                                        key={item}
                                        href={`#${item}`}
                                        className={`text-sm uppercase tracking-wider hover:text-blue-400 transition-colors ${activeSection === item ? 'text-blue-400' : 'text-gray-300'}`}
                                        onClick={() => setIsMenuOpen(false)}
                                        data-oid="1e-wx9g"
                                    >
                                        {' '}
                                        {item}{' '}
                                    </a>
                                ))}{' '}
                            </div>{' '}
                        </nav>
                    )}{' '}
                </div>{' '}
            </header>{' '}
            {/* Hero Section */}{' '}
            <section
                id="home"
                className="pt-40 pb-20 md:pt-48 md:pb-32 relative overflow-hidden z-10"
                data-oid="3x10cyr"
            >
                {' '}
                <div
                    className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 z-0"
                    data-oid="p5.ltp7"
                ></div>{' '}
                <div className="container mx-auto px-6 relative z-10" data-oid="78d1-q6">
                    {' '}
                    <div className="max-w-3xl" data-oid="m5ag37h">
                        {' '}
                        <h1
                            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
                            data-oid="sljpyj."
                        >
                            {' '}
                            We Build{' '}
                            <span
                                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500"
                                data-oid=":aimzqx"
                            >
                                {' '}
                                Digital Experiences{' '}
                            </span>{' '}
                            That
                            <span
                                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500"
                                data-oid="anni4w8"
                            >
                                {' '}
                                Buzzes{' '}
                            </span>{' '}
                            and Drives Growth{' '}
                        </h1>{' '}
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl" data-oid="5x_cv2u">
                            {' '}
                            BitHive Technologies is a Digital Agency specializing in Cutting-edge
                            Solutions for Startups and Fast-growing Brands. We Transform Ideas into
                            Powerful Digital Products.{' '}
                        </p>{' '}
                        <div className="flex flex-col sm:flex-row gap-4" data-oid=".ehff1b">
                            {' '}
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-violet-600 rounded-md text-white font-medium hover:from-blue-600 hover:to-violet-700 transition-all shadow-lg shadow-blue-500/20 text-center"
                                data-oid="6jtgy6a"
                            >
                                {' '}
                                Let's Buzz{' '}
                            </a>{' '}
                            <a
                                href="#services"
                                className="px-8 py-4 bg-gray-800 rounded-md text-white font-medium hover:bg-gray-700 transition-all text-center"
                                data-oid="-8t1k44"
                            >
                                {' '}
                                Explore Services{' '}
                            </a>{' '}
                        </div>{' '}
                    </div>{' '}
                </div>{' '}
                {/* Abstract background elements */}{' '}
                <div
                    className="absolute -bottom-16 -right-16 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-full blur-3xl"
                    data-oid="esvy5v1"
                ></div>{' '}
                <div
                    className="absolute top-20 -right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
                    data-oid="brihnbi"
                ></div>{' '}
            </section>{' '}
            {/* Services Section */}{' '}
            <section
                id="services"
                className="py-20 bg-gray-900/80 backdrop-blur-sm relative z-10"
                data-oid="05lvbe6"
            >
                {' '}
                <div className="container mx-auto px-6" data-oid="ygf7ko.">
                    {' '}
                    <div className="text-center mb-16" data-oid="qaacfjx">
                        {' '}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="ynq4r9x">
                            {' '}
                            Our Services{' '}
                        </h2>{' '}
                        <p className="text-gray-400 max-w-2xl mx-auto" data-oid="an01i:x">
                            {' '}
                            We Offer end-to-end digital solutions tailored to your unique Business
                            needs{' '}
                        </p>{' '}
                    </div>{' '}
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        data-oid="g_zs0a4"
                    >
                        {' '}
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-black p-8 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all group"
                                data-oid="-arr8eb"
                            >
                                {' '}
                                <div
                                    className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors"
                                    data-oid="6e2n4ep"
                                >
                                    {' '}
                                    {service.icon}{' '}
                                </div>{' '}
                                <h3 className="text-xl font-semibold mb-3" data-oid="nglmm_m">
                                    {' '}
                                    {service.title}{' '}
                                </h3>{' '}
                                <p className="text-gray-400" data-oid="4qjlgv_">
                                    {' '}
                                    {service.description}{' '}
                                </p>{' '}
                            </div>
                        ))}{' '}
                    </div>{' '}
                </div>{' '}
            </section>{' '}
            {/* Why Choose Us Section */}{' '}
            <section
                id="why-us"
                className="py-20 bg-black relative overflow-hidden z-10"
                data-oid="z_0pj4_"
            >
                {' '}
                <div className="container mx-auto px-6 relative z-10" data-oid="nl.rnld">
                    {' '}
                    <div className="text-center mb-16" data-oid="ui27ke1">
                        {' '}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="0-pd0..">
                            {' '}
                            Why Choose Us ?{' '}
                        </h2>{' '}
                        <p className="text-gray-400 max-w-2xl mx-auto" data-oid="u2mddg0">
                            {' '}
                            We Combine Technical Expertise with Strategic thinking to deliver
                            Exceptional Results{' '}
                        </p>{' '}
                    </div>{' '}
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        data-oid="l_p9k9i"
                    >
                        {' '}
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg hover:bg-gray-800/50 transition-all"
                                data-oid="2epv59m"
                            >
                                {' '}
                                <div
                                    className="bg-gradient-to-br from-blue-500/20 to-violet-500/20 p-3 rounded-lg inline-block mb-4"
                                    data-oid="l8d5ewl"
                                >
                                    {' '}
                                    <div className="text-blue-400" data-oid="bit2f3n">
                                        {' '}
                                        {value.icon}{' '}
                                    </div>{' '}
                                </div>{' '}
                                <h3 className="text-xl font-semibold mb-2" data-oid="gu:0vw3">
                                    {' '}
                                    {value.title}{' '}
                                </h3>{' '}
                                <p className="text-gray-400" data-oid="gqrbt_k">
                                    {' '}
                                    {value.description}{' '}
                                </p>{' '}
                            </div>
                        ))}{' '}
                    </div>{' '}
                </div>{' '}
                {/* Abstract background elements */}{' '}
                <div
                    className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"
                    data-oid="mty6mua"
                ></div>{' '}
                <div
                    className="absolute -bottom-20 -right-20 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl"
                    data-oid="0z5h-.0"
                ></div>{' '}
            </section>{' '}
            {/* Portfolio Section */}{' '}
            <section
                id="portfolio"
                className="py-20 bg-gray-900/80 backdrop-blur-sm relative z-10"
                data-oid="0xvaegc"
            >
                {' '}
                <div className="container mx-auto px-6" data-oid="sa4g3u8">
                    {' '}
                    <div className="text-center mb-16" data-oid="ypcvmc1">
                        {' '}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="7p2g2a4">
                            {' '}
                            Our Work{' '}
                        </h2>{' '}
                        <p className="text-gray-400 max-w-2xl mx-auto" data-oid="4qkmsq9">
                            {' '}
                            Explore our Recent Projects and see how we've helped Businesses achieve
                            their Goals{' '}
                        </p>{' '}
                    </div>{' '}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-oid="exxoicw">
                        {' '}
                        {portfolio.map((project, index) => (
                            <div
                                key={index}
                                className="bg-black rounded-lg overflow-hidden group hover:shadow-lg hover:shadow-blue-500/10 transition-all"
                                data-oid="v:obdvl"
                            >
                                {' '}
                                <div className="relative h-64 overflow-hidden" data-oid="o8bpe88">
                                    {' '}
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                        data-oid="yb.uaxi"
                                    />{' '}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end"
                                        data-oid="5eu.c8m"
                                    >
                                        {' '}
                                        <div className="p-6" data-oid="9t8swn6">
                                            {' '}
                                            <div
                                                className="flex flex-wrap gap-2 mb-3"
                                                data-oid="q4555zk"
                                            >
                                                {' '}
                                                {project.tags.map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded"
                                                        data-oid="wb8_xh-"
                                                    >
                                                        {' '}
                                                        {tag}{' '}
                                                    </span>
                                                ))}{' '}
                                            </div>{' '}
                                        </div>{' '}
                                    </div>{' '}
                                </div>{' '}
                                <div className="p-6" data-oid="-ttb_19">
                                    {' '}
                                    <h3 className="text-xl font-semibold mb-2" data-oid="44i8rek">
                                        {' '}
                                        {project.title}{' '}
                                    </h3>{' '}
                                    <p className="text-gray-400" data-oid="hxuoa_q">
                                        {' '}
                                        {project.description}{' '}
                                    </p>{' '}
                                </div>{' '}
                            </div>
                        ))}{' '}
                    </div>{' '}
                    <div className="text-center mt-12" data-oid="mz7-3ed">
                        {' '}
                        <a
                            href="#contact"
                            className="inline-block px-8 py-3 bg-gray-800 rounded-md text-white font-medium hover:bg-gray-700 transition-all"
                            data-oid="f1pigfe"
                        >
                            {' '}
                            View All Projects{' '}
                        </a>{' '}
                    </div>{' '}
                </div>{' '}
            </section>{' '}
            {/* Testimonials Section */}{' '}
            <section className="py-20 bg-black relative overflow-hidden z-10" data-oid="g_weyx6">
                {' '}
                <div className="container mx-auto px-0 relative z-10" data-oid="akw2xmk">
                    {' '}
                    <div className="text-center mb-16" data-oid="8cxst9d">
                        {' '}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="hr71jgk">
                            {' '}
                            Client Testimonials{' '}
                        </h2>{' '}
                        <p className="text-gray-400 max-w-2xl mx-auto" data-oid="aqnolz_">
                            {' '}
                            Don't just take our Word for it — Hear What our Clients have to Say
                            !{' '}
                        </p>{' '}
                    </div>{' '}
                    {/* Auto-scrolling testimonial carousel */}
                    <div
                        className="relative overflow-hidden"
                        style={{ padding: '7px 0' }}
                        data-oid="gq0x.rf"
                    >
                        <div
                            className="flex animate-carousel space-x-6"
                            style={{
                                animationDuration: `${testimonials.length * 5}s`,
                                width: `${testimonials.length * 350}px`,
                            }}
                            data-oid="odz_wu7"
                        >
                            {testimonials.concat(testimonials).map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 flex-shrink-0 w-[320px] transition-transform duration-300 hover:scale-105 hover:border-blue-500/50"
                                    data-oid="6o2p-qn"
                                >
                                    <div className="flex items-center mb-6" data-oid="9eaqdk7">
                                        <div
                                            className="w-12 h-12 rounded-full overflow-hidden mr-4"
                                            data-oid="ufm57f4"
                                        >
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-full h-full object-cover"
                                                data-oid="-:iozb2"
                                            />
                                        </div>
                                        <div data-oid="w0fr5kg">
                                            <h4 className="font-semibold" data-oid="9nlcox7">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-gray-400 text-sm" data-oid="5h:r_98">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-300 italic" data-oid="tk82g5w">
                                        "{testimonial.quote}"
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <style jsx global data-oid="q0693rd">{`
                        @keyframes carousel {
                            0% {
                                transform: translateX(0);
                            }
                            100% {
                                transform: translateX(-${testimonials.length * 350}px);
                            }
                        }
                        .animate-carousel {
                            animation: carousel linear infinite;
                        }
                        .animate-carousel:hover {
                            animation-play-state: paused;
                        }
                    `}</style>
                </div>{' '}
                {/* Abstract background elements */}{' '}
                <div
                    className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
                    data-oid="2bco904"
                ></div>{' '}
                <div
                    className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl"
                    data-oid="e8jus3a"
                ></div>{' '}
            </section>{' '}
            {/* Process Section */}{' '}
            <section
                id="process"
                className="py-20 bg-gray-900/80 backdrop-blur-sm relative z-10"
                data-oid="5yllgrp"
            >
                {' '}
                <div className="container mx-auto px-6" data-oid="0.gpehx">
                    {' '}
                    <div className="text-center mb-16" data-oid="4.d11c6">
                        {' '}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="ua:4o2y">
                            {' '}
                            Our Process{' '}
                        </h2>{' '}
                        <p className="text-gray-400 max-w-2xl mx-auto" data-oid="3ra1i6t">
                            {' '}
                            A Streamlined Approach to delivering Exceptional Results{' '}
                        </p>{' '}
                    </div>{' '}
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        data-oid="s_-hq_n"
                    >
                        {' '}
                        {process.map((step, index) => (
                            <div key={index} className="relative" data-oid="hokgr30">
                                {' '}
                                <div
                                    className="bg-black p-6 rounded-lg border border-gray-800 h-full"
                                    data-oid=".vrut.g"
                                >
                                    {' '}
                                    <div
                                        className="bg-gradient-to-br from-blue-500/20 to-violet-500/20 p-3 rounded-lg inline-block mb-4"
                                        data-oid="z3qtc8-"
                                    >
                                        {' '}
                                        <div className="text-blue-400" data-oid="jnulhb0">
                                            {' '}
                                            {step.icon}{' '}
                                        </div>{' '}
                                    </div>{' '}
                                    <h3 className="text-xl font-semibold mb-2" data-oid="42lq69a">
                                        {' '}
                                        {step.title}{' '}
                                    </h3>{' '}
                                    <p className="text-gray-400" data-oid="tzsjdp-">
                                        {' '}
                                        {step.description}{' '}
                                    </p>{' '}
                                </div>{' '}
                                {/* Connector line */}{' '}
                                {index < process.length - 1 && (
                                    <div
                                        className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500"
                                        data-oid="5xpdp2n"
                                    ></div>
                                )}{' '}
                            </div>
                        ))}{' '}
                    </div>{' '}
                </div>{' '}
            </section>{' '}
            {/* About Section */}{' '}
            <section
                id="about"
                className="py-20 bg-black relative overflow-hidden z-10"
                data-oid="vjb3ynv"
            >
                {' '}
                <div className="container mx-auto px-6 relative z-10" data-oid="s.uknni">
                    {' '}
                    <div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                        data-oid="3t91st5"
                    >
                        {' '}
                        <div data-oid="q7qp75r">
                            {' '}
                            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-oid="ne5nv43">
                                {' '}
                                About BitHive Technologies{' '}
                            </h2>{' '}
                            <p className="text-gray-300 mb-6" data-oid="cg:300s">
                                {' '}
                                We're a Team of Passionate Developers, Designers, and Strategists
                                dedicated to creating Exceptional Digital Experiences. Founded with
                                a Mission to help Startups and Growing Businesses leverage
                                Technology to achieve their Goals, BitHive Technologies combines
                                Technical Expertise with Creative Thinking.{' '}
                            </p>{' '}
                            <p className="text-gray-300 mb-6" data-oid="2nllk8r">
                                {' '}
                                Our Approach is Collaborative and Transparent, ensuring that we
                                understand your Vision and deliver Solutions that exceed
                                Expectations. We Stay at the forefront of Technology trends to
                                provide Innovative Solutions that give our Clients a Competitive
                                Edge.{' '}
                            </p>{' '}
                            <div className="flex flex-wrap gap-4" data-oid="dd-x:nc">
                                {' '}
                                <div
                                    className="bg-gray-900/50 backdrop-blur-sm px-4 py-2 rounded-md"
                                    data-oid="62t-ae8"
                                >
                                    {' '}
                                    <span
                                        className="text-blue-400 font-bold text-2xl"
                                        data-oid="s-ky5fg"
                                    >
                                        {' '}
                                        20+{' '}
                                    </span>{' '}
                                    <p className="text-gray-400 text-sm" data-oid="p43o1uj">
                                        {' '}
                                        Projects Completed{' '}
                                    </p>{' '}
                                </div>{' '}
                                <div
                                    className="bg-gray-900/50 backdrop-blur-sm px-4 py-2 rounded-md"
                                    data-oid="l5w0bjd"
                                >
                                    {' '}
                                    <span
                                        className="text-blue-400 font-bold text-2xl"
                                        data-oid="w0dm1zu"
                                    >
                                        {' '}
                                        15+{' '}
                                    </span>{' '}
                                    <p className="text-gray-400 text-sm" data-oid="-q-y_uo">
                                        {' '}
                                        Happy Clients{' '}
                                    </p>{' '}
                                </div>{' '}
                                <div
                                    className="bg-gray-900/50 backdrop-blur-sm px-4 py-2 rounded-md"
                                    data-oid="s2nz1lo"
                                >
                                    {' '}
                                    <span
                                        className="text-blue-400 font-bold text-2xl"
                                        data-oid="y:v49m9"
                                    >
                                        {' '}
                                        1+{' '}
                                    </span>{' '}
                                    <p className="text-gray-400 text-sm" data-oid="udtq19j">
                                        {' '}
                                        Years Experience{' '}
                                    </p>{' '}
                                </div>{' '}
                            </div>{' '}
                        </div>{' '}
                        <div className="relative" data-oid="ojj3hqk">
                            {' '}
                            <div
                                className="bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-lg p-1"
                                data-oid="7lnv.9."
                            >
                                {' '}
                                <div className="bg-black rounded-lg p-8" data-oid="xb-_0:o">
                                    {' '}
                                    <div className="grid grid-cols-2 gap-6" data-oid="gjru7:j">
                                        {' '}
                                        <div className="space-y-6" data-oid="b8u5747">
                                            {' '}
                                            <div
                                                className="bg-gray-900 p-4 rounded-lg"
                                                data-oid="xlt:4gw"
                                            >
                                                {' '}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-8 w-8 text-blue-400 mb-2"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="f6_orho"
                                                >
                                                    {' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1.5}
                                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                        data-oid="wpynj5k"
                                                    />{' '}
                                                </svg>{' '}
                                                <h3 className="font-medium mb-1" data-oid="w2zul9q">
                                                    {' '}
                                                    Reliable{' '}
                                                </h3>{' '}
                                                <p
                                                    className="text-gray-400 text-sm"
                                                    data-oid="gy6188u"
                                                >
                                                    {' '}
                                                    We Deliver on our Promises{' '}
                                                </p>{' '}
                                            </div>{' '}
                                            <div
                                                className="bg-gray-900 p-4 rounded-lg"
                                                data-oid="06h8b-i"
                                            >
                                                {' '}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-8 w-8 text-blue-400 mb-2"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="3fhb_32"
                                                >
                                                    {' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1.5}
                                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                                        data-oid="rov9pc0"
                                                    />{' '}
                                                </svg>{' '}
                                                <h3 className="font-medium mb-1" data-oid="g-n8u7g">
                                                    {' '}
                                                    Innovative{' '}
                                                </h3>{' '}
                                                <p
                                                    className="text-gray-400 text-sm"
                                                    data-oid="2too-um"
                                                >
                                                    {' '}
                                                    Cutting-edge Solutions{' '}
                                                </p>{' '}
                                            </div>{' '}
                                        </div>{' '}
                                        <div className="space-y-6 mt-6" data-oid=".:ha48g">
                                            {' '}
                                            <div
                                                className="bg-gray-900 p-4 rounded-lg"
                                                data-oid="zqlvt:_"
                                            >
                                                {' '}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-8 w-8 text-blue-400 mb-2"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="clubrwq"
                                                >
                                                    {' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1.5}
                                                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                                                        data-oid="0x2sk67"
                                                    />{' '}
                                                </svg>{' '}
                                                <h3 className="font-medium mb-1" data-oid="x_ig-nl">
                                                    {' '}
                                                    Communicative{' '}
                                                </h3>{' '}
                                                <p
                                                    className="text-gray-400 text-sm"
                                                    data-oid="2e3fyev"
                                                >
                                                    {' '}
                                                    Clear, Open Dialogue{' '}
                                                </p>{' '}
                                            </div>{' '}
                                            <div
                                                className="bg-gray-900 p-4 rounded-lg"
                                                data-oid="06zezj."
                                            >
                                                {' '}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-8 w-8 text-blue-400 mb-2"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid=".k500yc"
                                                >
                                                    {' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1.5}
                                                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                                        data-oid="f75l:of"
                                                    />{' '}
                                                </svg>{' '}
                                                <h3 className="font-medium mb-1" data-oid="7w9_fu3">
                                                    {' '}
                                                    Quality-Focused{' '}
                                                </h3>{' '}
                                                <p
                                                    className="text-gray-400 text-sm"
                                                    data-oid="l7i84rf"
                                                >
                                                    {' '}
                                                    Excellence in every Detail{' '}
                                                </p>{' '}
                                            </div>{' '}
                                        </div>{' '}
                                    </div>{' '}
                                </div>{' '}
                            </div>{' '}
                        </div>{' '}
                    </div>{' '}
                </div>{' '}
                {/* Abstract background elements */}{' '}
                <div
                    className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
                    data-oid="8b9x8ao"
                ></div>{' '}
            </section>{' '}
            {/* Our Team Section */}{' '}
            <section
                id="team"
                className="py-20 bg-gray-900/80 backdrop-blur-sm relative z-10"
                data-oid="531gcv3"
            >
                {' '}
                <div className="container mx-auto px-6" data-oid="2f:j96o">
                    {' '}
                    <div className="text-center mb-16" data-oid="b9jiwf.">
                        {' '}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="g-rtbef">
                            {' '}
                            Our Team{' '}
                        </h2>{' '}
                        <p className="text-gray-400 max-w-2xl mx-auto" data-oid="p66_l83">
                            {' '}
                            Meet the Talented Individuals behind BitHive Technologies{' '}
                        </p>{' '}
                    </div>{' '}
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        data-oid="3:q7uc1"
                    >
                        {' '}
                        {/* Team Member 1 */}{' '}
                        <div
                            className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all group"
                            data-oid="37q::rt"
                        >
                            {' '}
                            <div className="mb-4 overflow-hidden rounded-lg" data-oid="pb5pvhp">
                                {' '}
                                <div
                                    className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center"
                                    data-oid="hve6j3c"
                                >
                                    <img
                                        src="/images/AyushSrivastav.png"
                                        alt="Ayush Srivastava"
                                        className="h-full w-full rounded-lg object-cover"
                                        loading="lazy"
                                        data-oid="hjmbdqr"
                                    />
                                </div>{' '}
                            </div>{' '}
                            <h3 className="text-xl font-semibold mb-1" data-oid="_p2uq52">
                                Ayush Srivastava
                            </h3>{' '}
                            <p className="text-blue-400 mb-2" data-oid="a8vuk0n">
                                Co-Founder & CTO
                            </p>{' '}
                            <div className="flex items-center space-x-3 mb-2">
                                <p className="text-gray-400 text-sm" data-oid="53i8qu6">
                                    {' '}
                                    <a
                                        href="mailto:ayushsrivastava@bithive.in"
                                        className="hover:text-blue-400 transition-colors"
                                        data-oid="exp0w7:"
                                    >
                                        {' '}
                                        ayushsrivastava@bithive.in{' '}
                                    </a>{' '}
                                </p>
                                <a
                                    href="https://www.linkedin.com/in/ayush-srivastava-bithive"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-blue-400 transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                            </div>
                        </div>{' '}
                        {/* Team Member 2 */}{' '}
                        <div
                            className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all group"
                            data-oid="h4l_j4k"
                        >
                            {' '}
                            <div className="mb-4 overflow-hidden rounded-lg" data-oid="49v2gvp">
                                {' '}
                                <div
                                    className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center"
                                    data-oid="u5xjg:n"
                                >
                                    <img
                                        src="/images/Saurabh.jpeg"
                                        alt="Saurabh Singh"
                                        className="h-full w-full rounded-lg object-cover"
                                        data-oid="al4dbc0"
                                    />
                                </div>{' '}
                            </div>{' '}
                            <h3 className="text-xl font-semibold mb-1" data-oid="rft0t9t">
                                Saurabh Singh
                            </h3>{' '}
                            <p className="text-blue-400 mb-2" data-oid="74z4j8j">
                                Co-Founder & Tech Lead
                            </p>{' '}
                            <div className="flex items-center space-x-3 mb-2">
                                <p className="text-gray-400 text-sm" data-oid="1yl:1_k">
                                    {' '}
                                    <a
                                        href="mailto:saurabhsingh@bithive.in"
                                        className="hover:text-blue-400 transition-colors"
                                        data-oid="a_1h_xc"
                                    >
                                        {' '}
                                        saurabhsingh@bithive.in{' '}
                                    </a>{' '}
                                </p>
                                <a
                                    href="https://www.linkedin.com/in/saurabh-singh-bithive"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-blue-400 transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                            </div>
                        </div>{' '}
                        {/* Team Member 3 */}{' '}
                        <div
                            className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all group"
                            data-oid="1o5c2c3"
                        >
                            {' '}
                            <div className="mb-4 overflow-hidden rounded-lg" data-oid="7ltttz9">
                                {' '}
                                <div
                                    className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center"
                                    data-oid="vcasq54"
                                >
                                    <img
                                        src="/images/AyushKumar.jpeg"
                                        alt="Ayush Srivastava"
                                        className="h-full w-full rounded-lg object-cover"
                                        data-oid="cvjb0ow"
                                    />
                                </div>{' '}
                            </div>{' '}
                            <h3 className="text-xl font-semibold mb-1" data-oid="udfk0:5">
                                Ayush Kumar
                            </h3>{' '}
                            <p className="text-blue-400 mb-2" data-oid="ydb1a.s">
                                CMO/CSO
                            </p>{' '}
                            <div className="flex items-center space-x-3 mb-2">
                                <p className="text-gray-400 text-sm" data-oid="d-_v_lf">
                                    {' '}
                                    <a
                                        href="mailto:ayushkumar@bithive.in"
                                        className="hover:text-blue-400 transition-colors"
                                        data-oid="8ycfk5a"
                                    >
                                        {' '}
                                        ayushkumar@bithive.in{' '}
                                    </a>{' '}
                                </p>
                                <a
                                    href="https://www.linkedin.com/in/ayush-kumar-bithive"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-blue-400 transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                            </div>
                        </div>{' '}
                        {/* Team Member 4 */}{' '}
                        <div
                            className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all group"
                            data-oid="1ld2wu2"
                        >
                            {' '}
                            <div className="mb-4 overflow-hidden rounded-lg" data-oid="df1kbd2">
                                {' '}
                                <div
                                    className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center"
                                    data-oid="gs2159y"
                                >
                                    <img
                                        src="/images/Priyansh.jpeg"
                                        alt="Priyansh Kandwal"
                                        className="h-full w-full rounded-lg object-cover"
                                        data-oid="_js7uzq"
                                    />
                                </div>{' '}
                            </div>{' '}
                            <h3 className="text-xl font-semibold mb-1" data-oid="rk.3c5u">
                                Priyansh Kandwal
                            </h3>{' '}
                            <p className="text-blue-400 mb-2" data-oid="fi23f:y">
                                COO & Team Lead
                            </p>{' '}
                            <div className="flex items-center space-x-3 mb-2">
                                <p className="text-gray-400 text-sm" data-oid="n4_a7x-">
                                    {' '}
                                    <a
                                        href="mailto:priyanshkandwal@bithive.in"
                                        className="hover:text-blue-400 transition-colors"
                                        data-oid="b3dev-4"
                                    >
                                        {' '}
                                        priyanshkandwal@bithive.in{' '}
                                    </a>{' '}
                                </p>
                                <a
                                    href="https://www.linkedin.com/in/priyansh-kandwal-bithive"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-blue-400 transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                            </div>
                        </div>{' '}
                    </div>{' '}
                </div>{' '}
            </section>{' '}
            {/* CTA Section */}{' '}
            <section
                className="py-20 bg-gradient-to-r from-blue-900/30 to-violet-900/30 relative z-10"
                data-oid="19_cdbq"
            >
                {' '}
                <div className="container mx-auto px-6 text-center" data-oid="rmrj3w7">
                    {' '}
                    <h2 className="text-3xl md:text-4xl font-bold mb-6" data-oid="763jjxx">
                        {' '}
                        Ready to Transform Your Digital Presence?{' '}
                    </h2>{' '}
                    <p className="text-gray-300 max-w-2xl mx-auto mb-10" data-oid="y5l37jh">
                        {' '}
                        Let's Collaborate to Create Innovative Solutions that drive your Business
                        forward. Get in Touch today to discuss your Project.{' '}
                    </p>{' '}
                    <a
                        href="#contact"
                        className="px-8 py-4 bg-gradient-to-r from-blue-500 to-violet-600 rounded-md text-white font-medium hover:from-blue-600 hover:to-violet-700 transition-all shadow-lg shadow-blue-500/20 inline-block"
                        data-oid="_alou_9"
                    >
                        {' '}
                        Let's Buzz{' '}
                    </a>{' '}
                </div>{' '}
            </section>{' '}
            {/* Contact Section */}{' '}
            <section id="contact" className="py-16 pb-12 bg-black relative z-10" data-oid="0k4aj-f">
                {' '}
                <div className="container mx-auto px-6 max-w-6xl" data-oid="diupd82">
                    {' '}
                    <div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                        data-oid="ize7gcj"
                    >
                        {' '}
                        <div className="mx-auto w-full" data-oid="swt_vak">
                            {' '}
                            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="tozda.j">
                                {' '}
                                Get In Touch{' '}
                            </h2>{' '}
                            <p className="text-gray-300 mb-6" data-oid="z41cf:v">
                                {' '}
                                Have a Project in mind or want to learn more about our Services?
                                Fill out the Form and We'll get back to you as soon as
                                possible.{' '}
                            </p>{' '}
                            <div className="space-y-4" data-oid="k9awz6i">
                                {' '}
                                <div className="flex items-start" data-oid="y3ui:rd">
                                    {' '}
                                    <div
                                        className="bg-gray-900 p-3 rounded-lg mr-4"
                                        data-oid="yg3e4o-"
                                    >
                                        {' '}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-blue-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="lg3390v"
                                        >
                                            {' '}
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                data-oid="rbs8.x0"
                                            />{' '}
                                        </svg>{' '}
                                    </div>{' '}
                                    <div data-oid="s9mbckp">
                                        {' '}
                                        <h3 className="font-medium mb-1" data-oid="zsk138w">
                                            {' '}
                                            Email{' '}
                                        </h3>{' '}
                                        <p className="text-gray-400" data-oid="k8t09yc">
                                            {' '}
                                            buzz@bithive.in{' '}
                                        </p>{' '}
                                    </div>{' '}
                                </div>{' '}
                                <div className="flex items-start" data-oid="y--m-kr">
                                    {' '}
                                    <div
                                        className="bg-gray-900 p-3 rounded-lg mr-4"
                                        data-oid="lymal-e"
                                    >
                                        {' '}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-blue-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="93q9..7"
                                        >
                                            {' '}
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                data-oid="tvqeqp4"
                                            />{' '}
                                        </svg>{' '}
                                    </div>{' '}
                                    <div data-oid="tgjgjlq">
                                        {' '}
                                        <h3 className="font-medium mb-1" data-oid="_fphlq9">
                                            {' '}
                                            Phone{' '}
                                        </h3>{' '}
                                        <p className="text-gray-400" data-oid=".2pupqf">
                                            {' '}
                                            +91 7070030645 , +91 9369450531{' '}
                                        </p>{' '}
                                    </div>{' '}
                                </div>{' '}
                                <div className="flex items-start" data-oid="s2c-h.-">
                                    {' '}
                                    <div
                                        className="bg-gray-900 p-3 rounded-lg mr-4"
                                        data-oid="o4gukvd"
                                    >
                                        {' '}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-blue-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="a:lxkoj"
                                        >
                                            {' '}
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                data-oid="zq4cxsz"
                                            />{' '}
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                data-oid="tjw7p_4"
                                            />{' '}
                                        </svg>{' '}
                                    </div>{' '}
                                    <div data-oid="2.9z9-x">
                                        {' '}
                                        <h3 className="font-medium mb-1" data-oid="16ofez.">
                                            {' '}
                                            Head Office{' '}
                                        </h3>{' '}
                                        <p className="text-gray-400" data-oid="8bdw-18">
                                            {' '}
                                            Gurugram, Haryana, India{' '}
                                        </p>{' '}
                                    </div>{' '}
                                </div>{' '}
                                <div className="flex items-start" data-oid="n9qj7b_">
                                    {' '}
                                    <div
                                        className="bg-gray-900 p-3 rounded-lg mr-4"
                                        data-oid="bt0nrgk"
                                    >
                                        {' '}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-blue-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="j5m6w06"
                                        >
                                            {' '}
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                data-oid="27csh5l"
                                            />{' '}
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                data-oid="l1klbap"
                                            />{' '}
                                        </svg>{' '}
                                    </div>{' '}
                                    <div data-oid="1hxv16h">
                                        {' '}
                                        <h3 className="font-medium mb-1" data-oid="9:qo0go">
                                            {' '}
                                            Sub Office{' '}
                                        </h3>{' '}
                                        <p className="text-gray-400" data-oid="mys:8iz">
                                            {' '}
                                            Dehradun, Uttarakhand, India{' '}
                                        </p>{' '}
                                    </div>{' '}
                                </div>{' '}
                            </div>{' '}
                        </div>{' '}
                        <div
                            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg mx-auto w-full"
                            data-oid=":o-lrr."
                        >
                            {' '}
                            <form data-oid="--t9vb2">
                                {' '}
                                <div
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4"
                                    data-oid="jzhun4a"
                                >
                                    {' '}
                                    <div data-oid="0o1-wdd">
                                        {' '}
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-400 mb-2"
                                            data-oid=".8tu66g"
                                        >
                                            {' '}
                                            Name{' '}
                                        </label>{' '}
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full bg-black border border-gray-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Your name"
                                            data-oid="1xknbkw"
                                        />{' '}
                                    </div>{' '}
                                    <div data-oid="1o4.g8d">
                                        {' '}
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-400 mb-2"
                                            data-oid="oh21jp1"
                                        >
                                            {' '}
                                            Email{' '}
                                        </label>{' '}
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full bg-black border border-gray-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Your email"
                                            data-oid="q-935jf"
                                        />{' '}
                                    </div>{' '}
                                </div>{' '}
                                <div className="mb-4" data-oid="yazhhza">
                                    {' '}
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm font-medium text-gray-400 mb-2"
                                        data-oid="c3jjbqh"
                                    >
                                        {' '}
                                        Subject{' '}
                                    </label>{' '}
                                    <input
                                        type="text"
                                        id="subject"
                                        className="w-full bg-black border border-gray-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Subject"
                                        data-oid="zfg:nmn"
                                    />{' '}
                                </div>{' '}
                                <div className="mb-4" data-oid="._oofyj">
                                    {' '}
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-400 mb-2"
                                        data-oid="1a1phk-"
                                    >
                                        {' '}
                                        Message{' '}
                                    </label>{' '}
                                    <textarea
                                        id="message"
                                        rows={5}
                                        className="w-full bg-black border border-gray-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Your message"
                                        data-oid="rykynha"
                                    ></textarea>{' '}
                                </div>{' '}
                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-violet-600 rounded-md text-white font-medium hover:from-blue-600 hover:to-violet-700 transition-all shadow-lg shadow-blue-500/20"
                                    data-oid=":m4-80h"
                                >
                                    {' '}
                                    Send Message{' '}
                                </button>{' '}
                            </form>{' '}
                        </div>{' '}
                    </div>{' '}
                </div>{' '}
            </section>{' '}
            {/* Footer */}{' '}
            <footer
                className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-800 relative z-10"
                data-oid="qxnxcwl"
            >
                {' '}
                <div className="container mx-auto px-6 py-12" data-oid="wf08u:o">
                    {' '}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-oid="a6w4kr9">
                        {' '}
                        <div className="md:col-span-1" data-oid="9:y4fy3">
                            {' '}
                            <div className="mb-6" data-oid="rc-6or5">
                                {' '}
                                <img
                                    src="/images/PHOTO-2025-03-28-20-01-27.jpg"
                                    alt="BitHive Technologies Logo"
                                    className="h-16 w-auto rounded-md object-contain"
                                    data-oid="_e_8vox"
                                />{' '}
                            </div>{' '}
                            <p className="text-gray-400 mb-6" data-oid="qyv3lsf">
                                {' '}
                                Creating Buzz in Digital Experiences !{' '}
                            </p>{' '}
                            <div className="flex space-x-4" data-oid="upiym7y">
                                {' '}
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-blue-400 transition-colors"
                                    data-oid=".khfy9s"
                                >
                                    {' '}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="iwatxho"
                                    >
                                        {' '}
                                        <path
                                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                                            data-oid="8magwfn"
                                        />{' '}
                                    </svg>{' '}
                                </a>{' '}
                                <a
                                    href="https://www.linkedin.com/company/bithive-technology "
                                    className="text-gray-400 hover:text-blue-400 transition-colors"
                                    data-oid="sbo:m1x"
                                >
                                    {' '}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="r4fyttw"
                                    >
                                        {' '}
                                        <path
                                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                            data-oid="hzb8z55"
                                        />{' '}
                                    </svg>{' '}
                                </a>{' '}
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-blue-400 transition-colors"
                                    data-oid="hpgt221"
                                >
                                    {' '}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="7szliio"
                                    >
                                        {' '}
                                        <path
                                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                            data-oid="75rlhq4"
                                        />{' '}
                                    </svg>{' '}
                                </a>{' '}
                            </div>{' '}
                        </div>{' '}
                        <div data-oid="8kuyb.c">
                            {' '}
                            <h3 className="text-lg font-semibold mb-4" data-oid="f3.2t1p">
                                {' '}
                                Services{' '}
                            </h3>{' '}
                            <ul className="space-y-2" data-oid="eax_pkx">
                                {' '}
                                <li className="text-gray-400" data-oid="efjzcxs">
                                    {' '}
                                    Website Development{' '}
                                </li>{' '}
                                <li className="text-gray-400" data-oid=":.whysq">
                                    {' '}
                                    Mobile App Development{' '}
                                </li>{' '}
                                <li className="text-gray-400" data-oid="irtgz08">
                                    {' '}
                                    UI/UX Design{' '}
                                </li>{' '}
                                <li className="text-gray-400" data-oid="b0:nn1l">
                                    {' '}
                                    Product Design{' '}
                                </li>{' '}
                                <li className="text-gray-400" data-oid="7.lcpis">
                                    {' '}
                                    Digital Strategy{' '}
                                </li>{' '}
                            </ul>{' '}
                        </div>{' '}
                        <div data-oid="nd6zsmr">
                            {' '}
                            <h3 className="text-lg font-semibold mb-4" data-oid="wsl0fwz">
                                {' '}
                                Company{' '}
                            </h3>{' '}
                            <ul className="space-y-2" data-oid="w.spoz2">
                                {' '}
                                <li data-oid="kp6bxcj">
                                    {' '}
                                    <a
                                        href="#about"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        data-oid="_1hebxz"
                                    >
                                        {' '}
                                        About Us{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="bp29byj">
                                    {' '}
                                    <a
                                        href="#portfolio"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        data-oid="c10y:tv"
                                    >
                                        {' '}
                                        Portfolio{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="vf2g13l">
                                    {' '}
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        data-oid="k7aga.6"
                                    >
                                        {' '}
                                        Careers{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="h:ztmxn">
                                    {' '}
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        data-oid="k0zrr_7"
                                    >
                                        {' '}
                                        Blog{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="lkhag-_">
                                    {' '}
                                    <a
                                        href="#contact"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        data-oid="y.-8kmi"
                                    >
                                        {' '}
                                        Contact{' '}
                                    </a>{' '}
                                </li>{' '}
                            </ul>{' '}
                        </div>{' '}
                        <div data-oid="8csi9b-">
                            {' '}
                            <h3 className="text-lg font-semibold mb-4" data-oid="sl.1x_z">
                                {' '}
                                Legal{' '}
                            </h3>{' '}
                            <ul className="space-y-2" data-oid="og17lj0">
                                {' '}
                                <li data-oid="n9gzwq2">
                                    {' '}
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        data-oid="gv6h.k_"
                                    >
                                        {' '}
                                        Privacy Policy{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="789rtpl">
                                    {' '}
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        data-oid=".9byesx"
                                    >
                                        {' '}
                                        Terms of Service{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="0ldlmk3">
                                    {' '}
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        data-oid="rrdgmfq"
                                    >
                                        {' '}
                                        Cookie Policy{' '}
                                    </a>{' '}
                                </li>{' '}
                            </ul>{' '}
                        </div>{' '}
                    </div>{' '}
                    <div
                        className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
                        data-oid="1xk3d_:"
                    >
                        {' '}
                        <p className="text-gray-500 text-sm" data-oid="6sjg4fw">
                            {' '}
                            &copy; {new Date().getFullYear()} BitHive Technologies. All rights
                            Reserved.{' '}
                        </p>{' '}
                        <p className="text-gray-500 text-sm mt-4 md:mt-0" data-oid="twk_pe_">
                            {' '}
                            Built with ❤️ by BitHive Technologies{' '}
                        </p>{' '}
                    </div>{' '}
                </div>{' '}
            </footer>{' '}
        </div>
    );
}
