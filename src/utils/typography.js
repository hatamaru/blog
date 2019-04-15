import Typography from "typography"
import Github from "typography-theme-github"

const typography = new Typography({
  ...Github,
  // baseFontSize: "17 px",
  overrideStyles: _ref => ({
    ...Github.overrideStyles(_ref),
    a: {
      color: "#009EAC",
      textDecoration: "none",
    },
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
