/** @type { import('@storybook/react-vite').Preview } */
import 'minireset.css';
import "../styles/global.css";
import "../styles/tokens.css";

const styles = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  maxHeight: "auto",
  justifyContent: "flex-start",
  alignContent: "flex-start",
  flexWrap: "wrap",
  height: "100%",
  gap: "10px 30px",
  background: "#E5E7EB",
  padding: "20px"
}

export const decorators = [
  (Story) => (
    <div style={styles}>
      <Story />
    </div>
  )
  
]
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;