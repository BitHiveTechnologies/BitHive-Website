'use client';
import { useEffect, useState } from 'react';
import InteractiveBackground from '../components/InteractiveBackground';
export default function Page() {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPosition = window.scrollY + 100;
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(section.id);
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
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
                    data-oid="1srs2aq"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        data-oid="2b_yaoj"
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
                    data-oid="qmf9qda"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        data-oid="z4mvp.h"
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
                    data-oid="05iwu4p"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                        data-oid="l37mx9j"
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
                    data-oid="ou7694t"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                        data-oid="pw8eal."
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
                    data-oid="31vb46o"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        data-oid="exm8xua"
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
                    data-oid="zwo128z"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        data-oid="_idnlt9"
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
                    data-oid="q7wga_h"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                        data-oid="_ki4ke2"
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
                    data-oid="kqkfnvz"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        data-oid="0px2vxo"
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
                    data-oid="d5f9zcc"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        data-oid="nlif8jy"
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
                    data-oid="1hik6wc"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        data-oid="j-0lmu-"
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
                    data-oid="bo0lc0-"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        data-oid="-p.rx7."
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
                    data-oid="11gxq0h"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        data-oid="_o-q3q7"
                    />{' '}
                </svg>
            ),
        },
    ];

    return (
        <div className="bg-black text-white font-sans min-h-screen relative" data-oid="_hoy0ic">
            <InteractiveBackground data-oid="ua.uxh5" /> {/* Header */}{' '}
            <header
                className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800"
                data-oid="nxqd95w"
            >
                {' '}
                <div className="container mx-auto px-6 py-4" data-oid="0s_2wb3">
                    {' '}
                    <div className="flex justify-between items-center" data-oid="tzzznub">
                        {' '}
                        <div className="flex items-center space-x-2" data-oid="9-4zc_e">
                            {' '}
                            <div className="h-14" data-oid="4dbu5qx">
                                {' '}
                                <img
                                    src="/images/PHOTO-2025-03-28-20-01-27.jpg"
                                    alt="BitHive Technologies Logo"
                                    className="h-full w-auto rounded-md object-contain"
                                    data-oid="bc3_k:6"
                                />{' '}
                            </div>{' '}
                        </div>{' '}
                        {/* Desktop Navigation */}{' '}
                        <nav className="hidden md:flex space-x-8" data-oid="_iwd0ne">
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
                                    data-oid="u02s1w1"
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
                            data-oid="i-7sb0:"
                        >
                            {' '}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="jh00.2a"
                            >
                                {' '}
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                        data-oid="_bwn.b_"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                        data-oid="i_k4blw"
                                    />
                                )}{' '}
                            </svg>{' '}
                        </button>{' '}
                    </div>{' '}
                    {/* Mobile Navigation */}{' '}
                    {isMenuOpen && (
                        <nav
                            className="md:hidden pt-4 pb-2 border-t border-gray-800 mt-4"
                            data-oid="a3rgiru"
                        >
                            {' '}
                            <div className="flex flex-col space-y-3" data-oid="_s0k.md">
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
                                        data-oid="kuuee56"
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
                data-oid="ilwcva2"
            >
                {' '}
                <div
                    className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 z-0"
                    data-oid="yg:if6a"
                ></div>{' '}
                <div className="container mx-auto px-6 relative z-10" data-oid="mnn9663">
                    {' '}
                    <div className="max-w-3xl" data-oid="1cn957h">
                        {' '}
                        <h1
                            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
                            data-oid="njvpo50"
                        >
                            {' '}
                            We Build{' '}
                            <span
                                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500"
                                data-oid="2g.s43s"
                            >
                                {' '}
                                Digital Experiences{' '}
                            </span>{' '}
                            That
                            <span
                                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500"
                                data-oid="hwe8v6j"
                            >
                                {' '}
                                Buzzes{' '}
                            </span>{' '}
                            and Drives Growth{' '}
                        </h1>{' '}
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl" data-oid="bnycbta">
                            {' '}
                            BitHive Technologies is a Digital Agency specializing in Cutting-edge
                            Solutions for Startups and Fast-growing Brands. We Transform ideas into
                            powerful Digital Products.{' '}
                        </p>{' '}
                        <div className="flex flex-col sm:flex-row gap-4" data-oid="4-4w9q8">
                            {' '}
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-violet-600 rounded-md text-white font-medium hover:from-blue-600 hover:to-violet-700 transition-all shadow-lg shadow-blue-500/20 text-center"
                                data-oid="nt.99zy"
                            >
                                {' '}
                                Let's Buzz{' '}
                            </a>{' '}
                            <a
                                href="#services"
                                className="px-8 py-4 bg-gray-800 rounded-md text-white font-medium hover:bg-gray-700 transition-all text-center"
                                data-oid="mnpvaif"
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
                    data-oid="k3vu2w6"
                ></div>{' '}
                <div
                    className="absolute top-20 -right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
                    data-oid="wvwn8ud"
                ></div>{' '}
            </section>{' '}
            {/* Services Section */}{' '}
            <section
                id="services"
                className="py-20 bg-gray-900/80 backdrop-blur-sm relative z-10"
                data-oid=":4e.0i9"
            >
                {' '}
                <div className="container mx-auto px-6" data-oid="8zbng-o">
                    {' '}
                    <div className="text-center mb-16" data-oid="-fcyh6-">
                        {' '}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="7ns8xbr">
                            {' '}
                            Our Services{' '}
                        </h2>{' '}
                        <p className="text-gray-400 max-w-2xl mx-auto" data-oid="pxo95se">
                            {' '}
                            We Offer end-to-end digital solutions tailored to your unique Business
                            needs{' '}
                        </p>{' '}
                    </div>{' '}
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        data-oid="cn66gwd"
                    >
                        {' '}
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-black p-8 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all group"
                                data-oid="vmwdpjz"
                            >
                                {' '}
                                <div
                                    className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors"
                                    data-oid="9-wcrmf"
                                >
                                    {' '}
                                    {service.icon}{' '}
                                </div>{' '}
                                <h3 className="text-xl font-semibold mb-3" data-oid="k1n.tih">
                                    {' '}
                                    {service.title}{' '}
                                </h3>{' '}
                                <p className="text-gray-400" data-oid=":9r9q4j">
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
                data-oid="2x2xz25"
            >
                {' '}
                <div className="container mx-auto px-6 relative z-10" data-oid="s12:siz">
                    {' '}
                    <div className="text-center mb-16" data-oid="v7.xhgf">
                        {' '}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="_o90e1n">
                            {' '}
                            Why Choose Us ?{' '}
                        </h2>{' '}
                        <p className="text-gray-400 max-w-2xl mx-auto" data-oid="54tcb5z">
                            {' '}
                            We Combine Technical Expertise with Strategic thinking to deliver
                            Exceptional Results{' '}
                        </p>{' '}
                    </div>{' '}
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        data-oid="qbb9ob3"
                    >
                        {' '}
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg hover:bg-gray-800/50 transition-all"
                                data-oid="ktyecwq"
                            >
                                {' '}
                                <div
                                    className="bg-gradient-to-br from-blue-500/20 to-violet-500/20 p-3 rounded-lg inline-block mb-4"
                                    data-oid="wx_d:ou"
                                >
                                    {' '}
                                    <div className="text-blue-400" data-oid="wyf3xk2">
                                        {' '}
                                        {value.icon}{' '}
                                    </div>{' '}
                                </div>{' '}
                                <h3 className="text-xl font-semibold mb-2" data-oid="8yysjdy">
                                    {' '}
                                    {value.title}{' '}
                                </h3>{' '}
                                <p className="text-gray-400" data-oid="q-e2_qo">
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
                    data-oid="ko.tf13"
                ></div>{' '}
                <div
                    className="absolute -bottom-20 -right-20 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl"
                    data-oid="0qkews-"
                ></div>{' '}
            </section>{' '}
            {/* Portfolio Section */}{' '}
            <section
                id="portfolio"
                className="py-20 bg-gray-900/80 backdrop-blur-sm relative z-10"
                data-oid="851_l2p"
            >
                {' '}
                <div className="container mx-auto px-6" data-oid="hluqq_3">
                    {' '}
                    <div className="text-center mb-16" data-oid="haflgtj">
                        {' '}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="m4rmfkx">
                            {' '}
                            Our Work{' '}
                        </h2>{' '}
                        <p className="text-gray-400 max-w-2xl mx-auto" data-oid="6xp.mqn">
                            {' '}
                            Explore our Recent Projects and see how we've helped Businesses achieve
                            their Goals{' '}
                        </p>{' '}
                    </div>{' '}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-oid="igrjbif">
                        {' '}
                        {portfolio.map((project, index) => (
                            <div
                                key={index}
                                className="bg-black rounded-lg overflow-hidden group hover:shadow-lg hover:shadow-blue-500/10 transition-all"
                                data-oid="v-9c0fr"
                            >
                                {' '}
                                <div className="relative h-64 overflow-hidden" data-oid="lv84ngf">
                                    {' '}
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        data-oid="9w_bu9j"
                                    />{' '}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end"
                                        data-oid="404c0.j"
                                    >
                                        {' '}
                                        <div className="p-6" data-oid="-:u:jtf">
                                            {' '}
                                            <div
                                                className="flex flex-wrap gap-2 mb-3"
                                                data-oid="mwolwgi"
                                            >
                                                {' '}
                                                {project.tags.map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded"
                                                        data-oid="lpoigla"
                                                    >
                                                        {' '}
                                                        {tag}{' '}
                                                    </span>
                                                ))}{' '}
                                            </div>{' '}
                                        </div>{' '}
                                    </div>{' '}
                                </div>{' '}
                                <div className="p-6" data-oid="no3.5y1">
                                    {' '}
                                    <h3 className="text-xl font-semibold mb-2" data-oid="6rcrgh-">
                                        {' '}
                                        {project.title}{' '}
                                    </h3>{' '}
                                    <p className="text-gray-400" data-oid="npjztfc">
                                        {' '}
                                        {project.description}{' '}
                                    </p>{' '}
                                </div>{' '}
                            </div>
                        ))}{' '}
                    </div>{' '}
                    <div className="text-center mt-12" data-oid="fie0qyo">
                        {' '}
                        <a
                            href="#contact"
                            className="inline-block px-8 py-3 bg-gray-800 rounded-md text-white font-medium hover:bg-gray-700 transition-all"
                            data-oid="veccodw"
                        >
                            {' '}
                            View All Projects{' '}
                        </a>{' '}
                    </div>{' '}
                </div>{' '}
            </section>{' '}
            {/* Testimonials Section */}{' '}
            <section className="py-20 bg-black relative overflow-hidden z-10" data-oid="_7k3l4k">
                {' '}
                <div className="container mx-auto px-6 relative z-10" data-oid="1_iy5ic">
                    {' '}
                    <div className="text-center mb-16" data-oid="rc-k_nf">
                        {' '}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="1uo2nir">
                            {' '}
                            Client Testimonials{' '}
                        </h2>{' '}
                        <p className="text-gray-400 max-w-2xl mx-auto" data-oid="b66.y8s">
                            {' '}
                            Don't just take our Word for it — Hear What our Clients have to Say
                            !{' '}
                        </p>{' '}
                    </div>{' '}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="o7t48.7">
                        {' '}
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800"
                                data-oid="s6imc38"
                            >
                                {' '}
                                <div className="flex items-center mb-6" data-oid=":z16j-f">
                                    {' '}
                                    <div
                                        className="w-12 h-12 rounded-full overflow-hidden mr-4"
                                        data-oid="j5s282z"
                                    >
                                        {' '}
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover"
                                            data-oid="abrrjhm"
                                        />{' '}
                                    </div>{' '}
                                    <div data-oid=".73rhn7">
                                        {' '}
                                        <h4 className="font-semibold" data-oid="shda2k4">
                                            {' '}
                                            {testimonial.name}{' '}
                                        </h4>{' '}
                                        <p className="text-gray-400 text-sm" data-oid="ck7brxm">
                                            {' '}
                                            {testimonial.role}{' '}
                                        </p>{' '}
                                    </div>{' '}
                                </div>{' '}
                                <p className="text-gray-300 italic" data-oid="y-e839l">
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
                    data-oid="njeu6kk"
                ></div>{' '}
                <div
                    className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl"
                    data-oid="jngyn:."
                ></div>{' '}
            </section>{' '}
            {/* Process Section */}{' '}
            <section
                id="process"
                className="py-20 bg-gray-900/80 backdrop-blur-sm relative z-10"
                data-oid="pg2bejx"
            >
                {' '}
                <div className="container mx-auto px-6" data-oid="6pyswck">
                    {' '}
                    <div className="text-center mb-16" data-oid="puhtwqo">
                        {' '}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="b5z0pbc">
                            {' '}
                            Our Process{' '}
                        </h2>{' '}
                        <p className="text-gray-400 max-w-2xl mx-auto" data-oid="cz0lkay">
                            {' '}
                            A Streamlined Approach to delivering Exceptional Results{' '}
                        </p>{' '}
                    </div>{' '}
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        data-oid="_rhr51k"
                    >
                        {' '}
                        {process.map((step, index) => (
                            <div key={index} className="relative" data-oid="s-dxcwj">
                                {' '}
                                <div
                                    className="bg-black p-6 rounded-lg border border-gray-800 h-full"
                                    data-oid="yha1b4r"
                                >
                                    {' '}
                                    <div
                                        className="bg-gradient-to-br from-blue-500/20 to-violet-500/20 p-3 rounded-lg inline-block mb-4"
                                        data-oid="3lmspu0"
                                    >
                                        {' '}
                                        <div className="text-blue-400" data-oid="z2rw:wn">
                                            {' '}
                                            {step.icon}{' '}
                                        </div>{' '}
                                    </div>{' '}
                                    <h3 className="text-xl font-semibold mb-2" data-oid="upi:64.">
                                        {' '}
                                        {step.title}{' '}
                                    </h3>{' '}
                                    <p className="text-gray-400" data-oid="uaqpb2b">
                                        {' '}
                                        {step.description}{' '}
                                    </p>{' '}
                                </div>{' '}
                                {/* Connector line */}{' '}
                                {index < process.length - 1 && (
                                    <div
                                        className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500"
                                        data-oid="81vb2zc"
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
                data-oid="9.u:azc"
            >
                {' '}
                <div className="container mx-auto px-6 relative z-10" data-oid="ehi9kz9">
                    {' '}
                    <div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                        data-oid="pzrljmf"
                    >
                        {' '}
                        <div data-oid=":v_b-m5">
                            {' '}
                            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-oid="n23q3r8">
                                {' '}
                                About BitHive Technologies{' '}
                            </h2>{' '}
                            <p className="text-gray-300 mb-6" data-oid="wu66a6q">
                                {' '}
                                We're a Team of Passionate Developers, Designers, and Strategists
                                dedicated to creating Exceptional Digital Experiences. Founded with
                                a Mission to help Startups and Growing Businesses leverage
                                Technology to achieve their Goals, BitHive Technologies combines
                                Technical Expertise with Creative Thinking.{' '}
                            </p>{' '}
                            <p className="text-gray-300 mb-6" data-oid="upk51-_">
                                {' '}
                                Our Approach is Collaborative and Transparent, ensuring that we
                                understand your Vision and deliver Solutions that exceed
                                Expectations. We Stay at the forefront of Technology trends to
                                provide Innovative Solutions that give our Clients a Competitive
                                Edge.{' '}
                            </p>{' '}
                            <div className="flex flex-wrap gap-4" data-oid="mx6q5d.">
                                {' '}
                                <div
                                    className="bg-gray-900/50 backdrop-blur-sm px-4 py-2 rounded-md"
                                    data-oid="y-cas_6"
                                >
                                    {' '}
                                    <span
                                        className="text-blue-400 font-bold text-2xl"
                                        data-oid="um9jsm:"
                                    >
                                        {' '}
                                        20+{' '}
                                    </span>{' '}
                                    <p className="text-gray-400 text-sm" data-oid="7xhnsx2">
                                        {' '}
                                        Projects Completed{' '}
                                    </p>{' '}
                                </div>{' '}
                                <div
                                    className="bg-gray-900/50 backdrop-blur-sm px-4 py-2 rounded-md"
                                    data-oid="4omrd1."
                                >
                                    {' '}
                                    <span
                                        className="text-blue-400 font-bold text-2xl"
                                        data-oid="asrc0fw"
                                    >
                                        {' '}
                                        15+{' '}
                                    </span>{' '}
                                    <p className="text-gray-400 text-sm" data-oid="5w7c2v9">
                                        {' '}
                                        Happy Clients{' '}
                                    </p>{' '}
                                </div>{' '}
                                <div
                                    className="bg-gray-900/50 backdrop-blur-sm px-4 py-2 rounded-md"
                                    data-oid="7tezmx3"
                                >
                                    {' '}
                                    <span
                                        className="text-blue-400 font-bold text-2xl"
                                        data-oid="mai7-6c"
                                    >
                                        {' '}
                                        1+{' '}
                                    </span>{' '}
                                    <p className="text-gray-400 text-sm" data-oid="jj_9_sj">
                                        {' '}
                                        Years Experience{' '}
                                    </p>{' '}
                                </div>{' '}
                            </div>{' '}
                        </div>{' '}
                        <div className="relative" data-oid="xwrvo1p">
                            {' '}
                            <div
                                className="bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-lg p-1"
                                data-oid="379ndc_"
                            >
                                {' '}
                                <div className="bg-black rounded-lg p-8" data-oid="hlmmsqc">
                                    {' '}
                                    <div className="grid grid-cols-2 gap-6" data-oid="kgj94j.">
                                        {' '}
                                        <div className="space-y-6" data-oid="ubz:uke">
                                            {' '}
                                            <div
                                                className="bg-gray-900 p-4 rounded-lg"
                                                data-oid="u1i3g5g"
                                            >
                                                {' '}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-8 w-8 text-blue-400 mb-2"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="8.110yr"
                                                >
                                                    {' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1.5}
                                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                        data-oid="h8engts"
                                                    />{' '}
                                                </svg>{' '}
                                                <h3 className="font-medium mb-1" data-oid=":ub7isu">
                                                    {' '}
                                                    Reliable{' '}
                                                </h3>{' '}
                                                <p
                                                    className="text-gray-400 text-sm"
                                                    data-oid="4edrjls"
                                                >
                                                    {' '}
                                                    We Deliver on our Promises{' '}
                                                </p>{' '}
                                            </div>{' '}
                                            <div
                                                className="bg-gray-900 p-4 rounded-lg"
                                                data-oid="azp10x1"
                                            >
                                                {' '}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-8 w-8 text-blue-400 mb-2"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="ucpc4cd"
                                                >
                                                    {' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1.5}
                                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                                        data-oid="of0mrhz"
                                                    />{' '}
                                                </svg>{' '}
                                                <h3 className="font-medium mb-1" data-oid="oy7lpm6">
                                                    {' '}
                                                    Innovative{' '}
                                                </h3>{' '}
                                                <p
                                                    className="text-gray-400 text-sm"
                                                    data-oid="wmm_25m"
                                                >
                                                    {' '}
                                                    Cutting-edge Solutions{' '}
                                                </p>{' '}
                                            </div>{' '}
                                        </div>{' '}
                                        <div className="space-y-6 mt-6" data-oid="8uif026">
                                            {' '}
                                            <div
                                                className="bg-gray-900 p-4 rounded-lg"
                                                data-oid="-2tfj3c"
                                            >
                                                {' '}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-8 w-8 text-blue-400 mb-2"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="y8vldk7"
                                                >
                                                    {' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1.5}
                                                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                                                        data-oid="3l2olmm"
                                                    />{' '}
                                                </svg>{' '}
                                                <h3 className="font-medium mb-1" data-oid="e0pwyh2">
                                                    {' '}
                                                    Communicative{' '}
                                                </h3>{' '}
                                                <p
                                                    className="text-gray-400 text-sm"
                                                    data-oid=".u5:-q2"
                                                >
                                                    {' '}
                                                    Clear, Open Dialogue{' '}
                                                </p>{' '}
                                            </div>{' '}
                                            <div
                                                className="bg-gray-900 p-4 rounded-lg"
                                                data-oid="fsrm7fo"
                                            >
                                                {' '}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-8 w-8 text-blue-400 mb-2"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="drouqm3"
                                                >
                                                    {' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1.5}
                                                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                                        data-oid="rkp73kw"
                                                    />{' '}
                                                </svg>{' '}
                                                <h3 className="font-medium mb-1" data-oid="mm4d:p-">
                                                    {' '}
                                                    Quality-Focused{' '}
                                                </h3>{' '}
                                                <p
                                                    className="text-gray-400 text-sm"
                                                    data-oid="rb9w3:4"
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
                    data-oid="5edr.xt"
                ></div>{' '}
            </section>{' '}
            {/* Our Team Section */}{' '}
            <section
                id="team"
                className="py-20 bg-gray-900/80 backdrop-blur-sm relative z-10"
                data-oid="m1scfd:"
            >
                {' '}
                <div className="container mx-auto px-6" data-oid="v.ejbip">
                    {' '}
                    <div className="text-center mb-16" data-oid="h94rz6:">
                        {' '}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="gxte3ng">
                            {' '}
                            Our Team{' '}
                        </h2>{' '}
                        <p className="text-gray-400 max-w-2xl mx-auto" data-oid="f5ap:_4">
                            {' '}
                            Meet the Talented Individuals behind BitHive Technologies{' '}
                        </p>{' '}
                    </div>{' '}
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        data-oid="qw65inj"
                    >
                        {' '}
                        {/* Team Member 1 */}{' '}
                        <div
                            className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all group"
                            data-oid="2.uiqs1"
                        >
                            {' '}
                            <div className="mb-4 overflow-hidden rounded-lg" data-oid="kare:xz">
                                {' '}
                                <div
                                    className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center"
                                    data-oid="em-emoy"
                                >
                                    <img
                                        src="/images/AyushSrivastav.png"
                                        alt="Ayush Srivastava"
                                        className="h-full w-full rounded-lg object-cover"
                                        data-oid="9u231oc"
                                    />
                                </div>{' '}
                            </div>{' '}
                            <h3 className="text-xl font-semibold mb-1" data-oid="bz-xb2q">
                                Ayush Srivastava
                            </h3>{' '}
                            <p className="text-blue-400 mb-2" data-oid="29_cs9p">
                                Co-Founder & CTO
                            </p>{' '}
                            <p className="text-gray-400 text-sm" data-oid="o.b5ohg">
                                {' '}
                                <a
                                    href="mailto:ayushsrivastava@bithive.in"
                                    className="hover:text-blue-400 transition-colors"
                                    data-oid="jv83c5-"
                                >
                                    {' '}
                                    ayushsrivastava@bithive.in{' '}
                                </a>{' '}
                            </p>{' '}
                        </div>{' '}
                        {/* Team Member 2 */}{' '}
                        <div
                            className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all group"
                            data-oid="kobp_.m"
                        >
                            {' '}
                            <div className="mb-4 overflow-hidden rounded-lg" data-oid="a-_1kyy">
                                {' '}
                                <div
                                    className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center"
                                    data-oid="csk-qe6"
                                >
                                    <img
                                        src="/images/Saurabh.jpeg"
                                        alt="Saurabh Singh"
                                        className="h-full w-full rounded-lg object-cover"
                                        data-oid="qpw3134"
                                    />
                                </div>{' '}
                            </div>{' '}
                            <h3 className="text-xl font-semibold mb-1" data-oid="ktzdg11">
                                Saurabh Singh
                            </h3>{' '}
                            <p className="text-blue-400 mb-2" data-oid="d5mq4.t">
                                Co-Founder & Tech Lead
                            </p>{' '}
                            <p className="text-gray-400 text-sm" data-oid=":n5111-">
                                {' '}
                                <a
                                    href="mailto:saurabhsingh@bithive.in"
                                    className="hover:text-blue-400 transition-colors"
                                    data-oid=":xkxgxj"
                                >
                                    {' '}
                                    saurabhsingh@bithive.in{' '}
                                </a>{' '}
                            </p>{' '}
                        </div>{' '}
                        {/* Team Member 3 */}{' '}
                        <div
                            className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all group"
                            data-oid="7xz4_tb"
                        >
                            {' '}
                            <div className="mb-4 overflow-hidden rounded-lg" data-oid="mp:u:as">
                                {' '}
                                <div
                                    className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center"
                                    data-oid="2cqr2cp"
                                >
                                    <img
                                        src="/images/AyushKumar.jpeg"
                                        alt="Ayush Srivastava"
                                        className="h-full w-full rounded-lg object-cover"
                                        data-oid="j9uitfd"
                                    />
                                </div>{' '}
                            </div>{' '}
                            <h3 className="text-xl font-semibold mb-1" data-oid="9-fcf7v">
                                Ayush Kumar
                            </h3>{' '}
                            <p className="text-blue-400 mb-2" data-oid="yeucpt4">
                                CMO/CSO
                            </p>{' '}
                            <p className="text-gray-400 text-sm" data-oid="jdd59gd">
                                {' '}
                                <a
                                    href="mailto:ayushkumar@bithive.in"
                                    className="hover:text-blue-400 transition-colors"
                                    data-oid="7.gasop"
                                >
                                    {' '}
                                    ayushkumar@bithive.in{' '}
                                </a>{' '}
                            </p>{' '}
                        </div>{' '}
                        {/* Team Member 4 */}{' '}
                        <div
                            className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all group"
                            data-oid=".6qpqq4"
                        >
                            {' '}
                            <div className="mb-4 overflow-hidden rounded-lg" data-oid="objcb14">
                                {' '}
                                <div
                                    className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center"
                                    data-oid="qzj-4vn"
                                >
                                    <img
                                        src="/images/Priyansh.jpeg"
                                        alt="Priyansh Kandwal"
                                        className="h-full w-full rounded-lg object-cover"
                                        data-oid="sb0azj3"
                                    />
                                </div>{' '}
                            </div>{' '}
                            <h3 className="text-xl font-semibold mb-1" data-oid="0:wecul">
                                Priyansh Kandwal
                            </h3>{' '}
                            <p className="text-blue-400 mb-2" data-oid="edbqokx">
                                COO & Team Lead
                            </p>{' '}
                            <p className="text-gray-400 text-sm" data-oid="dm8:5wq">
                                {' '}
                                <a
                                    href="mailto:priyanshkandwal@bithive.in"
                                    className="hover:text-blue-400 transition-colors"
                                    data-oid="vp7w26l"
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
                data-oid="3m7hfm2"
            >
                {' '}
                <div className="container mx-auto px-6 text-center" data-oid="ypgary5">
                    {' '}
                    <h2 className="text-3xl md:text-4xl font-bold mb-6" data-oid="3l8e0-5">
                        {' '}
                        Ready to Transform Your Digital Presence?{' '}
                    </h2>{' '}
                    <p className="text-gray-300 max-w-2xl mx-auto mb-10" data-oid="ekhoo19">
                        {' '}
                        Let's Collaborate to Create Innovative Solutions that drive your Business
                        forward. Get in Touch today to discuss your Project.{' '}
                    </p>{' '}
                    <a
                        href="#contact"
                        className="px-8 py-4 bg-gradient-to-r from-blue-500 to-violet-600 rounded-md text-white font-medium hover:from-blue-600 hover:to-violet-700 transition-all shadow-lg shadow-blue-500/20 inline-block"
                        data-oid="g9d45:a"
                    >
                        {' '}
                        Let's Buzz{' '}
                    </a>{' '}
                </div>{' '}
            </section>{' '}
            {/* Contact Section */}{' '}
            <section id="contact" className="py-16 pb-12 bg-black relative z-10" data-oid="_wp0oxa">
                {' '}
                <div className="container mx-auto px-6 max-w-6xl" data-oid="_h5-5zg">
                    {' '}
                    <div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                        data-oid=":yy2s74"
                    >
                        {' '}
                        <div className="mx-auto w-full" data-oid="9wysnke">
                            {' '}
                            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="d5cb-yu">
                                {' '}
                                Get In Touch{' '}
                            </h2>{' '}
                            <p className="text-gray-300 mb-6" data-oid="voo7_zq">
                                {' '}
                                Have a Project in mind or want to learn more about our Services?
                                Fill out the Form and We'll get back to you as soon as
                                possible.{' '}
                            </p>{' '}
                            <div className="space-y-4" data-oid="vjtrv3_">
                                {' '}
                                <div className="flex items-start" data-oid="4.70r1l">
                                    {' '}
                                    <div
                                        className="bg-gray-900 p-3 rounded-lg mr-4"
                                        data-oid="m63z52h"
                                    >
                                        {' '}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-blue-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid=".wblqrq"
                                        >
                                            {' '}
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                data-oid="qcs02ov"
                                            />{' '}
                                        </svg>{' '}
                                    </div>{' '}
                                    <div data-oid="mh34u7-">
                                        {' '}
                                        <h3 className="font-medium mb-1" data-oid="l7ukb:u">
                                            {' '}
                                            Email{' '}
                                        </h3>{' '}
                                        <p className="text-gray-400" data-oid="zo6-vjv">
                                            {' '}
                                            buzz@bithive.in{' '}
                                        </p>{' '}
                                    </div>{' '}
                                </div>{' '}
                                <div className="flex items-start" data-oid="j1ka8ei">
                                    {' '}
                                    <div
                                        className="bg-gray-900 p-3 rounded-lg mr-4"
                                        data-oid="bzgarso"
                                    >
                                        {' '}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-blue-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="grrsjlm"
                                        >
                                            {' '}
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                data-oid="uz31hv6"
                                            />{' '}
                                        </svg>{' '}
                                    </div>{' '}
                                    <div data-oid="zez0iaj">
                                        {' '}
                                        <h3 className="font-medium mb-1" data-oid="7oaaq5t">
                                            {' '}
                                            Phone{' '}
                                        </h3>{' '}
                                        <p className="text-gray-400" data-oid="iamh4ml">
                                            {' '}
                                            +91 7070030645 , +91 9369450531{' '}
                                        </p>{' '}
                                    </div>{' '}
                                </div>{' '}
                                <div className="flex items-start" data-oid="x7rlu-3">
                                    {' '}
                                    <div
                                        className="bg-gray-900 p-3 rounded-lg mr-4"
                                        data-oid="7ew-b.l"
                                    >
                                        {' '}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-blue-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="c2_9zme"
                                        >
                                            {' '}
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                data-oid=".c.4.qk"
                                            />{' '}
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                data-oid="budb4w7"
                                            />{' '}
                                        </svg>{' '}
                                    </div>{' '}
                                    <div data-oid="2qk9h3x">
                                        {' '}
                                        <h3 className="font-medium mb-1" data-oid="78scr1w">
                                            {' '}
                                            Head Office{' '}
                                        </h3>{' '}
                                        <p className="text-gray-400" data-oid="b1xqtm8">
                                            {' '}
                                            Gurugram, Haryana, India{' '}
                                        </p>{' '}
                                    </div>{' '}
                                </div>{' '}
                                <div className="flex items-start" data-oid="0bfdxi.">
                                    {' '}
                                    <div
                                        className="bg-gray-900 p-3 rounded-lg mr-4"
                                        data-oid="l.7ob4t"
                                    >
                                        {' '}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-blue-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="k2k5968"
                                        >
                                            {' '}
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                data-oid="tn:q9d9"
                                            />{' '}
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                data-oid="po85-hq"
                                            />{' '}
                                        </svg>{' '}
                                    </div>{' '}
                                    <div data-oid="djw:qoj">
                                        {' '}
                                        <h3 className="font-medium mb-1" data-oid="njhglrt">
                                            {' '}
                                            Sub Office{' '}
                                        </h3>{' '}
                                        <p className="text-gray-400" data-oid="p95le0d">
                                            {' '}
                                            Dehradun, Uttarakhand, India{' '}
                                        </p>{' '}
                                    </div>{' '}
                                </div>{' '}
                            </div>{' '}
                        </div>{' '}
                        <div
                            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg mx-auto w-full"
                            data-oid="xua9g2l"
                        >
                            {' '}
                            <form data-oid="8jafwx7">
                                {' '}
                                <div
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4"
                                    data-oid="93vcfn6"
                                >
                                    {' '}
                                    <div data-oid="lk1q2h9">
                                        {' '}
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-400 mb-2"
                                            data-oid="48tban8"
                                        >
                                            {' '}
                                            Name{' '}
                                        </label>{' '}
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full bg-black border border-gray-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Your name"
                                            data-oid="rtzlwke"
                                        />{' '}
                                    </div>{' '}
                                    <div data-oid="i5-rgc4">
                                        {' '}
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-400 mb-2"
                                            data-oid="039n-3g"
                                        >
                                            {' '}
                                            Email{' '}
                                        </label>{' '}
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full bg-black border border-gray-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Your email"
                                            data-oid="6j78oan"
                                        />{' '}
                                    </div>{' '}
                                </div>{' '}
                                <div className="mb-4" data-oid="y88it2k">
                                    {' '}
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm font-medium text-gray-400 mb-2"
                                        data-oid="73wv_ib"
                                    >
                                        {' '}
                                        Subject{' '}
                                    </label>{' '}
                                    <input
                                        type="text"
                                        id="subject"
                                        className="w-full bg-black border border-gray-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Subject"
                                        data-oid="yeajkjj"
                                    />{' '}
                                </div>{' '}
                                <div className="mb-4" data-oid="psn6dxj">
                                    {' '}
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-400 mb-2"
                                        data-oid="wdkks0b"
                                    >
                                        {' '}
                                        Message{' '}
                                    </label>{' '}
                                    <textarea
                                        id="message"
                                        rows={5}
                                        className="w-full bg-black border border-gray-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Your message"
                                        data-oid="rpfehr9"
                                    ></textarea>{' '}
                                </div>{' '}
                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-violet-600 rounded-md text-white font-medium hover:from-blue-600 hover:to-violet-700 transition-all shadow-lg shadow-blue-500/20"
                                    data-oid="8wimqm4"
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
                data-oid="wxhbid8"
            >
                {' '}
                <div className="container mx-auto px-6 py-12" data-oid="8mnte.i">
                    {' '}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-oid="2ywa987">
                        {' '}
                        <div className="md:col-span-1" data-oid="tkv59e6">
                            {' '}
                            <div className="mb-6" data-oid="e9jn7dx">
                                {' '}
                                <img
                                    src="/images/PHOTO-2025-03-28-20-01-27.jpg"
                                    alt="BitHive Technologies Logo"
                                    className="h-16 w-auto rounded-md object-contain"
                                    data-oid="q4ndbf:"
                                />{' '}
                            </div>{' '}
                            <p className="text-gray-400 mb-6" data-oid="ofa:uh9">
                                {' '}
                                Creating Buzz in Digital Experiences !{' '}
                            </p>{' '}
                            <div className="flex space-x-4" data-oid="oq.y_3y">
                                {' '}
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-blue-400 transition-colors"
                                    data-oid="x4bd8.9"
                                >
                                    {' '}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="0_d-ye7"
                                    >
                                        {' '}
                                        <path
                                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                                            data-oid="g:b6q4h"
                                        />{' '}
                                    </svg>{' '}
                                </a>{' '}
                                <a
                                    href="linkedin.com/company/bithive-technology "
                                    className="text-gray-400 hover:text-blue-400 transition-colors"
                                    data-oid="-d49dbp"
                                >
                                    {' '}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="v4s22r0"
                                    >
                                        {' '}
                                        <path
                                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                            data-oid="4szk3gu"
                                        />{' '}
                                    </svg>{' '}
                                </a>{' '}
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-blue-400 transition-colors"
                                    data-oid="gepm0bd"
                                >
                                    {' '}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="-w-nxcc"
                                    >
                                        {' '}
                                        <path
                                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                            data-oid="4gxp7-p"
                                        />{' '}
                                    </svg>{' '}
                                </a>{' '}
                            </div>{' '}
                        </div>{' '}
                        <div data-oid="ehoe_cs">
                            {' '}
                            <h3 className="text-lg font-semibold mb-4" data-oid="4gqlr7_">
                                {' '}
                                Services{' '}
                            </h3>{' '}
                            <ul className="space-y-2" data-oid="zmms1w9">
                                {' '}
                                <li data-oid="vuwm5ce" className="text-gray-400">
                                    {' '}
                                    Website Development{' '}
                                </li>{' '}
                                <li data-oid="lxxeiis" className="text-gray-400">
                                    {' '}
                                    Mobile App Development{' '}
                                </li>{' '}
                                <li data-oid="ztkpwt6" className="text-gray-400">
                                    {' '}
                                    UI/UX Design{' '}
                                </li>{' '}
                                <li data-oid="5d.r-in" className="text-gray-400">
                                    {' '}
                                    Product Design{' '}
                                </li>{' '}
                                <li data-oid="pk85kbi" className="text-gray-400">
                                    {' '}
                                    Digital Strategy{' '}
                                </li>{' '}
                            </ul>{' '}
                        </div>{' '}
                        <div data-oid="j_e6kao">
                            {' '}
                            <h3 className="text-lg font-semibold mb-4" data-oid="6fuhfhi">
                                {' '}
                                Company{' '}
                            </h3>{' '}
                            <ul className="space-y-2" data-oid="_9:yjxj">
                                {' '}
                                <li data-oid="40289z0">
                                    {' '}
                                    <a
                                        href="#about"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        data-oid="nnnwh9k"
                                    >
                                        {' '}
                                        About Us{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="5cpcmb8">
                                    {' '}
                                    <a
                                        href="#portfolio"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        data-oid=".eq-sdj"
                                    >
                                        {' '}
                                        Portfolio{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="0za-9h3">
                                    {' '}
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        data-oid="qdbg19l"
                                    >
                                        {' '}
                                        Careers{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="8a_tt94">
                                    {' '}
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        data-oid="fw5lx34"
                                    >
                                        {' '}
                                        Blog{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="wt-5ve3">
                                    {' '}
                                    <a
                                        href="#contact"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        data-oid="sld385q"
                                    >
                                        {' '}
                                        Contact{' '}
                                    </a>{' '}
                                </li>{' '}
                            </ul>{' '}
                        </div>{' '}
                        <div data-oid="00hdgos">
                            {' '}
                            <h3 className="text-lg font-semibold mb-4" data-oid="99cr0ce">
                                {' '}
                                Legal{' '}
                            </h3>{' '}
                            <ul className="space-y-2" data-oid="peg0__1">
                                {' '}
                                <li data-oid="frha9-j">
                                    {' '}
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        data-oid="jpj8gsm"
                                    >
                                        {' '}
                                        Privacy Policy{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="fdcwkrq">
                                    {' '}
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        data-oid="4tnsucl"
                                    >
                                        {' '}
                                        Terms of Service{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="ktp-75y">
                                    {' '}
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        data-oid="8cx1u-k"
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
                        data-oid="-3y.u4w"
                    >
                        {' '}
                        <p className="text-gray-500 text-sm" data-oid="l7v2--.">
                            {' '}
                            &copy; {new Date().getFullYear()} BitHive Technologies. All rights
                            Reserved.{' '}
                        </p>{' '}
                        <p className="text-gray-500 text-sm mt-4 md:mt-0" data-oid="74l95gh">
                            {' '}
                            Built with ❤️ by BitHive Technologies{' '}
                        </p>{' '}
                    </div>{' '}
                </div>{' '}
            </footer>{' '}
        </div>
    );
}
