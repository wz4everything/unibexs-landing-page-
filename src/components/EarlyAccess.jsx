import React from 'react';
import { motion } from 'framer-motion';

const EarlyAccess = () => {
    const benefits = [
        "Personal partner page",
        "One-to-one onboarding",
        "Higher visibility in the app after launch",
        "Activity-based bonus earnings",
        "Priority support",
        "Early Partner badge"
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, scale: 0.9, filter: 'blur(10px)' },
        show: { opacity: 1, scale: 1, filter: 'blur(0px)' }
    };

    return (
        <section id="early" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background Glow */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '800px',
                    height: '800px',
                    background: 'radial-gradient(circle, rgba(3, 72, 209, 0.03) 0%, rgba(255,255,255,0) 70%)',
                    zIndex: -1
                }}
            />

            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{
                        background: 'rgba(255, 255, 255, 0.6)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '32px',
                        padding: '64px 32px',
                        textAlign: 'center'
                    }}
                >
                    <h2 style={{ marginBottom: '24px' }}>Join as an Early Partner</h2>
                    <p style={{ marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px' }}>
                        Be among the first to join the Unibexs ecosystem and get exclusive benefits.
                    </p>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '40px 24px', /* Increased vertical gap for better separation */
                            maxWidth: '1000px', /* Slightly wider to accommodate content */
                            margin: '0 auto 48px',
                            textAlign: 'left'
                        }}
                    >
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-start', /* Changed from center to flex-start */
                                    gap: '12px',
                                    justifyContent: 'flex-start'
                                }}
                            >
                                <div style={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    background: 'var(--accent-primary)',
                                    marginTop: '8px', /* Added margin to align with first line of text */
                                    flexShrink: 0 /* Prevent dot from shrinking */
                                }}></div>
                                <span style={{ textAlign: 'left', lineHeight: '1.6' }}>{benefit}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-primary"
                        style={{ padding: '16px 48px', fontSize: '18px' }}
                    >
                        Become an Early Partner
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default EarlyAccess;
