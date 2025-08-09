import React, { useEffect, useState } from 'react';

const CursorSpotlight = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        let animationFrameId;

        const updateMousePosition = (e) => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
            
            animationFrameId = requestAnimationFrame(() => {
                setMousePosition({ x: e.clientX, y: e.clientY });
            });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    return (
        <div 
            className="cursor-spotlight"
            style={{
                left: `${mousePosition.x}px`,
                top: `${mousePosition.y}px`,
            }}
        />
    );
};

export default CursorSpotlight;
