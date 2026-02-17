
import React from 'react';

interface PhoneFrameProps {
    children: React.ReactNode;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({ children, header, footer, className = "" }) => {
    return (
        <div className={`relative mx-auto border-gray-800 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl flex flex-col items-center justify-start overflow-hidden ${className}`}>
            {/* Notch / Speaker */}
            <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>

            {/* Screen Content Wrapper */}
            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-black relative flex flex-col">
                {/* Header Bar (Time, Battery etc.) - Optional */}
                <div className="w-full px-4 py-2 flex justify-between items-center text-white text-[10px] absolute top-2 z-20">
                    <span>9:41</span>
                    <div className="flex gap-1">
                        <span className="w-4 h-2 bg-white rounded-sm" />
                    </div>
                </div>

                {/* Dynamic Header */}
                {header && <div className="mt-8 px-4 z-10 w-full">{header}</div>}

                {/* Main Content Area */}
                <div className="flex-1 w-full h-full relative z-0">
                    {children}
                </div>

                {/* Footer / Home Indicator */}
                <div className="absolute bottom-2 w-1/3 h-1 bg-white/20 rounded-full left-1/3 z-20" />
                {footer && <div className="absolute bottom-4 w-full px-4 z-10">{footer}</div>}
            </div>
        </div>
    );
};

export default PhoneFrame;
