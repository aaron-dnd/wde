"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

interface DatePickerProps {
  name: string;
  label: string;
}

export default function DatePicker({ name, label }: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Date | null>(null);
  const [viewDate, setViewDate] = useState(new Date());
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const cells: (number | null)[] = [
    ...Array(firstDayOfMonth).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  function isPast(day: number) {
    const d = new Date(year, month, day);
    return d < today;
  }

  function isSelected(day: number) {
    return (
      selected &&
      selected.getFullYear() === year &&
      selected.getMonth() === month &&
      selected.getDate() === day
    );
  }

  function pickDay(day: number) {
    if (isPast(day)) return;
    setSelected(new Date(year, month, day));
    setOpen(false);
  }

  const displayValue = selected
    ? `${selected.getDate()} ${MONTHS[selected.getMonth()]} ${selected.getFullYear()}`
    : "";

  const isoValue = selected
    ? `${selected.getFullYear()}-${String(selected.getMonth() + 1).padStart(2, "0")}-${String(selected.getDate()).padStart(2, "0")}`
    : "";

  return (
    <div ref={wrapperRef} className="relative">
      <label className="text-xs tracking-widest2 uppercase text-stone">
        {label}
      </label>

      <input type="hidden" name={name} value={isoValue} />

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full mt-3 flex items-center justify-between bg-transparent border-b border-cream/30 py-3 text-left text-cream focus:outline-none hover:border-rose transition-colors"
      >
        <span className={displayValue ? "text-cream" : "text-stone"}>
          {displayValue || "Select a date"}
        </span>
        <Calendar size={16} className="text-gold shrink-0" />
      </button>

      {open && (
        <div className="absolute z-50 mt-2 w-[300px] bg-ink border border-cream/15 shadow-xl p-5 left-0">
          <div className="flex items-center justify-between mb-4">
            <button
              type="button"
              onClick={() => setViewDate(new Date(year, month - 1, 1))}
              className="p-1.5 text-cream/70 hover:text-rose transition-colors"
              aria-label="Previous month"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="font-display text-sm text-cream tracking-wide">
              {MONTHS[month]} {year}
            </span>
            <button
              type="button"
              onClick={() => setViewDate(new Date(year, month + 1, 1))}
              className="p-1.5 text-cream/70 hover:text-rose transition-colors"
              aria-label="Next month"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-2">
            {WEEKDAYS.map((d, i) => (
              <span
                key={i}
                className="text-[10px] tracking-widest2 uppercase text-stone text-center py-1"
              >
                {d}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {cells.map((day, i) => {
              if (day === null) return <span key={i} />;
              const past = isPast(day);
              const active = isSelected(day);
              return (
                <button
                  key={i}
                  type="button"
                  disabled={past}
                  onClick={() => pickDay(day)}
                  className={`
                    h-8 text-xs rounded-sm transition-colors
                    ${past ? "text-cream/20 cursor-not-allowed" : "text-cream/80 hover:bg-rose hover:text-ink cursor-pointer"}
                    ${active ? "bg-gold text-ink font-medium" : ""}
                  `}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}