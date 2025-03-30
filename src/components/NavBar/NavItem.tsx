import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AppRouteLabels, appRoutes } from "../../routes";

export const NavItem = ({
  page,
  selectedRoute,
}: {
  page: appRoutes;
  selectedRoute: string;
}) => {
  return (
    <Link to={`${page}/`} style={{ textDecoration: "none" }}>
      <Button
        disableRipple
        sx={(theme) => ({
          "&:active": {
            backgroundColor: theme.palette.action.hover,
          },
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
          ...(selectedRoute === page
            ? {
                borderBottom: `4px solid ${theme.palette.secondary.light}`,
              }
            : {}),
          borderRadius: 0,
        })}
      >
        <Typography
          variant="h5"
          sx={(theme) => ({
            color: theme.palette.text.primary,
            textTransform: "none",
          })}
          fontWeight={700}
        >
          {AppRouteLabels[page]}
        </Typography>
      </Button>
    </Link>
  );
};
