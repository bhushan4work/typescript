import React, { Children, type ReactNode } from "react";

type SectionProps = {
    title?: string 
    children: ReactNode
}

export const Section = ({children , title } : SectionProps ) => {
    return (
        <div>
            <h2>{title}</h2>
            <h2>{children}</h2>
        </div> 
    )
} 