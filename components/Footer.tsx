import React, { ReactElement } from "react";
import { BioCard } from "../components";
import styles from "../styles/Footer.module.css";

interface Props {
  variant?: "primary" | "secondary";
}

export default function Footer({ variant = "primary" }: Props): ReactElement {
  return (
    <footer className={`${styles[variant]} ${styles.footer}`}>
      <BioCard
        top="Check the project on"
        bottom="Github"
        href="https://github.com/gbgabo/wildberries"
      />
      <BioCard
        top="Made with ♥ by"
        bottom="@gbgabo"
        image="/icons/profile_alpha.svg"
        href="https://github.com/gbgabo"
      />
    </footer>
  );
}
