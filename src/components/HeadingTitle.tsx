import type React from "react";

interface HeadingTitleProps {
    title: string;
    className?: string;
}
export const HeadingTitle: React.FC<HeadingTitleProps> = ({ title, className }) => { 
    return <h1 className={className}>{title}</h1>;
}