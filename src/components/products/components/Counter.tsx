"use client"

import { Line, Plus } from "@/icons"
import { OperationCounter, OperationCounterType } from "@/models"
import { useCartStore } from "@/store"
import { Dispatch, SetStateAction, useState } from "react"

interface Props {
  initialCount: number
  idProduct?: string
  stock: number
  className?: string
  personalCount?: {
    count: number
    setCounter?: Dispatch<SetStateAction<number>>
  }
}

export function Counter({
  initialCount,
  idProduct,
  stock,
  className,
  personalCount,
}: Props) {
  const { updateCount } = useCartStore()
  const [count, setCount] = useState(initialCount)
  
  const handleClick = (operation: OperationCounterType) => {
    if (personalCount && personalCount.setCounter) {
      personalCount.setCounter((prevCount) =>
        operation === OperationCounter.ADD ? prevCount + 1 : prevCount - 1
    )
      return
    }
    setCount((prevCount) =>
      operation === OperationCounter.ADD ? prevCount + 1 : prevCount - 1
    )
    updateCount(idProduct as string, operation)
  }
  
  const countValue = personalCount ? personalCount.count : count
    return (
    <div
      className={`flex items-center rounded-full bg-accent-background gap-5 p-2 ${className}`}
    >
      <button
        onClick={() => handleClick(OperationCounter.SUBSTRACT)}
        disabled={countValue === 1}
        className="text-lg font-bold px-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Line className="size-4" />
      </button>
      <span>{countValue}</span>
      <button
        onClick={() => handleClick(OperationCounter.ADD)}
        className="text-lg font-bold px-2 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={countValue === stock}
      >
        <Plus className="size-4" />
      </button>
    </div>
  )
}
