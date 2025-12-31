import HomePage from "./01-main-demo/page";
import BackToTop from "./backToTop";

export const metadata = {
  title: "Home - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

export default async function Home() {
  return (
    <main>
      <HomePage />
      <BackToTop />
    </main>
  );
}
