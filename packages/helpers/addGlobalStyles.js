export const addGlobalStyles = styles => {
  const styleTag = document.createElement('style');

  styleTag.textContent = styles.cssText;

  document.head.appendChild(styleTag);
};
