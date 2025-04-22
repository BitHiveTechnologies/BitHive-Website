'use client';
import Link from 'next/link';
import { lazy, Suspense, useEffect, useState } from 'react';
import About from './About';

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
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
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
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
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
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
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
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
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
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
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
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
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
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
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
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
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
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
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
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
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
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
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
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />{' '}
                </svg>
            ),
        },
    ];

    return (
        <div className="bg-black text-white font-sans min-h-screen relative">
            <Suspense
                fallback={<div className="fixed top-0 left-0 w-full h-full bg-black z-0"></div>}
            >
                <InteractiveBackground />
            </Suspense>
            {/* Header */}{' '}
            <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
                {' '}
                <div className="container mx-auto px-6 py-4">
                    {' '}
                    <div className="flex justify-between items-center">
                        {' '}
                        <div className="flex items-center space-x-2">
                            {' '}
                            <div className="h-14">
                                {' '}
                                <Link href="/">
                                    <img
                                        src="/images/PHOTO-2025-03-28-20-01-27.jpg"
                                        alt="BitHive Technologies Logo"
                                        className="h-full w-auto rounded-md object-contain"
                                        loading="eager"
                                    />{' '}
                                </Link>
                            </div>{' '}
                        </div>{' '}
                        {/* Desktop Navigation */}{' '}
                        <nav className="hidden md:flex space-x-8">
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
                        >
                            {' '}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {' '}
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}{' '}
                            </svg>{' '}
                        </button>{' '}
                    </div>{' '}
                    {/* Mobile Navigation */}{' '}
                    {isMenuOpen && (
                        <nav className="md:hidden pt-4 pb-2 border-t border-gray-800 mt-4">
                            {' '}
                            <div className="flex flex-col space-y-3">
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
            >
                {' '}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 z-0"></div>{' '}
                <div className="container mx-auto px-6 relative z-10">
                    {' '}
                    <div className="max-w-3xl">
                        {' '}
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                            {' '}
                            We Build{' '}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
                                {' '}
                                Digital Experiences{' '}
                            </span>{' '}
                            That
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
                                {' '}
                                Buzzes{' '}
                            </span>{' '}
                            and Drives Growth{' '}
                        </h1>{' '}
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl">
                            {' '}
                            BitHive Technologies is a Digital Agency specializing in Cutting-edge
                            Solutions for Startups and Fast-growing Brands. We Transform Ideas into
                            Powerful Digital Products.{' '}
                        </p>{' '}
                        <div className="flex flex-col sm:flex-row gap-4">
                            {' '}
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-violet-600 rounded-md text-white font-medium hover:from-blue-600 hover:to-violet-700 transition-all shadow-lg shadow-blue-500/20 text-center"
                            >
                                {' '}
                                Let's Buzz{' '}
                            </a>{' '}
                            <a
                                href="#services"
                                className="px-8 py-4 bg-gray-800 rounded-md text-white font-medium hover:bg-gray-700 transition-all text-center"
                            >
                                {' '}
                                Explore Services{' '}
                            </a>{' '}
                        </div>{' '}
                    </div>{' '}
                </div>{' '}
                {/* Abstract background elements */}{' '}
                <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-full blur-3xl"></div>{' '}
                <div className="absolute top-20 -right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>{' '}
            </section>{' '}
            {/* Services Section */}{' '}
            <section id="services" className="py-20 bg-gray-900/80 backdrop-blur-sm relative z-10">
                {' '}
                <div className="container mx-auto px-6">
                    {' '}
                    <div className="text-center mb-16">
                        {' '}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4"> Our Services </h2>{' '}
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            {' '}
                            We Offer end-to-end digital solutions tailored to your unique Business
                            needs{' '}
                        </p>{' '}
                    </div>{' '}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {' '}
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-black p-8 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all group"
                            >
                                {' '}
                                <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors">
                                    {' '}
                                    {service.icon}{' '}
                                </div>{' '}
                                <h3 className="text-xl font-semibold mb-3"> {service.title} </h3>{' '}
                                <p className="text-gray-400"> {service.description} </p>{' '}
                            </div>
                        ))}{' '}
                    </div>{' '}
                </div>{' '}
            </section>{' '}
            {/* Why Choose Us Section */}{' '}
            <section id="why-us" className="py-20 bg-black relative overflow-hidden z-10">
                {' '}
                <div className="container mx-auto px-6 relative z-10">
                    {' '}
                    <div className="text-center mb-16">
                        {' '}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {' '}
                            Why Choose Us ?{' '}
                        </h2>{' '}
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            {' '}
                            We Combine Technical Expertise with Strategic thinking to deliver
                            Exceptional Results{' '}
                        </p>{' '}
                    </div>{' '}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {' '}
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg hover:bg-gray-800/50 transition-all"
                            >
                                {' '}
                                <div className="bg-gradient-to-br from-blue-500/20 to-violet-500/20 p-3 rounded-lg inline-block mb-4">
                                    {' '}
                                    <div className="text-blue-400"> {value.icon} </div>{' '}
                                </div>{' '}
                                <h3 className="text-xl font-semibold mb-2"> {value.title} </h3>{' '}
                                <p className="text-gray-400"> {value.description} </p>{' '}
                            </div>
                        ))}{' '}
                    </div>{' '}
                </div>{' '}
                {/* Abstract background elements */}{' '}
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>{' '}
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl"></div>{' '}
            </section>{' '}
            {/* Portfolio Section */}{' '}
            <section id="portfolio" className="py-20 bg-gray-900/80 backdrop-blur-sm relative z-10">
                {' '}
                <div className="container mx-auto px-6">
                    {' '}
                    <div className="text-center mb-16">
                        {' '}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4"> Our Work </h2>{' '}
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            {' '}
                            Explore our Recent Projects and see how we've helped Businesses achieve
                            their Goals{' '}
                        </p>{' '}
                    </div>{' '}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {' '}
                        {portfolio.map((project, index) => (
                            <div
                                key={index}
                                className="bg-black rounded-lg overflow-hidden group hover:shadow-lg hover:shadow-blue-500/10 transition-all"
                            >
                                {' '}
                                <div className="relative h-64 overflow-hidden">
                                    {' '}
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />{' '}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                                        {' '}
                                        <div className="p-6">
                                            {' '}
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                {' '}
                                                {project.tags.map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded"
                                                    >
                                                        {' '}
                                                        {tag}{' '}
                                                    </span>
                                                ))}{' '}
                                            </div>{' '}
                                        </div>{' '}
                                    </div>{' '}
                                </div>{' '}
                                <div className="p-6">
                                    {' '}
                                    <h3 className="text-xl font-semibold mb-2">
                                        {' '}
                                        {project.title}{' '}
                                    </h3>{' '}
                                    <p className="text-gray-400"> {project.description} </p>{' '}
                                </div>{' '}
                            </div>
                        ))}{' '}
                    </div>{' '}
                    <div className="text-center mt-12">
                        {' '}
                        <a
                            href="#contact"
                            className="inline-block px-8 py-3 bg-gray-800 rounded-md text-white font-medium hover:bg-gray-700 transition-all"
                        >
                            {' '}
                            View All Projects{' '}
                        </a>{' '}
                    </div>{' '}
                </div>{' '}
            </section>{' '}
            {/* Testimonials Section */}{' '}
            <section className="py-20 bg-black relative overflow-hidden z-10">
                {' '}
                <div className="container mx-auto px-0 relative z-10">
                    {' '}
                    <div className="text-center mb-16">
                        {' '}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {' '}
                            Client Testimonials{' '}
                        </h2>{' '}
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            {' '}
                            Don't just take our Word for it — Hear What our Clients have to Say
                            !{' '}
                        </p>{' '}
                    </div>{' '}
                    {/* Auto-scrolling testimonial carousel */}
                    <div className="relative overflow-hidden" style={{ padding: '7px 0' }}>
                        <div
                            className="flex animate-carousel space-x-6"
                            style={{
                                animationDuration: `${testimonials.length * 5}s`,
                                width: `${testimonials.length * 350}px`,
                            }}
                        >
                            {testimonials.concat(testimonials).map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 flex-shrink-0 w-[320px] transition-transform duration-300 hover:scale-105 hover:border-blue-500/50"
                                >
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">{testimonial.name}</h4>
                                            <p className="text-gray-400 text-sm">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <style jsx global>{`
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
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>{' '}
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl"></div>{' '}
            </section>{' '}
            {/* Process Section */}{' '}
            <section id="process" className="py-20 bg-gray-900/80 backdrop-blur-sm relative z-10">
                {' '}
                <div className="container mx-auto px-6">
                    {' '}
                    <div className="text-center mb-16">
                        {' '}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4"> Our Process </h2>{' '}
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            {' '}
                            A Streamlined Approach to delivering Exceptional Results{' '}
                        </p>{' '}
                    </div>{' '}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {' '}
                        {process.map((step, index) => (
                            <div key={index} className="relative">
                                {' '}
                                <div className="bg-black p-6 rounded-lg border border-gray-800 h-full">
                                    {' '}
                                    <div className="bg-gradient-to-br from-blue-500/20 to-violet-500/20 p-3 rounded-lg inline-block mb-4">
                                        {' '}
                                        <div className="text-blue-400"> {step.icon} </div>{' '}
                                    </div>{' '}
                                    <h3 className="text-xl font-semibold mb-2"> {step.title} </h3>{' '}
                                    <p className="text-gray-400"> {step.description} </p>{' '}
                                </div>{' '}
                                {/* Connector line */}{' '}
                                {index < process.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500"></div>
                                )}{' '}
                            </div>
                        ))}{' '}
                    </div>{' '}
                </div>{' '}
            </section>{' '}
            {/* About Section */}{' '}
            <section id="about" className="py-20 bg-black relative overflow-hidden z-10">
                {' '}
                <div className="container mx-auto px-6 relative z-10">
                    {' '}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {' '}
                        <div>
                            {' '}
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                {' '}
                                About BitHive Technologies{' '}
                            </h2>{' '}
                            <p className="text-gray-300 mb-6">
                                {' '}
                                We're a Team of Passionate Developers, Designers, and Strategists
                                dedicated to creating Exceptional Digital Experiences. Founded with
                                a Mission to help Startups and Growing Businesses leverage
                                Technology to achieve their Goals, BitHive Technologies combines
                                Technical Expertise with Creative Thinking.{' '}
                            </p>{' '}
                            <p className="text-gray-300 mb-6">
                                {' '}
                                Our Approach is Collaborative and Transparent, ensuring that we
                                understand your Vision and deliver Solutions that exceed
                                Expectations. We Stay at the forefront of Technology trends to
                                provide Innovative Solutions that give our Clients a Competitive
                                Edge.{' '}
                            </p>{' '}
                            <div className="flex flex-wrap gap-4">
                                {' '}
                                <div className="bg-gray-900/50 backdrop-blur-sm px-4 py-2 rounded-md">
                                    {' '}
                                    <span className="text-blue-400 font-bold text-2xl">
                                        {' '}
                                        20+{' '}
                                    </span>{' '}
                                    <p className="text-gray-400 text-sm">
                                        {' '}
                                        Projects Completed{' '}
                                    </p>{' '}
                                </div>{' '}
                                <div className="bg-gray-900/50 backdrop-blur-sm px-4 py-2 rounded-md">
                                    {' '}
                                    <span className="text-blue-400 font-bold text-2xl">
                                        {' '}
                                        15+{' '}
                                    </span>{' '}
                                    <p className="text-gray-400 text-sm"> Happy Clients </p>{' '}
                                </div>{' '}
                                <div className="bg-gray-900/50 backdrop-blur-sm px-4 py-2 rounded-md">
                                    {' '}
                                    <span className="text-blue-400 font-bold text-2xl">
                                        {' '}
                                        1+{' '}
                                    </span>{' '}
                                    <p className="text-gray-400 text-sm"> Years Experience </p>{' '}
                                </div>{' '}
                            </div>{' '}
                        </div>{' '}
                        <div className="relative">
                            {' '}
                            <div className="bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-lg p-1">
                                {' '}
                                <div className="bg-black rounded-lg p-8">
                                    {' '}
                                    <div className="grid grid-cols-2 gap-6">
                                        {' '}
                                        <div className="space-y-6">
                                            {' '}
                                            <div className="bg-gray-900 p-4 rounded-lg">
                                                {' '}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-8 w-8 text-blue-400 mb-2"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    {' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1.5}
                                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                    />{' '}
                                                </svg>{' '}
                                                <h3 className="font-medium mb-1"> Reliable </h3>{' '}
                                                <p className="text-gray-400 text-sm">
                                                    {' '}
                                                    We Deliver on our Promises{' '}
                                                </p>{' '}
                                            </div>{' '}
                                            <div className="bg-gray-900 p-4 rounded-lg">
                                                {' '}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-8 w-8 text-blue-400 mb-2"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    {' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1.5}
                                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                                    />{' '}
                                                </svg>{' '}
                                                <h3 className="font-medium mb-1"> Innovative </h3>{' '}
                                                <p className="text-gray-400 text-sm">
                                                    {' '}
                                                    Cutting-edge Solutions{' '}
                                                </p>{' '}
                                            </div>{' '}
                                        </div>{' '}
                                        <div className="space-y-6 mt-6">
                                            {' '}
                                            <div className="bg-gray-900 p-4 rounded-lg">
                                                {' '}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-8 w-8 text-blue-400 mb-2"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    {' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1.5}
                                                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                                                    />{' '}
                                                </svg>{' '}
                                                <h3 className="font-medium mb-1">
                                                    {' '}
                                                    Communicative{' '}
                                                </h3>{' '}
                                                <p className="text-gray-400 text-sm">
                                                    {' '}
                                                    Clear, Open Dialogue{' '}
                                                </p>{' '}
                                            </div>{' '}
                                            <div className="bg-gray-900 p-4 rounded-lg">
                                                {' '}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-8 w-8 text-blue-400 mb-2"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    {' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1.5}
                                                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                                    />{' '}
                                                </svg>{' '}
                                                <h3 className="font-medium mb-1">
                                                    {' '}
                                                    Quality-Focused{' '}
                                                </h3>{' '}
                                                <p className="text-gray-400 text-sm">
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
                <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>{' '}
            </section>{' '}
            {/* Our Team Section */}{' '}
            <section id="team" className="py-20 bg-gray-900/80 backdrop-blur-sm relative z-10">
                {' '}
                <div className="container mx-auto px-6">
                    {' '}
                    <div className="text-center mb-16">
                        {' '}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4"> Our Team </h2>{' '}
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            {' '}
                            Meet the Talented Individuals behind BitHive Technologies{' '}
                        </p>{' '}
                    </div>{' '}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {' '}
                        {/* Team Member 1 */}{' '}
                        <div className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all group">
                            {' '}
                            <div className="mb-4 overflow-hidden rounded-lg">
                                {' '}
                                <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center">
                                    <img
                                        src="/images/AyushSrivastav.png"
                                        alt="Ayush Srivastava"
                                        className="h-full w-full rounded-lg object-cover"
                                        loading="lazy"
                                    />
                                </div>{' '}
                            </div>{' '}
                            <div className="flex items-center mb-1">
                                <a
                                    href="https://www.linkedin.com/in/ayushsrivastava0609/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-blue-400 transition-colors mr-2"
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
                                <h3 className="text-xl font-semibold">Ayush Srivastava</h3>
                            </div>{' '}
                            <p className="text-blue-400 mb-2">Co-Founder & CEO</p>{' '}
                            <p className="text-gray-400 text-sm mb-2 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <a
                                    href="mailto:ayushsrivastava@bithive.in"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    {' '}
                                    ayushsrivastava@bithive.in{' '}
                                </a>{' '}
                            </p>
                        </div>{' '}
                        {/* Team Member 2 */}{' '}
                        <div className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all group">
                            {' '}
                            <div className="mb-4 overflow-hidden rounded-lg">
                                {' '}
                                <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center">
                                    <img
                                        src="/images/Saurabh.jpeg"
                                        alt="Saurabh Singh"
                                        className="h-full w-full rounded-lg object-cover"
                                    />
                                </div>{' '}
                            </div>{' '}
                            <div className="flex items-center mb-1">
                                <a
                                    href="https://www.linkedin.com/in/saurabh-singh-bithive"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-blue-400 transition-colors mr-2"
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
                                <h3 className="text-xl font-semibold">Saurabh Singh</h3>
                            </div>{' '}
                            <p className="text-blue-400 mb-2">Co-Founder & CTO</p>{' '}
                            <p className="text-gray-400 text-sm mb-2 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <a
                                    href="mailto:saurabhsingh@bithive.in"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    {' '}
                                    saurabhsingh@bithive.in{' '}
                                </a>{' '}
                            </p>
                        </div>{' '}
                        {/* Team Member 3 */}{' '}
                        <div className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all group">
                            {' '}
                            <div className="mb-4 overflow-hidden rounded-lg">
                                {' '}
                                <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center">
                                    <img
                                        src="/images/AyushKumar.jpeg"
                                        alt="Ayush Srivastava"
                                        className="h-full w-full rounded-lg object-cover"
                                    />
                                </div>{' '}
                            </div>{' '}
                            <div className="flex items-center mb-1">
                                <a
                                    href="https://www.linkedin.com/in/ayush-kumar-aa16a2241/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-blue-400 transition-colors mr-2"
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
                                <h3 className="text-xl font-semibold">Ayush Kumar</h3>
                            </div>{' '}
                            <p className="text-blue-400 mb-2">CMO/CSO</p>{' '}
                            <p className="text-gray-400 text-sm mb-2 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <a
                                    href="mailto:ayushkumar@bithive.in"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    {' '}
                                    ayushkumar@bithive.in{' '}
                                </a>{' '}
                            </p>
                        </div>{' '}
                        {/* Team Member 4 */}{' '}
                        <div className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all group">
                            {' '}
                            <div className="mb-4 overflow-hidden rounded-lg">
                                {' '}
                                <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center">
                                    <img
                                        src="/images/Priyansh.jpeg"
                                        alt="Priyansh Kandwal"
                                        className="h-full w-full rounded-lg object-cover"
                                    />
                                </div>{' '}
                            </div>{' '}
                            <div className="flex items-center mb-1">
                                <a
                                    href="https://www.linkedin.com/in/priyansh-kandwal69/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-blue-400 transition-colors mr-2"
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
                                <h3 className="text-xl font-semibold">Priyansh Kandwal</h3>
                            </div>{' '}
                            <p className="text-blue-400 mb-2">COO & Team Lead</p>{' '}
                            <p className="text-gray-400 text-sm mb-2 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <a
                                    href="mailto:priyanshkandwal@bithive.in"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    {' '}
                                    priyanshkandwal@bithive.in{' '}
                                </a>{' '}
                            </p>
                        </div>{' '}
                    </div>{' '}
                </div>{' '}
            </section>{' '}
            {/* CTA Section */}{' '}
            <section className="py-20 bg-gradient-to-r from-blue-900/30 to-violet-900/30 relative z-10">
                {' '}
                <div className="container mx-auto px-6 text-center">
                    {' '}
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        {' '}
                        Ready to Transform Your Digital Presence?{' '}
                    </h2>{' '}
                    <p className="text-gray-300 max-w-2xl mx-auto mb-10">
                        {' '}
                        Let's Collaborate to Create Innovative Solutions that drive your Business
                        forward. Get in Touch today to discuss your Project.{' '}
                    </p>{' '}
                    <a
                        href="#contact"
                        className="px-8 py-4 bg-gradient-to-r from-blue-500 to-violet-600 rounded-md text-white font-medium hover:from-blue-600 hover:to-violet-700 transition-all shadow-lg shadow-blue-500/20 inline-block"
                    >
                        {' '}
                        Let's Buzz{' '}
                    </a>{' '}
                </div>{' '}
            </section>{' '}
            {/* Contact Section */}{' '}
     <About/>
            {/* Footer */}{' '}
            <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-800 relative z-10">
                {' '}
                <div className="container mx-auto px-6 py-12">
                    {' '}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {' '}
                        <div className="md:col-span-1">
                            {' '}
                            <div className="mb-6">
                                {' '}
                                <img
                                    src="/images/PHOTO-2025-03-28-20-01-27.jpg"
                                    alt="BitHive Technologies Logo"
                                    className="h-16 w-auto rounded-md object-contain"
                                />{' '}
                            </div>{' '}
                            <p className="text-gray-400 mb-6">
                                {' '}
                                Creating Buzz in Digital Experiences !{' '}
                            </p>{' '}
                            <div className="flex space-x-4">
                                {' '}
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-blue-400 transition-colors"
                                >
                                    {' '}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        {' '}
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />{' '}
                                    </svg>{' '}
                                </a>{' '}
                                <a
                                    href="https://www.linkedin.com/company/bithive-technology "
                                    className="text-gray-400 hover:text-blue-400 transition-colors"
                                >
                                    {' '}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        {' '}
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />{' '}
                                    </svg>{' '}
                                </a>{' '}
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-blue-400 transition-colors"
                                >
                                    {' '}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        {' '}
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />{' '}
                                    </svg>{' '}
                                </a>{' '}
                            </div>{' '}
                        </div>{' '}
                        <div>
                            {' '}
                            <h3 className="text-lg font-semibold mb-4"> Services </h3>{' '}
                            <ul className="space-y-2">
                                {' '}
                                <li className="text-gray-400"> Website Development </li>{' '}
                                <li className="text-gray-400"> Mobile App Development </li>{' '}
                                <li className="text-gray-400"> UI/UX Design </li>{' '}
                                <li className="text-gray-400"> Product Design </li>{' '}
                                <li className="text-gray-400"> Digital Strategy </li>{' '}
                            </ul>{' '}
                        </div>{' '}
                        <div>
                            {' '}
                            <h3 className="text-lg font-semibold mb-4"> Company </h3>{' '}
                            <ul className="space-y-2">
                                {' '}
                                <li>
                                    {' '}
                                    <a
                                        href="#about"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                    >
                                        {' '}
                                        About Us{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li>
                                    {' '}
                                    <a
                                        href="#portfolio"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                    >
                                        {' '}
                                        Portfolio{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li>
                                    {' '}
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                    >
                                        {' '}
                                        Careers{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li>
                                    {' '}
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                    >
                                        {' '}
                                        Blog{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li>
                                    {' '}
                                    <a
                                        href="#contact"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                    >
                                        {' '}
                                        Contact{' '}
                                    </a>{' '}
                                </li>{' '}
                            </ul>{' '}
                        </div>{' '}
                        <div>
                            {' '}
                            <h3 className="text-lg font-semibold mb-4"> Legal </h3>{' '}
                            <ul className="space-y-2">
                                {' '}
                                <li>
                                    {' '}
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                    >
                                        {' '}
                                        Privacy Policy{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li>
                                    {' '}
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                    >
                                        {' '}
                                        Terms of Service{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li>
                                    {' '}
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                    >
                                        {' '}
                                        Cookie Policy{' '}
                                    </a>{' '}
                                </li>{' '}
                            </ul>{' '}
                        </div>{' '}
                    </div>{' '}
                    <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                        {' '}
                        <p className="text-gray-500 text-sm">
                            {' '}
                            &copy; {new Date().getFullYear()} BitHive Technologies. All rights
                            Reserved.{' '}
                        </p>{' '}
                        <p className="text-gray-500 text-sm mt-4 md:mt-0">
                            {' '}
                            Built with ❤️ by BitHive Technologies{' '}
                        </p>{' '}
                    </div>{' '}
                </div>{' '}
            </footer>{' '}
        </div>
    );
}
