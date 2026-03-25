// Hand-drawn SVG icons for Zenako Cleaning Co.
// No generic icon libraries. Every icon drawn with intent.
import type { ComponentType, SVGProps } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string
}

// --- Trust Indicators ---

export const ShieldCheckIcon: ComponentType<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M24 4L8 12V24C8 35 16 42 24 44C32 42 40 35 40 24V12L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M17 24L22 29L31 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const CoinStackIcon: ComponentType<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <ellipse cx="24" cy="14" rx="14" ry="5" stroke="currentColor" strokeWidth="2"/>
    <path d="M10 14V20C10 22.76 16.27 25 24 25C31.73 25 38 22.76 38 20V14" stroke="currentColor" strokeWidth="2"/>
    <path d="M10 20V26C10 28.76 16.27 31 24 31C31.73 31 38 28.76 38 26V20" stroke="currentColor" strokeWidth="2"/>
    <path d="M10 26V32C10 34.76 16.27 37 24 37C31.73 37 38 34.76 38 32V26" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

export const ThumbsUpIcon: ComponentType<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M14 44H8V22H14V44Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M14 22L20 4H22C24.2 4 26 5.8 26 8V18H38C40.2 18 42 20 41.5 22.2L37.5 40.2C37.1 42 35.5 44 33.5 44H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const LeafIcon: ComponentType<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8 40C8 40 8 8 40 8C40 8 40 40 8 40Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M8 40C16 32 24 24 40 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M18 30C22 26 26 22 32 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 4"/>
  </svg>
)

// --- Cleaning Process ---

export const ClipboardIcon: ComponentType<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="10" y="8" width="28" height="36" rx="2" stroke="currentColor" strokeWidth="2"/>
    <rect x="18" y="4" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="2"/>
    <line x1="16" y1="22" x2="32" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="16" y1="28" x2="28" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="16" y1="34" x2="24" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const CalendarIcon: ComponentType<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="6" y="10" width="36" height="32" rx="2" stroke="currentColor" strokeWidth="2"/>
    <line x1="6" y1="20" x2="42" y2="20" stroke="currentColor" strokeWidth="2"/>
    <line x1="16" y1="6" x2="16" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="18" cy="28" r="2" fill="currentColor"/>
    <circle cx="24" cy="28" r="2" fill="currentColor"/>
    <circle cx="30" cy="28" r="2" fill="currentColor"/>
    <circle cx="18" cy="34" r="2" fill="currentColor"/>
  </svg>
)

export const SparkleIcon: ComponentType<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M24 4L28 18L42 22L28 26L24 40L20 26L6 22L20 18L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M38 6L40 12L46 14L40 16L38 22L36 16L30 14L36 12L38 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
)

export const SmileFaceIcon: ComponentType<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2"/>
    <circle cx="17" cy="20" r="2" fill="currentColor"/>
    <circle cx="31" cy="20" r="2" fill="currentColor"/>
    <path d="M16 30C18 34 22 36 24 36C26 36 30 34 32 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

// --- Services ---

export const HouseIcon: ComponentType<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M6 24L24 8L42 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 22V42H38V22" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <rect x="20" y="30" width="8" height="12" stroke="currentColor" strokeWidth="2"/>
    <rect x="14" y="26" width="6" height="6" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

export const OfficeIcon: ComponentType<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="8" y="6" width="20" height="38" stroke="currentColor" strokeWidth="2"/>
    <rect x="28" y="18" width="14" height="26" stroke="currentColor" strokeWidth="2"/>
    <rect x="13" y="12" width="4" height="4" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="21" y="12" width="4" height="4" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="13" y="20" width="4" height="4" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="21" y="20" width="4" height="4" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="33" y="24" width="4" height="4" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="33" y="32" width="4" height="4" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="15" y="34" width="6" height="10" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

export const CouchIcon: ComponentType<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8 20V14C8 11.8 9.8 10 12 10H36C38.2 10 40 11.8 40 14V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M6 20C6 20 6 24 6 28V32H42V28C42 24 42 20 42 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 20V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M36 20V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="10" y1="32" x2="10" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="38" y1="32" x2="38" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const WrenchIcon: ComponentType<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M38 10C35 7 30 7 27 10L16 21L27 32L38 21C41 18 41 13 38 10Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M16 21L6 31L10 35L17 42L21 38L27 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="14" cy="37" r="2" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

export const TruckIcon: ComponentType<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="4" y="12" width="24" height="22" stroke="currentColor" strokeWidth="2"/>
    <path d="M28 20H36L42 28V34H28V20Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <circle cx="14" cy="36" r="4" stroke="currentColor" strokeWidth="2"/>
    <circle cx="36" cy="36" r="4" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

export const BugIcon: ComponentType<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <ellipse cx="24" cy="28" rx="10" ry="14" stroke="currentColor" strokeWidth="2"/>
    <line x1="24" y1="14" x2="24" y2="42" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M14 22L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M14 28L6 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M14 34L6 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M34 22L42 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M34 28L42 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M34 34L42 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 14L18 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M28 14L30 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const DropletIcon: ComponentType<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M24 4C24 4 8 22 8 32C8 40.84 15.16 44 24 44C32.84 44 40 40.84 40 32C40 22 24 4 24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M18 32C18 28 24 18 24 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 3"/>
  </svg>
)

export const TreeIcon: ComponentType<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M24 4L10 22H18L8 38H40L30 22H38L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <rect x="21" y="38" width="6" height="8" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

export const ShieldIcon: ComponentType<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M24 4L8 12V24C8 35 16 42 24 44C32 42 40 35 40 24V12L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M24 14V34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 24H32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

export const RoofIcon: ComponentType<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M4 24L24 8L44 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 22V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M40 22V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M4 30H44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 3"/>
    <path d="M8 36L14 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M20 36L26 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M32 36L38 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

export const WindIcon: ComponentType<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M6 18H30C34 18 36 14 32 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M6 26H36C40 26 42 30 38 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 34H26C28 34 30 36 28 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

// --- Why Choose Us ---

export const AwardStarIcon: ComponentType<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M24 4L30 16H44L33 24L37 38L24 30L11 38L15 24L4 16H18L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
)

export const MoneyBagIcon: ComponentType<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M20 8L24 4L28 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 12C16 12 8 20 8 32C8 40 14 44 24 44C34 44 40 40 40 32C40 20 32 12 32 12H16Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M24 22V36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 26C20 24 22 22 24 22C26 22 28 24 28 26C28 28 26 29 24 29C22 29 20 30 20 32C20 34 22 36 24 36C26 36 28 34 28 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const RecycleIcon: ComponentType<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2"/>
    <path d="M24 6C24 6 16 14 16 22C16 30 20 36 24 36C28 36 32 30 32 22C32 14 24 6 24 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M20 24C20 24 24 20 24 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

export const GearIcon: ComponentType<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2"/>
    <path d="M24 4V10M24 38V44M4 24H10M38 24H44M10 10L14.2 14.2M33.8 33.8L38 38M38 10L33.8 14.2M14.2 33.8L10 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

// --- Navigation / Action ---

export const MapPinIcon: ComponentType<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M24 44C24 44 40 30 40 20C40 11.16 32.84 4 24 4C15.16 4 8 11.16 8 20C8 30 24 44 24 44Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <circle cx="24" cy="20" r="6" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

export const PhoneIcon: ComponentType<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M10 6H18L22 16L17 19C19 25 23 29 29 31L32 26L42 30V38C42 40.2 40.2 42 38 42C22 42 6 26 6 10C6 7.8 7.8 6 10 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const MailIcon: ComponentType<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="4" y="10" width="40" height="28" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M4 14L24 28L44 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const ClockIcon: ComponentType<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2"/>
    <path d="M24 12V24L32 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const SendIcon: ComponentType<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M6 6L42 24L6 42V26L30 24L6 22V6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
)

export const ChatIcon: ComponentType<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8 8H40V32H22L14 40V32H8V8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <circle cx="18" cy="20" r="2" fill="currentColor"/>
    <circle cx="24" cy="20" r="2" fill="currentColor"/>
    <circle cx="30" cy="20" r="2" fill="currentColor"/>
  </svg>
)

export const GiftIcon: ComponentType<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="6" y="16" width="36" height="8" stroke="currentColor" strokeWidth="2"/>
    <rect x="10" y="24" width="28" height="18" stroke="currentColor" strokeWidth="2"/>
    <line x1="24" y1="16" x2="24" y2="42" stroke="currentColor" strokeWidth="2"/>
    <path d="M24 16C24 16 20 12 16 10C12 8 10 12 14 14C18 16 24 16 24 16Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M24 16C24 16 28 12 32 10C36 8 38 12 34 14C30 16 24 16 24 16Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
)

export const RepeatIcon: ComponentType<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M36 14H12C8.68629 14 6 16.6863 6 20V24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 34H36C39.3137 34 42 31.3137 42 28V24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M30 8L36 14L30 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 28L12 34L18 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const TrophyIcon: ComponentType<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M14 6H34V18C34 24.6274 29.5228 30 24 30C18.4772 30 14 24.6274 14 18V6Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M14 12H8C8 12 6 12 6 16C6 20 10 22 14 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M34 12H40C40 12 42 12 42 16C42 20 38 22 34 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="24" y1="30" x2="24" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="16" y1="38" x2="32" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <rect x="14" y="40" width="20" height="4" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

// --- Misc / Check ---

export const CheckIcon: ComponentType<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8 24L18 34L40 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const ArrowRightIcon: ComponentType<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8 24H40M40 24L28 12M40 24L28 36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const ArrowLeftIcon: ComponentType<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M40 24H8M8 24L20 12M8 24L20 36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const StarIcon: ComponentType<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M24 4L30 16L44 18L34 28L36 42L24 36L12 42L14 28L4 18L18 16L24 4Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
)

export const XIcon: ComponentType<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 12L36 36M36 12L12 36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
)
