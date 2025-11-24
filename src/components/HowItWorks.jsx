import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const HowItWorks = () => {
    const [ref, isVisible] = useScrollAnimation();
    const steps = [
        {
            num: "1",
            title: "You guide the student",
            desc: "You handle communication and trust. Unibexs never contacts your student."
        },
        {
            num: "2",
            title: "We support the official process",
            desc: "Documents, submissions, follow-up, backend tasks — handled inside the ecosystem."
        },
        {
            num: "3",
            title: "You track the progress",
            desc: "Real-time updates showing clear status at every step."
        },
        {
            num: "4",
            title: "You earn",
            desc: "Simple, transparent commissions once the student joins the university."
        }
    ];

    return (
        <section id="how" className="section">
            <div ref={ref} className="container">
                <h2 className={isVisible ? 'animate-fade-in-up' : 'animate-hidden'} style={{ textAlign: 'center', marginBottom: '64px' }}>How Unibexs Works</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
                    {steps.map((step, index) => (
                        <div key={index} className={isVisible ? `animate-fade-in-up delay-${(index + 1) * 100}` : 'animate-hidden'} style={{ position: 'relative' }}>
                            <div style={{
                                fontSize: '80px',
                                fontWeight: '800',
                                color: 'var(--bg-tertiary)',
                                lineHeight: '1',
                                marginBottom: '-20px',
                                position: 'absolute',
                                top: '-40px',
                                left: '-10px',
                                zIndex: 0
                            }}>
                                {step.num}
                            </div>
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <h3 style={{ marginBottom: '12px', fontSize: '20px' }}>{step.title}</h3>
                                <p style={{ fontSize: '15px' }}>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
