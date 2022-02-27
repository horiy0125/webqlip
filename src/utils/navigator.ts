export const readClipboardText = async () => {
  const clipboardText = await navigator.clipboard.readText();

  return clipboardText;
};
