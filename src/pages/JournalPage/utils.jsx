//react
import { Fragment } from "react";

export const MultiLineText = ({ text }) => {
    const lines = text.split('\n');
    return (
        <div>
            {lines.map((line, index) => (
            <Fragment key={index}>
                {line}
                {index !== lines.length - 1 && <br />}
            </Fragment>
            ))}
        </div>
    );
};