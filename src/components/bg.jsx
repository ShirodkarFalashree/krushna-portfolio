import React, { Children } from "react";

export function GridBackground({ children }) {
    return (
        <div className="relative flex h-fit w-full bg-[#FCFCFC] ">
            {/* Grid background */}
            <div
                className="absolute inset-0 bg-[length:16px_16px]"
                style={{
                    backgroundImage: `
            linear-gradient(to right, #F4F4F4 1px, transparent 1px),
            linear-gradient(to bottom, #F4F4F4 1px, transparent 1px)
          `,
                }}
            />

            {/* Dark mode grid background */}
            <div
                className="absolute bg-[length:20px_20px] dark:block hidden"
                style={{
                    backgroundImage: `
            linear-gradient(to right, #262626 1px, transparent 1px),
            linear-gradient(to bottom, #262626 1px, transparent 1px)
          `,
                }}
            />

            {/* Radial gradient overlay */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white  [mask-image:radial-gradient(transparent_20%,black)]" />

            {/* Text content */}
            <div className="relative z-20 bg-gradient-to-b  from-white to-white">
                {children}
            </div>
        </div>
    );
}