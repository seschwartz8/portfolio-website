import { Box, Typography } from "@mui/material";
import { ActionIcons } from "../../components/ActionIcons.tsx/ActionIcons";
import PageView from "../../components/PageView";

export default function ProjectsPage() {
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
      </Box>
    </PageView>
  );
}
