import config from "../utils/config";
import Router from "./Router";
import route from "../routes/App.route";

const capturedEls: HTMLElement[] = [];

const navigate = (links: HTMLAnchorElement[]) => {
  if (!links.length) return;

  const parentEls = links.map((link) => link.parentElement);
  parentEls?.forEach((parentEl) => {
    if (!parentEl) return;
    if (capturedEls.includes(parentEl)) return;

    capturedEls.push(parentEl);
    parentEl?.addEventListener("click", (e) => {
      const clicked = e.target as HTMLAnchorElement;

      if (clicked?.localName !== "a") return;
      if (clicked.hostname !== config.hostname) return;

      e.preventDefault();
      Router.pushToHistory(clicked.pathname);
      route();
    });
  });
};

export default new MutationObserver((mutationsList: MutationRecord[]) => {
  mutationsList.forEach((mutation) => {
    if (!mutation.addedNodes.length) return;
    const links = Array.from(document.getElementsByTagName("a"));
    navigate(links);
  });
});
