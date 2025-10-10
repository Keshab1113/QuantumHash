 

// import React, { useEffect, useRef } from 'react';

// const AHoleEffect = () => {
//     const particleCanvasRef = useRef(null);
//     const containerRef = useRef(null);
//     const particleAnimationRef = useRef(null);

//     // Particle Animation Effect
//     useEffect(() => {
//         const canvas = particleCanvasRef.current;
//         if (!canvas) return;

//         const ctx = canvas.getContext('2d');
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;

//         const mouse = { x: canvas.width / 2, y: canvas.height / 2 };
//         let time = 0;

//         class Particle {
//           constructor() {
//                 this.x = Math.random() * canvas.width;
//                 this.y = Math.random() * canvas.height;
//                 this.vx = (Math.random() - 0.5) * 0.2;
//                 this.vy = (Math.random() - 0.5) * 0.2;
//                 this.radius = Math.random() * 4 + 3;
//                 this.opacity = Math.random() * 0.5 + 0.6;
//                 this.pulseOffset = Math.random() * Math.PI * 2;
//                 const colors = [
//                     'rgba(168, 85, 247, ',
//                     'rgba(236, 72, 153, ',
//                     'rgba(34, 211, 238, ',
//                     'rgba(251, 146, 60, '
//                 ];
//                 this.color = colors[Math.floor(Math.random() * colors.length)];
//             }

//             update() {
//                 // Add constant directional force to keep moving
//                 this.vx += (Math.random() - 0.5) * 0.1;
//                 this.vy += (Math.random() - 0.5) * 0.1;
                
//                 // Limit max speed
//                 const maxSpeed = 1;
//                 const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
//                 if (speed > maxSpeed) {
//                     this.vx = (this.vx / speed) * maxSpeed;
//                     this.vy = (this.vy / speed) * maxSpeed;
//                 }
                
//                 // Add minimum speed to ensure constant movement
//                 const minSpeed = 1;
//                 if (speed < minSpeed && speed > 0) {
//                     this.vx = (this.vx / speed) * minSpeed;
//                     this.vy = (this.vy / speed) * minSpeed;
//                 }

//                 // Mouse interaction
//                 const dx = mouse.x - this.x;
//                 const dy = mouse.y - this.y;
//                 const distance = Math.sqrt(dx * dx + dy * dy);
                
//                 if (distance < 180) {
//                     const force = (180 - distance) / 180;
//                     const angle = Math.atan2(dy, dx);
//                     this.vx -= Math.cos(angle) * force * 0.2;
//                     this.vy -= Math.sin(angle) * force * 0.2;
//                 }

//                 this.x += this.vx;
//                 this.y += this.vy;

//                 // Wrap around edges
//                 if (this.x < -10) this.x = canvas.width + 10;
//                 if (this.x > canvas.width + 10) this.x = -10;
//                 if (this.y < -10) this.y = canvas.height + 10;
//                 if (this.y > canvas.height + 10) this.y = -10;

//                 // Smooth pulsing
//                 this.currentOpacity = this.opacity + Math.sin(time * 0.03 + this.pulseOffset) * 0.2;
//                 this.currentRadius = this.radius + Math.sin(time * 0.025 + this.pulseOffset) * 0.5;
//             }

//             draw() {
//                 // Brighter glow
//                 ctx.shadowBlur = 20;
//                 ctx.shadowColor = this.color + '0.8)';
//                 ctx.beginPath();
//                 ctx.arc(this.x, this.y, this.currentRadius, 0, Math.PI * 2);
//                 ctx.fillStyle = this.color + this.currentOpacity + ')';
//                 ctx.fill();
//                 ctx.shadowBlur = 0;
//             }
//         }

//         class ConnectionLine {
//             constructor(p1, p2, distance, maxDistance) {
//                 this.p1 = p1;
//                 this.p2 = p2;
//                 this.distance = distance;
//                 this.maxDistance = maxDistance;
//             }

//             draw() {
//                 const opacity = (1 - this.distance / this.maxDistance) * 0.3;
//                 ctx.beginPath();
//                 ctx.strokeStyle = this.p1.color + opacity + ')';
//                 ctx.lineWidth = 0.8;
//                 ctx.moveTo(this.p1.x, this.p1.y);
//                 ctx.lineTo(this.p2.x, this.p2.y);
//                 ctx.stroke();
//             }
//         }

//         const particles = Array.from({ length: 100 }, () => new Particle());

//         const animateParticles = () => {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);
//             time++;

//             particles.forEach(particle => {
//                 particle.update();
//                 particle.draw();
//             });

//             // Only draw connections for nearby particles
//             const maxDistance = 150;
//             for (let i = 0; i < particles.length; i++) {
//                 for (let j = i + 1; j < particles.length; j++) {
//                     const dx = particles[i].x - particles[j].x;
//                     const dy = particles[i].y - particles[j].y;
//                     const distance = Math.sqrt(dx * dx + dy * dy);

//                     if (distance < maxDistance) {
//                         new ConnectionLine(particles[i], particles[j], distance, maxDistance).draw();
//                     }
//                 }
//             }

//             particleAnimationRef.current = requestAnimationFrame(animateParticles);
//         };

//         animateParticles();

//         const handleParticleResize = () => {
//             canvas.width = window.innerWidth;
//             canvas.height = window.innerHeight;
//         };

//         const handleMouseMove = (e) => {
//             mouse.x = e.clientX;
//             mouse.y = e.clientY;
//         };

//         window.addEventListener('resize', handleParticleResize);
//         window.addEventListener('mousemove', handleMouseMove);

//         return () => {
//             cancelAnimationFrame(particleAnimationRef.current);
//             window.removeEventListener('resize', handleParticleResize);
//             window.removeEventListener('mousemove', handleMouseMove);
//         };
//     }, []);

//     return (
//         <div ref={containerRef} style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             background: 'linear-gradient(135deg, #0a0118 0%, #1a0b2e 50%, #0f051d 100%)',
//             margin: 0,
//             padding: 0,
//             width: '100%',
//             height: '100vh',
//             overflow: 'hidden'
//         }}>
//             <canvas 
//                 ref={particleCanvasRef} 
//                 style={{ 
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     display: 'block', 
//                     width: '100%', 
//                     height: '100vh',
//                     zIndex: 1
//                 }}
//             />
            
//             {/* Lighter ambient effects */}
//             <div style={{
//                 position: 'absolute',
//                 top: '15%',
//                 left: '10%',
//                 width: '400px',
//                 height: '400px',
//                 background: 'radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, transparent 70%)',
//                 filter: 'blur(50px)',
//                 zIndex: 0,
//                 animation: 'float 15s ease-in-out infinite',
//                 pointerEvents: 'none'
//             }} />
            
//             <div style={{
//                 position: 'absolute',
//                 bottom: '10%',
//                 right: '15%',
//                 width: '450px',
//                 height: '450px',
//                 background: 'radial-gradient(circle, rgba(236, 72, 153, 0.06) 0%, transparent 70%)',
//                 filter: 'blur(60px)',
//                 zIndex: 0,
//                 animation: 'float 18s ease-in-out infinite reverse',
//                 pointerEvents: 'none'
//             }} />
            
//             <style>{`
//                 @keyframes float {
//                     0%, 100% { transform: translate(0, 0); }
//                     50% { transform: translate(20px, -20px); }
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default AHoleEffect;


import React, { useEffect, useRef } from 'react';

const AHoleEffect = () => {
    const particleCanvasRef = useRef(null);
    const containerRef = useRef(null);
    const particleAnimationRef = useRef(null);

    // Particle Animation Effect
    useEffect(() => {
        const canvas = particleCanvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const mouse = { x: canvas.width / 2, y: canvas.height / 2 };
        let time = 0;
        
        // Detect mobile devices
        const isMobile = window.innerWidth <= 768;
        const particleCount = isMobile ? 40 : 100;
        const speedMultiplier = isMobile ? 0.4 : 1;

        class Particle {
          constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.2 * speedMultiplier;
                this.vy = (Math.random() - 0.5) * 0.2 * speedMultiplier;
                this.radius = Math.random() * (isMobile ? 3 : 4) + (isMobile ? 2 : 3);
                this.opacity = Math.random() * 0.5 + 0.6;
                this.pulseOffset = Math.random() * Math.PI * 2;
                const colors = [
                    'rgba(168, 85, 247, ',
                    'rgba(236, 72, 153, ',
                    'rgba(34, 211, 238, ',
                    'rgba(251, 146, 60, '
                ];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                // Add constant directional force to keep moving
                this.vx += (Math.random() - 0.5) * 0.1 * speedMultiplier;
                this.vy += (Math.random() - 0.5) * 0.1 * speedMultiplier;
                
                // Limit max speed
                const maxSpeed = isMobile ? 0.5 : 1;
                const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
                if (speed > maxSpeed) {
                    this.vx = (this.vx / speed) * maxSpeed;
                    this.vy = (this.vy / speed) * maxSpeed;
                }
                
                // Add minimum speed to ensure constant movement
                const minSpeed = isMobile ? 0.3 : 1;
                if (speed < minSpeed && speed > 0) {
                    this.vx = (this.vx / speed) * minSpeed;
                    this.vy = (this.vy / speed) * minSpeed;
                }

                // Mouse interaction (disabled on mobile)
                if (!isMobile) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 180) {
                        const force = (180 - distance) / 180;
                        const angle = Math.atan2(dy, dx);
                        this.vx -= Math.cos(angle) * force * 0.2;
                        this.vy -= Math.sin(angle) * force * 0.2;
                    }
                }

                this.x += this.vx;
                this.y += this.vy;

                // Wrap around edges
                if (this.x < -10) this.x = canvas.width + 10;
                if (this.x > canvas.width + 10) this.x = -10;
                if (this.y < -10) this.y = canvas.height + 10;
                if (this.y > canvas.height + 10) this.y = -10;

                // Smooth pulsing
                this.currentOpacity = this.opacity + Math.sin(time * 0.03 + this.pulseOffset) * 0.2;
                this.currentRadius = this.radius + Math.sin(time * 0.025 + this.pulseOffset) * 0.5;
            }

            draw() {
                // Brighter glow (reduced on mobile for performance)
                ctx.shadowBlur = isMobile ? 10 : 20;
                ctx.shadowColor = this.color + '0.8)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.currentRadius, 0, Math.PI * 2);
                ctx.fillStyle = this.color + this.currentOpacity + ')';
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }

        class ConnectionLine {
            constructor(p1, p2, distance, maxDistance) {
                this.p1 = p1;
                this.p2 = p2;
                this.distance = distance;
                this.maxDistance = maxDistance;
            }

            draw() {
                const opacity = (1 - this.distance / this.maxDistance) * 0.3;
                ctx.beginPath();
                ctx.strokeStyle = this.p1.color + opacity + ')';
                ctx.lineWidth = 0.8;
                ctx.moveTo(this.p1.x, this.p1.y);
                ctx.lineTo(this.p2.x, this.p2.y);
                ctx.stroke();
            }
        }

        const particles = Array.from({ length: particleCount }, () => new Particle());

        const animateParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            time++;

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Only draw connections for nearby particles
            const maxDistance = isMobile ? 120 : 150;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        new ConnectionLine(particles[i], particles[j], distance, maxDistance).draw();
                    }
                }
            }

            particleAnimationRef.current = requestAnimationFrame(animateParticles);
        };

        animateParticles();

        const handleParticleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener('resize', handleParticleResize);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            cancelAnimationFrame(particleAnimationRef.current);
            window.removeEventListener('resize', handleParticleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div ref={containerRef} style={{
            position: 'absolute',
            top: 0,
            left: 0,
            background: 'linear-gradient(135deg, #0a0118 0%, #1a0b2e 50%, #0f051d 100%)',
            margin: 0,
            padding: 0,
            width: '100%',
            height: '100vh',
            overflow: 'hidden'
        }}>
            <canvas 
                ref={particleCanvasRef} 
                style={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    display: 'block', 
                    width: '100%', 
                    height: '100vh',
                    zIndex: 1
                }}
            />
            
            {/* Lighter ambient effects */}
            <div style={{
                position: 'absolute',
                top: '15%',
                left: '10%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, transparent 70%)',
                filter: 'blur(50px)',
                zIndex: 0,
                animation: 'float 15s ease-in-out infinite',
                pointerEvents: 'none'
            }} />
            
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '15%',
                width: '450px',
                height: '450px',
                background: 'radial-gradient(circle, rgba(236, 72, 153, 0.06) 0%, transparent 70%)',
                filter: 'blur(60px)',
                zIndex: 0,
                animation: 'float 18s ease-in-out infinite reverse',
                pointerEvents: 'none'
            }} />
            
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(20px, -20px); }
                }
            `}</style>
        </div>
    );
};

export default AHoleEffect;