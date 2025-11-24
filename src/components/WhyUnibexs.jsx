import React from 'react';
import { motion } from 'framer-motion';

const WhyUnibexs = () => {
    const features = [
        { title: "Partner-first", desc: "You keep your student. We never communicate with them." },
        { title: "Clear and simple", desc: "No complicated steps. No confusion." },
        { title: "Transparent earnings", desc: "You always know how much you earn and when." },
        { title: "Backend support", desc: "We handle the technical and official work." },
        { title: "Ecosystem model", desc: "Applications, logistics, and services — all connected." },
        { title: "For individuals and companies", desc: "Flexible and scalable for any type of partner." }
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
        hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
        show: { opacity: 1, y: 0, filter: 'blur(0px)' }
    };

    return (
        <section id="why" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '64px' }}
                >
                    Why Partners Choose Unibexs
                </motion.h2>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="hover-card"
                            style={{
                                padding: '24px',
                                background: 'var(--bg-primary)',
                                borderRadius: '16px',
                                border: '1px solid var(--border-color)',
                                display: 'flex',
                                gap: '16px',
                                alignItems: 'flex-start'
                            }}
                        >
                            <div style={{
                                minWidth: '24px',
                                height: '24px',
                                borderRadius: '50%',
                                background: 'rgba(3, 72, 209, 0.1)',
                                color: 'var(--accent-primary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '14px'
                            }}>✔</div>
                            <div>
                                <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>{feature.title}</h3>
                                <p style={{ fontSize: '14px' }}>{feature.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyUnibexs;
