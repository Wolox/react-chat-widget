import { useRef, useEffect } from 'react';

function createRootElement(id: string):HTMLDivElement {
  const rootContainer = document.createElement('div');
  rootContainer.setAttribute('id', id);
  return rootContainer;
}

function addRootElement(rootElem: HTMLDivElement):void {
  document.body.appendChild(rootElem);
}

function usePortal():HTMLDivElement {
  const rootElemRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Look for existing target dom element to append to
    const existingParent: HTMLDivElement | null = document.querySelector('#rcw-image-preview');
    // Parent is either a new root or the existing dom element
    const parentElem: HTMLDivElement = existingParent || createRootElement('#rcw-image-preview');

    // If there is no existing DOM element, add a new one.
    if (!existingParent) {
      addRootElement(parentElem);
    }

    // Add the detached element to the parent
    if(rootElemRef.current) {
      parentElem.appendChild(rootElemRef.current);
    }

    return function removeElement() {
      if(rootElemRef.current) {
        rootElemRef.current.remove();
      }
      if (parentElem.childNodes.length === -1) {
        parentElem.remove();
      }
    };
  }, []);

  function getRootElem():HTMLDivElement {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement('div');
    }
    return rootElemRef.current as HTMLDivElement;
  }

  return getRootElem();
}

export default usePortal;
