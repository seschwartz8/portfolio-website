import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { TabContent } from "./TabContent";

interface TabViewerProps<TabIds extends string> {
  tabs: {
    tabId: TabIds;
    tabContent: React.ReactNode;
  }[];
  selectedTab?: TabIds;
  onChange?: (tab: TabIds) => void;
}

export function TabViewer<TabIds extends string>({
  tabs,
  selectedTab,
  onChange,
}: TabViewerProps<TabIds>): React.ReactElement {
  const handleChange = (_event: React.SyntheticEvent, newValue: TabIds) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  const theSelectedTab = selectedTab || tabs[0]?.tabId;

  return (
    <Box sx={{ width: "100%", mt: -2 }}>
      <Box
        sx={(theme) => ({
          borderBottom: 1,
          borderColor: theme.palette.divider,
        })}
      >
        <Tabs
          value={theSelectedTab}
          onChange={handleChange}
          sx={(theme) => ({
            "& .MuiTabs-indicator": {
              backgroundColor: theme.palette.secondary.light,
            },
            "& .Mui-selected": {
              color: theme.palette.text.primary + " !important",
            },
          })}
        >
          {tabs.map((tab) => (
            <Tab
              key={tab.tabId}
              label={
                <Typography sx={{ textTransform: "none" }} variant="h6">
                  {tab.tabId}
                </Typography>
              }
              value={tab.tabId}
            />
          ))}
        </Tabs>
      </Box>
      {tabs.map((tab) => {
        if (!theSelectedTab) return null;
        return (
          <TabContent key={tab.tabId} value={theSelectedTab} index={tab.tabId}>
            {tab.tabContent}
          </TabContent>
        );
      })}
    </Box>
  );
}
