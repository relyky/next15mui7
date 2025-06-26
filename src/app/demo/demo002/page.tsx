"use client"
import { FC, ReactNode, useState } from "react";
import { Container, Tab, Tabs, Typography } from "@mui/material";
import ThemePalette from "./ThemePalette";

export default function Demo002Page() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Container>
      <Typography variant="h3">Demo002:佈景主題</Typography>

      <Tabs value={tabIndex} onChange={(_, v) => setTabIndex(v)}>
        <Tab label="調色盤" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>

      <TabPanel index={0} value={tabIndex}>
        <ThemePalette />
      </TabPanel>

      <TabPanel index={1} value={tabIndex}>
        <h1>111</h1>
      </TabPanel>

      <TabPanel index={2} value={tabIndex}>
        <h1>222</h1>
      </TabPanel>
    </Container>
  )
}

//-----------------------------------------------------------------------------
const TabPanel: FC<{ 
  index: number, 
  value: number, 
  children: ReactNode 
}> = (props) => {
  return (
    <div role="tabpanel" hidden={props.value !== props.index}>
      {props.children}
    </div>
  )
}