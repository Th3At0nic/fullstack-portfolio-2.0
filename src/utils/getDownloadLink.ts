export const getDownloadLink = (driveUrl: string) => {
  if (!driveUrl) return "";
  const match = driveUrl.match(/\/file\/d\/(.*?)\//);
  if (match && match[1]) {
    return `https://drive.google.com/uc?export=download&id=${match[1]}`;
  }
  return driveUrl;
};
