import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'sans': ['Manrope', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
				'manrope': ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				// Enhanced Glitch Animations
				'glitch-low': {
					'0%, 100%': { 
						transform: 'translate(0, 0)',
						filter: 'hue-rotate(0deg)'
					},
					'20%': { 
						transform: 'translate(-1px, 1px)',
						filter: 'hue-rotate(90deg)'
					},
					'40%': { 
						transform: 'translate(-1px, -1px)',
						filter: 'hue-rotate(180deg)'
					},
					'60%': { 
						transform: 'translate(1px, 1px)',
						filter: 'hue-rotate(270deg)'
					},
					'80%': { 
						transform: 'translate(1px, -1px)',
						filter: 'hue-rotate(360deg)'
					}
				},
				'glitch-medium': {
					'0%, 100%': { 
						transform: 'translate(0, 0) skew(0deg)',
						filter: 'hue-rotate(0deg) saturate(1)'
					},
					'10%': { 
						transform: 'translate(-2px, 2px) skew(1deg)',
						filter: 'hue-rotate(30deg) saturate(1.2)'
					},
					'20%': { 
						transform: 'translate(-2px, -2px) skew(-1deg)',
						filter: 'hue-rotate(60deg) saturate(0.8)'
					},
					'30%': { 
						transform: 'translate(2px, 2px) skew(1deg)',
						filter: 'hue-rotate(90deg) saturate(1.3)'
					},
					'50%': { 
						transform: 'translate(-2px, 2px) skew(0.5deg)',
						filter: 'hue-rotate(180deg) saturate(1.1)'
					},
					'70%': { 
						transform: 'translate(2px, 2px) skew(1deg)',
						filter: 'hue-rotate(240deg) saturate(0.8)'
					},
					'90%': { 
						transform: 'translate(2px, 2px) skew(0.5deg)',
						filter: 'hue-rotate(300deg) saturate(0.9)'
					}
				},
				'glitch-high': {
					'0%, 100%': { 
						transform: 'translate(0, 0) scale(1) skew(0deg)',
						filter: 'hue-rotate(0deg) saturate(1) brightness(1)'
					},
					'5%': { 
						transform: 'translate(-3px, 3px) scale(1.02) skew(2deg)',
						filter: 'hue-rotate(15deg) saturate(1.5) brightness(1.2)'
					},
					'15%': { 
						transform: 'translate(3px, 3px) scale(1.01) skew(1deg)',
						filter: 'hue-rotate(45deg) saturate(1.3) brightness(1.1)'
					},
					'25%': { 
						transform: 'translate(-3px, 3px) scale(1.02) skew(1.5deg)',
						filter: 'hue-rotate(75deg) saturate(1.4) brightness(1.3)'
					},
					'35%': { 
						transform: 'translate(3px, 3px) scale(1.01) skew(2deg)',
						filter: 'hue-rotate(105deg) saturate(1.2) brightness(1.1)'
					},
					'50%': { 
						transform: 'translate(-3px, -3px) scale(0.99) skew(-1deg)',
						filter: 'hue-rotate(180deg) saturate(0.8) brightness(0.8)'
					}
				},
				// Scan Line Animations
				'scan-slow': {
					'0%': { 
						transform: 'translateY(-100vh)',
						opacity: '0',
						boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)'
					},
					'10%': { opacity: '1' },
					'90%': { opacity: '1' },
					'100%': { 
						transform: 'translateY(100vh)',
						opacity: '0',
						boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)'
					}
				},
				'scan-medium': {
					'0%': { 
						transform: 'translateY(-100vh)',
						opacity: '0',
						boxShadow: '0 0 15px rgba(255, 255, 255, 0.4)'
					},
					'15%': { opacity: '1' },
					'85%': { opacity: '1' },
					'100%': { 
						transform: 'translateY(100vh)',
						opacity: '0',
						boxShadow: '0 0 15px rgba(255, 255, 255, 0.4)'
					}
				},
				'scan-fast': {
					'0%': { 
						transform: 'translateY(-100vh)',
						opacity: '0',
						boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
					},
					'20%': { opacity: '1' },
					'80%': { opacity: '1' },
					'100%': { 
						transform: 'translateY(100vh)',
						opacity: '0',
						boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
					}
				},
				// Cinematic Transitions
				'fade-from-black': {
					'0%': { 
						opacity: '0',
						backgroundColor: 'rgba(0, 0, 0, 1)',
						transform: 'scale(1.1)',
						filter: 'blur(10px)'
					},
					'50%': {
						backgroundColor: 'rgba(0, 0, 0, 0.5)',
						filter: 'blur(5px)'
					},
					'100%': { 
						opacity: '1',
						backgroundColor: 'rgba(0, 0, 0, 0)',
						transform: 'scale(1)',
						filter: 'blur(0)'
					}
				},
				'slide-reveal': {
					'0%': { 
						transform: 'translateY(100px)',
						opacity: '0',
						filter: 'blur(10px)',
						clipPath: 'inset(0 0 100% 0)'
					},
					'50%': {
						filter: 'blur(5px)',
						clipPath: 'inset(0 0 50% 0)'
					},
					'100%': { 
						transform: 'translateY(0)',
						opacity: '1',
						filter: 'blur(0)',
						clipPath: 'inset(0 0 0% 0)'
					}
				},
				'spotlight-reveal': {
					'0%': { 
						opacity: '0',
						transform: 'scale(0.8)',
						filter: 'brightness(0) blur(20px) contrast(0)',
						clipPath: 'circle(0% at 50% 50%)'
					},
					'50%': {
						filter: 'brightness(1.2) blur(5px) contrast(1.2)',
						clipPath: 'circle(70% at 50% 50%)'
					},
					'100%': { 
						opacity: '1',
						transform: 'scale(1)',
						filter: 'brightness(1) blur(0) contrast(1)',
						clipPath: 'circle(100% at 50% 50%)'
					}
				},
				'curtain-reveal': {
					'0%': { 
						transform: 'scaleY(0)',
						transformOrigin: 'top',
						opacity: '0',
						filter: 'brightness(0.5)'
					},
					'50%': {
						filter: 'brightness(1.2)'
					},
					'100%': { 
						transform: 'scaleY(1)',
						transformOrigin: 'top',
						opacity: '1',
						filter: 'brightness(1)'
					}
				},
				'slide-out-right': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-down': {
					'0%': {
						opacity: '0',
						transform: 'translateY(-30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'fade-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'scale-fade-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'slide-up-reveal': {
					'0%': {
						opacity: '0',
						transform: 'translateY(40px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'text-reveal': {
					'0%': {
						opacity: '0',
						transform: 'translateY(100px) skewY(10deg)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) skewY(0deg)'
					}
				},
				'reveal-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(60px) rotateX(15deg)',
						filter: 'blur(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) rotateX(0deg)',
						filter: 'blur(0px)'
					}
				},
				'magnetic-hover': {
					'0%': { transform: 'translate(0, 0) scale(1)' },
					'100%': { transform: 'translate(var(--x, 0), var(--y, 0)) scale(1.05)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				// Enhanced Glitch Animations
				'glitch-low': 'glitch-low 0.3s ease-in-out',
				'glitch-medium': 'glitch-medium 0.4s ease-in-out',
				'glitch-high': 'glitch-high 0.5s ease-in-out',
				// Scan Animations
				'scan-slow': 'scan-slow 6s linear infinite',
				'scan-medium': 'scan-medium 3s linear infinite',
				'scan-fast': 'scan-fast 1.5s linear infinite',
				// Cinematic Transitions
				'fade-from-black': 'fade-from-black 2s ease-out forwards',
				'slide-reveal': 'slide-reveal 1.2s ease-out forwards',
				'spotlight-reveal': 'spotlight-reveal 2s ease-out forwards',
				'curtain-reveal': 'curtain-reveal 1.5s ease-out forwards',
				'slide-out-right': 'slide-out-right 1s ease-in-out',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'fade-in-down': 'fade-in-down 0.8s ease-out',
				'fade-in-left': 'fade-in-left 0.8s ease-out',
				'fade-in-right': 'fade-in-right 0.8s ease-out',
				'scale-fade-in': 'scale-fade-in 0.8s ease-out',
				'slide-up-reveal': 'slide-up-reveal 0.8s ease-out',
				'text-reveal': 'text-reveal 1.2s ease-out',
				'reveal-up': 'reveal-up 1s ease-out',
				'magnetic-hover': 'magnetic-hover 0.3s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
