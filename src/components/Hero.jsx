import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: 'var(--header-height)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Glow */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{
                    position: 'absolute',
                    top: '20%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(3, 72, 209, 0.08) 0%, rgba(255,255,255,0) 70%)',
                    filter: 'blur(60px)',
                    zIndex: -1
                }}
            />

            <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                <motion.h1
                    initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        fontSize: '64px',
                        marginBottom: '24px',
                        lineHeight: '1.1',
                        background: 'linear-gradient(180deg, #000C29 0%, #4B5563 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}
                >
                    A simple ecosystem that helps you earn by guiding students.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    style={{ fontSize: '20px', marginBottom: '40px', color: 'var(--text-secondary)' }}
                >
                    Empowering people to earn through education.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}
                >
                    <a href="#early" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '16px' }}>
                        Become a Partner
                    </a>
                    <a href="#how" className="btn btn-secondary" style={{ padding: '16px 32px', fontSize: '16px' }}>
                        How It Works
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
