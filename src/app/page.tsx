import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "../lib/api";
import Nav from "./_components/nav";
export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        <Nav />
        <HeroPost
          title={heroPost.title}
          coverImage="https://scontent-ord5-2.xx.fbcdn.net/v/t1.18169-9/22406139_1936955696544633_4767671963770058718_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=300f58&_nc_ohc=3kHQtdEuCykAX-7Gj2K&_nc_ht=scontent-ord5-2.xx&oh=00_AfC3ljtOPG9iVAzbaPQABwQhBIbJv6OgJ8bgG2Ff95_pzA&oe=65FE0B55"
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
