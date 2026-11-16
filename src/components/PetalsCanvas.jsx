import React, { useEffect, useRef } from 'react';
export const PetalsCanvas = () => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas)
            return;
        const ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        let animationFrameId;
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);
        const handleResize = () => {
            if (!canvas)
                return;
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);
        const particles = [];
        const count = Math.min(Math.floor(width / 35), 45);
        const colors = {
            rose: ['#d62828', '#9e0012', '#e63946', '#c1121f'],
            marigold: ['#ffb703', '#fb8500', '#f4a261', '#ffc300'],
            gold: ['#fce08f', '#d4af37', '#e5c158', '#ffffff']
        };
        for (let i = 0; i < count; i++) {
            const typeRand = Math.random();
            const type = typeRand < 0.45 ? 'rose' : typeRand < 0.8 ? 'marigold' : 'gold';
            const palette = colors[type];
            const color = palette[Math.floor(Math.random() * palette.length)];
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                size: type === 'gold' ? Math.random() * 2.5 + 1 : Math.random() * 8 + 6,
                speedY: Math.random() * 0.8 + 0.3,
                speedX: (Math.random() - 0.5) * 0.6,
                angle: Math.random() * Math.PI * 2,
                spin: (Math.random() - 0.5) * 0.03,
                opacity: Math.random() * 0.6 + 0.3,
                color,
                type
            });
        }
        const render = () => {
            ctx.clearRect(0, 0, width, height);
            particles.forEach((p) => {
                p.y += p.speedY;
                p.x += Math.sin(p.y * 0.01) * 0.4 + p.speedX;
                p.angle += p.spin;
                if (p.y > height + 20) {
                    p.y = -20;
                    p.x = Math.random() * width;
                }
                if (p.x < -20)
                    p.x = width + 20;
                if (p.x > width + 20)
                    p.x = -20;
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.angle);
                ctx.globalAlpha = p.opacity;
                if (p.type === 'gold') {
                    // Gold dust sparkle
                    ctx.beginPath();
                    ctx.arc(0, 0, p.size, 0, Math.PI * 2);
                    ctx.fillStyle = p.color;
                    ctx.shadowBlur = 8;
                    ctx.shadowColor = '#d4af37';
                    ctx.fill();
                }
                else {
                    // Petal shape
                    ctx.beginPath();
                    ctx.moveTo(0, -p.size);
                    ctx.bezierCurveTo(p.size * 0.8, -p.size * 0.5, p.size, p.size * 0.5, 0, p.size);
                    ctx.bezierCurveTo(-p.size, p.size * 0.5, -p.size * 0.8, -p.size * 0.5, 0, -p.size);
                    ctx.fillStyle = p.color;
                    ctx.shadowBlur = 4;
                    ctx.shadowColor = p.type === 'marigold' ? '#ff9f1c' : '#800000';
                    ctx.fill();
                }
                ctx.restore();
            });
            animationFrameId = requestAnimationFrame(render);
        };
        render();
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);
    return (<canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-10 opacity-70"/>);
};
