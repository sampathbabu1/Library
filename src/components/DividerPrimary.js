import { useTheme } from "@emotion/react";

export default function DividerPrimary(props) {
  return (
    <hr style={
        {
          width:'inherit',
          color:useTheme().palette.primary.main
        }
      }></hr>
  );
}
