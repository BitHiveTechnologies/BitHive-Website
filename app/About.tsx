'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function About() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [subject, setSubject] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    subject,
                    message,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            // Show success animation instead of alert
            setSuccess(true);

            // Reset form
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');

            // Hide success message after 5 seconds
            setTimeout(() => {
                setSuccess(false);
            }, 5000);
        } catch (error: any) {
            console.error('Error:', error);
            alert(error.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };
    return (
        <section id="contact" className="py-16 pb-12 bg-black relative z-10" data-oid="t-qfguo">
            <div className="container mx-auto px-6 max-w-6xl" data-oid="r81cbvg">
                <div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                    data-oid="u0eqqex"
                >
                    <div className="mx-auto w-full" data-oid="v1qha8-">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="30s28gd">
                            Get In Touch
                        </h2>
                        <p className="text-gray-300 mb-6" data-oid="_m:u.0e">
                            Have a project in mind or want to learn more about our services? Fill
                            out the form and we'll get back to you as soon as possible.
                        </p>
                        <div className="space-y-4" data-oid="t65gk9u">
                            <ContactItem
                                title="Email"
                                description="buzz@bithive.in"
                                iconPath="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                data-oid="3a49dwx"
                            />

                            <ContactItem
                                title="Phone"
                                description="+91 7070030645 , +91 9369450531"
                                iconPath="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                data-oid="e2ecvei"
                            />

                            <ContactItem
                                title="Head Office"
                                description="Gurugram, Haryana, India"
                                iconPath="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                data-oid="l4epqvl"
                            />

                            <ContactItem
                                title="Sub Office"
                                description="Dehradun, Uttarakhand, India"
                                iconPath="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                data-oid="v:np_0w"
                            />
                        </div>
                    </div>

                    <div
                        className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg mx-auto w-full"
                        data-oid="ct_glrd"
                    >
                        <form onSubmit={handleSubmit} data-oid="r2149q2">
                            <div
                                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4"
                                data-oid="h9g7ebz"
                            >
                                <InputField
                                    label="Name"
                                    value={name}
                                    onChange={(e: {
                                        target: { value: React.SetStateAction<string> };
                                    }) => setName(e.target.value)}
                                    required
                                    data-oid="07eza.."
                                />

                                <InputField
                                    label="Email"
                                    type="email"
                                    value={email}
                                    onChange={(e: {
                                        target: { value: React.SetStateAction<string> };
                                    }) => setEmail(e.target.value)}
                                    required
                                    data-oid="ubplvnf"
                                />
                            </div>
                            <InputField
                                label="Subject"
                                value={subject}
                                onChange={(e: {
                                    target: { value: React.SetStateAction<string> };
                                }) => setSubject(e.target.value)}
                                required
                                data-oid="hy2tdob"
                            />

                            <div className="mb-4 mt-4" data-oid="vt-tyxg">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-400 mb-2"
                                    data-oid="64_d-eu"
                                >
                                    Message{' '}
                                    <span className="text-red-500" data-oid="cn8yg1a">
                                        *
                                    </span>
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full bg-black border border-gray-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    data-oid="_rwh637"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-violet-600 rounded-md text-white font-medium hover:from-blue-600 hover:to-violet-700 transition-all shadow-lg shadow-blue-500/20"
                                data-oid="cco8fqo"
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Success Animation */}
            <AnimatePresence data-oid="s9xnrp_">
                {success && (
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSuccess(false)}
                        data-oid="2j0eham"
                    >
                        <motion.div
                            className="bg-gray-900 p-8 rounded-xl shadow-2xl flex flex-col items-center max-w-md mx-4"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            data-oid="mifgb2d"
                        >
                            <div
                                className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center mb-6"
                                data-oid="naijcia"
                            >
                                <motion.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-12 w-12 text-green-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
                                    data-oid="scqs3o3"
                                >
                                    <motion.path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
                                        data-oid="acbjj9q"
                                    />
                                </motion.svg>
                            </div>
                            <motion.h3
                                className="text-2xl font-bold text-white mb-2"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                data-oid="vidf7.f"
                            >
                                Thank you for your response
                            </motion.h3>
                            <motion.p
                                className="text-gray-400 text-center"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                data-oid="ej69bm7"
                            >
                                We've received your message and will get back to you soon.
                            </motion.p>
                            <motion.button
                                className="mt-6 px-6 py-2 bg-gradient-to-r from-blue-500 to-violet-600 rounded-md text-white font-medium hover:from-blue-600 hover:to-violet-700 transition-all"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                onClick={() => setSuccess(false)}
                                data-oid="i10.z3-"
                            >
                                Close
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

// Reusable Input Field component
function InputField({ label, value, onChange, type = 'text', required = false }: any) {
    return (
        <div data-oid="ffh:-zz">
            <label className="block text-sm font-medium text-gray-400 mb-2" data-oid="ztazbyr">
                {label}{' '}
                {required && (
                    <span className="text-red-500" data-oid="rckjc_5">
                        *
                    </span>
                )}
            </label>
            <input
                type={type}
                className="w-full bg-black border border-gray-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={label}
                value={value}
                onChange={onChange}
                required={required}
                data-oid="h87vh:_"
            />
        </div>
    );
}

// Reusable Contact Item component
function ContactItem({ title, description, iconPath }: any) {
    return (
        <div className="flex items-start" data-oid="fqapj0r">
            <div className="bg-gray-900 p-3 rounded-lg mr-4 flex-shrink-0" data-oid="52l4xx6">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    data-oid="a0m53oh"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={iconPath}
                        data-oid="zia_9yo"
                    />
                </svg>
            </div>
            <div data-oid="zr76g2f">
                <h3 className="font-medium mb-1" data-oid="f26f7j-">
                    {title}
                </h3>
                <p className="text-gray-400 text-sm" data-oid="ssnr4:h">
                    {description}
                </p>
            </div>
        </div>
    );
}
