'use client';
import Link from 'next/link';
import { useEffect, useState, lazy, Suspense } from 'react';

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
                    data-oid=":3yrjkl"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        data-oid="5g_vhyf"
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
                    data-oid="mrjjd9f"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        data-oid="rm69euk"
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
                    data-oid="qn.wd:f"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                        data-oid="ysz.jym"
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
                    data-oid="xc0sfv7"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                        data-oid="kw58a0b"
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
                    data-oid="mvdq6p1"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        data-oid=".qvo3xj"
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
                    data-oid=".o-3fj4"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        data-oid="anfdfy4"
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
                    data-oid="jd5rcdi"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                        data-oid="1oqe7w1"
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
                    data-oid="agr.cjj"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        data-oid="yk3w.y:"
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
            name: 'Sarah Johnson',
            role: 'CEO, TechStart',
            quote: 'BitHive transformed our concept into a polished product that exceeded our expectations. Their attention to detail and technical expertise is unmatched.',
            image: 'https://via.placeholder.com/100/0a0a0a/4a4a4a?text=SJ',
        },
        {
            name: 'Michael Chen',
            role: 'Founder, GrowthLabs',
            quote: 'Working with BitHive was seamless from start to finish. They delivered our mobile app ahead of schedule and their ongoing support has been exceptional.',
            image: 'https://via.placeholder.com/100/0a0a0a/4a4a4a?text=MC',
        },
        {
            name: 'Alex Rivera',
            role: 'Product Manager, ScaleUp',
            quote: "The team at BitHive doesn't just build what you ask for—they improve upon your ideas with their expertise. True partners in our success.",
            image: 'https://via.placeholder.com/100/0a0a0a/4a4a4a?text=AR',
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
                    data-oid="_v0rug5"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        data-oid="3wib0ct"
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
                    data-oid="zra-900"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        data-oid="on4h7ky"
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
                    data-oid=".er8ktr"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        data-oid="opq48_v"
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
                    data-oid="l9.y_um"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        data-oid="6qy99tl"
                    />{' '}
                </svg>
            ),
        },
    ];

    return (
        <div className="bg-black text-white font-sans min-h-screen relative" data-oid="i:03ly4">
            <Suspense
                fallback={
                    <div
                        className="fixed top-0 left-0 w-full h-full bg-black z-0"
                        data-oid="gyszw5_"
                    ></div>
                }
                data-oid="hosaf5o"
            >
                <InteractiveBackground data-oid="8l6osft" />
            </Suspense>
            {/* Header */}{' '}
            <header
                className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800"
                data-oid="qdn55nj"
            >
                {' '}
                <div className="container mx-auto px-6 py-4" data-oid="qnf-glz">
                    {' '}
                    <div className="flex justify-between items-center" data-oid="5pefq1r">
                        {' '}
                        <div className="flex items-center space-x-2" data-oid=".q8bufm">
                            {' '}
                            <div className="h-14" data-oid="-1qv4e0">
                                {' '}
                                <Link href="/" data-oid="5x8k59i">
                                    <img
                                        src="/images/PHOTO-2025-03-28-20-01-27.jpg"
                                        alt="BitHive Technologies Logo"
                                        className="h-full w-auto rounded-md object-contain"
                                        loading="eager"
                                        data-oid="1czg30x"
                                    />{' '}
                                </Link>
                            </div>{' '}
                        </div>{' '}
                        {/* Desktop Navigation */}{' '}
                        <nav className="hidden md:flex space-x-8" data-oid="k_p7hyr">
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
                                    data-oid="h_vnsi2"
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
                            data-oid="pr9denr"
                        >
                            {' '}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="zihil6c"
                            >
                                {' '}
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                        data-oid="mnsc-fm"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                        data-oid="0znquim"
                                    />
                                )}{' '}
                            </svg>{' '}
                        </button>{' '}
                    </div>{' '}
                    {/* Mobile Navigation */}{' '}
                    {isMenuOpen && (
                        <nav
                            className="md:hidden pt-4 pb-2 border-t border-gray-800 mt-4"
                            data-oid="plha6ly"
                        >
                            {' '}
                            <div className="flex flex-col space-y-3" data-oid="r58zz..">
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
                                        data-oid="ohue2tp"
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
                data-oid="oadrj2c"
            >
                {' '}
                <div
                    className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 z-0"
                    data-oid="-7m:fq_"
                ></div>{' '}
                <div className="container mx-auto px-6 relative z-10" data-oid="gxam6w8">
                    {' '}
                    <div className="max-w-3xl" data-oid="a53jztb">
                        {' '}
                        <h1
                            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
                            data-oid="b9xdr.7"
                        >
                            {' '}
                            We Build{' '}
                            <span
                                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500"
                                data-oid="h504z_4"
                            >
                                {' '}
                                Digital Experiences{' '}
                            </span>{' '}
                            That
                            <span
                                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500"
                                data-oid="9621l2k"
                            >
                                {' '}
                                Buzzes{' '}
                            </span>{' '}
                            and Drives Growth{' '}
                        </h1>{' '}
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl" data-oid="wqzide0">
                            {' '}
                            BitHive Technologies is a Digital Agency specializing in Cutting-edge
                            Solutions for Startups and Fast-growing Brands. We Transform ideas into
                            powerful Digital Products.{' '}
                        </p>{' '}
                        <div className="flex flex-col sm:flex-row gap-4" data-oid="3dpndd0">
                            {' '}
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-violet-600 rounded-md text-white font-medium hover:from-blue-600 hover:to-violet-700 transition-all shadow-lg shadow-blue-500/20 text-center"
                                data-oid="ppqtgf_"
                            >
                                {' '}
                                Let's Buzz{' '}
                            </a>{' '}
                            <a
                                href="#services"
                                className="px-8 py-4 bg-gray-800 rounded-md text-white font-medium hover:bg-gray-700 transition-all text-center"
                                data-oid="nhoy.kx"
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
                    data-oid="5bbad:l"
                ></div>{' '}
                <div
                    className="absolute top-20 -right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
                    data-oid=":rks1-m"
                ></div>{' '}
            </section>{' '}
            {/* Services Section */}{' '}
            <section
                id="services"
                className="py-20 bg-gray-900/80 backdrop-blur-sm relative z-10"
                data-oid="1o3d.i4"
            >
                {' '}
                <div className="container mx-auto px-6" data-oid="1lc9aoh">
                    {' '}
                    <div className="text-center mb-16" data-oid="km1e87.">
                        {' '}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="9-d-fb8">
                            {' '}
                            Our Services{' '}
                        </h2>{' '}
                        <p className="text-gray-400 max-w-2xl mx-auto" data-oid="cpfr__b">
                            {' '}
                            We Offer end-to-end digital solutions tailored to your unique Business
                            needs{' '}
                        </p>{' '}
                    </div>{' '}
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        data-oid="twlyhm4"
                    >
                        {' '}
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-black p-8 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all group"
                                data-oid="rn6i7u3"
                            >
                                {' '}
                                <div
                                    className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors"
                                    data-oid="netst0i"
                                >
                                    {' '}
                                    {service.icon}{' '}
                                </div>{' '}
                                <h3 className="text-xl font-semibold mb-3" data-oid="x.ium3d">
                                    {' '}
                                    {service.title}{' '}
                                </h3>{' '}
                                <p className="text-gray-400" data-oid="lcfz7yn">
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
                data-oid="94bah8k"
            >
                {' '}
                <div className="container mx-auto px-6 relative z-10" data-oid="jossmb7">
                    {' '}
                    <div className="text-center mb-16" data-oid="_8:xi1:">
                        {' '}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="ph4.ru0">
                            {' '}
                            Why Choose Us ?{' '}
                        </h2>{' '}
                        <p className="text-gray-400 max-w-2xl mx-auto" data-oid="kr2yy6-">
                            {' '}
                            We Combine Technical Expertise with Strategic thinking to deliver
                            Exceptional Results{' '}
                        </p>{' '}
                    </div>{' '}
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        data-oid="-yq742r"
                    >
                        {' '}
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg hover:bg-gray-800/50 transition-all"
                                data-oid="xp0hgyn"
                            >
                                {' '}
                                <div
                                    className="bg-gradient-to-br from-blue-500/20 to-violet-500/20 p-3 rounded-lg inline-block mb-4"
                                    data-oid="x_s3xw0"
                                >
                                    {' '}
                                    <div className="text-blue-400" data-oid="xqxk2xl">
                                        {' '}
                                        {value.icon}{' '}
                                    </div>{' '}
                                </div>{' '}
                                <h3 className="text-xl font-semibold mb-2" data-oid="0k3:3rw">
                                    {' '}
                                    {value.title}{' '}
                                </h3>{' '}
                                <p className="text-gray-400" data-oid="iuh0yuk">
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
                    data-oid="z3p52q3"
                ></div>{' '}
                <div
                    className="absolute -bottom-20 -right-20 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl"
                    data-oid="h.a-cd."
                ></div>{' '}
            </section>{' '}
            {/* Portfolio Section */}{' '}
            <section
                id="portfolio"
                className="py-20 bg-gray-900/80 backdrop-blur-sm relative z-10"
                data-oid=".5ronbr"
            >
                {' '}
                <div className="container mx-auto px-6" data-oid="g.2bb7r">
                    {' '}
                    <div className="text-center mb-16" data-oid="ur7.mw5">
                        {' '}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="r88tycu">
                            {' '}
                            Our Work{' '}
                        </h2>{' '}
                        <p className="text-gray-400 max-w-2xl mx-auto" data-oid="f47n96m">
                            {' '}
                            Explore our Recent Projects and see how we've helped Businesses achieve
                            their Goals{' '}
                        </p>{' '}
                    </div>{' '}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-oid="oxrqod.">
                        {' '}
                        {portfolio.map((project, index) => (
                            <div
                                key={index}
                                className="bg-black rounded-lg overflow-hidden group hover:shadow-lg hover:shadow-blue-500/10 transition-all"
                                data-oid="if7bxp2"
                            >
                                {' '}
                                <div className="relative h-64 overflow-hidden" data-oid="s9g7sb4">
                                    {' '}
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                        data-oid="e72lbwb"
                                    />{' '}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end"
                                        data-oid="6.6-tms"
                                    >
                                        {' '}
                                        <div className="p-6" data-oid="020v0:j">
                                            {' '}
                                            <div
                                                className="flex flex-wrap gap-2 mb-3"
                                                data-oid="8sk_:4y"
                                            >
                                                {' '}
                                                {project.tags.map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded"
                                                        data-oid="w7l70g0"
                                                    >
                                                        {' '}
                                                        {tag}{' '}
                                                    </span>
                                                ))}{' '}
                                            </div>{' '}
                                        </div>{' '}
                                    </div>{' '}
                                </div>{' '}
                                <div className="p-6" data-oid="ydq:9:8">
                                    {' '}
                                    <h3 className="text-xl font-semibold mb-2" data-oid="0d9ynfw">
                                        {' '}
                                        {project.title}{' '}
                                    </h3>{' '}
                                    <p className="text-gray-400" data-oid="pid:jmr">
                                        {' '}
                                        {project.description}{' '}
                                    </p>{' '}
                                </div>{' '}
                            </div>
                        ))}{' '}
                    </div>{' '}
                    <div className="text-center mt-12" data-oid="z-m9p4k">
                        {' '}
                        <a
                            href="#contact"
                            className="inline-block px-8 py-3 bg-gray-800 rounded-md text-white font-medium hover:bg-gray-700 transition-all"
                            data-oid=":_1jm6h"
                        >
                            {' '}
                            View All Projects{' '}
                        </a>{' '}
                    </div>{' '}
                </div>{' '}
            </section>{' '}
            {/* Testimonials Section */}{' '}
            <section className="py-20 bg-black relative overflow-hidden z-10" data-oid="_p8je4z">
                {' '}
                <div className="container mx-auto px-6 relative z-10" data-oid="22sc1c-">
                    {' '}
                    <div className="text-center mb-16" data-oid="qzxpi_t">
                        {' '}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="v9-ss54">
                            {' '}
                            Client Testimonials{' '}
                        </h2>{' '}
                        <p className="text-gray-400 max-w-2xl mx-auto" data-oid="df8hp6.">
                            {' '}
                            Don't just take our Word for it — Hear What our Clients have to Say
                            !{' '}
                        </p>{' '}
                    </div>{' '}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="od.z1ck">
                        {' '}
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800"
                                data-oid="ms.-ytu"
                            >
                                {' '}
                                <div className="flex items-center mb-6" data-oid="e890eg0">
                                    {' '}
                                    <div
                                        className="w-12 h-12 rounded-full overflow-hidden mr-4"
                                        data-oid="kun3d0o"
                                    >
                                        {' '}
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover"
                                            data-oid="7n9e2g6"
                                        />{' '}
                                    </div>{' '}
                                    <div data-oid="flqvjwl">
                                        {' '}
                                        <h4 className="font-semibold" data-oid="hz3ufjy">
                                            {' '}
                                            {testimonial.name}{' '}
                                        </h4>{' '}
                                        <p className="text-gray-400 text-sm" data-oid="371o6mh">
                                            {' '}
                                            {testimonial.role}{' '}
                                        </p>{' '}
                                    </div>{' '}
                                </div>{' '}
                                <p className="text-gray-300 italic" data-oid="lf_wtd2">
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
                    data-oid="ephdeh7"
                ></div>{' '}
                <div
                    className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl"
                    data-oid="h1qrm5i"
                ></div>{' '}
            </section>{' '}
            {/* Process Section */}{' '}
            <section
                id="process"
                className="py-20 bg-gray-900/80 backdrop-blur-sm relative z-10"
                data-oid="s_w_aq:"
            >
                {' '}
                <div className="container mx-auto px-6" data-oid="34hx_jb">
                    {' '}
                    <div className="text-center mb-16" data-oid="cm_vkmp">
                        {' '}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="uotg34u">
                            {' '}
                            Our Process{' '}
                        </h2>{' '}
                        <p className="text-gray-400 max-w-2xl mx-auto" data-oid=".bddqi.">
                            {' '}
                            A Streamlined Approach to delivering Exceptional Results{' '}
                        </p>{' '}
                    </div>{' '}
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        data-oid="qkwyi31"
                    >
                        {' '}
                        {process.map((step, index) => (
                            <div key={index} className="relative" data-oid="5fzisxp">
                                {' '}
                                <div
                                    className="bg-black p-6 rounded-lg border border-gray-800 h-full"
                                    data-oid="806w9iw"
                                >
                                    {' '}
                                    <div
                                        className="bg-gradient-to-br from-blue-500/20 to-violet-500/20 p-3 rounded-lg inline-block mb-4"
                                        data-oid="aw89htc"
                                    >
                                        {' '}
                                        <div className="text-blue-400" data-oid="v7nkx-9">
                                            {' '}
                                            {step.icon}{' '}
                                        </div>{' '}
                                    </div>{' '}
                                    <h3 className="text-xl font-semibold mb-2" data-oid="ecamekp">
                                        {' '}
                                        {step.title}{' '}
                                    </h3>{' '}
                                    <p className="text-gray-400" data-oid="nd7qw5_">
                                        {' '}
                                        {step.description}{' '}
                                    </p>{' '}
                                </div>{' '}
                                {/* Connector line */}{' '}
                                {index < process.length - 1 && (
                                    <div
                                        className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500"
                                        data-oid="x_-y1tz"
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
                data-oid="kxdjr1k"
            >
                {' '}
                <div className="container mx-auto px-6 relative z-10" data-oid="l6kdnxf">
                    {' '}
                    <div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                        data-oid="715z-xq"
                    >
                        {' '}
                        <div data-oid="qtsbz0f">
                            {' '}
                            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-oid="jy28:e0">
                                {' '}
                                About BitHive Technologies{' '}
                            </h2>{' '}
                            <p className="text-gray-300 mb-6" data-oid="7ow9i9r">
                                {' '}
                                We're a Team of Passionate Developers, Designers, and Strategists
                                dedicated to creating Exceptional Digital Experiences. Founded with
                                a Mission to help Startups and Growing Businesses leverage
                                Technology to achieve their Goals, BitHive Technologies combines
                                Technical Expertise with Creative Thinking.{' '}
                            </p>{' '}
                            <p className="text-gray-300 mb-6" data-oid="mwo_cdz">
                                {' '}
                                Our Approach is Collaborative and Transparent, ensuring that we
                                understand your Vision and deliver Solutions that exceed
                                Expectations. We Stay at the forefront of Technology trends to
                                provide Innovative Solutions that give our Clients a Competitive
                                Edge.{' '}
                            </p>{' '}
                            <div className="flex flex-wrap gap-4" data-oid="z725k0t">
                                {' '}
                                <div
                                    className="bg-gray-900/50 backdrop-blur-sm px-4 py-2 rounded-md"
                                    data-oid=":orz.lk"
                                >
                                    {' '}
                                    <span
                                        className="text-blue-400 font-bold text-2xl"
                                        data-oid="0i7bps6"
                                    >
                                        {' '}
                                        20+{' '}
                                    </span>{' '}
                                    <p className="text-gray-400 text-sm" data-oid="_o31w_l">
                                        {' '}
                                        Projects Completed{' '}
                                    </p>{' '}
                                </div>{' '}
                                <div
                                    className="bg-gray-900/50 backdrop-blur-sm px-4 py-2 rounded-md"
                                    data-oid="md9:g6m"
                                >
                                    {' '}
                                    <span
                                        className="text-blue-400 font-bold text-2xl"
                                        data-oid="x9r-d1_"
                                    >
                                        {' '}
                                        15+{' '}
                                    </span>{' '}
                                    <p className="text-gray-400 text-sm" data-oid="6k4di3x">
                                        {' '}
                                        Happy Clients{' '}
                                    </p>{' '}
                                </div>{' '}
                                <div
                                    className="bg-gray-900/50 backdrop-blur-sm px-4 py-2 rounded-md"
                                    data-oid="vxvp7bp"
                                >
                                    {' '}
                                    <span
                                        className="text-blue-400 font-bold text-2xl"
                                        data-oid="b87f9pn"
                                    >
                                        {' '}
                                        1+{' '}
                                    </span>{' '}
                                    <p className="text-gray-400 text-sm" data-oid="99i6z0:">
                                        {' '}
                                        Years Experience{' '}
                                    </p>{' '}
                                </div>{' '}
                            </div>{' '}
                        </div>{' '}
                        <div className="relative" data-oid="t21goqz">
                            {' '}
                            <div
                                className="bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-lg p-1"
                                data-oid="a5g5wy7"
                            >
                                {' '}
                                <div className="bg-black rounded-lg p-8" data-oid="lt8spzh">
                                    {' '}
                                    <div className="grid grid-cols-2 gap-6" data-oid="2p.1wi.">
                                        {' '}
                                        <div className="space-y-6" data-oid="5vkk77_">
                                            {' '}
                                            <div
                                                className="bg-gray-900 p-4 rounded-lg"
                                                data-oid="_vkwrs6"
                                            >
                                                {' '}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-8 w-8 text-blue-400 mb-2"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="kj:h14t"
                                                >
                                                    {' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1.5}
                                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                        data-oid="cu.nk-8"
                                                    />{' '}
                                                </svg>{' '}
                                                <h3 className="font-medium mb-1" data-oid="-qb7kyp">
                                                    {' '}
                                                    Reliable{' '}
                                                </h3>{' '}
                                                <p
                                                    className="text-gray-400 text-sm"
                                                    data-oid="mkzaeeq"
                                                >
                                                    {' '}
                                                    We Deliver on our Promises{' '}
                                                </p>{' '}
                                            </div>{' '}
                                            <div
                                                className="bg-gray-900 p-4 rounded-lg"
                                                data-oid="0td.86a"
                                            >
                                                {' '}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-8 w-8 text-blue-400 mb-2"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="3te-cfp"
                                                >
                                                    {' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1.5}
                                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                                        data-oid="zfdkxcj"
                                                    />{' '}
                                                </svg>{' '}
                                                <h3 className="font-medium mb-1" data-oid="ceqb632">
                                                    {' '}
                                                    Innovative{' '}
                                                </h3>{' '}
                                                <p
                                                    className="text-gray-400 text-sm"
                                                    data-oid="yxg155q"
                                                >
                                                    {' '}
                                                    Cutting-edge Solutions{' '}
                                                </p>{' '}
                                            </div>{' '}
                                        </div>{' '}
                                        <div className="space-y-6 mt-6" data-oid="g.v:99l">
                                            {' '}
                                            <div
                                                className="bg-gray-900 p-4 rounded-lg"
                                                data-oid="hoz98f7"
                                            >
                                                {' '}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-8 w-8 text-blue-400 mb-2"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="ozw.ck8"
                                                >
                                                    {' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1.5}
                                                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                                                        data-oid="dcq2h74"
                                                    />{' '}
                                                </svg>{' '}
                                                <h3 className="font-medium mb-1" data-oid="1unf:5w">
                                                    {' '}
                                                    Communicative{' '}
                                                </h3>{' '}
                                                <p
                                                    className="text-gray-400 text-sm"
                                                    data-oid="mmn70rq"
                                                >
                                                    {' '}
                                                    Clear, Open Dialogue{' '}
                                                </p>{' '}
                                            </div>{' '}
                                            <div
                                                className="bg-gray-900 p-4 rounded-lg"
                                                data-oid="a_t9qu9"
                                            >
                                                {' '}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-8 w-8 text-blue-400 mb-2"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="aou19q0"
                                                >
                                                    {' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1.5}
                                                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                                        data-oid=":_slw5f"
                                                    />{' '}
                                                </svg>{' '}
                                                <h3 className="font-medium mb-1" data-oid="4j9:jk8">
                                                    {' '}
                                                    Quality-Focused{' '}
                                                </h3>{' '}
                                                <p
                                                    className="text-gray-400 text-sm"
                                                    data-oid="an1nysu"
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
                    data-oid="0v:eu6g"
                ></div>{' '}
            </section>{' '}
            {/* Our Team Section */}{' '}
            <section
                id="team"
                className="py-20 bg-gray-900/80 backdrop-blur-sm relative z-10"
                data-oid="af:g-ic"
            >
                {' '}
                <div className="container mx-auto px-6" data-oid="ovxbdxc">
                    {' '}
                    <div className="text-center mb-16" data-oid="29wd716">
                        {' '}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="emfch5l">
                            {' '}
                            Our Team{' '}
                        </h2>{' '}
                        <p className="text-gray-400 max-w-2xl mx-auto" data-oid="24ad_s9">
                            {' '}
                            Meet the Talented Individuals behind BitHive Technologies{' '}
                        </p>{' '}
                    </div>{' '}
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        data-oid="goqrmyh"
                    >
                        {' '}
                        {/* Team Member 1 */}{' '}
                        <div
                            className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all group"
                            data-oid="ksczu:7"
                        >
                            {' '}
                            <div className="mb-4 overflow-hidden rounded-lg" data-oid="wsbcmt.">
                                {' '}
                                <div
                                    className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center"
                                    data-oid="ntcr-u3"
                                >
                                    <img
                                        src="/images/AyushSrivastav.png"
                                        alt="Ayush Srivastava"
                                        className="h-full w-full rounded-lg object-cover"
                                        loading="lazy"
                                        data-oid="613n9bs"
                                    />
                                </div>{' '}
                            </div>{' '}
                            <h3 className="text-xl font-semibold mb-1" data-oid="oeeh_33">
                                Ayush Srivastava
                            </h3>{' '}
                            <p className="text-blue-400 mb-2" data-oid="35w88u0">
                                Co-Founder & CTO
                            </p>{' '}
                            <p className="text-gray-400 text-sm" data-oid="0mq0nqy">
                                {' '}
                                <a
                                    href="mailto:ayushsrivastava@bithive.in"
                                    className="hover:text-blue-400 transition-colors"
                                    data-oid="d2ibwki"
                                >
                                    {' '}
                                    ayushsrivastava@bithive.in{' '}
                                </a>{' '}
                            </p>{' '}
                        </div>{' '}
                        {/* Team Member 2 */}{' '}
                        <div
                            className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all group"
                            data-oid="5iz13ak"
                        >
                            {' '}
                            <div className="mb-4 overflow-hidden rounded-lg" data-oid="_nznye.">
                                {' '}
                                <div
                                    className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center"
                                    data-oid="b3-_b8c"
                                >
                                    <img
                                        src="/images/Saurabh.jpeg"
                                        alt="Saurabh Singh"
                                        className="h-full w-full rounded-lg object-cover"
                                        data-oid="t.231en"
                                    />
                                </div>{' '}
                            </div>{' '}
                            <h3 className="text-xl font-semibold mb-1" data-oid="c3qp.xi">
                                Saurabh Singh
                            </h3>{' '}
                            <p className="text-blue-400 mb-2" data-oid="zcp8ir4">
                                Co-Founder & Tech Lead
                            </p>{' '}
                            <p className="text-gray-400 text-sm" data-oid="hiigf76">
                                {' '}
                                <a
                                    href="mailto:saurabhsingh@bithive.in"
                                    className="hover:text-blue-400 transition-colors"
                                    data-oid="k_h7i9t"
                                >
                                    {' '}
                                    saurabhsingh@bithive.in{' '}
                                </a>{' '}
                            </p>{' '}
                        </div>{' '}
                        {/* Team Member 3 */}{' '}
                        <div
                            className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all group"
                            data-oid=".dhrjo0"
                        >
                            {' '}
                            <div className="mb-4 overflow-hidden rounded-lg" data-oid="-cumfed">
                                {' '}
                                <div
                                    className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center"
                                    data-oid="93jm1fo"
                                >
                                    <img
                                        src="/images/AyushKumar.jpeg"
                                        alt="Ayush Srivastava"
                                        className="h-full w-full rounded-lg object-cover"
                                        data-oid="jmg.dzx"
                                    />
                                </div>{' '}
                            </div>{' '}
                            <h3 className="text-xl font-semibold mb-1" data-oid="s1i8zk8">
                                Ayush Kumar
                            </h3>{' '}
                            <p className="text-blue-400 mb-2" data-oid=":j7rl0a">
                                CMO/CSO
                            </p>{' '}
                            <p className="text-gray-400 text-sm" data-oid="w9ji4e4">
                                {' '}
                                <a
                                    href="mailto:ayushkumar@bithive.in"
                                    className="hover:text-blue-400 transition-colors"
                                    data-oid="s6hxa25"
                                >
                                    {' '}
                                    ayushkumar@bithive.in{' '}
                                </a>{' '}
                            </p>{' '}
                        </div>{' '}
                        {/* Team Member 4 */}{' '}
                        <div
                            className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all group"
                            data-oid="_9iii5."
                        >
                            {' '}
                            <div className="mb-4 overflow-hidden rounded-lg" data-oid="-exfo1x">
                                {' '}
                                <div
                                    className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center"
                                    data-oid="_f_6vw2"
                                >
                                    <img
                                        src="/images/Priyansh.jpeg"
                                        alt="Priyansh Kandwal"
                                        className="h-full w-full rounded-lg object-cover"
                                        data-oid="slxfwf8"
                                    />
                                </div>{' '}
                            </div>{' '}
                            <h3 className="text-xl font-semibold mb-1" data-oid="4yh-hy8">
                                Priyansh Kandwal
                            </h3>{' '}
                            <p className="text-blue-400 mb-2" data-oid="-mphv75">
                                COO & Team Lead
                            </p>{' '}
                            <p className="text-gray-400 text-sm" data-oid="mms8b3_">
                                {' '}
                                <a
                                    href="mailto:priyanshkandwal@bithive.in"
                                    className="hover:text-blue-400 transition-colors"
                                    data-oid="yizd.wv"
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
                data-oid="qaqotk8"
            >
                {' '}
                <div className="container mx-auto px-6 text-center" data-oid=":16znev">
                    {' '}
                    <h2 className="text-3xl md:text-4xl font-bold mb-6" data-oid="5j:ixdr">
                        {' '}
                        Ready to Transform Your Digital Presence?{' '}
                    </h2>{' '}
                    <p className="text-gray-300 max-w-2xl mx-auto mb-10" data-oid="-srnom8">
                        {' '}
                        Let's Collaborate to Create Innovative Solutions that drive your Business
                        forward. Get in Touch today to discuss your Project.{' '}
                    </p>{' '}
                    <a
                        href="#contact"
                        className="px-8 py-4 bg-gradient-to-r from-blue-500 to-violet-600 rounded-md text-white font-medium hover:from-blue-600 hover:to-violet-700 transition-all shadow-lg shadow-blue-500/20 inline-block"
                        data-oid="v7o3rbx"
                    >
                        {' '}
                        Let's Buzz{' '}
                    </a>{' '}
                </div>{' '}
            </section>{' '}
            {/* Contact Section */}{' '}
            <section id="contact" className="py-16 pb-12 bg-black relative z-10" data-oid="mtjsw9y">
                {' '}
                <div className="container mx-auto px-6 max-w-6xl" data-oid="04n4r7w">
                    {' '}
                    <div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                        data-oid="fgjiflv"
                    >
                        {' '}
                        <div className="mx-auto w-full" data-oid="hj7xk4m">
                            {' '}
                            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="mt:t-y4">
                                {' '}
                                Get In Touch{' '}
                            </h2>{' '}
                            <p className="text-gray-300 mb-6" data-oid="m8v381q">
                                {' '}
                                Have a Project in mind or want to learn more about our Services?
                                Fill out the Form and We'll get back to you as soon as
                                possible.{' '}
                            </p>{' '}
                            <div className="space-y-4" data-oid="teq0pvd">
                                {' '}
                                <div className="flex items-start" data-oid="3tsyy8l">
                                    {' '}
                                    <div
                                        className="bg-gray-900 p-3 rounded-lg mr-4"
                                        data-oid="0_v-wu_"
                                    >
                                        {' '}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-blue-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="w3xyiqe"
                                        >
                                            {' '}
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                data-oid="u-x5k88"
                                            />{' '}
                                        </svg>{' '}
                                    </div>{' '}
                                    <div data-oid=".w-9vdz">
                                        {' '}
                                        <h3 className="font-medium mb-1" data-oid="0:g2tdi">
                                            {' '}
                                            Email{' '}
                                        </h3>{' '}
                                        <p className="text-gray-400" data-oid="8hxxr:-">
                                            {' '}
                                            buzz@bithive.in{' '}
                                        </p>{' '}
                                    </div>{' '}
                                </div>{' '}
                                <div className="flex items-start" data-oid="quo1u:z">
                                    {' '}
                                    <div
                                        className="bg-gray-900 p-3 rounded-lg mr-4"
                                        data-oid="odbzg.o"
                                    >
                                        {' '}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-blue-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="biwpt7w"
                                        >
                                            {' '}
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                data-oid=":08k2lb"
                                            />{' '}
                                        </svg>{' '}
                                    </div>{' '}
                                    <div data-oid="mlxl-29">
                                        {' '}
                                        <h3 className="font-medium mb-1" data-oid="znl:qf:">
                                            {' '}
                                            Phone{' '}
                                        </h3>{' '}
                                        <p className="text-gray-400" data-oid="0iroilo">
                                            {' '}
                                            +91 7070030645 , +91 9369450531{' '}
                                        </p>{' '}
                                    </div>{' '}
                                </div>{' '}
                                <div className="flex items-start" data-oid="54wfv3x">
                                    {' '}
                                    <div
                                        className="bg-gray-900 p-3 rounded-lg mr-4"
                                        data-oid="2af6myv"
                                    >
                                        {' '}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-blue-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid=":zh8sb."
                                        >
                                            {' '}
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                data-oid="t3-p:r4"
                                            />{' '}
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                data-oid="z86k8p4"
                                            />{' '}
                                        </svg>{' '}
                                    </div>{' '}
                                    <div data-oid="3a1e312">
                                        {' '}
                                        <h3 className="font-medium mb-1" data-oid="1qk2a-y">
                                            {' '}
                                            Head Office{' '}
                                        </h3>{' '}
                                        <p className="text-gray-400" data-oid="mkv49do">
                                            {' '}
                                            Gurugram, Haryana, India{' '}
                                        </p>{' '}
                                    </div>{' '}
                                </div>{' '}
                                <div className="flex items-start" data-oid="9d56ms8">
                                    {' '}
                                    <div
                                        className="bg-gray-900 p-3 rounded-lg mr-4"
                                        data-oid="0bbrq5s"
                                    >
                                        {' '}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-blue-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="oj7szo2"
                                        >
                                            {' '}
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                data-oid="t2.j.d:"
                                            />{' '}
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                data-oid="tkmjc7i"
                                            />{' '}
                                        </svg>{' '}
                                    </div>{' '}
                                    <div data-oid="ngasvpj">
                                        {' '}
                                        <h3 className="font-medium mb-1" data-oid="y3a5rff">
                                            {' '}
                                            Sub Office{' '}
                                        </h3>{' '}
                                        <p className="text-gray-400" data-oid="co47vdw">
                                            {' '}
                                            Dehradun, Uttarakhand, India{' '}
                                        </p>{' '}
                                    </div>{' '}
                                </div>{' '}
                            </div>{' '}
                        </div>{' '}
                        <div
                            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg mx-auto w-full"
                            data-oid="24507qw"
                        >
                            {' '}
                            <form data-oid="1nwp1vo">
                                {' '}
                                <div
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4"
                                    data-oid="gvj03:v"
                                >
                                    {' '}
                                    <div data-oid="ts:nbsd">
                                        {' '}
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-400 mb-2"
                                            data-oid="mp8col."
                                        >
                                            {' '}
                                            Name{' '}
                                        </label>{' '}
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full bg-black border border-gray-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Your name"
                                            data-oid="96bel39"
                                        />{' '}
                                    </div>{' '}
                                    <div data-oid="el15bze">
                                        {' '}
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-400 mb-2"
                                            data-oid="p-m_bw0"
                                        >
                                            {' '}
                                            Email{' '}
                                        </label>{' '}
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full bg-black border border-gray-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Your email"
                                            data-oid="_pm.z-6"
                                        />{' '}
                                    </div>{' '}
                                </div>{' '}
                                <div className="mb-4" data-oid="-:q-7bs">
                                    {' '}
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm font-medium text-gray-400 mb-2"
                                        data-oid="h:4f0.a"
                                    >
                                        {' '}
                                        Subject{' '}
                                    </label>{' '}
                                    <input
                                        type="text"
                                        id="subject"
                                        className="w-full bg-black border border-gray-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Subject"
                                        data-oid="rth._rf"
                                    />{' '}
                                </div>{' '}
                                <div className="mb-4" data-oid="_fjd9ej">
                                    {' '}
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-400 mb-2"
                                        data-oid="-pbuudp"
                                    >
                                        {' '}
                                        Message{' '}
                                    </label>{' '}
                                    <textarea
                                        id="message"
                                        rows={5}
                                        className="w-full bg-black border border-gray-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Your message"
                                        data-oid="vfq9hu."
                                    ></textarea>{' '}
                                </div>{' '}
                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-violet-600 rounded-md text-white font-medium hover:from-blue-600 hover:to-violet-700 transition-all shadow-lg shadow-blue-500/20"
                                    data-oid="uavr52x"
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
                data-oid="d985291"
            >
                {' '}
                <div className="container mx-auto px-6 py-12" data-oid="bc3f5tt">
                    {' '}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-oid="1hk:rf-">
                        {' '}
                        <div className="md:col-span-1" data-oid="4hzo-hn">
                            {' '}
                            <div className="mb-6" data-oid="-nbk3el">
                                {' '}
                                <img
                                    src="/images/PHOTO-2025-03-28-20-01-27.jpg"
                                    alt="BitHive Technologies Logo"
                                    className="h-16 w-auto rounded-md object-contain"
                                    data-oid="uhvr-a1"
                                />{' '}
                            </div>{' '}
                            <p className="text-gray-400 mb-6" data-oid="_ni5z__">
                                {' '}
                                Creating Buzz in Digital Experiences !{' '}
                            </p>{' '}
                            <div className="flex space-x-4" data-oid="qfd2m6u">
                                {' '}
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-blue-400 transition-colors"
                                    data-oid="lsb:dxc"
                                >
                                    {' '}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="_nf46gp"
                                    >
                                        {' '}
                                        <path
                                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                                            data-oid="zjbx-6v"
                                        />{' '}
                                    </svg>{' '}
                                </a>{' '}
                                <a
                                    href="linkedin.com/company/bithive-technology "
                                    className="text-gray-400 hover:text-blue-400 transition-colors"
                                    data-oid="3:zctp9"
                                >
                                    {' '}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="3c-vr3d"
                                    >
                                        {' '}
                                        <path
                                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                            data-oid="s2udlz8"
                                        />{' '}
                                    </svg>{' '}
                                </a>{' '}
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-blue-400 transition-colors"
                                    data-oid="bkg2qim"
                                >
                                    {' '}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="5psfllk"
                                    >
                                        {' '}
                                        <path
                                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                            data-oid="cqo4:9k"
                                        />{' '}
                                    </svg>{' '}
                                </a>{' '}
                            </div>{' '}
                        </div>{' '}
                        <div data-oid="7:wxwq0">
                            {' '}
                            <h3 className="text-lg font-semibold mb-4" data-oid="3pn1sux">
                                {' '}
                                Services{' '}
                            </h3>{' '}
                            <ul className="space-y-2" data-oid="w28.l6e">
                                {' '}
                                <li className="text-gray-400" data-oid="5xbn73b">
                                    {' '}
                                    Website Development{' '}
                                </li>{' '}
                                <li className="text-gray-400" data-oid=".yh-lfp">
                                    {' '}
                                    Mobile App Development{' '}
                                </li>{' '}
                                <li className="text-gray-400" data-oid="f0-7gjk">
                                    {' '}
                                    UI/UX Design{' '}
                                </li>{' '}
                                <li className="text-gray-400" data-oid="1af9qrr">
                                    {' '}
                                    Product Design{' '}
                                </li>{' '}
                                <li className="text-gray-400" data-oid="yftozr7">
                                    {' '}
                                    Digital Strategy{' '}
                                </li>{' '}
                            </ul>{' '}
                        </div>{' '}
                        <div data-oid="mmkighp">
                            {' '}
                            <h3 className="text-lg font-semibold mb-4" data-oid="vangp21">
                                {' '}
                                Company{' '}
                            </h3>{' '}
                            <ul className="space-y-2" data-oid="xjt_xfx">
                                {' '}
                                <li data-oid="htvtw8o">
                                    {' '}
                                    <a
                                        href="#about"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        data-oid="zq630jy"
                                    >
                                        {' '}
                                        About Us{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="w53f0mc">
                                    {' '}
                                    <a
                                        href="#portfolio"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        data-oid="h9ardwv"
                                    >
                                        {' '}
                                        Portfolio{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="bjfsoz_">
                                    {' '}
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        data-oid="2znef75"
                                    >
                                        {' '}
                                        Careers{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="fk.r5t_">
                                    {' '}
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        data-oid="rn4ywxh"
                                    >
                                        {' '}
                                        Blog{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="vobe6oy">
                                    {' '}
                                    <a
                                        href="#contact"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        data-oid="k4oipie"
                                    >
                                        {' '}
                                        Contact{' '}
                                    </a>{' '}
                                </li>{' '}
                            </ul>{' '}
                        </div>{' '}
                        <div data-oid="264r9lr">
                            {' '}
                            <h3 className="text-lg font-semibold mb-4" data-oid="scs2_gn">
                                {' '}
                                Legal{' '}
                            </h3>{' '}
                            <ul className="space-y-2" data-oid="v.x6g5y">
                                {' '}
                                <li data-oid="mj1ivzp">
                                    {' '}
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        data-oid="x_w_xpk"
                                    >
                                        {' '}
                                        Privacy Policy{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="b1e8rk1">
                                    {' '}
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        data-oid="rwq_s5o"
                                    >
                                        {' '}
                                        Terms of Service{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="y-6j2s7">
                                    {' '}
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        data-oid="44eh59z"
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
                        data-oid=".3ibalx"
                    >
                        {' '}
                        <p className="text-gray-500 text-sm" data-oid="-vrsjxq">
                            {' '}
                            &copy; {new Date().getFullYear()} BitHive Technologies. All rights
                            Reserved.{' '}
                        </p>{' '}
                        <p className="text-gray-500 text-sm mt-4 md:mt-0" data-oid="cse04-5">
                            {' '}
                            Built with ❤️ by BitHive Technologies{' '}
                        </p>{' '}
                    </div>{' '}
                </div>{' '}
            </footer>{' '}
        </div>
    );
}
