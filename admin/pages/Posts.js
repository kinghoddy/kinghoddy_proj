import { Button, Divider, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AddIcon from '@mui/icons-material/Add';
import Layout from "../components/Layout";
import { PlusOne } from "@mui/icons-material";
function Posts() {
  return (
    <Layout
      title="Create A Post Data"
      description="Create and edit show meta data. Upload post"
      button="Create"
      Click="/create"
      icon={<AddIcon />}
    >
      <Divider />
  
    </Layout>
  );
}

export default Posts;
