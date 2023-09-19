import { useState } from "react"

interface SquareProps {
    value: string 
    onSquareClick: VoidFunction
}

export default function Square({value, onSquareClick}: SquareProps) {
    return (
    <button 
    className="square"
    onClick={onSquareClick}
    >
        {value}
    </button>
    )
}
