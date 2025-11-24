import React from 'react';

const WhatYouGet = () => {
    const items = [
        "Verified university info (programs, fees, requirements)",
        "Official brochures & materials ready to share",
        "Simple guidance on how to talk to students",
        "Updates on discounts & special offers",
        "Logistics support (accommodation, airport pickup, translation)"
    ];

    return (
        <section id="support" className="section">
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '24px' }}>What You Get With Unibexs</h2>
                    <p style={{ maxWidth: '600px', marginBottom: '48px' }}>
                        Unibexs gives you the essential tools and support to guide students confidently:
                    </p>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                        maxWidth: '600px',
                        width: '100%',
                        marginBottom: '48px'
                    }}>
                        {items.map((item, index) => (
                            <div key={index} style={{
                                padding: '16px 24px',
                                background: 'var(--bg-tertiary)',
                                borderRadius: '12px',
                                textAlign: 'left',
                                borderLeft: '4px solid var(--accent-primary)'
                            }}>
                                {item}
                            </div>
                        ))}
                    </div>

                    <div style={{
                        background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)',
                        padding: '32px',
                        borderRadius: '24px',
                        border: '1px solid var(--border-color)'
                    }}>
                        <p style={{ fontSize: '20px', fontWeight: '600', color: 'var(--text-primary)' }}>
                            You guide the student. <br />
                            <span style={{ color: 'var(--text-secondary)' }}>The ecosystem supports the rest.</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatYouGet;
