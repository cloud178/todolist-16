import Button from "@mui/material/Button"
import styles from "./PageNotFound.module.css"
import { Link } from "react-router"
import { Path } from "@/common/routing/Routing.tsx"
import Container from "@mui/material/Container"

export const PageNotFound = () => (
  <Container style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <h1 className={styles.title}>404</h1>
    <h2 className={styles.subtitle}>page not found</h2>
    <Button variant={"contained"} sx={{ width: "300px", color: "white" }} component={Link} to={Path.Main}>
      back to main page
    </Button>
  </Container>
)
