import React from 'react';

// Props: upTargetId, downTargetId
const DoubleScrollArrows = ({ upTargetId, downTargetId }) => {
    const scrollToTarget = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
    <div className="double-scroll-arrows" style={{ position: 'fixed', left: '50%', transform: 'translateX(-50%)', top: '20px', zIndex: 1000 }}>
            <div className="arrow-wrapper" onClick={() => scrollToTarget(upTargetId)}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 15L12 9L18 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div className="arrow-wrapper" onClick={() => scrollToTarget(downTargetId)}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
    );
};

export default DoubleScrollArrows;
