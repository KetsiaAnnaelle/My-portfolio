import * as React from "react"
import { cn } from "@/lib/utils"

function ChartTooltipContent({
  active,
  payload,
  label,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  labelFormatter,
  formatter,
  labelClassName,
  color,
  nameKey,
  labelKey,
}: {
  active?: boolean
  payload?: any[]
  label?: string | number
  className?: string
  hideLabel?: boolean
  hideIndicator?: boolean
  indicator?: "line" | "dot" | "dashed"
  nameKey?: string
  labelKey?: string
  color?: string
  labelClassName?: string
  labelFormatter?: (label: any, payload: any[]) => React.ReactNode
  formatter?: (
    value: any,
    name: any,
    item: any,
    index: number,
    payload: any
  ) => React.ReactNode
}) {
  if (!active || !payload?.length) return null

  const item = payload[0]

  return (
    <div
      className={cn(
        "rounded-lg border bg-background p-2 text-xs shadow-md",
        className
      )}
    >
      {!hideLabel && (
        <div className={cn("font-medium", labelClassName)}>
          {labelFormatter ? labelFormatter(label, payload) : label}
        </div>
      )}

      {formatter ? formatter(
        item.value,
        item.name,
        item,
        0,
        item.payload
      ) : (
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {!hideIndicator && (
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: color ?? item.color }}
              />
            )}
            <span>
              {labelKey ? item.payload?.[labelKey] : item.name}
            </span>
          </div>

          <span className="font-medium">
            {item.value}
          </span>
        </div>
      )}
    </div>
  )
}
