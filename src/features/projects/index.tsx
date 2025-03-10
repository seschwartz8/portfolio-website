import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { ActionIcons } from "../../components/ActionIcons.tsx/ActionIcons";
import PageView from "../../components/PageView";
import { ClearBlade } from "./components/ClearBlade";
import { Exposurepedia } from "./components/Exposurepedia";
import { Personal } from "./components/Personal";
import { TabViewer } from "./components/TabViewer";

type ProjectTabs = "ClearBlade" | "Exposurepedia" | "Personal";

export default function ProjectsPage() {
  const [selectedTab, setSelectedTab] = useState<ProjectTabs>("ClearBlade");

  return (
    <PageView>
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <Typography
          variant="h3"
          sx={(theme) => ({
            color: theme.palette.text.primary,
          })}
        >
          Projects
        </Typography>
        <ActionIcons />

        <TabViewer
          onChange={(tab) => {
            setSelectedTab(tab);
          }}
          selectedTab={selectedTab}
          tabs={[
            {
              tabId: "ClearBlade",
              tabContent: <ClearBlade />,
            },
            {
              tabId: "Exposurepedia",
              tabContent: <Exposurepedia />,
            },
            {
              tabId: "Personal",
              tabContent: <Personal />,
            },
          ]}
        />
      </Box>
    </PageView>
  );
}
