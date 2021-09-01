import React from "react";
import { Snackbar, IconButton } from "@material-ui/core";
import { Close, Warning } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  message: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
}));

const ErrorSnackbar = ({ error, handleClose }) => {
  const classes = useStyles();

  return (
    <Snackbar
      // openするかどうかは、errorがあるかどうかで判断しています。!!errorとすることでerrorがあればtrueなければfalseの bool 値にすることができます。
      open={!!error}
      // 閉じたときにはonCloseで先ほどのhandleClose()を指定することでエラーをリセット
      onClose={handleClose}
      // 何秒後に閉じるかのautoHideDurationを 3000 ms
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      // snackbar の中身自体はmessageに実装しています。こちらも jsx を引数として値を渡すことができます。エラー内容と warnnig アイコンを表示しているだけです。
      message={
        <span className={classes.message}>
          <Warning className={[classes.icon, classes.iconVariant].join(" ")} />
          {error}
        </span>
      }
      // actionとして閉じるボタンも実装しています。こちらはonClickに対してhandleClose()を実装しています。このactionは値として jsx を渡すことができます。
      action={
        <IconButton color="inherit" onClick={handleClose}>
          <Close className={classes.icon} />
        </IconButton>
      }
    />
  );
};

export default ErrorSnackbar;
