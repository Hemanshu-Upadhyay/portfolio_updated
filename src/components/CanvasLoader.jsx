import React, { Suspense } from "react";
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = ({
  loaderClassName = "canvas-loader",
  textStyle = {},
  containerStyle = {},
}) => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        ...containerStyle,
      }}
    >
      <span className={loaderClassName}></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
          ...textStyle,
        }}
      >
        {progress.toFixed(2) !== "0.00"
          ? `${progress.toFixed(2)}%`
          : "Loading..."}
      </p>
    </Html>
  );
};

export const Canvas3DLoader = ({ children, fallback = <CanvasLoader /> }) => {
  return <Suspense fallback={fallback}>{children}</Suspense>;
};

export default CanvasLoader;
