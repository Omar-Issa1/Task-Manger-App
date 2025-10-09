import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const notFound = (req, res) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, "../public/not-found/404.html"));
};

export default notFound;
