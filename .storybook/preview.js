import * as React from "react";
import { SkylosProvider } from "skylos-ui";
import "react-toastify/dist/ReactToastify.min.css";
import "react-phone-input-2/lib/style.css";
import "react-day-picker/lib/style.css";

const withTheme = (Story, context) => {
  return (
    <SkylosProvider>
      <div
        id="story-wrapper"
        style={{
          backgroundColor: "#F1FAF9",
          maxWidth: "33rem",
          minHeight: "100vh",
          padding: "2rem",
        }}
      >
        <Story {...context} />
      </div>
    </SkylosProvider>
  );
};

export const decorators = [withTheme];
