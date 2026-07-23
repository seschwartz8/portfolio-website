import { Box } from "@mui/material";
import { useState } from "react";
import { ProjectGroup } from "./components/ProjectGroup";
import { ProjectTabs } from "./components/ProjectTabs";
import { projectGroups } from "./data";

export default function ProjectsPage() {
  const [activeId, setActiveId] = useState(projectGroups[0].id);
  const activeGroup =
    projectGroups.find((g) => g.id === activeId) ?? projectGroups[0];

  return (
    <Box
      sx={{
        minHeight: "100%",
        padding: { xs: "20px 24px 40px", md: "10px 60px 44px" },
      }}
    >
      <ProjectTabs
        groups={projectGroups}
        activeId={activeId}
        onSelect={setActiveId}
      />
      {/* Keyed on the active tab so switching remounts and replays the slide-in. */}
      <ProjectGroup key={activeGroup.id} group={activeGroup} />
    </Box>
  );
}
