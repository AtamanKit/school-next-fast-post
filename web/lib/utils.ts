import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function apiUrl() {
  let url: string = ''

  if (process.env.NODE_ENV === 'production') {
      url = window.location.origin + '/api'
  } else {
      url = `http://localhost:8000/api`
  }

  return url;
}

