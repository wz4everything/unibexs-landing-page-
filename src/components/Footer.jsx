import React from 'react';

const Footer = () => {
    return (
        <footer id="final" className="section" style={{ borderTop: '1px solid var(--border-color)', paddingBottom: '40px' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <h2 style={{ marginBottom: '24px', fontSize: '32px' }}>
                        Start earning by guiding students.
                    </h2>
                    <p style={{ marginBottom: '32px' }}>
                        Supported by the first education ecosystem built for everyone.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                        <a href="#early" className="btn btn-primary">Become a Partner</a>
                        <a href="#waitlist" className="btn btn-secondary">Join the Waiting List</a>
                    </div>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid var(--border-color)',
                    paddingTop: '32px',
                    flexWrap: 'wrap',
                    gap: '24px'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <img src="/Primary Logo - Blue.svg" alt="Unibexs Logo" style={{ height: '24px' }} />
                    </div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                        © {new Date().getFullYear()} Unibexs. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
