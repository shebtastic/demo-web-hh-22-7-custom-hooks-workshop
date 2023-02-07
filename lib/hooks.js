const { useState } = require("react");

function useToggle() {
  const [state, setState] = useState(false);

  function toggle() {
    setState((oldValue) => !oldValue);
  }

  return [state, toggle];
}

function useLightBulb() {
  const [state, setState] = useState("off");

  function on() {
    setState((oldState) => (oldState !== "broken" ? "on" : oldState));
  }

  function off() {
    setState((oldState) => (oldState !== "broken" ? "off" : oldState));
  }

  function stomp() {
    setState("broken");
  }

  return [state, { on, off, stomp }];
}

function useNavigation(pages, indexOfInitialPage = 0) {
  if (!pages || !pages?.length) {
    throw new Error("Provide a valid pages array with more than zero entries");
  }

  const [currentPageIndex, setCurrentPageIndex] = useState(indexOfInitialPage);

  function hasPrevious(pageIndex = currentPageIndex) {
    return !!pages[pageIndex - 1];
  }

  function previous() {
    setCurrentPageIndex((oldPageIndex) =>
      hasPrevious(oldPageIndex) ? oldPageIndex - 1 : oldPageIndex
    );
  }

  function hasNext(pageIndex = currentPageIndex) {
    return !!pages[pageIndex + 1];
  }

  function next() {
    setCurrentPageIndex((oldPageIndex) =>
      hasNext(oldPageIndex) ? oldPageIndex + 1 : oldPageIndex
    );
  }

  return [pages[currentPageIndex], { previous, next, hasPrevious, hasNext }];
}

export { useToggle, useLightBulb, useNavigation };
