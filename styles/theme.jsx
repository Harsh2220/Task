import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        scrollBehavior: "smooth",
        fontFamily: "Inter",
      },
      "&::-webkit-scrollbar": {
        width: "1",
        borderRadius: "8px",
        backgroundColor: "transparent",
      },
      "&::-webkit-scrollbar-thumb": {
        borderRadius: "5",
        backgroundColor: "white",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "whitesmoke",
      },
    },
  },
  config,
});

export default theme;
