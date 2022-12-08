import { Snackbar, Alert } from "@mui/material";

function PopupDialog({
  message,
  vertical,
  horizontal,
  alertType,
  open,
  setOpen,
}) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      anchorOrigin={{
        vertical: vertical ? vertical : "bottom",
        horizontal: horizontal ? horizontal : "right",
      }}
      onClose={() => {
        setOpen(false);
      }}
    >
      <Alert
        severity={alertType}
        onClose={() => {
          setOpen(false);
        }}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

export default PopupDialog;