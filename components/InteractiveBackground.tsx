'use client';
import { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    size: number;
    color: string;
    speedX: number;
    speedY: number;
    life: number;
    maxLife: number;
}

export default function InteractiveBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: 0, y: 0, moved: false });
    const animationFrameRef = useRef<number>(0);

    const colors = [
        'rgba(59, 130, 246, 0.7)', // blue
        'rgba(139, 92, 246, 0.7)', // violet
        'rgba(6, 182, 212, 0.7)', // cyan
        'rgba(16, 185, 129, 0.7)', // emerald
    ];

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas to full window size
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        // Mouse move handler
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;
            mouseRef.current.moved = true;

            // Create particles on mouse move
            createParticles(5);
        };

        // Touch move handler for mobile
        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                mouseRef.current.x = e.touches[0].clientX;
                mouseRef.current.y = e.touches[0].clientY;
                mouseRef.current.moved = true;

                // Create particles on touch move
                createParticles(5);
            }
        };

        // Create particles
        const createParticles = (count: number) => {
            for (let i = 0; i < count; i++) {
                const size = Math.random() * 15 + 5;
                const color = colors[Math.floor(Math.random() * colors.length)];
                const speedX = Math.random() * 4 - 2;
                const speedY = Math.random() * 4 - 2;
                const life = 0;
                const maxLife = Math.random() * 100 + 50;

                particlesRef.current.push({
                    x: mouseRef.current.x,
                    y: mouseRef.current.y,
                    size,
                    color,
                    speedX,
                    speedY,
                    life,
                    maxLife,
                });
            }
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            particlesRef.current.forEach((particle, index) => {
                // Update position
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                // Update life
                particle.life += 1;

                // Calculate opacity based on life
                const opacity = 1 - particle.life / particle.maxLife;

                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = particle.color.replace('0.7', `${opacity}`);
                ctx.fill();

                // Remove dead particles
                if (particle.life >= particle.maxLife) {
                    particlesRef.current.splice(index, 1);
                }
            });

            // Continue animation
            animationFrameRef.current = requestAnimationFrame(animate);
        };

        // Start animation
        animate();

        // Add event listeners
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            cancelAnimationFrame(animationFrameRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
            data-oid="9.cfw9m"
        />
    );
}
