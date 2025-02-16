import React from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Input,
  Grid,
  IconButton,
  Typography,
  Tooltip,
} from "@material-ui/core";
import {
  LocationOnOutlined,
  NotesOutlined,
  AccessTime,
  Close,
} from "@material-ui/icons";

import * as styles from "./style.css";
import { DatePicker } from "@material-ui/pickers";
import { withStyles } from "@material-ui/styles";

const spacer = { margin: "4px 0" };

const Title = withStyles({
  root: {
    //marginBottom: 32,
    fontSize: 22,
  },
})(Input);

const AddScheduleDialog = ({
  schedule: {
    // dateに date; d と引数 d が渡される
    form: { title, location, description, date },
    isDialogOpen,
    isStartEdit,
  },
  closeDialog,
  setSchedule,
  saveSchedule,
  setIsEditStart,
}) => {
  // !title がtrueのとき(何も入力されてない) isStartEditを返す
  const isTitleInvalid = !title && isStartEdit;
  return (
    <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth="xs" fullWidth>
      {/* 閉じるボタン */}
      <DialogActions>
        <div className={styles.closeButton}>
          <Tooltip title="閉じる" placement="bottom">
            <IconButton onClick={closeDialog} size="small">
              <Close />
            </IconButton>
          </Tooltip>
        </div>
      </DialogActions>

      <DialogContent>
        <Title
          autoFocus
          fullWidth
          placeholder="タイトルと日時を追加"
          // 状態をReduxで管理できるようにする
          value={title}
          onChange={(e) => setSchedule({ title: e.target.value })}
          onBlur={setIsEditStart}
          error={isTitleInvalid}
        />
        <div className={styles.validation}>
          {isTitleInvalid && ( // isTitelInvalid がtrueのとき右辺を返す
            <Typography variant="caption" component="div" color="error">
              タイトルは必須です。
            </Typography>
          )}
        </div>

        <Grid container spacing={1} alignItems="center" justify="space-between">
          <Grid item>
            <AccessTime />
          </Grid>
          <Grid item xs={10}>
            <DatePicker
              value={date}
              onChange={(d) => setSchedule({ date: d })}
              variant="inline"
              format="YYYY年M月D日"
              animateYearScrolling
              disableToolbar
              fullWidth
              style={spacer}
            />
          </Grid>
        </Grid>

        <Grid container spacing={1} alignItems="center" justify="space-between">
          <Grid item>
            <LocationOnOutlined />
          </Grid>
          <Grid item xs={10}>
            <TextField
              style={spacer}
              fullWidth
              placeholder="場所を追加"
              // 状態をReduxで管理できるようにする
              value={location}
              onChange={(e) => setSchedule({ location: e.target.value })}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="center" justify="space-between">
          <Grid item>
            <NotesOutlined />
          </Grid>
          <Grid item xs={10}>
            <TextField
              style={spacer}
              fullWidth
              placeholder="説明を追加"
              // 状態をReduxで管理できるようにする
              value={description}
              onChange={(e) => setSchedule({ description: e.target.value })}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          variant="outlined"
          onClick={saveSchedule}
          disabled={!title} // title が空のときボタンを非表示にする
        >
          保存
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddScheduleDialog;
