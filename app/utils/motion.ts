export const getMenuStyle = (menuOpened: boolean) => {
  if (document.documentElement.clientWidth <= 768) {
    return { right: !menuOpened ? "-100%" : "" };
  }
};
