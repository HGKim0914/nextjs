import Link from "next/Link"
import { useRouter } from "next/router";
import styles from "./Navbar.module.css"

export default function Navbar() {
    const router = useRouter();
    return (
    <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
    </nav>
    );
}