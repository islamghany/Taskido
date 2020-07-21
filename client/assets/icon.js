export function Add(props) {
  return (
    <svg width="2.4rem" height="2.4rem" viewBox="0 0 512 512" {...props}>
      <path
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M256 112v288M400 256H112"
      />
    </svg>
  )
}
export function Edit(props) {
  return (
    <svg width="2.4rem" height="2.4rem" viewBox="0 0 512 512" {...props}>
      <path
        d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <path stroke={props.color} d="M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z" />
    </svg>
  )
} 
export function RightArrow(props) {
  return (
    <svg  width="2.4rem" height="2.4rem" viewBox="0 0 512 512" {...props}>
      <path
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={48}
        d="M268 112l144 144-144 144M392 256H100"
      />
    </svg>
  )
}
export function LeftEight(props) {
  return (
    <svg width="2.4rem" height="2.4rem" viewBox="0 0 512 512" {...props}>
      <path
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={48}
        d="M328 112L184 256l144 144"
      />
    </svg>
  )
}
export function Menu(props) {
  return (
    <svg width="2.4rem" height="2.4rem" viewBox="0 0 512 512" {...props}>
      <path
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M80 160h352M80 256h352M80 352h352"
      />
    </svg>
  )
}

export function MenuVert(props) {
  return (
    <svg width="2.4rem" height="2.4rem" viewBox="0 0 512 512" {...props}>
      <circle
        cx={256}
        cy={256}
        r={32}
        fill="none"
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={32}
      />
      <circle
        cx={256}
        cy={416}
        r={32}
        fill="none"
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={32}
      />
      <circle
        cx={256}
        cy={96}
        r={32}
        fill="none"
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={32}
      />
    </svg>
  )
}

export function Today(props) {
  return (
    <svg  width="2.4rem" height="2.4rem" viewBox="0 0 512 512" {...props}>
      <title>{"ionicons-v5-q"}</title>
      <path
        fill="none"
         stroke={props.color}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
      />
      <circle
        cx={256}
        cy={256}
        r={80}
        fill="none"
         stroke={props.color}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={32}
      />
    </svg>
  )
}

export function Rocket(props) {
  return (
    <svg  width="2.4rem" height="2.4rem" viewBox="0 0 512 512" {...props}>
      <path
        d="M461.81 53.81a4.4 4.4 0 00-3.3-3.39c-54.38-13.3-180 34.09-248.13 102.17a294.9 294.9 0 00-33.09 39.08c-21-1.9-42-.3-59.88 7.5-50.49 22.2-65.18 80.18-69.28 105.07a9 9 0 009.8 10.4l81.07-8.9a180.29 180.29 0 001.1 18.3 18.15 18.15 0 005.3 11.09l31.39 31.39a18.15 18.15 0 0011.1 5.3 179.91 179.91 0 0018.19 1.1l-8.89 81a9 9 0 0010.39 9.79c24.9-4 83-18.69 105.07-69.17 7.8-17.9 9.4-38.79 7.6-59.69a293.91 293.91 0 0039.19-33.09c68.38-68 115.47-190.86 102.37-247.95zM298.66 213.67a42.7 42.7 0 1160.38 0 42.65 42.65 0 01-60.38 0z"
        fill="none"
         stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <path
        d="M109.64 352a45.06 45.06 0 00-26.35 12.84C65.67 382.52 64 448 64 448s65.52-1.67 83.15-19.31A44.73 44.73 0 00160 402.32"
        fill="none"
         stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </svg>
  )
}
export function Search(props) {
  return (
    <svg  width="2.4rem" height="2.4rem" viewBox="0 0 512 512" {...props}>
      <path
        d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
        fill="none"
         stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={32}
      />
      <path
        fill="none"
         stroke={props.color}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M338.29 338.29L448 448"
      />
    </svg>
  )
}
export function Trash(props) {
  return (
    <svg  width="2.4rem" height="2.4rem" viewBox="0 0 512 512" {...props}>
      <path
        d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
        fill="none"
         stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <path
         stroke={props.color}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M80 112h352"
      />
      <path
        d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
        fill="none"
         stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </svg>
  )
}

export function Star(props) {
  return (
    <svg  width="2.4rem" height="2.4rem" viewBox="0 0 512 512" {...props} fill={props.color}>
      <path d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z" />
    </svg>
  )
}
export function StartOutline(props) {
  return (
    <svg  width="2.4rem" height="2.4rem" viewBox="0 0 512 512" {...props}>
      <path
        d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
        fill="none"
         stroke={props.color}
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </svg>
  )
}
export function Apps(props) {
  return (
    <svg width="2.4rem" height="2.4rem" viewBox="0 0 512 512" {...props}>
      <rect
        x={64}
        y={64}
        width={80}
        height={80}
        rx={40}
        ry={40}
        fill="none"
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={32}
      />
      <rect
        x={216}
        y={64}
        width={80}
        height={80}
        rx={40}
        ry={40}
        fill="none"
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={32}
      />
      <rect
        x={368}
        y={64}
        width={80}
        height={80}
        rx={40}
        ry={40}
        fill="none"
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={32}
      />
      <rect
        x={64}
        y={216}
        width={80}
        height={80}
        rx={40}
        ry={40}
        fill="none"
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={32}
      />
      <rect
        x={216}
        y={216}
        width={80}
        height={80}
        rx={40}
        ry={40}
        fill="none"
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={32}
      />
      <rect
        x={368}
        y={216}
        width={80}
        height={80}
        rx={40}
        ry={40}
        fill="none"
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={32}
      />
      <rect
        x={64}
        y={368}
        width={80}
        height={80}
        rx={40}
        ry={40}
        fill="none"
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={32}
      />
      <rect
        x={216}
        y={368}
        width={80}
        height={80}
        rx={40}
        ry={40}
        fill="none"
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={32}
      />
      <rect
        x={368}
        y={368}
        width={80}
        height={80}
        rx={40}
        ry={40}
        fill="none"
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={32}
      />
    </svg>
  )
}
export function Close(props) {
  return (
    <svg  width="2.4rem" height="2.4rem" viewBox="0 0 512 512" {...props}>
      <title>{"ionicons-v5-l"}</title>
      <path
        fill="none"
         stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M368 368L144 144M368 144L144 368"
      />
    </svg>
  )
}

export function Calendar(props) {
  return (
    <svg width="2.4rem" height="2.4rem" viewBox="0 0 512 512" {...props}>
      <rect
        x={48}
        y={80}
        width={416}
        height={384}
        rx={48}
        ry={48}
        fill="none"
        stroke={props.color}
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <path d="M397.82 80H114.18C77.69 80 48 110.15 48 147.2V208h16c0-16 16-32 32-32h320c16 0 32 16 32 32h16v-60.8c0-37.05-29.69-67.2-66.18-67.2z" />
      <circle cx={296} cy={232} r={24} />
      <circle cx={376} cy={232} r={24} />
      <circle cx={296} cy={312} r={24} />
      <circle cx={376} cy={312} r={24} />
      <circle cx={136} cy={312} r={24} />
      <circle cx={216} cy={312} r={24} />
      <circle cx={136} cy={392} r={24} />
      <circle cx={216} cy={392} r={24} />
      <circle cx={296} cy={392} r={24} />
      <path
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M128 48v32M384 48v32"
      />
    </svg>
  )
}
export function Logout(props) {
  return (
    <svg width="2.4rem" height="2.4rem" viewBox="0 0 512 512" {...props}>
      <title>{"ionicons-v5-o"}</title>
      <path
        d="M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40M368 336l80-80-80-80M176 256h256"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </svg>
  )
}