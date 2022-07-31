import React, { useEffect, useRef } from "react";
import { rightCallFunc } from "host/func";
import Header from "host/header";
import { leftCallFunc } from "MFE1/func";
import { Paper } from "@mui/material";
import { Container, margin, padding } from "@mui/system";
import { ErrorBound } from "./ErrorBound";
import { ErrorBoundary } from "react-error-boundary";

const App = () => {
  const ref = useRef();
  const refr = useRef();
  useEffect(() => {
    leftCallFunc(ref.current);
    rightCallFunc(refr.current);
  }, []);
  return (
    <>
      <Paper
        sx={{
          display: "flex",
          border: "1px solid black",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "50vh",
          textAlign: "center",
          padding:5
        }}
      >
        {/* <ErrorBoundary> --not required if handled correctly by the remote apps*/}
          <Paper sx={{ border: "2px solid black", minHeight: 100 }} ref={ref} />
        {/* </ErrorBoundary> */}
        <ErrorBound> {/*  Better to put it around the data in the app */}
          <Paper
            sx={{
              height: 200,
              width: 500,
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            This is the hostData/ContainerData
            <Header />
          </Paper>
        </ErrorBound>
        {/* <ErrorBound> */}
          <Paper
            sx={{ border: "2px solid black", minHeight: 100 }}
            ref={refr}
          ></Paper>
        {/* </ErrorBound> */}
        {/* <Footer/> */}
      </Paper>
    </>
  );
};

export default App;
