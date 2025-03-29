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
                    data-oid="nxo73ud"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        data-oid="pscbi_6"
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
                    data-oid="x9zqcli"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        data-oid="8urwf-_"
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
                    data-oid="3q9yk00"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                        data-oid="pl:cygk"
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
                    data-oid="o_m1vui"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                        data-oid="w8lgl-c"
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
                    data-oid=".2sfbg0"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        data-oid="0pj.ed0"
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
                    data-oid="efrvj7j"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        data-oid="j16a:d9"
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
                    data-oid="jygik:f"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                        data-oid="pbaki6f"
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
                    data-oid="_jyloo8"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        data-oid="3.aj5nn"
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
            role: 'Team Lead, Raysteeds Energy',
            quote: 'BitHive transformed our concept into a polished product that exceeded our expectations. Their attention to detail and technical expertise is unmatched.',
            image: 'images/Pramath.jpg',
        },
        {
            name: 'Diwakar Y.',
            role: 'Founder, Organic Foods House',
            quote: 'Working with BitHive was seamless from start to finish. They delivered our Web app ahead of schedule and their ongoing support has been exceptional.',
            image: 'images/DiwakarClient1.jpeg',
        },
        {
            name: 'Andria',
            role: 'Business Owner',
            quote: "The team at BitHive doesn't just build what you ask for—they improve upon your ideas with their expertise. True partners in our success.",
            image: 'images/Andria.jpg',
        },
        {
            name: 'Andria',
            role: 'Business Owner',
            quote: "The team at BitHive doesn't just build what you ask for—they improve upon your ideas with their expertise. True partners in our success.",
            image: 'images/Andria.jpg',
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
                    data-oid="ljft_4o"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        data-oid="9rx1-i-"
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
                    data-oid="4qz3tiy"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        data-oid="quj2061"
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
                    data-oid="_iw292s"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        data-oid="wxr-zfx"
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
                    data-oid="ogkaoxb"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        data-oid="3ot3bwz"
                    />{' '}
                </svg>
            ),
        },
    ];

    return (
        <div className="bg-black text-white font-sans min-h-screen relative" data-oid="f0jwj50">
            <Suspense
                fallback={
                    <div
                        className="fixed top-0 left-0 w-full h-full bg-black z-0"
                        data-oid="x.l5iy-"
                    ></div>
                }
                data-oid="7:4l_nr"
            >
                <InteractiveBackground data-oid="quji8i4" />
            </Suspense>
            {/* Header */}{' '}
            <header
                className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800"
                data-oid="4ma55zn"
            >
                {' '}
                <div className="container mx-auto px-6 py-4" data-oid="ojctnrg">
                    {' '}
                    <div className="flex justify-between items-center" data-oid="_:xd2i6">
                        {' '}
                        <div className="flex items-center space-x-2" data-oid="-m-z5d2">
                            {' '}
                            <div className="h-14" data-oid="su_t_c4">
                                {' '}
                                <Link href="/" data-oid="a1qre8t">
                                    <img
                                        src="/images/PHOTO-2025-03-28-20-01-27.jpg"
                                        alt="BitHive Technologies Logo"
                                        className="h-full w-auto rounded-md object-contain"
                                        loading="eager"
                                        data-oid="kri3cap"
                                    />{' '}
                                </Link>
                            </div>{' '}
                        </div>{' '}
                        {/* Desktop Navigation */}{' '}
                        <nav className="hidden md:flex space-x-8" data-oid="pwbtteo">
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
                                    data-oid="wsba6_l"
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
                            data-oid="494r-ih"
                        >
                            {' '}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="rlwucc1"
                            >
                                {' '}
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                        data-oid="-h80-xo"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                        data-oid="l9.i0ju"
                                    />
                                )}{' '}
                            </svg>{' '}
                        </button>{' '}
                    </div>{' '}
                    {/* Mobile Navigation */}{' '}
                    {isMenuOpen && (
                        <nav
                            className="md:hidden pt-4 pb-2 border-t border-gray-800 mt-4"
                            data-oid=".um0zpj"
                        >
                            {' '}
                            <div className="flex flex-col space-y-3" data-oid=".c:kclp">
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
                                        data-oid="ek4-in_"
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
                data-oid="fb597m5"
            >
                {' '}
                <div
                    className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 z-0"
                    data-oid="h23oxed"
                ></div>{' '}
                <div className="container mx-auto px-6 relative z-10" data-oid="uagw9a-">
                    {' '}
                    <div className="max-w-3xl" data-oid="_cbl-fh">
                        {' '}
                        <h1
                            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
                            data-oid="y3i9rde"
                        >
                            {' '}
                            We Build{' '}
                            <span
                                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500"
                                data-oid="se:z03-"
                            >
                                {' '}
                                Digital Experiences{' '}
                            </span>{' '}
                            That
                            <span
                                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500"
                                data-oid="4vte9_:"
                            >
                                {' '}
                                Buzzes{' '}
                            </span>{' '}
                            and Drives Growth{' '}
                        </h1>{' '}
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl" data-oid="3nl17:m">
                            {' '}
                            BitHive Technologies is a Digital Agency specializing in Cutting-edge
                            Solutions for Startups and Fast-growing Brands. We Transform Ideas into
                            Powerful Digital Products.{' '}
                        </p>{' '}
                        <div className="flex flex-col sm:flex-row gap-4" data-oid="xtglro1">
                            {' '}
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-violet-600 rounded-md text-white font-medium hover:from-blue-600 hover:to-violet-700 transition-all shadow-lg shadow-blue-500/20 text-center"
                                data-oid="96o2yr-"
                            >
                                {' '}
                                Let's Buzz{' '}
                            </a>{' '}
                            <a
                                href="#services"
                                className="px-8 py-4 bg-gray-800 rounded-md text-white font-medium hover:bg-gray-700 transition-all text-center"
                                data-oid="3vwnnmy"
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
                    data-oid="rof1.ab"
                ></div>{' '}
                <div
                    className="absolute top-20 -right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
                    data-oid="2kpkwbn"
                ></div>{' '}
            </section>{' '}
            {/* Services Section */}{' '}
            <section
                id="services"
                className="py-20 bg-gray-900/80 backdrop-blur-sm relative z-10"
                data-oid="t.zhj43"
            >
                {' '}
                <div className="container mx-auto px-6" data-oid="ijqg9rx">
                    {' '}
                    <div className="text-center mb-16" data-oid="2jpaljv">
                        {' '}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="qdyq980">
                            {' '}
                            Our Services{' '}
                        </h2>{' '}
                        <p className="text-gray-400 max-w-2xl mx-auto" data-oid=":bbzhkp">
                            {' '}
                            We Offer end-to-end digital solutions tailored to your unique Business
                            needs{' '}
                        </p>{' '}
                    </div>{' '}
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        data-oid="_tmh0ms"
                    >
                        {' '}
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-black p-8 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all group"
                                data-oid="f90pr8-"
                            >
                                {' '}
                                <div
                                    className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors"
                                    data-oid="bo4.5_b"
                                >
                                    {' '}
                                    {service.icon}{' '}
                                </div>{' '}
                                <h3 className="text-xl font-semibold mb-3" data-oid="9tw9m--">
                                    {' '}
                                    {service.title}{' '}
                                </h3>{' '}
                                <p className="text-gray-400" data-oid="4.vcijk">
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
                data-oid="ps0:vi2"
            >
                {' '}
                <div className="container mx-auto px-6 relative z-10" data-oid="j6gdsct">
                    {' '}
                    <div className="text-center mb-16" data-oid="vii4xmr">
                        {' '}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="jkifpe3">
                            {' '}
                            Why Choose Us ?{' '}
                        </h2>{' '}
                        <p className="text-gray-400 max-w-2xl mx-auto" data-oid="-yd857e">
                            {' '}
                            We Combine Technical Expertise with Strategic thinking to deliver
                            Exceptional Results{' '}
                        </p>{' '}
                    </div>{' '}
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        data-oid="7.dv8ze"
                    >
                        {' '}
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg hover:bg-gray-800/50 transition-all"
                                data-oid=":dqads8"
                            >
                                {' '}
                                <div
                                    className="bg-gradient-to-br from-blue-500/20 to-violet-500/20 p-3 rounded-lg inline-block mb-4"
                                    data-oid="kvuul:w"
                                >
                                    {' '}
                                    <div className="text-blue-400" data-oid="70nfuop">
                                        {' '}
                                        {value.icon}{' '}
                                    </div>{' '}
                                </div>{' '}
                                <h3 className="text-xl font-semibold mb-2" data-oid="ms5p0e:">
                                    {' '}
                                    {value.title}{' '}
                                </h3>{' '}
                                <p className="text-gray-400" data-oid="momcpe4">
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
                    data-oid="5t7h_i9"
                ></div>{' '}
                <div
                    className="absolute -bottom-20 -right-20 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl"
                    data-oid="3djxrj3"
                ></div>{' '}
            </section>{' '}
            {/* Portfolio Section */}{' '}
            <section
                id="portfolio"
                className="py-20 bg-gray-900/80 backdrop-blur-sm relative z-10"
                data-oid="55xa-3s"
            >
                {' '}
                <div className="container mx-auto px-6" data-oid="l.3lzg8">
                    {' '}
                    <div className="text-center mb-16" data-oid="xn_e4c9">
                        {' '}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="-ck0ev5">
                            {' '}
                            Our Work{' '}
                        </h2>{' '}
                        <p className="text-gray-400 max-w-2xl mx-auto" data-oid="ds.1g17">
                            {' '}
                            Explore our Recent Projects and see how we've helped Businesses achieve
                            their Goals{' '}
                        </p>{' '}
                    </div>{' '}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-oid="bqjz.ul">
                        {' '}
                        {portfolio.map((project, index) => (
                            <div
                                key={index}
                                className="bg-black rounded-lg overflow-hidden group hover:shadow-lg hover:shadow-blue-500/10 transition-all"
                                data-oid="zys78m1"
                            >
                                {' '}
                                <div className="relative h-64 overflow-hidden" data-oid="xonp3pz">
                                    {' '}
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                        data-oid="es79jn4"
                                    />{' '}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end"
                                        data-oid="sxjsjo6"
                                    >
                                        {' '}
                                        <div className="p-6" data-oid="nr_2v2n">
                                            {' '}
                                            <div
                                                className="flex flex-wrap gap-2 mb-3"
                                                data-oid="h4tyk-q"
                                            >
                                                {' '}
                                                {project.tags.map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded"
                                                        data-oid="e31imgj"
                                                    >
                                                        {' '}
                                                        {tag}{' '}
                                                    </span>
                                                ))}{' '}
                                            </div>{' '}
                                        </div>{' '}
                                    </div>{' '}
                                </div>{' '}
                                <div className="p-6" data-oid="4x6gv7e">
                                    {' '}
                                    <h3 className="text-xl font-semibold mb-2" data-oid="xi1xnmc">
                                        {' '}
                                        {project.title}{' '}
                                    </h3>{' '}
                                    <p className="text-gray-400" data-oid="::inx0t">
                                        {' '}
                                        {project.description}{' '}
                                    </p>{' '}
                                </div>{' '}
                            </div>
                        ))}{' '}
                    </div>{' '}
                    <div className="text-center mt-12" data-oid="7ox:r2u">
                        {' '}
                        <a
                            href="#contact"
                            className="inline-block px-8 py-3 bg-gray-800 rounded-md text-white font-medium hover:bg-gray-700 transition-all"
                            data-oid="fg-g-:s"
                        >
                            {' '}
                            View All Projects{' '}
                        </a>{' '}
                    </div>{' '}
                </div>{' '}
            </section>{' '}
            {/* Testimonials Section */}{' '}
            <section className="py-20 bg-black relative overflow-hidden z-10" data-oid="j_s4_gl">
                {' '}
                <div className="container mx-auto px-6 relative z-10" data-oid="qnumvow">
                    {' '}
                    <div className="text-center mb-16" data-oid="jc0ug:g">
                        {' '}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="90lap12">
                            {' '}
                            Client Testimonials{' '}
                        </h2>{' '}
                        <p className="text-gray-400 max-w-2xl mx-auto" data-oid="nol1hrg">
                            {' '}
                            Don't just take our Word for it — Hear What our Clients have to Say
                            !{' '}
                        </p>{' '}
                    </div>{' '}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="80qw04:">
                        {' '}
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800"
                                data-oid=".0oylnn"
                            >
                                {' '}
                                <div className="flex items-center mb-6" data-oid="0_jskm5">
                                    {' '}
                                    <div
                                        className="w-12 h-12 rounded-full overflow-hidden mr-4"
                                        data-oid="uea.zze"
                                    >
                                        {' '}
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover"
                                            data-oid="yk11sdb"
                                        />{' '}
                                    </div>{' '}
                                    <div data-oid="dakmj:6">
                                        {' '}
                                        <h4 className="font-semibold" data-oid="rhtfp5n">
                                            {' '}
                                            {testimonial.name}{' '}
                                        </h4>{' '}
                                        <p className="text-gray-400 text-sm" data-oid="g65k-o1">
                                            {' '}
                                            {testimonial.role}{' '}
                                        </p>{' '}
                                    </div>{' '}
                                </div>{' '}
                                <p className="text-gray-300 italic" data-oid="es:uxyp">
                                    {' '}
                                    "{testimonial.quote}"{' '}
                                </p>{' '}
                            </div>
                        ))}{' '}
                    </div>{' '}
                </div>{' '}
                {/* Abstract background elements */}{' '}
                <div
                    className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
                    data-oid="qm1qm3m"
                ></div>{' '}
                <div
                    className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl"
                    data-oid="-ptllvd"
                ></div>{' '}
            </section>{' '}
            {/* Process Section */}{' '}
            <section
                id="process"
                className="py-20 bg-gray-900/80 backdrop-blur-sm relative z-10"
                data-oid="61t9fcq"
            >
                {' '}
                <div className="container mx-auto px-6" data-oid="q8i1:3s">
                    {' '}
                    <div className="text-center mb-16" data-oid="q7h1m4p">
                        {' '}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="0-8gqns">
                            {' '}
                            Our Process{' '}
                        </h2>{' '}
                        <p className="text-gray-400 max-w-2xl mx-auto" data-oid="cszvpm_">
                            {' '}
                            A Streamlined Approach to delivering Exceptional Results{' '}
                        </p>{' '}
                    </div>{' '}
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        data-oid="06w2wcf"
                    >
                        {' '}
                        {process.map((step, index) => (
                            <div key={index} className="relative" data-oid="txwci8r">
                                {' '}
                                <div
                                    className="bg-black p-6 rounded-lg border border-gray-800 h-full"
                                    data-oid="-buqh2y"
                                >
                                    {' '}
                                    <div
                                        className="bg-gradient-to-br from-blue-500/20 to-violet-500/20 p-3 rounded-lg inline-block mb-4"
                                        data-oid="zqdbojo"
                                    >
                                        {' '}
                                        <div className="text-blue-400" data-oid="46tuz7i">
                                            {' '}
                                            {step.icon}{' '}
                                        </div>{' '}
                                    </div>{' '}
                                    <h3 className="text-xl font-semibold mb-2" data-oid="lmsxkot">
                                        {' '}
                                        {step.title}{' '}
                                    </h3>{' '}
                                    <p className="text-gray-400" data-oid="8sw95tw">
                                        {' '}
                                        {step.description}{' '}
                                    </p>{' '}
                                </div>{' '}
                                {/* Connector line */}{' '}
                                {index < process.length - 1 && (
                                    <div
                                        className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500"
                                        data-oid="w94uaaa"
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
                data-oid="2gelw:i"
            >
                {' '}
                <div className="container mx-auto px-6 relative z-10" data-oid="78t2prj">
                    {' '}
                    <div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                        data-oid="b7q4giz"
                    >
                        {' '}
                        <div data-oid="trrmwy2">
                            {' '}
                            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-oid="bym-az5">
                                {' '}
                                About BitHive Technologies{' '}
                            </h2>{' '}
                            <p className="text-gray-300 mb-6" data-oid="0z8y2o8">
                                {' '}
                                We're a Team of Passionate Developers, Designers, and Strategists
                                dedicated to creating Exceptional Digital Experiences. Founded with
                                a Mission to help Startups and Growing Businesses leverage
                                Technology to achieve their Goals, BitHive Technologies combines
                                Technical Expertise with Creative Thinking.{' '}
                            </p>{' '}
                            <p className="text-gray-300 mb-6" data-oid="6o3_m89">
                                {' '}
                                Our Approach is Collaborative and Transparent, ensuring that we
                                understand your Vision and deliver Solutions that exceed
                                Expectations. We Stay at the forefront of Technology trends to
                                provide Innovative Solutions that give our Clients a Competitive
                                Edge.{' '}
                            </p>{' '}
                            <div className="flex flex-wrap gap-4" data-oid="_eesjww">
                                {' '}
                                <div
                                    className="bg-gray-900/50 backdrop-blur-sm px-4 py-2 rounded-md"
                                    data-oid="mph:u-z"
                                >
                                    {' '}
                                    <span
                                        className="text-blue-400 font-bold text-2xl"
                                        data-oid="41o:dce"
                                    >
                                        {' '}
                                        20+{' '}
                                    </span>{' '}
                                    <p className="text-gray-400 text-sm" data-oid="f4d4rcu">
                                        {' '}
                                        Projects Completed{' '}
                                    </p>{' '}
                                </div>{' '}
                                <div
                                    className="bg-gray-900/50 backdrop-blur-sm px-4 py-2 rounded-md"
                                    data-oid="ba4t9ah"
                                >
                                    {' '}
                                    <span
                                        className="text-blue-400 font-bold text-2xl"
                                        data-oid="8:b5p4g"
                                    >
                                        {' '}
                                        15+{' '}
                                    </span>{' '}
                                    <p className="text-gray-400 text-sm" data-oid="pda7gvi">
                                        {' '}
                                        Happy Clients{' '}
                                    </p>{' '}
                                </div>{' '}
                                <div
                                    className="bg-gray-900/50 backdrop-blur-sm px-4 py-2 rounded-md"
                                    data-oid="o98irva"
                                >
                                    {' '}
                                    <span
                                        className="text-blue-400 font-bold text-2xl"
                                        data-oid="u5bl.:o"
                                    >
                                        {' '}
                                        1+{' '}
                                    </span>{' '}
                                    <p className="text-gray-400 text-sm" data-oid="g7qek54">
                                        {' '}
                                        Years Experience{' '}
                                    </p>{' '}
                                </div>{' '}
                            </div>{' '}
                        </div>{' '}
                        <div className="relative" data-oid="9mskpt7">
                            {' '}
                            <div
                                className="bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-lg p-1"
                                data-oid="15dt-ss"
                            >
                                {' '}
                                <div className="bg-black rounded-lg p-8" data-oid="5k24-xn">
                                    {' '}
                                    <div className="grid grid-cols-2 gap-6" data-oid="3zmd1t.">
                                        {' '}
                                        <div className="space-y-6" data-oid="o6klvpi">
                                            {' '}
                                            <div
                                                className="bg-gray-900 p-4 rounded-lg"
                                                data-oid="bogs-el"
                                            >
                                                {' '}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-8 w-8 text-blue-400 mb-2"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="n:rotn8"
                                                >
                                                    {' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1.5}
                                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                        data-oid="6dhz.vh"
                                                    />{' '}
                                                </svg>{' '}
                                                <h3 className="font-medium mb-1" data-oid="yis454u">
                                                    {' '}
                                                    Reliable{' '}
                                                </h3>{' '}
                                                <p
                                                    className="text-gray-400 text-sm"
                                                    data-oid="upz:h82"
                                                >
                                                    {' '}
                                                    We Deliver on our Promises{' '}
                                                </p>{' '}
                                            </div>{' '}
                                            <div
                                                className="bg-gray-900 p-4 rounded-lg"
                                                data-oid="54bzrfz"
                                            >
                                                {' '}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-8 w-8 text-blue-400 mb-2"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="th3l2y-"
                                                >
                                                    {' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1.5}
                                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                                        data-oid="wk.h7wb"
                                                    />{' '}
                                                </svg>{' '}
                                                <h3 className="font-medium mb-1" data-oid=".9xqwk6">
                                                    {' '}
                                                    Innovative{' '}
                                                </h3>{' '}
                                                <p
                                                    className="text-gray-400 text-sm"
                                                    data-oid="xcz5xmx"
                                                >
                                                    {' '}
                                                    Cutting-edge Solutions{' '}
                                                </p>{' '}
                                            </div>{' '}
                                        </div>{' '}
                                        <div className="space-y-6 mt-6" data-oid="swp3mz:">
                                            {' '}
                                            <div
                                                className="bg-gray-900 p-4 rounded-lg"
                                                data-oid="-26zr::"
                                            >
                                                {' '}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-8 w-8 text-blue-400 mb-2"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="wqe09cc"
                                                >
                                                    {' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1.5}
                                                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                                                        data-oid=".8fihi_"
                                                    />{' '}
                                                </svg>{' '}
                                                <h3 className="font-medium mb-1" data-oid="_s2:doe">
                                                    {' '}
                                                    Communicative{' '}
                                                </h3>{' '}
                                                <p
                                                    className="text-gray-400 text-sm"
                                                    data-oid="yzusczy"
                                                >
                                                    {' '}
                                                    Clear, Open Dialogue{' '}
                                                </p>{' '}
                                            </div>{' '}
                                            <div
                                                className="bg-gray-900 p-4 rounded-lg"
                                                data-oid="hz6c7bm"
                                            >
                                                {' '}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-8 w-8 text-blue-400 mb-2"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="ls:tdo3"
                                                >
                                                    {' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1.5}
                                                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                                        data-oid="jvxy8ak"
                                                    />{' '}
                                                </svg>{' '}
                                                <h3 className="font-medium mb-1" data-oid="rf5t08o">
                                                    {' '}
                                                    Quality-Focused{' '}
                                                </h3>{' '}
                                                <p
                                                    className="text-gray-400 text-sm"
                                                    data-oid="8pinwp4"
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
                    data-oid="g3g8q9q"
                ></div>{' '}
            </section>{' '}
            {/* Our Team Section */}{' '}
            <section
                id="team"
                className="py-20 bg-gray-900/80 backdrop-blur-sm relative z-10"
                data-oid="u34o1l7"
            >
                {' '}
                <div className="container mx-auto px-6" data-oid="nwl:qrv">
                    {' '}
                    <div className="text-center mb-16" data-oid=":h_fr5x">
                        {' '}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="clln2ie">
                            {' '}
                            Our Team{' '}
                        </h2>{' '}
                        <p className="text-gray-400 max-w-2xl mx-auto" data-oid="9g4y6l1">
                            {' '}
                            Meet the Talented Individuals behind BitHive Technologies{' '}
                        </p>{' '}
                    </div>{' '}
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        data-oid="x5gm__a"
                    >
                        {' '}
                        {/* Team Member 1 */}{' '}
                        <div
                            className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all group"
                            data-oid="90aw1v3"
                        >
                            {' '}
                            <div className="mb-4 overflow-hidden rounded-lg" data-oid=":dr7zyw">
                                {' '}
                                <div
                                    className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center"
                                    data-oid="a.ws:xl"
                                >
                                    <img
                                        src="/images/AyushSrivastav.png"
                                        alt="Ayush Srivastava"
                                        className="h-full w-full rounded-lg object-cover"
                                        loading="lazy"
                                        data-oid="bvjv19k"
                                    />
                                </div>{' '}
                            </div>{' '}
                            <h3 className="text-xl font-semibold mb-1" data-oid="ymtqwxt">
                                Ayush Srivastava
                            </h3>{' '}
                            <p className="text-blue-400 mb-2" data-oid="0y_y.5n">
                                Co-Founder & CTO
                            </p>{' '}
                            <p className="text-gray-400 text-sm" data-oid="6ww:2ms">
                                {' '}
                                <a
                                    href="mailto:ayushsrivastava@bithive.in"
                                    className="hover:text-blue-400 transition-colors"
                                    data-oid="0h4cxg7"
                                >
                                    {' '}
                                    ayushsrivastava@bithive.in{' '}
                                </a>{' '}
                            </p>{' '}
                        </div>{' '}
                        {/* Team Member 2 */}{' '}
                        <div
                            className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all group"
                            data-oid="znso.dc"
                        >
                            {' '}
                            <div className="mb-4 overflow-hidden rounded-lg" data-oid="in7v4ww">
                                {' '}
                                <div
                                    className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center"
                                    data-oid="piwh21y"
                                >
                                    <img
                                        src="/images/Saurabh.jpeg"
                                        alt="Saurabh Singh"
                                        className="h-full w-full rounded-lg object-cover"
                                        data-oid="0_72iqk"
                                    />
                                </div>{' '}
                            </div>{' '}
                            <h3 className="text-xl font-semibold mb-1" data-oid="6g:xbu3">
                                Saurabh Singh
                            </h3>{' '}
                            <p className="text-blue-400 mb-2" data-oid="334m95.">
                                Co-Founder & Tech Lead
                            </p>{' '}
                            <p className="text-gray-400 text-sm" data-oid="rheb23_">
                                {' '}
                                <a
                                    href="mailto:saurabhsingh@bithive.in"
                                    className="hover:text-blue-400 transition-colors"
                                    data-oid="__2s6_y"
                                >
                                    {' '}
                                    saurabhsingh@bithive.in{' '}
                                </a>{' '}
                            </p>{' '}
                        </div>{' '}
                        {/* Team Member 3 */}{' '}
                        <div
                            className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all group"
                            data-oid="uas8x23"
                        >
                            {' '}
                            <div className="mb-4 overflow-hidden rounded-lg" data-oid="uk04fo1">
                                {' '}
                                <div
                                    className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center"
                                    data-oid="m6_9o0t"
                                >
                                    <img
                                        src="/images/AyushKumar.jpeg"
                                        alt="Ayush Srivastava"
                                        className="h-full w-full rounded-lg object-cover"
                                        data-oid="7wm.tn6"
                                    />
                                </div>{' '}
                            </div>{' '}
                            <h3 className="text-xl font-semibold mb-1" data-oid="x50.n_m">
                                Ayush Kumar
                            </h3>{' '}
                            <p className="text-blue-400 mb-2" data-oid="yyw49lj">
                                CMO/CSO
                            </p>{' '}
                            <p className="text-gray-400 text-sm" data-oid="9lu3q7i">
                                {' '}
                                <a
                                    href="mailto:ayushkumar@bithive.in"
                                    className="hover:text-blue-400 transition-colors"
                                    data-oid="7pd99p."
                                >
                                    {' '}
                                    ayushkumar@bithive.in{' '}
                                </a>{' '}
                            </p>{' '}
                        </div>{' '}
                        {/* Team Member 4 */}{' '}
                        <div
                            className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all group"
                            data-oid="0lvhh-8"
                        >
                            {' '}
                            <div className="mb-4 overflow-hidden rounded-lg" data-oid="3402vf:">
                                {' '}
                                <div
                                    className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center"
                                    data-oid="f53-owi"
                                >
                                    <img
                                        src="/images/Priyansh.jpeg"
                                        alt="Priyansh Kandwal"
                                        className="h-full w-full rounded-lg object-cover"
                                        data-oid="rqu2d5l"
                                    />
                                </div>{' '}
                            </div>{' '}
                            <h3 className="text-xl font-semibold mb-1" data-oid="wjort0g">
                                Priyansh Kandwal
                            </h3>{' '}
                            <p className="text-blue-400 mb-2" data-oid="wa:gmvg">
                                COO & Team Lead
                            </p>{' '}
                            <p className="text-gray-400 text-sm" data-oid="4lus790">
                                {' '}
                                <a
                                    href="mailto:priyanshkandwal@bithive.in"
                                    className="hover:text-blue-400 transition-colors"
                                    data-oid="sl2csqo"
                                >
                                    {' '}
                                    priyanshkandwal@bithive.in{' '}
                                </a>{' '}
                            </p>{' '}
                        </div>{' '}
                    </div>{' '}
                </div>{' '}
            </section>{' '}
            {/* CTA Section */}{' '}
            <section
                className="py-20 bg-gradient-to-r from-blue-900/30 to-violet-900/30 relative z-10"
                data-oid=".txq6ak"
            >
                {' '}
                <div className="container mx-auto px-6 text-center" data-oid="k7lnsxa">
                    {' '}
                    <h2 className="text-3xl md:text-4xl font-bold mb-6" data-oid="gqnh.go">
                        {' '}
                        Ready to Transform Your Digital Presence?{' '}
                    </h2>{' '}
                    <p className="text-gray-300 max-w-2xl mx-auto mb-10" data-oid="bpxo06m">
                        {' '}
                        Let's Collaborate to Create Innovative Solutions that drive your Business
                        forward. Get in Touch today to discuss your Project.{' '}
                    </p>{' '}
                    <a
                        href="#contact"
                        className="px-8 py-4 bg-gradient-to-r from-blue-500 to-violet-600 rounded-md text-white font-medium hover:from-blue-600 hover:to-violet-700 transition-all shadow-lg shadow-blue-500/20 inline-block"
                        data-oid=":o:y-q4"
                    >
                        {' '}
                        Let's Buzz{' '}
                    </a>{' '}
                </div>{' '}
            </section>{' '}
            {/* Contact Section */}{' '}
            <section id="contact" className="py-16 pb-12 bg-black relative z-10" data-oid="v-ncndl">
                {' '}
                <div className="container mx-auto px-6 max-w-6xl" data-oid="hp7fqjl">
                    {' '}
                    <div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                        data-oid="dcja_eg"
                    >
                        {' '}
                        <div className="mx-auto w-full" data-oid="436.gxn">
                            {' '}
                            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="xb27stn">
                                {' '}
                                Get In Touch{' '}
                            </h2>{' '}
                            <p className="text-gray-300 mb-6" data-oid="od7kpmi">
                                {' '}
                                Have a Project in mind or want to learn more about our Services?
                                Fill out the Form and We'll get back to you as soon as
                                possible.{' '}
                            </p>{' '}
                            <div className="space-y-4" data-oid=":ddgs2m">
                                {' '}
                                <div className="flex items-start" data-oid="lv-xfl6">
                                    {' '}
                                    <div
                                        className="bg-gray-900 p-3 rounded-lg mr-4"
                                        data-oid=".m1_f4n"
                                    >
                                        {' '}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-blue-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="lo3sdug"
                                        >
                                            {' '}
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                data-oid="jfinoea"
                                            />{' '}
                                        </svg>{' '}
                                    </div>{' '}
                                    <div data-oid="moqukrm">
                                        {' '}
                                        <h3 className="font-medium mb-1" data-oid="tzieqbz">
                                            {' '}
                                            Email{' '}
                                        </h3>{' '}
                                        <p className="text-gray-400" data-oid="3h6p21s">
                                            {' '}
                                            buzz@bithive.in{' '}
                                        </p>{' '}
                                    </div>{' '}
                                </div>{' '}
                                <div className="flex items-start" data-oid="kz98l17">
                                    {' '}
                                    <div
                                        className="bg-gray-900 p-3 rounded-lg mr-4"
                                        data-oid="7ay3hue"
                                    >
                                        {' '}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-blue-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="ey3-cgn"
                                        >
                                            {' '}
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                data-oid="vgww:ot"
                                            />{' '}
                                        </svg>{' '}
                                    </div>{' '}
                                    <div data-oid="fvo7n0q">
                                        {' '}
                                        <h3 className="font-medium mb-1" data-oid=".f3hadz">
                                            {' '}
                                            Phone{' '}
                                        </h3>{' '}
                                        <p className="text-gray-400" data-oid="je551.2">
                                            {' '}
                                            +91 7070030645 , +91 9369450531{' '}
                                        </p>{' '}
                                    </div>{' '}
                                </div>{' '}
                                <div className="flex items-start" data-oid="c346tc6">
                                    {' '}
                                    <div
                                        className="bg-gray-900 p-3 rounded-lg mr-4"
                                        data-oid=":bpi_uq"
                                    >
                                        {' '}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-blue-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="9n.42j-"
                                        >
                                            {' '}
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                data-oid="2ja9ec6"
                                            />{' '}
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                data-oid="v-gp2o1"
                                            />{' '}
                                        </svg>{' '}
                                    </div>{' '}
                                    <div data-oid="4.icotw">
                                        {' '}
                                        <h3 className="font-medium mb-1" data-oid="42yfbdl">
                                            {' '}
                                            Head Office{' '}
                                        </h3>{' '}
                                        <p className="text-gray-400" data-oid="fs_xk09">
                                            {' '}
                                            Gurugram, Haryana, India{' '}
                                        </p>{' '}
                                    </div>{' '}
                                </div>{' '}
                                <div className="flex items-start" data-oid="-0-7wot">
                                    {' '}
                                    <div
                                        className="bg-gray-900 p-3 rounded-lg mr-4"
                                        data-oid="k8mb6hd"
                                    >
                                        {' '}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-blue-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="9mqn83."
                                        >
                                            {' '}
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                data-oid="agw7jw6"
                                            />{' '}
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                data-oid="hj43:ch"
                                            />{' '}
                                        </svg>{' '}
                                    </div>{' '}
                                    <div data-oid="ialxfw6">
                                        {' '}
                                        <h3 className="font-medium mb-1" data-oid="l86zc6_">
                                            {' '}
                                            Sub Office{' '}
                                        </h3>{' '}
                                        <p className="text-gray-400" data-oid=":-hniav">
                                            {' '}
                                            Dehradun, Uttarakhand, India{' '}
                                        </p>{' '}
                                    </div>{' '}
                                </div>{' '}
                            </div>{' '}
                        </div>{' '}
                        <div
                            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg mx-auto w-full"
                            data-oid="kqk1-62"
                        >
                            {' '}
                            <form data-oid="fs411mo">
                                {' '}
                                <div
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4"
                                    data-oid="v62nee6"
                                >
                                    {' '}
                                    <div data-oid="00nb5-v">
                                        {' '}
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-400 mb-2"
                                            data-oid="bj2qjlk"
                                        >
                                            {' '}
                                            Name{' '}
                                        </label>{' '}
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full bg-black border border-gray-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Your name"
                                            data-oid="q006.l0"
                                        />{' '}
                                    </div>{' '}
                                    <div data-oid="pg8pb2t">
                                        {' '}
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-400 mb-2"
                                            data-oid="xt:k8.l"
                                        >
                                            {' '}
                                            Email{' '}
                                        </label>{' '}
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full bg-black border border-gray-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Your email"
                                            data-oid=":-q983f"
                                        />{' '}
                                    </div>{' '}
                                </div>{' '}
                                <div className="mb-4" data-oid="n4lhfhs">
                                    {' '}
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm font-medium text-gray-400 mb-2"
                                        data-oid="zttk44s"
                                    >
                                        {' '}
                                        Subject{' '}
                                    </label>{' '}
                                    <input
                                        type="text"
                                        id="subject"
                                        className="w-full bg-black border border-gray-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Subject"
                                        data-oid="gjogd.s"
                                    />{' '}
                                </div>{' '}
                                <div className="mb-4" data-oid="sxfgu19">
                                    {' '}
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-400 mb-2"
                                        data-oid="1_79z13"
                                    >
                                        {' '}
                                        Message{' '}
                                    </label>{' '}
                                    <textarea
                                        id="message"
                                        rows={5}
                                        className="w-full bg-black border border-gray-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Your message"
                                        data-oid="mv-i65i"
                                    ></textarea>{' '}
                                </div>{' '}
                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-violet-600 rounded-md text-white font-medium hover:from-blue-600 hover:to-violet-700 transition-all shadow-lg shadow-blue-500/20"
                                    data-oid="mpotpz3"
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
                data-oid=".._3f:."
            >
                {' '}
                <div className="container mx-auto px-6 py-12" data-oid=":2kawt1">
                    {' '}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-oid="_v6q2m:">
                        {' '}
                        <div className="md:col-span-1" data-oid="iw6tqpw">
                            {' '}
                            <div className="mb-6" data-oid="5bx6:oy">
                                {' '}
                                <img
                                    src="/images/PHOTO-2025-03-28-20-01-27.jpg"
                                    alt="BitHive Technologies Logo"
                                    className="h-16 w-auto rounded-md object-contain"
                                    data-oid="dyigw3h"
                                />{' '}
                            </div>{' '}
                            <p className="text-gray-400 mb-6" data-oid="k6_gkcw">
                                {' '}
                                Creating Buzz in Digital Experiences !{' '}
                            </p>{' '}
                            <div className="flex space-x-4" data-oid="69fl-r0">
                                {' '}
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-blue-400 transition-colors"
                                    data-oid="u2gywbx"
                                >
                                    {' '}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="n0-r7h8"
                                    >
                                        {' '}
                                        <path
                                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                                            data-oid="htu4-tt"
                                        />{' '}
                                    </svg>{' '}
                                </a>{' '}
                                <a
                                    href="linkedin.com/company/bithive-technology "
                                    className="text-gray-400 hover:text-blue-400 transition-colors"
                                    data-oid="tkyeyw_"
                                >
                                    {' '}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="90pil6t"
                                    >
                                        {' '}
                                        <path
                                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                            data-oid=":hqk751"
                                        />{' '}
                                    </svg>{' '}
                                </a>{' '}
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-blue-400 transition-colors"
                                    data-oid="ot7ykna"
                                >
                                    {' '}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="-rut_wz"
                                    >
                                        {' '}
                                        <path
                                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                            data-oid="s4cojvv"
                                        />{' '}
                                    </svg>{' '}
                                </a>{' '}
                            </div>{' '}
                        </div>{' '}
                        <div data-oid="fuewbg:">
                            {' '}
                            <h3 className="text-lg font-semibold mb-4" data-oid="7gwvoju">
                                {' '}
                                Services{' '}
                            </h3>{' '}
                            <ul className="space-y-2" data-oid="1dtg90s">
                                {' '}
                                <li className="text-gray-400" data-oid="jw2wrjd">
                                    {' '}
                                    Website Development{' '}
                                </li>{' '}
                                <li className="text-gray-400" data-oid="zrgg38t">
                                    {' '}
                                    Mobile App Development{' '}
                                </li>{' '}
                                <li className="text-gray-400" data-oid="q9jmh-y">
                                    {' '}
                                    UI/UX Design{' '}
                                </li>{' '}
                                <li className="text-gray-400" data-oid="8eslu7.">
                                    {' '}
                                    Product Design{' '}
                                </li>{' '}
                                <li className="text-gray-400" data-oid="z458_96">
                                    {' '}
                                    Digital Strategy{' '}
                                </li>{' '}
                            </ul>{' '}
                        </div>{' '}
                        <div data-oid="1t5p27l">
                            {' '}
                            <h3 className="text-lg font-semibold mb-4" data-oid="e3j7rj6">
                                {' '}
                                Company{' '}
                            </h3>{' '}
                            <ul className="space-y-2" data-oid="kdx60ca">
                                {' '}
                                <li data-oid="sx:m6ho">
                                    {' '}
                                    <a
                                        href="#about"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        data-oid="dsndf7w"
                                    >
                                        {' '}
                                        About Us{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="zb6-vpg">
                                    {' '}
                                    <a
                                        href="#portfolio"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        data-oid="4zywnvw"
                                    >
                                        {' '}
                                        Portfolio{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="4vxpxoj">
                                    {' '}
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        data-oid="um1ogj6"
                                    >
                                        {' '}
                                        Careers{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="1l5blau">
                                    {' '}
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        data-oid="d-rnbu."
                                    >
                                        {' '}
                                        Blog{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="vbpfyfj">
                                    {' '}
                                    <a
                                        href="#contact"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        data-oid="guj5n2n"
                                    >
                                        {' '}
                                        Contact{' '}
                                    </a>{' '}
                                </li>{' '}
                            </ul>{' '}
                        </div>{' '}
                        <div data-oid="k.ic.g-">
                            {' '}
                            <h3 className="text-lg font-semibold mb-4" data-oid="79asjnk">
                                {' '}
                                Legal{' '}
                            </h3>{' '}
                            <ul className="space-y-2" data-oid="r8qowan">
                                {' '}
                                <li data-oid="l3wkxql">
                                    {' '}
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        data-oid="k9kkrrs"
                                    >
                                        {' '}
                                        Privacy Policy{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="j_:0:2.">
                                    {' '}
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        data-oid="llx:iz0"
                                    >
                                        {' '}
                                        Terms of Service{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="24_i7:1">
                                    {' '}
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        data-oid="fd9pmzp"
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
                        data-oid="6xr.ywm"
                    >
                        {' '}
                        <p className="text-gray-500 text-sm" data-oid="tre.87-">
                            {' '}
                            &copy; {new Date().getFullYear()} BitHive Technologies. All rights
                            Reserved.{' '}
                        </p>{' '}
                        <p className="text-gray-500 text-sm mt-4 md:mt-0" data-oid="rl-q9g7">
                            {' '}
                            Built with ❤️ by BitHive Technologies{' '}
                        </p>{' '}
                    </div>{' '}
                </div>{' '}
            </footer>{' '}
        </div>
    );
}
