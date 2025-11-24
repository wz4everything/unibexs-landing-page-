import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '64px' }}
                >
                    <h2 style={{ marginBottom: '24px' }}>About Unibexs</h2>
                    <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                        Unibexs is an education ecosystem that empowers individuals and organizations to assist international students with confidence — and earn through a clear, supported process.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hover-card"
                        style={{
                            background: 'var(--bg-secondary)',
                            padding: '40px',
                            borderRadius: '24px',
                            border: '1px solid var(--border-color)'
                        }}
                    >
                        <h3 style={{ marginBottom: '16px', color: 'var(--text-secondary)' }}>Unibexs is not an agency.</h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <li style={{ display: 'flex', gap: '12px' }}>
                                <span style={{ color: 'var(--accent-primary)' }}>→</span>
                                <span>You communicate with the student.</span>
                            </li>
                            <li style={{ display: 'flex', gap: '12px' }}>
                                <span style={{ color: 'var(--accent-primary)' }}>→</span>
                                <span>We support the official process and provide the systems that make everything easier.</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hover-card"
                        style={{
                            background: 'var(--bg-secondary)',
                            padding: '40px',
                            borderRadius: '24px',
                            border: '1px solid var(--border-color)'
                        }}
                    >
                        <h3 style={{ marginBottom: '16px', color: 'var(--text-primary)' }}>You guide the student.</h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <li style={{ display: 'flex', gap: '12px' }}>
                                <span style={{ color: 'var(--accent-primary)' }}>→</span>
                                <span>We handle the backend work, provide verified information, and organize the steps that make applications simple.</span>
                            </li>
                            <li style={{ display: 'flex', gap: '12px' }}>
                                <span style={{ color: 'var(--accent-primary)' }}>→</span>
                                <span>One ecosystem connecting: students → partners → universities → services.</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
