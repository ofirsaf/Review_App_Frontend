import React from "react";
import { FileUploader } from "react-drag-drop-files";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { uploadTrailer } from "../../api/movie";
import { useNotfication } from "../../hooks";
import MovieUpload from "./MovieUpload";

export default function Dashboard() {
  return <MovieUpload />;
}
