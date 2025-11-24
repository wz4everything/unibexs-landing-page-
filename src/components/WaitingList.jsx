import React from 'react';

const WaitingList = () => {
    return (
        <section id="waitlist" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
                <h2 style={{ marginBottom: '24px' }}>Join the Waiting List</h2>
                <p style={{ marginBottom: '32px' }}>
                    Join the waiting list to get early updates and resources. Get partner materials, ecosystem updates, and learning guides to understand how to earn through Unibexs.
                </p>

                <form style={{ display: 'flex', gap: '12px', flexDirection: 'column' }} onSubmit={(e) => e.preventDefault()}>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            style={{
                                flex: 1,
                                padding: '12px 24px',
                                borderRadius: '9999px',
                                border: '1px solid var(--border-color)',
                                background: 'var(--bg-primary)',
                                color: 'var(--text-primary)',
                                fontSize: '16px',
                                outline: 'none',
                                minWidth: '250px'
                            }}
                        />
                        <button className="btn btn-secondary" style={{ whiteSpace: 'nowrap' }}>
                            Join the Waiting List
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default WaitingList;
