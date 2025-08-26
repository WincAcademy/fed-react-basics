import { useRef, useState, useLayoutEffect } from "react";
import { Button } from "@chakra-ui/react";

// Don't worry about the implementation details of this component,
// only work in the src/App.jsx file.
export const ResponsiveButton = ({ children }) => {
    const TOO_LARGE_WIDTH = 240; // px
    const TOO_SMALL_WIDTH = 128; // px

    const btnRef = useRef(null);
    const [width, setWidth] = useState(0);

    useLayoutEffect(() => {
        if (!btnRef.current)
            return;

        const measure = () => {
            const w = btnRef.current?.getBoundingClientRect().width ?? 0;
            setWidth(Math.round(w));
        };
        measure();

        const ro = new ResizeObserver(() => measure());
        ro.observe(btnRef.current);

        return () => ro.disconnect();
    }, []);

    const bg    = (width < TOO_SMALL_WIDTH || width > TOO_LARGE_WIDTH) ? "red.500" : "green.400";
    const color = (width < TOO_SMALL_WIDTH || width > TOO_LARGE_WIDTH) ? "white"   : "black";

    return (
        <Button ref={btnRef} bg={bg} color={color}>
            {children}
        </Button>
    );
};
