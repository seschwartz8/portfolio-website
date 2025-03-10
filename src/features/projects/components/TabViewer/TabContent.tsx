import { Box } from "@mui/material";

interface TabContentProps {
  children?: React.ReactNode;
  index: string;
  value: string;
}

export function TabContent(props: TabContentProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
