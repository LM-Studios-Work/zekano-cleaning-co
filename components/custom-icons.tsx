// Premium quality SVG icons for Zekano Cleaning Co
import type { ComponentType } from 'react'

interface IconProps {
  className?: string
}

export const AwardIcon: ComponentType<IconProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8L38 24H55L42 34L48 50L32 40L16 50L22 34L9 24H26L32 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const MoneyHandIcon: ComponentType<IconProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 18H44V48C44 48 44 54 38 54H24C18 54 18 48 18 48V24C18 18 24 18 24 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M32 32C35.3137 32 38 29.3137 38 26C38 22.6863 35.3137 20 32 20C28.6863 20 26 22.6863 26 26C26 29.3137 28.6863 32 32 32Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M32 38V44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 32H44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const EcoIcon: ComponentType<IconProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M32 14C32 14 24 22 24 30C24 38 28 44 32 44C36 44 40 38 40 30C40 22 32 14 32 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28 32C28 32 32 28 32 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const ToolingIcon: ComponentType<IconProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28 18H44C46.2091 18 48 19.7909 48 22V44C48 46.2091 46.2091 48 44 48H20C17.7909 48 16 46.2091 16 44V22C16 19.7909 17.7909 18 20 18H24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M32 18V14C32 12.8954 32.8954 12 34 12H30C28.8954 12 28 12.8954 28 14V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="20" y1="28" x2="48" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="28" cy="38" r="2" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="36" cy="38" r="2" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="44" cy="38" r="2" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

export const ThumbsUpIcon: ComponentType<IconProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 48C24 50.2091 25.7909 52 28 52H44C46.2091 52 48 50.2091 48 48V30C48 28 48 24 44 24H36L38 14C38 12.8954 37.1046 12 36 12C34.8954 12 34 12.8954 34 14L32 24H28C25.7909 24 24 25.7909 24 28V48Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="20" y1="28" x2="20" y2="48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

export const RocketIcon: ComponentType<IconProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 12L40 24L32 32L24 24L32 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 32L32 40L40 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 40L16 52C16 52 20 54 32 54C44 54 48 52 48 52L44 40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="28" cy="48" r="2" fill="currentColor"/>
    <circle cx="36" cy="48" r="2" fill="currentColor"/>
  </svg>
)
