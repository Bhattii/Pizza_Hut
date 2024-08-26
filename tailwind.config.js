module.exports = {
  theme: {
    extend: {
      keyframes: {
        upDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        upDown: 'upDown 1s ease-in-out infinite',
      },
    },
  },
  variants: {},
  plugins: [],
};