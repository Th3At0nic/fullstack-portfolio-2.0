export const getDrivePreviewUrl = (driveUrl: string) => {
  const match = driveUrl.match(/\/file\/d\/(.*?)\//);
  if (match && match[1]) {
    return `https://drive.google.com/file/d/${match[1]}/preview`;
  }
  return driveUrl;
};
