import { Stack, Typography } from "@mui/material";
import Header from "./ui/Header";

interface Props {
  bg: string;
  text1: string;
  text2?: string;
  file1?: string;
  file2?: string;
  isMobile: boolean;
  height: string;
}

const Documents = ({
  bg,
  text1,
  text2,
  file1,
  file2,
  isMobile,
  height,
}: Props) => {
  const renderDocumentLink = (text?: string, file?: string) => {
    if (!text) return null;
    return (
      <Typography
        variant="body"
        color="white"
        sx={{ whiteSpace: "pre-line", textDecoration: "underline" }}
      >
        {file ? (
          <a href={`/docs/${file}`} download={file}>
            {text}
          </a>
        ) : (
          text
        )}
      </Typography>
    );
  };

  return (
    <Stack direction="column" sx={{ width: "100%" }} spacing="20px">
      <Header bg={bg} text="ДОКУМЕНТЫ" />
      <Stack
        sx={{ width: "100%", px: "16px", height: isMobile ? height : "100%" }}
        direction="column"
        spacing={1}
      >
        {renderDocumentLink(text1, file1)}
        {renderDocumentLink(text2, file2)}
      </Stack>
    </Stack>
  );
};

export default Documents;
