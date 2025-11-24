import React from 'react';

const WhoItsFor = () => {
    const items = [
        "Individuals",
        "Students & graduates",
        "Teachers & community leaders",
        "Agents & recruiters",
        "Companies & organizations"
    ];

    return (
        <section id="who" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <h2 style={{ marginBottom: '16px' }}>Who Can Join Unibexs</h2>
                    <p>Unibexs is open to anyone who supports students.</p>
                </div>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '16px',
                    maxWidth: '900px',
                    margin: '0 auto'
                }}>
                    {items.map((item, index) => (
                        <div key={index} style={{
                            padding: '16px 32px',
                            background: 'var(--bg-tertiary)',
                            borderRadius: '100px',
                            border: '1px solid var(--border-color)',
                            color: 'var(--text-primary)',
                            fontSize: '16px',
                            fontWeight: '500'
                        }}>
                            {item}
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                    <p style={{ fontSize: '18px', color: 'var(--text-primary)' }}>If you help students, you can earn with Unibexs.</p>
                </div>
            </div>
        </section>
    );
};

export default WhoItsFor;
