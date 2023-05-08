import React from "react";

export default function LoadingSpinner () {
    return (
        <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue"/>
        </div>
    )
}