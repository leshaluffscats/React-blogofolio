import { IHeading } from "../../types";
import styles from "./Heading.module.scss"

const Heading = (props: IHeading) => {
    return (
        <h1 className={styles.h1}>
            {props.heading}
        </h1>
    );
};

export default Heading;