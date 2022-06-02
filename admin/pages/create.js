import {
  Button,
  Box,
  Divider,
  Grid,
  Typography,
  TextField,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";
import { Container } from "@mui/system";

import * as React from "react";

import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import PollIcon from "@mui/icons-material/Poll";
import Layout from "../components/Layout";
import { CloudUpload, Collections } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiDialogContent-dividers": {
    width: "300px",
    height: "400px",
    ["@media (min-width:1200px)"]: {
      width: "600px",
      height: "400px",
    },
  },
}));

function Create() {
  const inputFile = React.useRef()
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const onfileClick = () => {
    const file = inputFile.current.click();
    console.log(file);
  };
  return (
    <div>
      <Layout
        title="Create A Post Data"
        description="Create and edit show meta data. Upload post"
        button="Posts"
        Click="/Posts"
        icon={<PollIcon />}
      >
        <Divider />
        <Grid sx={{ margin: "40px" }} items textAlign="center">
          <Typography variant="h4" fontWeight="700">
            Post Details
          </Typography>
          <Typography variant="p1" color="#999">
            All fields required
          </Typography>
          <Box
            component="form"
            sx={{
              marginTop: "50px",
              "& .MuiTextField-root": { m: 1, width: "800px" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <Grid container justifyContent="space-evenly" alignItems="center">
                <Typography color="#999">Add Post Name</Typography>
                <TextField size="small" id="outlined-required" label="Name" />
              </Grid>
              <Grid container justifyContent="space-evenly" alignItems="center">
                <Typography color="#999">Short___Details </Typography>
                <TextField
                  size="small"
                  id="outlined-required"
                  label="Add short description"
                />
              </Grid>
              <Grid container justifyContent="space-evenly" alignItems="center">
                <Typography color="#999">Full Description</Typography>
                <TextField
                  size="small"
                  id="outlined-required"
                  multiline
                  rows={8}
                  label="Add full description  "
                />
              </Grid>
              <Grid
                container
                justifyContent="space-evenly"
                sx={{ marginTop: "10px  " }}
                alignItems="center"
              >
                <Typography color="#999">Post___Picture</Typography>
                <Box
                  border="1px solid #999"
                  width="802px"
                  height="300px"
                  borderRadius="3px"
                  sx={{
                    display: "flex",
                    right: " 0",
                  }}
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <Collections
                    sx={{ fontSize: "60px", color: "#68007b", margin: "10px" }}
                  />
                  <Typography color="#999">
                    Drop PNG or JPEG files here to upload
                  </Typography>
                  <Button
                    sx={{ color: "#68007b", fontSize: "10px" }}
                    onClick={handleClickOpen}
                  >
                    <Collections sx={{ color: "#68007b", fontSize: "15px" }} />
                    Show gallery
                  </Button>
                  <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                  >
                    <DialogTitle sx={{ background: "#68007b" }}>
                      {" "}
                      <Typography color="#f90">Media Library</Typography>
                    </DialogTitle>
                    <DialogContent dividers>
                      <Grid container flexDirection="column">
                        <Button
                          sx={{
                            margin: "20px",
                            justifyContent: "flex-start",
                            width: "120px",
                            border: "1px solid #f90",
                            height: "150px",
                          }}
                        >
                          {" "}
                          <Grid
                          onClick={onfileClick}
                            container
                            alignItems="center"
                            textAlign="center"
                            justifyContent="center"
                          >
                            <CloudUpload
                              sx={{ fontSize: "50px", color: "#f90" }}
                            />
                          <input type="file" style={{visibility:"hidden"}}  ref={inputFile}></input>
                            <Typography fontSize="10px" color="#f90">
                              Add new photo
                            </Typography>
                          </Grid>
                        </Button>
                      </Grid>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose} sx={{ color: "#f90" }}>
                        Close
                      </Button>
                    </DialogActions>
                  </BootstrapDialog>
                </Box>
              </Grid>
            </div>
          </Box>
        </Grid>
      </Layout>
    </div>
  );
}

export default Create;
