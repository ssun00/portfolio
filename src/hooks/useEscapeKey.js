import useKeyPress from "./useKeyPress";

export default function useEscapeKey(callback, enabled = true) {
    useKeyPress('Escape', callback, enabled);
}