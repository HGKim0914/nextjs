import Link from "next/Link"
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();
    return (
    <nav>
        <Link href="/" legacyBehavior>
            <span className={router.pathname === "/" ? "active" : ""}>Home</span>
        </Link>
        <Link href="/about" legacyBehavior>
            <span className={router.pathname === "/about" ? "active" : ""}>About</span>
        </Link>

        <style jsx>{`
            .active {
                color: tomato;
            }
            span {
                cursor: pointer;
                text-decoration: none;
            }
        `}</style>
    </nav>
    );
}