import { Dialog, DialogContent, Grid, IconButton } from "@mui/material";
import { useLocation } from "react-router-dom";
import { navBarRoutes } from "../../routes";
import { NavBarHeight } from "../../utils/constants";
import { NavItem } from "../NavBar/NavItem";

export function HamburgerMenu({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const { pathname } = useLocation();
  const selectedRoute = pathname.split("/")[1];
  return (
    <>
      <IconButton
        sx={(theme) => ({ zIndex: theme.zIndex.hamburgerMenu })}
        size="small"
        onClick={() => setOpen(!open)}
      >
        <div id="hamburger" className={open ? "open" : ""}>
          <span id="hamburgerLine"></span>
          <span id="hamburgerLine"></span>
          <span id="hamburgerLine"></span>
          <span id="hamburgerLine"></span>
        </div>
      </IconButton>
      {open && (
        <Dialog
          transitionDuration={600}
          sx={(theme) => ({ zIndex: theme.zIndex.dialog })}
          fullScreen
          open={open}
          onClose={() => setOpen(false)}
        >
          <DialogContent
            sx={(theme) => ({
              mt: `${NavBarHeight}px`,
              p: 10,
              backgroundColor: theme.palette.background.default,
            })}
          >
            <Grid container direction="column" spacing={8} alignItems="center">
              {navBarRoutes.map((page) => (
                <Grid item key={page} onClick={() => setOpen(false)}>
                  <NavItem page={page} selectedRoute={selectedRoute} />
                </Grid>
              ))}
            </Grid>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
