'use client';
import { useEffect, useRef, useState } from 'react';

interface Point {
    x: number;
    y: number;
    vx: number;
    vy: number;
    lastX: number;
    lastY: number;
}

export default function InteractiveBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pointsRef = useRef<Point[]>([]);
    const mouseRef = useRef({ x: 0, y: 0, active: false });
    const animationFrameRef = useRef<number>(0);
    const lastFrameTimeRef = useRef<number>(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if device is mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas to full window size with device pixel ratio for sharpness
        const handleResize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.scale(dpr, dpr);

            // Reset points on resize
            initPoints();
        };

        // Initialize points in a grid pattern
        const initPoints = () => {
            pointsRef.current = [];
            // Increase grid size (fewer points) on mobile
            const gridSize = isMobile ? 150 : 100;
            const jitter = 10; // Random offset for more natural look

            for (let x = gridSize; x < window.innerWidth; x += gridSize) {
                for (let y = gridSize; y < window.innerHeight; y += gridSize) {
                    pointsRef.current.push({
                        x: x + (Math.random() * jitter * 2 - jitter),
                        y: y + (Math.random() * jitter * 2 - jitter),
                        vx: 0,
                        vy: 0,
                        lastX: x,
                        lastY: y,
                    });
                }
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        // Mouse handlers
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;
            mouseRef.current.active = true;
        };

        const handleMouseLeave = () => {
            mouseRef.current.active = false;
        };

        // Touch handlers for mobile - don't prevent default scrolling
        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                mouseRef.current.x = e.touches[0].clientX;
                mouseRef.current.y = e.touches[0].clientY;
                mouseRef.current.active = true;
                // Don't prevent default to allow scrolling
            }
        };

        const handleTouchEnd = () => {
            mouseRef.current.active = false;
        };

        // Animation loop with frame rate control
        const animate = (timestamp: number) => {
            // Throttle frame rate on mobile
            const targetFPS = isMobile ? 30 : 60;
            const frameInterval = 1000 / targetFPS;

            const elapsed = timestamp - lastFrameTimeRef.current;

            if (elapsed > frameInterval) {
                lastFrameTimeRef.current = timestamp - (elapsed % frameInterval);

                ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

                // Draw subtle gradient background
                const gradient = ctx.createLinearGradient(
                    0,
                    0,
                    window.innerWidth,
                    window.innerHeight,
                );
                gradient.addColorStop(0, 'rgba(10, 10, 10, 1)');
                gradient.addColorStop(1, 'rgba(15, 15, 15, 1)');
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

                // Update points
                pointsRef.current.forEach((point) => {
                    // Reset velocity
                    point.vx = 0;
                    point.vy = 0;

                    // Apply force toward original position (spring effect)
                    const dx = point.lastX - point.x;
                    const dy = point.lastY - point.y;
                    point.vx += dx * 0.03;
                    point.vy += dy * 0.03;

                    // Apply mouse interaction if active
                    if (mouseRef.current.active) {
                        const mouseX = mouseRef.current.x;
                        const mouseY = mouseRef.current.y;
                        const distX = mouseX - point.x;
                        const distY = mouseY - point.y;
                        const distance = Math.sqrt(distX * distX + distY * distY);

                        // Push points away from mouse with smooth falloff
                        const interactionRadius = isMobile ? 100 : 150;
                        if (distance < interactionRadius) {
                            const force = (interactionRadius - distance) / interactionRadius;
                            const angle = Math.atan2(distY, distX);
                            point.vx -= Math.cos(angle) * force * 2;
                            point.vy -= Math.sin(angle) * force * 2;
                        }
                    }

                    // Apply velocity with damping
                    point.x += point.vx * 0.9;
                    point.y += point.vy * 0.9;
                });

                // Optimize line drawing - reduce connections on mobile
                const connectionDistance = isMobile ? 100 : 150;

                // Draw connections between nearby points
                ctx.beginPath();
                for (let i = 0; i < pointsRef.current.length; i++) {
                    const pointA = pointsRef.current[i];

                    // On mobile, only check nearby points to reduce calculations
                    const checkLimit = isMobile
                        ? Math.min(10, pointsRef.current.length - i - 1)
                        : pointsRef.current.length - i - 1;

                    for (let j = i + 1; j <= i + checkLimit; j++) {
                        if (j >= pointsRef.current.length) break;

                        const pointB = pointsRef.current[j];
                        const dx = pointA.x - pointB.x;
                        const dy = pointA.y - pointB.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        if (distance < connectionDistance) {
                            // Calculate opacity based on distance
                            const opacity =
                                (1 - distance / connectionDistance) * (isMobile ? 0.1 : 0.15);

                            ctx.moveTo(pointA.x, pointA.y);
                            ctx.lineTo(pointB.x, pointB.y);
                            ctx.strokeStyle = `rgba(100, 149, 237, ${opacity})`;
                            ctx.lineWidth = 0.5;
                        }
                    }
                }
                ctx.stroke();

                // Simplify point rendering on mobile
                pointsRef.current.forEach((point) => {
                    // Determine if point is near mouse
                    let isNearMouse = false;
                    if (mouseRef.current.active) {
                        const dx = mouseRef.current.x - point.x;
                        const dy = mouseRef.current.y - point.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        const interactionRadius = isMobile ? 100 : 150;
                        isNearMouse = distance < interactionRadius;
                    }

                    // Skip glow effect on mobile to improve performance
                    if (isNearMouse && !isMobile) {
                        ctx.beginPath();
                        const gradient = ctx.createRadialGradient(
                            point.x,
                            point.y,
                            0,
                            point.x,
                            point.y,
                            15,
                        );
                        gradient.addColorStop(0, 'rgba(100, 149, 237, 0.3)');
                        gradient.addColorStop(1, 'rgba(100, 149, 237, 0)');
                        ctx.fillStyle = gradient;
                        ctx.arc(point.x, point.y, 15, 0, Math.PI * 2);
                        ctx.fill();
                    }

                    // Draw point
                    ctx.beginPath();
                    ctx.fillStyle = isNearMouse
                        ? 'rgba(100, 149, 237, 0.8)'
                        : 'rgba(100, 149, 237, 0.3)';
                    ctx.arc(point.x, point.y, isNearMouse ? 2 : 1, 0, Math.PI * 2);
                    ctx.fill();
                });
            }

            // Continue animation
            animationFrameRef.current = requestAnimationFrame(animate);
        };

        // Start animation
        lastFrameTimeRef.current = performance.now();
        animationFrameRef.current = requestAnimationFrame(animate);

        // Add event listeners
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('touchmove', handleTouchMove, { passive: true });
        window.addEventListener('touchend', handleTouchEnd);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
            cancelAnimationFrame(animationFrameRef.current);
        };
    }, [isMobile]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        />
    );
}
